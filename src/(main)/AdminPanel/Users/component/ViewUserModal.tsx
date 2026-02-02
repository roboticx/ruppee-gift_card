import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import {
    MdQrCode,
    MdCategory,
    MdAttachMoney,
    MdCheckCircle,
    MdAccessTime,
} from 'react-icons/md';
import { FETCH } from '../../../../utils/apiutils';

interface Props {
    isOpen: boolean;
    onClose: () => void;
    userId: any;
}

const ViewUserModal: React.FC<Props> = ({ isOpen, onClose, userId }) => {

    const [user, setUser] = useState<any>({});

    const getUserData = async () => {
        try {
            const res = await FETCH({
                url: `admin/users/${userId}`,
                toast: true
            });

            setUser(res.data);
        }
        catch (error: any) { }
    }

    useEffect(() => {
        getUserData();
    }, []);

    if (!isOpen) return null;

    return createPortal(
        (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm animate-in fade-in duration-300">
                {/* Modal Container */}
                <div className="bg-white rounded-3xl shadow-2xl max-w-3xl w-full overflow-hidden flex flex-col md:flex-row relative animate-in zoom-in-95 duration-300">

                    {/* Left Side: Logo/Image Section */}
                    <div className="w-full md:w-2/5 bg-slate-50 flex items-center justify-center p-12 border-r border-slate-100">
                        <div className="w-50 h-50 bg-white rounded-2xl shadow-sm flex items-center justify-center border border-slate-200">
                            <img
                                src={
                                    user.role == 'user'
                                        ? `https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png`
                                        : (
                                            user.role === 'admin'
                                                ? 'https://media.istockphoto.com/id/1192884194/vector/admin-sign-on-laptop-icon-stock-vector.jpg?s=170667a&w=0&k=20&c=S274xvXNsp27UyKxzNjhmZEzAb3Zqi2pFOqZjLsZJz0='
                                                : ''
                                        )
                                }
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
                                    User Details
                                </h2>

                                <h1 className="text-2xl font-extrabold text-slate-800 leading-tight">
                                    {user?.userName}
                                </h1>
                            </div>

                            <span className="flex items-center gap-1.5 bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-xs font-bold border border-emerald-200">
                                <MdCheckCircle className="text-sm" />
                                {user?.isActive ? 'ACTIVE' : 'INACTIVE'}
                            </span>
                        </div>

                        {/* Details Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-4">
                            <DetailItem
                                icon={<MdQrCode />}
                                label="Emails"
                                value={user?.email}
                            />

                            <DetailItem
                                icon={<MdCategory />}
                                label="Role"
                                value={user?.role}
                            />

                            <DetailItem
                                icon={<MdAttachMoney />}
                                label="Phone Number"
                                value={user?.mobileNumber}
                            />

                            <div className="col-span-full pt-4 border-t border-slate-100">
                                <DetailItem
                                    icon={<MdAccessTime />}
                                    label="Last Updated"
                                    value={user?.updatedAt}
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
        ),
        document.body
    );
};

const DetailItem = ({ icon, label, value }: any) => (
    <div className="flex items-start gap-3">
        <div className="mt-1 p-1.5 bg-slate-100 rounded-lg text-slate-500 text-lg">
            {icon}
        </div>

        <div>
            <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wide">
                {label}
            </p>

            <p className={`text-sm font-semibold text-slate-700`}>
                {value}
            </p>
        </div>
    </div>
);



export default ViewUserModal