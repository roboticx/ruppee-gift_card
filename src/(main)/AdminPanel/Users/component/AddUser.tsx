import React, { useState } from 'react'
import { createPortal } from 'react-dom'
import { POST } from '../../../../utils/apiutils'
import { GrFormClose } from 'react-icons/gr'

interface Props {
    isOpen: boolean
    onClose: () => void
}

interface UserData {
    userName: string,
    mobileNumber: string,
    role: string,
    email: string
}

const AddUser: React.FC<Props> = ({ isOpen, onClose }) => {


    const [user, setUserData] = useState<UserData>({
        userName: '',
        mobileNumber: '',
        role: 'user',
        email: ''
    });

    const handleFormChange = (fieldName: string, value: any) => {
        setUserData((prev: any) => ({
            ...prev,
            [fieldName]: value
        }));
    }

    const addNewUser = async () => {
        try {
            const res = await POST({
                url: 'admin/users/register',
                data: user,
                toast: true
            });

            console.log(res.data);
        }
        catch (error: any) { }
        finally {
            onClose()
        }
    }

    if (!isOpen) return null;

    return createPortal(
        (
            <div className="fixed inset-0 z-999 flex items-center justify-center">
                <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />

                <div className="relative w-[90%] sm:w-[40%] bg-[#E4F4FF] rounded-2xl p-6 shadow-xl z-10 animate-scaleIn">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-lg font-semibold text-gray-900">
                            Add New User
                        </h2>

                        <button
                            onClick={onClose}
                            className="text-red-400 hover:text-red-700">
                            <GrFormClose size={40}
                            />
                        </button>
                    </div>

                    <hr />

                    <div className="text-sm mt-3 text-gray-600 flex flex-col gap-1">
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

                    <div className="text-sm mt-3 text-gray-600 flex flex-col gap-1">
                        <h1>
                            Email
                        </h1>

                        <input
                            type="text"
                            className="py-2 px-5 border border-gray-300 outline-0 rounded-lg w-full"
                            placeholder={`Enter Email`}
                            value={user.email}
                            onChange={(e) => handleFormChange('email', e.target.value)}
                        />
                    </div>

                    <div className="text-sm mt-3 text-gray-600 flex flex-col gap-1">
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

                    <div className="text-sm mt-3 text-gray-600 flex flex-col gap-1">
                        <h1>
                            Role
                        </h1>

                        <select
                            className="border py-2 px-5 rounded-lg outline-0 border-gray-300"
                            value={user.role}
                            onChange={(e) => handleFormChange('role', e.target.value)}
                        >
                            <option value="admin">Admin</option>
                            <option value="subAdmin">Sub-admin</option>
                            <option value="user">User</option>
                        </select>
                    </div>

                    <div className="mt-6 flex justify-between gap-3">
                        <button
                            onClick={onClose}
                            className="px-4 py-2 rounded-lg bg-red-500 text-white w-1/2 text-sm border border-red-300 hover:bg-red-600">
                            Cancel
                        </button>

                        <button
                            className="px-4 py-2 rounded-lg text-sm w-1/2 bg-green-700 hover:bg-green-600 text-white hover:opacity-90"
                            onClick={addNewUser}
                        >
                            Add
                        </button>
                    </div>
                </div>
            </div>
        ),
        document.body
    )
}

export default AddUser