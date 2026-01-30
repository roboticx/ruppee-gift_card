import React from 'react';
import {
    MdQrCode,
    MdCategory,
    MdAttachMoney,
    MdPercent,
    MdCheckCircle,
    MdAccessTime,
} from 'react-icons/md';

interface Props {
    isOpen: boolean;
    onClose: () => void;
    productId: any;
}

const ViewProductModal: React.FC<Props> = ({ isOpen, onClose, productId }) => {

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm animate-in fade-in duration-300">
            {/* Modal Container */}
            <div className="bg-white rounded-3xl shadow-2xl max-w-3xl w-full overflow-hidden flex flex-col md:flex-row relative animate-in zoom-in-95 duration-300">

                {/* Left Side: Logo/Image Section */}
                <div className="w-full md:w-2/5 bg-slate-50 flex items-center justify-center p-12 border-r border-slate-100">
                    <div className="w-50 h-50 bg-white rounded-2xl shadow-sm flex items-center justify-center border border-slate-200">
                        <img
                            src="https://pbs.twimg.com/profile_images/1354411482369282050/32WaTYpl_400x400.jpg"
                            alt="Brand Logo"
                            className="w-full object-cover"
                        />
                    </div>
                </div>

                {/* Right Side: Content Section */}
                <div className="w-full md:w-3/5 p-8 md:p-10 flex flex-col">
                    {/* Header */}
                    <div className="flex justify-between items-start mb-8">
                        <div>
                            <h2 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-1">
                                Product Details
                            </h2>

                            <h2 className="text-xs font-bold text-slate-500 tracking-widest mb-1">
                                {productId}
                            </h2>

                            <h1 className="text-2xl font-extrabold text-slate-800 leading-tight">
                                {productId?.name || "Ajio Shoes"}
                            </h1>
                        </div>

                        <span className="flex items-center gap-1.5 bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-xs font-bold border border-emerald-200">
                            <MdCheckCircle className="text-sm" />
                            ACTIVE
                        </span>
                    </div>

                    {/* Details Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-4">
                        <DetailItem
                            icon={<MdQrCode />}
                            label="SKU"
                            value={productId?.sku || "578678478686467"}
                        />

                        <DetailItem
                            icon={<MdCategory />}
                            label="Category"
                            value={productId?.category || "330"}
                        />

                        <DetailItem
                            icon={<MdAttachMoney />}
                            label="Price Range"
                            value={productId?.price || "500 - 5000"}
                        />

                        <DetailItem
                            icon={<MdPercent />}
                            label="Discount"
                            value={`${productId?.discount || "76"}% OFF`}
                            highlight
                        />

                        <div className="col-span-full pt-4 border-t border-slate-100">
                            <DetailItem
                                icon={<MdAccessTime />}
                                label="Last Updated"
                                value={productId?.updated || "1/30/2026, 10:56:06 AM"}
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
            </div>
        </div>
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
