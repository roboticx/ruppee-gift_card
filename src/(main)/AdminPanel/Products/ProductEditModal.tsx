import React, { useEffect, useState } from 'react';
import { FETCH, PUT } from '../../../utils/apiutils';
import { createPortal } from 'react-dom';

interface Props {
    isOpen: boolean;
    onClose: () => void;
    productId: string;
}

const ProductEditModal: React.FC<Props> = ({ isOpen, onClose, productId }) => {

    if (!isOpen) return null;

    const [product, setProduct] = useState<any>({});

    const getGiftCardById = async () => {
        try {
            const res = await FETCH({
                url: `admin/giftcards/${productId}`,
                toast: true,
                showError: true,
                showSuccess: false
            });

            setProduct(res.data);
        }
        catch (error: any) {
            onClose();
        }
    }

    useEffect(() => {
        getGiftCardById();
    }, []);

    const handleInputChange = (fieldName: string, value: any) => {
        setProduct((prev: any) => ({
            ...prev,
            [fieldName]: value
        }));
    }

    const updateGiftCard = async () => {
        const data = {
            title: product.title,
            price: Number(product.price),
            discount: product.discount
        }

        try {
            const res = await PUT({
                url: `admin/giftcards/${productId}`,
                data: data,
                toast: true
            });

            console.log(res);
        }
        catch (err: any) {
            console.error("Update Gift Card failed", err);
        }
        finally {
            onClose();
        }
    }

    return createPortal(
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">

            <div className="w-full max-w-2xl bg-[#EBF5FF] rounded-3xl shadow-2xl p-8 border border-white/50">
                <h2 className="text-xl font-bold text-gray-800 mb-6">
                    Edit Product
                </h2>

                <div className="space-y-6">

                    {/* Product Info Grid */}
                    <div className="grid grid-cols-1 gap-4">
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-gray-700 ml-1">
                                Product Name
                            </label>

                            <input
                                type="text"
                                placeholder="Enter Product Name"
                                value={product.title}
                                onChange={(e) => handleInputChange('title', e.target.value)}
                                className="w-full bg-white/60 border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-bold text-gray-700 ml-1">
                                Price
                            </label>

                            <input
                                type="number"
                                placeholder="Enter Product Price"
                                value={product.price}
                                onChange={(e) => handleInputChange('price', e.target.value)}
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
                            type="number"
                            placeholder="Enter Discount in %"
                            className="w-full bg-white/60 border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                            value={product.discount}
                            onChange={(e) => handleInputChange('discount', e.target.value)}
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

                        <button
                            className="px-8 py-3 rounded-xl bg-[#C00000] text-white font-semibold hover:bg-red-700 transition-colors shadow-lg shadow-red-900/20"
                            onClick={updateGiftCard}
                        >
                            Save Changes
                        </button>
                    </div>
                </div>
            </div>
        </div>,
        document.body
    )
}

export default ProductEditModal