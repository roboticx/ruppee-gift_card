import { useState, useRef, type ChangeEvent, type DragEvent, useEffect } from 'react';
import { FiUpload, FiLink, FiX } from "react-icons/fi";
import { MdBrowserUpdated } from 'react-icons/md';
import { FETCH, POST } from '../../../../utils/apiutils';

const UpdateBanner = () => {
    const [imageUrl, setImageUrl] = useState<string>('');
    const [imageFile, setImageFile] = useState<File | null>(null);
    const [preview, setPreview] = useState<string>('');

    const [isDragging, setIsDragging] = useState<boolean>(false);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const processFile = (file: File) => {
        if (file.type.startsWith('image/')) {
            const blobUrl = URL.createObjectURL(file);

            setImageFile(file);
            setImageUrl('');
            setPreview(blobUrl);
        }
    };

    const handleUrlChange = (e: ChangeEvent<HTMLInputElement>) => {
        const val = e.target.value;
        setImageUrl(val);
        setImageFile(null);
        setPreview(val || '');
    };

    useEffect(() => {
        getHeroBanner();
    }, [])

    const joinImageUrl = (base: string, path?: string) => {
        if (!path) {
            return "";
        }

        let cleanBase = base.replace(/api\/?$/, "");
        cleanBase = cleanBase.replace(/\/+$/, "");
        const cleanPath = path.replace(/^\/+/, "");

        return `${cleanBase}/${cleanPath}`;
    };

    const getHeroBanner = async () => {
        setImageUrl('');
        setImageFile(null);
        setPreview('');

        try {
            const response = await FETCH({
                url: 'admin/banner',
                toast: true,
                showError: true,
                showSuccess: false
            });

            if (response?.data?.[0].imageType === "image") {
                const imgUrl = joinImageUrl(import.meta.env.VITE_API_BASE_URL, response?.data?.[0]?.image)
                setPreview(imgUrl);
            }

            if (response?.data?.[0].imageType === "url") {
                setPreview(response?.data?.[0]?.image);
            }
        }
        catch (error: any) {
            console.error("Upload failed", error);
        }
    };

    const handleUpdate = async () => {
        const formData = new FormData();

        formData.append('title', 'Home Banner');
        formData.append('description', 'We are gonna have the given offer.');

        if (imageFile) {
            formData.append('image', imageFile);
            formData.append('imageType', 'image');
        }
        else if (imageUrl) {
            formData.append('image', imageUrl);
            formData.append('imageType', 'url');
        }

        try {
            const response = await POST({
                url: 'admin/banner',
                data: formData,
                toast: true
            });
            setPreview(response?.data?.image);
        }
        catch (error: any) {
            console.error("Upload failed", error);
        }
    };

    const handleDrag = (e: DragEvent) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragging(e.type === 'dragenter' || e.type === 'dragover');
    };

    const handleDrop = (e: DragEvent) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragging(false);
        if (e.dataTransfer.files?.[0]) processFile(e.dataTransfer.files[0]);
    };

    return (
        <div className='p-10'>
            <div className="max-w-5xl mx-auto py-6 px-10 bg-white rounded-3xl shadow-xl border border-gray-100">
                <div className="text-center mb-8">
                    <h2 className="text-2xl font-bold text-gray-800">
                        Appearance
                    </h2>
                    <p className="text-gray-500 text-sm">
                        Customize how your profile looks to others
                    </p>
                </div>

                <div
                    onDragEnter={handleDrag}
                    onDragOver={handleDrag}
                    onDragLeave={handleDrag}
                    onDrop={handleDrop}
                    className={`relative group cursor-pointer transition-all duration-300 ease-in-out border-2 border-dashed rounded-2xl p-4 mb-8 text-center
                    ${isDragging ? 'border-blue-500 bg-blue-50 scale-[1.02]' : 'border-gray-200 hover:border-gray-300 bg-gray-50'}`}
                    onClick={() => fileInputRef.current?.click()}
                >
                    <div className="relative inline-block">
                        <img
                            src={preview}
                            alt="Preview"
                            className="max-h-[40vh] rounded-xl object-contain mx-auto shadow-md border-2 border-white"
                            onError={(e) => (e.currentTarget.src = 'https://static.vecteezy.com/system/resources/previews/002/390/851/non_2x/error-banner-with-black-color-and-glitch-effect-vector.jpg')}
                            crossOrigin='anonymous'
                        />
                        <div className="absolute -bottom-4 -right-4 bg-blue-600 p-2 rounded-full text-white shadow-lg group-hover:scale-110 transition-transform">
                            <FiUpload size={16} />
                        </div>
                    </div>

                    <div className="mt-4">
                        <p className="text-sm font-medium text-gray-700">Click to upload or drag and drop</p>
                        <p className="text-xs text-gray-400 mt-1">PNG, JPG or GIF (max. 800x400px)</p>
                    </div>

                    <input
                        type="file"
                        ref={fileInputRef}
                        onChange={(e) => e.target.files?.[0] && processFile(e.target.files[0])}
                        className="hidden"
                        accept="image/*"
                    />
                </div>

                <div className="space-y-4">
                    <div className="relative">
                        <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider ml-1 mb-2 block">
                            Image URL
                        </label>
                        <div className="relative flex items-center">
                            <div className="absolute left-3 text-gray-400">
                                <FiLink size={18} />
                            </div>
                            <input
                                type="text"
                                value={imageUrl}
                                placeholder="https://example.com/image.png"
                                onChange={handleUrlChange}
                                className="w-full pl-10 pr-4 py-3 bg-gray-100 border-none rounded-xl text-sm focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all outline-none text-gray-700"
                            />
                        </div>
                    </div>

                    <div className='grid md:grid-cols-2 grid-cols-1 gap-4'>
                        <button
                            onClick={handleUpdate}
                            className="w-full rounded-xl flex items-center justify-center gap-2 p-3 text-sm font-medium bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-200 transition-all active:scale-95"
                        >
                            <MdBrowserUpdated size={18} />
                            Update Profile
                        </button>

                        <button
                            onClick={getHeroBanner}
                            className="w-full rounded-xl flex items-center justify-center gap-2 py-3 text-sm font-medium bg-red-50 hover:bg-red-100 text-red-600 transition-colors"
                        >
                            <FiX size={16} />
                            Reset to default
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UpdateBanner