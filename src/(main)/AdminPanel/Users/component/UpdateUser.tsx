import React, { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { FETCH, PUT } from '../../../../utils/apiutils';

interface ViewMoreDialogProps {
    isOpen: boolean;
    onClose: () => void;
    userId: any;
}

const UpdateUser: React.FC<ViewMoreDialogProps> = ({ isOpen, onClose, userId }) => {

    const [user, setUser] = useState<any>({});

    const getUserData = async () => {
        try {
            const res = await FETCH({
                url: `admin/users/${userId}`,
                showError: true,
                toast: true,
                showSuccess: false
            });

            const data = {
                userName: res?.data.userName,
                email: res?.data?.email?.value,
                mobileNumber: res?.data?.mobileNumber,
                role: res?.data?.role
            }
            setUser(data);
        }
        catch (error: any) {
            onClose();
         }
    }

    useEffect(() => {
        getUserData();
    }, []);

    const handleFormChange = (fieldName: string, value: any) => {
        setUser((prev: any) => ({
            ...prev,
            [fieldName]: value
        }));
    }

    const updateUser = async () => {
        try {
            const res = await PUT({
                url: `admin/users/${userId}`,
                data: user,
                toast: true
            });

            setUser(res.data);
        }
        catch (error: any) { }
        finally {
            onClose();
        }
    }

    if (!isOpen) return null

    return createPortal(
        (
            <div className="fixed inset-0 z-50 flex items-center justify-center">
                <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />

                <div className="relative w-[90%] sm:w-[50%] bg-[#E4F4FF] rounded-2xl p-6  shadow-xl z-10 animate-scaleIn">
                    <div className="flex justify-between items-center mb-2">
                        <h2 className="text-xl font-semibold text-gray-900">
                            Update User
                        </h2>

                        <button onClick={onClose}
                            className="text-gray-400 hover:text-gray-700 text-xl">
                            ✕
                        </button>
                    </div>

                    <hr />

                    <div className="text-sm text-gray-600 mt-3 flex flex-col gap-1">
                        <h1>
                            Full Name
                        </h1>

                        <input
                            type="text"
                            className="py-2 px-5 border border-gray-300 outline-0 rounded-lg w-full"
                            placeholder={`Enter Full name`}
                            value={user.userName}
                            onChange={(e) => handleFormChange('userName', e.target.value)}
                        />
                    </div>

                    <div className="text-sm text-gray-600 mt-3 flex flex-col gap-1">
                        <h1>
                            Email
                        </h1>

                        <input
                            type="text"
                            className="py-2 px-5 border border-gray-300 outline-0 rounded-lg w-full"
                            placeholder={`Enter Email`}
                            value={user?.email}
                            onChange={(e) => handleFormChange('email', e.target.value)}
                        />
                    </div>

                    <div className="text-sm text-gray-600 mt-3 flex flex-col gap-1">
                        <h1>
                            Phone Number
                        </h1>

                        <input
                            type="text"
                            className="py-2 px-5 border border-gray-300 outline-0 rounded-lg w-full"
                            placeholder={`Enter Mobile Number`}
                            value={user.mobileNumber}
                            onChange={(e) => handleFormChange('mobileNumber', e.target.value)}
                        />
                    </div>

                    <div className="text-sm text-gray-600 mt-3 flex flex-col gap-1">
                        <h1>
                            Role
                        </h1>

                        <select
                            value={user.role}
                            onChange={(e) => handleFormChange('role', e.target.value)}
                            className="border py-2 px-5 rounded-lg outline-0 border-gray-300">
                            <option value="">Admin</option>
                            <option value="">Sub-admin</option>
                            <option value="">User</option>
                        </select>
                    </div>

                    <div className="mt-6 flex justify-between gap-3">
                        <button
                            onClick={onClose}
                            className="px-4 py-2 rounded-lg bg-red-500 text-white w-1/2 text-sm border border-red-300 hover:bg-red-600">
                            Cancel
                        </button>

                        <button
                            className="px-4 py-2 rounded-lg text-sm w-1/2 bg-violet-700 hover:bg-violet-600 text-white hover:opacity-90"
                            onClick={updateUser}
                        >
                            Update
                        </button>
                    </div>
                </div>
            </div>
        ),
        document.body
    )
}

export default UpdateUser