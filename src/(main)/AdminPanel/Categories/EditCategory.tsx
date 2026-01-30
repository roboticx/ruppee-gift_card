import { useState } from "react";
import { FcEditImage } from "react-icons/fc";
import { useParams } from "react-router-dom";


const EditCategory = () => {

    const { id } = useParams<{ id: string }>();

    const [categoryData, setCategoryData] = useState<any>(
        {
            _id: "cat_001",
            Image: "https://picsum.photos/seed/p1/200/200",
            Name: "Digital Subscriptions",
            Products: 17,
            Status: true,
            Created: "2025-11-03"
        }
    );

    return (
        <div className=" min-h-screen">
            <div className=" px-4 sm:px-6  py-6">

                <div className="flex flex-col gap-1 mb-5">
                    <h1 className="font-bold text-3xl">
                        Edit Category
                    </h1>

                    <p className="font-semibold text-md text-gray-500">
                        Update Category Information
                    </p>
                </div>

                <div className='w-full rounded-2xl bg-white px-6 py-4'>
                    <div className='flex gap-1 flex-col'>
                        <h1>
                            Category Id
                        </h1>

                        <input
                            name="categoryId"
                            placeholder="Enter Category Id"
                            className='w-full border border-gray-300 outline-0 px-5 py-2 rounded-lg bg-gray-100'
                            value={id}
                            disabled
                        />
                    </div>

                    <div className='flex gap-1 flex-col'>
                        <h1>
                            Category Name *
                        </h1>

                        <input
                            name="categoryName"
                            placeholder="Enter Category Name"
                            className='w-full border border-gray-300 outline-0 px-5 py-2 rounded-lg'
                            value={categoryData.Name}
                            onChange={(e) => setCategoryData((prev: any) => ({
                                ...prev,
                                Name: e.target.value
                            }))}
                        />
                    </div>

                    <div className='flex my-3 flex-col gap-1 w-full'>
                        <h1>
                            Category Image
                        </h1>

                        <div className='w-full flex flex-col gap-1 border border-gray-400 rounded-xl border-dashed p-3'>
                            <input
                                type="file"
                                className={`w-full border px-5 py-2 border-gray-300 rounded-lg`}
                                onChange={(e) => setCategoryData((prev: any) => ({
                                    ...prev,
                                    Image: e.target.value
                                }))}
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

                    <input type="text" className='w-full px-5 py-2 rounded-xl mt-2 outline-0 border border-gray-300' placeholder="Paste/Enter Image URL" />

                    <div className="w-full rounded-lg border min-h-36 max-h-60 py-2 mt-2 border-gray-300 flex justify-center items-center text-gray-400">
                        <img
                            src={categoryData.Image}
                            alt={categoryData.Name}
                        />
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
                            0 Products Selected
                        </span>

                        <div className="flex items-center justify-center gap-3 px-5 py-2">

                            <button className="px-6 py-2 bg-green-600 cursor-pointer font-bold rounded-lg text-white">
                                Update
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default EditCategory