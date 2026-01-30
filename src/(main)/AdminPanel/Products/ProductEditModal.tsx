import React, { useState, type ChangeEvent } from 'react';
import { IoCloudUploadOutline } from 'react-icons/io5';

interface Props {
    isOpen: boolean;
    onClose: () => void;
    productId: string;
}

const ProductEditModal: React.FC<Props> = ({ isOpen, onClose, productId }) => {

    if (!isOpen) return null;

    const [formData, setFormData] = useState<any>({
        name: 'Ajio E-gift Card',
        price: '5000',
        discount: '',
        imageUrl: 'https://pbs.twimg.com/profile_images/1354411482369282050/32WaTYpl_400x400.jpg',
    });

    // Handle text input changes
    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev: any) => ({ ...prev, [name]: value }));
    };

    // Handle file upload and update the preview image
    const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setFormData((prev: any) => ({
                    ...prev,
                    imageUrl: reader.result as string,
                }));
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">

            <div className="w-full max-w-2xl bg-[#EBF5FF] rounded-3xl shadow-2xl p-8 border border-white/50">
                <h2 className="text-xl font-bold text-gray-800 mb-6">
                    Edit Product {productId}
                </h2>

                {/* Image Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    {/* Image Preview */}
                    <div className="w-48 h-48 bg-white rounded-2xl shadow-md overflow-hidden flex items-center justify-center border-4 border-white">
                        <img
                            src={formData.imageUrl}
                            alt="Product Preview"
                            className="w-full h-full object-contain"
                        />
                    </div>

                    {/* Upload Zone */}
                    <label className="relative flex flex-col items-center justify-center w-full h-48 border-2 border-dashed border-gray-300 rounded-2xl bg-white/30 hover:bg-white/50 transition-colors cursor-pointer group">
                        <div className="flex flex-col items-center justify-center pt-5 pb-6 text-center px-4">
                            <div className="bg-white p-3 rounded-full shadow-sm mb-3 group-hover:scale-110 transition-transform">
                                <IoCloudUploadOutline className="w-6 h-6 text-gray-400" />
                            </div>

                            <p className="mb-1 text-sm text-gray-700 font-semibold">
                                Click to upload or drag and drop
                            </p>

                            <p className="text-xs text-gray-500">
                                (SVG, PNG, JPG, or GIF)
                            </p>
                        </div>

                        <input
                            type="file"
                            className="hidden"
                            accept="image/*"
                            onChange={handleImageChange}
                        />
                    </label>
                </div>

                {/* URL Input */}
                <div className="relative mb-5">
                    <div className="absolute inset-0 flex items-center" aria-hidden="true">
                        <div className="w-full border-t border-gray-300" />
                    </div>

                    <div className="relative flex justify-center">
                        <span className="bg-[#EBF5FF] px-3 text-xs font-bold text-gray-400 uppercase tracking-widest">
                            OR USE URL
                        </span>
                    </div>
                </div>

                <div className="space-y-6">
                    <input
                        type="text"
                        placeholder="Enter Image URL"
                        className="w-full bg-white/60 border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                    />

                    {/* Product Info Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-gray-700 ml-1">
                                Product Name
                            </label>

                            <input
                                type="text"
                                name="name"
                                placeholder="Enter Product Name"
                                value={formData.name}
                                onChange={handleInputChange}
                                className="w-full bg-white/60 border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-gray-700 ml-1">
                                Price
                            </label>

                            <input
                                type="text"
                                name="price"
                                placeholder="Enter Product Price"
                                value={formData.price}
                                onChange={handleInputChange}
                                className="w-full bg-white/60 border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                            />
                        </div>
                    </div>

                    {/* Discount Field */}
                    <div className="space-y-2">
                        <label className="text-sm font-bold text-gray-700 ml-1">
                            Discount %
                        </label>

                        <input
                            type="text"
                            name="discount"
                            placeholder="Enter Discount in %"
                            className="w-full bg-white/60 border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                        />
                    </div>

                    {/* Action Buttons */}
                    <div className="flex justify-end gap-3 pt-4">
                        <button
                            className="px-8 py-3 rounded-xl border border-gray-300 bg-white/50 text-gray-600 font-semibold hover:bg-white transition-colors shadow-sm"
                            onClick={onClose}
                        >
                            Cancel
                        </button>

                        <button className="px-8 py-3 rounded-xl bg-[#C00000] text-white font-semibold hover:bg-red-700 transition-colors shadow-lg shadow-red-900/20">
                            Save Changes
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductEditModal