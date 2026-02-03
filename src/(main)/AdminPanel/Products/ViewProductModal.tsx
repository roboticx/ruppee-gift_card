import React, { useEffect, useState } from 'react';
import {
    MdQrCode,
    MdCategory,
    MdAttachMoney,
    MdPercent,
    MdCheckCircle,
    MdAccessTime,
} from 'react-icons/md';
import { FETCH } from '../../../utils/apiutils';
import { createPortal } from 'react-dom';
import { TbBrandStocktwits } from 'react-icons/tb';

interface Props {
    isOpen: boolean;
    onClose: () => void;
    productId: string;
}

const ViewProductModal: React.FC<Props> = ({ isOpen, onClose, productId }) => {

    const [productData, setProductData] = useState<any>({})

    const getGiftCardById = async () => {
        try {
            const res = await FETCH({
                url: `admin/giftcards/${productId}`,
                toast: true,
                showError: true,
                showSuccess: false
            });

            setProductData(res?.data);
        }
        catch (error: any) {
            onClose();
        }
    }

    useEffect(() => {
        getGiftCardById();
    }, []);

    if (!isOpen) return null;

    return createPortal(
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm animate-in fade-in duration-300">
            {/* Modal Container */}
            <div className="bg-white rounded-3xl shadow-2xl max-w-3xl w-full overflow-hidden flex flex-col md:flex-row relative animate-in zoom-in-95 duration-300">

                {/* Left Side: Logo/Image Section */}
                <div className="w-full md:w-2/5 bg-slate-50 flex items-center justify-center p-12 border-r border-slate-100">
                    <div className="w-82 h-40 bg-white rounded-2xl shadow-sm flex items-center justify-center border border-slate-200">
                        <img
                            src="https://i.etsystatic.com/10158652/r/il/e9267d/1320400492/il_fullxfull.1320400492_d0mh.jpg"
                            alt="Brand Logo"
                            className="w-full object-cover"
                        />
                    </div>
                </div>
                {productData &&
                    (
                        <div className="w-full md:w-3/5 p-8 md:p-10 flex flex-col">
                            {/* Header */}
                            <div className="flex justify-between items-start mb-8">
                                <div>
                                    <h2 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-1">
                                        Product Details
                                    </h2>

                                    <h1 className="text-2xl font-extrabold text-slate-800 leading-tight">
                                        {productData?.title}
                                    </h1>
                                </div>

                                <span
                                    className={`
                                        flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border 
                                        ${productData?.isActive ?
                                            'bg-emerald-100 text-emerald-700 border-emerald-200' :
                                            'bg-red-100 text-red-700 border-red-200'
                                        }
                                    `}
                                >
                                    <MdCheckCircle className="text-sm" />

                                    {productData?.isActive ? 'Active' : 'Inactive'}
                                </span>
                            </div>

                            {/* Details Grid */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-4">
                                <DetailItem
                                    icon={<MdQrCode />}
                                    label="SKU"
                                    value={productData?.sku}
                                />

                                <DetailItem
                                    icon={<MdCategory />}
                                    label="Category"
                                    value={productData?.category?.name}
                                />

                                <DetailItem
                                    icon={<MdAttachMoney />}
                                    label="Price Range"
                                    value={productData?.price}
                                />

                                <DetailItem
                                    icon={<TbBrandStocktwits />}
                                    label="Stock"
                                    value={productData?.stock}
                                />

                                <DetailItem
                                    icon={<MdPercent />}
                                    label="Discount"
                                    value={`${productData?.discount}% OFF`}
                                    highlight
                                />

                                <div className="col-span-full pt-4 border-t border-slate-100">
                                    <DetailItem
                                        icon={<MdAccessTime />}
                                        label="Last Updated"
                                        value={new Date(productData?.updatedAt).toLocaleString()}
                                    />
                                </div>
                            </div>

                            {/* Footer Action */}
                            <div className="mt-10 flex justify-end">
                                <button
                                    onClick={onClose}
                                    className="flex items-center gap-2 px-5 py-3 bg-red-600 text-white font-semibold rounded-xl hover:bg-red-800 active:scale-95 transition-all shadow-lg shadow-slate-200"
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>,
        document.body
    );
};

const DetailItem = ({ icon, label, value, highlight }: any) => (
    <div className="flex items-start gap-3">
        <div className="mt-1 p-1.5 bg-slate-100 rounded-lg text-slate-500 text-lg">
            {icon}
        </div>

        <div>
            <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wide">
                {label}
            </p>

            <p className={`text-sm font-semibold ${highlight ? 'text-rose-500' : 'text-slate-700'}`}>
                {value}
            </p>
        </div>
    </div>
);


export default ViewProductModal
