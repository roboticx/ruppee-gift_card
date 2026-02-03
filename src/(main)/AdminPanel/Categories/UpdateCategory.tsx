import { useEffect, useMemo, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { FcEditImage } from "react-icons/fc";
import Toggle from '../../../Components/common/Toggle';
import { FETCH, POST, PUT } from '../../../utils/apiutils';

const UpdateCategory = () => {

    const { id } = useParams<{ id: string }>();

    const isEditMode = Boolean(id);
    const isAddMode = !id;
    const navigate = useNavigate();

    const [categoryData, setCategoryData] = useState<any>({
        name: '',
        imageUrl: '',
        status: true,
        products: []
    });
    const [Image, setImage] = useState<File | null>(null);
    const isValid = categoryData.name && (Image || categoryData.imageUrl);

    useEffect(() => {
        if (isEditMode) {
            fetchCategoryById(id);
        }
    }, [id, isEditMode]);

    const fetchCategoryById = async (id: string | undefined) => {
        try {

            const res = await FETCH({
                url: `admin/categories/${id}`,
                toast: true
            });

            setCategoryData(res.data);

        }
        catch (err: any) {
            console.error("Category fetch failed", err);
        }
    }

    const handleFormChange = (fieldName: string, value: any) => {
        setCategoryData((prev: any) => ({
            ...prev,
            [fieldName]: value
        }));
    }

    const buildImagePayload = () => {
        const formData = new FormData();

        formData.append("name", categoryData.name);
        formData.append("isActive", String(categoryData.status));

        if (Image) {
            formData.append("imageType", "image");
            formData.append("image", Image);
        }
        else if (categoryData.imageUrl) {
            formData.append("imageType", "url");
            formData.append("image", categoryData.imageUrl);
        }
        else {
            throw new Error("Either image file or image URL is required");
        }

        return formData;
    };

    const addCategory = async () => {
        const formData = buildImagePayload();

        try {
            const res = await POST({
                url: `admin/categories`,
                data: formData,
                toast: true,
                showError: true,
                showSuccess: false
            });

            console.log(res);

            navigate("/categories");
        }
        catch (err: any) {
            console.error("Add category failed", err);
        }
    }

    const updateCategory = async () => {
        const formData = buildImagePayload();

        try {
            const res = await PUT({
                url: `admin/categories/${id}`,
                data: formData,
                toast: true
            });

            console.log(res);

            navigate("/categories");
        }
        catch (err: any) {
            console.error("Update category failed", err);
        }
    }

    const getPreviewImage = (): string => {
        if (Image) {
            return URL.createObjectURL(Image);
        }

        if (categoryData.imageUrl) {
            return categoryData.imageUrl;
        }

        return "";
    };

    const preview = useMemo(() => getPreviewImage(), [Image, categoryData.imageUrl]);

    useEffect(() => {
        return () => {
            if (Image) {
                URL.revokeObjectURL(preview);
            }
        };
    }, [Image, preview]);

    const updateImage = (file: File | null | undefined) => {

        if (!file) return;

        if (!file.type.startsWith("image/")) {
            alert("Please select a valid image file");
            return;
        }

        if (file.size > 5 * 1024 * 1024) {
            alert("Max size is 5MB");
            return;
        }

        setImage(file);
        handleFormChange('imageUrl', '')
    }

    useEffect(() => {
        console.log('Image', Image);

    }, [Image]);

    return (
        <div className=" min-h-screen">
            <div className=" px-4 sm:px-6  py-6">

                <div className="flex flex-col gap-1 mb-5">
                    <h1 className="font-bold text-3xl">
                        {isEditMode ? "Edit Category" : "Add Category"}
                    </h1>

                    <p className="font-semibold text-md text-gray-500">
                        {isEditMode ? 'Update' : 'Add New'} Category Information
                    </p>
                </div>

                <div className='w-full rounded-2xl bg-white px-6 py-4'>
                    {
                        isEditMode &&
                        (
                            <div className='flex gap-1 flex-col'>
                                <h1>
                                    Category Id
                                </h1>

                                <input
                                    placeholder="Enter Category Id"
                                    className='w-full border border-gray-300 outline-0 px-5 py-2 rounded-lg bg-gray-100'
                                    value={id}
                                    disabled
                                />
                            </div>
                        )
                    }

                    <div className='flex gap-1 flex-col'>
                        <h1>
                            Category Name *
                        </h1>

                        <input
                            placeholder="Enter Category Name"
                            className='w-full border border-gray-300 outline-0 px-5 py-2 rounded-lg'
                            value={categoryData.name}
                            onChange={(e) => handleFormChange('name', e.target.value)}
                        />
                    </div>

                    {
                        isAddMode &&
                        (
                            <div className='flex gap-1 items-center justify-between my-3 border border-gray-300 rounded-lg py-2 px-5'>
                                <h1 className={`font-bold text-md`}>
                                    Status
                                </h1>

                                <Toggle
                                    status={categoryData.status}
                                    toggleName={`status`}
                                    onChange={() => handleFormChange('status', !categoryData.status)}
                                />
                            </div>
                        )
                    }

                    <div className='flex my-3 flex-col gap-1 w-full'>
                        <h1>
                            Category Image
                        </h1>

                        <div className='w-full flex flex-col gap-1 border border-gray-400 rounded-xl border-dashed p-3'>
                            <input
                                type="file"
                                className={`w-full border px-5 py-2 border-gray-300 rounded-lg`}
                                accept="image/*"
                                onChange={(e) => updateImage(e.target.files?.[0])}
                            />

                            <p className='font-semibold text-gray-500 text-xs flex items-center justify-center gap-1'>
                                <FcEditImage size={20} />

                                Upload image to cloudinary(JPEG,WEBP,PNG -MAX-5MB)
                            </p>
                        </div>
                    </div>

                    <div className="flex items-center gap-3">
                        <hr className="flex-1 border-t border-gray-300" />

                        <span className="text-xs font-semibold text-gray-500 whitespace-nowrap">
                            OR USE URL
                        </span>

                        <hr className="flex-1 border-t border-gray-300" />
                    </div>

                    <input
                        type="text"
                        className='w-full px-5 py-2 rounded-xl mt-2 outline-0 border border-gray-300'
                        placeholder="Paste/Enter Image URL"
                        value={categoryData.imageUrl || categoryData?.image}
                        onChange={(e) => {
                            handleFormChange('imageUrl', e.target.value)
                            setImage(null);
                        }}
                    />

                    <div
                        className={`
                            rounded-lg 
                            border  border-gray-300 
                            flex justify-center items-center 
                            text-gray-400
                            h-60
                            p-2 m-2 
                            bg-center bg-contain bg-no-repeat
                            overflow-hidden`}
                        style={{ backgroundImage: preview ? `url(${preview})` : "none" }}
                    >
                        {
                            !getPreviewImage() && (
                                <span>No image selected</span>
                            )
                        }
                    </div>

                    <div className="w-full  flex-col mt-3">
                        <h1 >
                            Select Products
                        </h1>

                        <input
                            type="text"
                            className='w-full px-5 py-2 rounded-xl mt-1 outline-0 border border-gray-300'
                            placeholder="Search Products ..."
                        />

                        <div className="w-full max-h-64 min-h-32 mt-2 border border-gray-300 rounded-xl p-3 overflow-y-auto">
                            {[...Array(4)].map((_, index) => (
                                <div
                                    key={index}
                                    className="flex items-start gap-3 px-5 py-2 rounded-md hover:bg-slate-100 transition-colors cursor-pointer"
                                >
                                    <input
                                        type="checkbox"
                                        className="h-5 w-5 border-gray-300 mt-1"
                                    />

                                    <div className="flex flex-col w-full">
                                        <h2 className="text-gray-700 text-md">
                                            AND India E-Gift Card
                                        </h2>

                                        <p className="text-gray-500 text-xs uppercase mt-0.5">
                                            Amit@10prcnt
                                        </p>

                                        <span className="text-[#F9A27D] text-[10px] font-semibold uppercase mt-1">
                                            Already in Fashion & Apparel Gift Cards
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <span className="text-gray-500 text-xs mt-0.5">
                            {categoryData.products || 0} Products Selected
                        </span>

                        <div className="flex items-center justify-center gap-3 px-5 py-2">

                            <button
                                className="px-6 py-2 bg-green-600 cursor-pointer font-bold rounded-lg text-white"
                                onClick={isAddMode ? addCategory : updateCategory}
                                disabled={!isValid}
                            >
                                {isAddMode ? 'Add' : (isEditMode ? 'Update' : '')}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UpdateCategory