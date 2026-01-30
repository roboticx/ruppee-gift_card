import React from 'react'

interface Props {
    isOpen: boolean
    onClose: () => void
}

const AddUser: React.FC<Props> = ({ isOpen, onClose }) => {

    if (!isOpen) return null

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />.

            <div className="relative w-[90%] sm:w-[25%] bg-[#E4F4FF] rounded-2xl p-6  shadow-xl z-10 animate-scaleIn">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-lg font-semibold text-gray-900">
                        Add New User
                    </h2>

                    <button onClick={onClose}
                        className="text-gray-400 hover:text-gray-700 text-xl">
                        ✕
                    </button>
                </div>

                <hr />

                <div className="text-sm text-gray-600 mt-3">
                    <div className="flex flex-col gap-1">
                        <h1>
                            Full Name
                        </h1>

                        <input
                            type="text"
                            className="py-2 px-5 border border-gray-300 outline-0 rounded-lg w-full"
                            placeholder={`Enter Full name`}
                        />
                    </div>
                </div>

                <div className="text-sm text-gray-600 mt-3">
                    <div className="flex flex-col gap-1">
                        <h1>
                            Email
                        </h1>

                        <input
                            type="text"
                            className="py-2 px-5 border border-gray-300 outline-0 rounded-lg w-full"
                            placeholder={`Enter Email`}
                        />
                    </div>
                </div>

                <div className="text-sm text-gray-600 mt-3">
                    <div className="flex flex-col gap-1">
                        <h1>
                            Phone Number
                        </h1>

                        <input
                            type="text"
                            className="py-2 px-5 border border-gray-300 outline-0 rounded-lg w-full"
                            placeholder={`Enter Mobile Number`}
                        />
                    </div>
                </div>

                <div className="text-sm text-gray-600 mt-3">
                    <div className="flex flex-col gap-1">
                        <h1>
                            Password
                        </h1>

                        <input
                            type="password"
                            className="py-2 px-5 border border-gray-300 outline-0 rounded-lg w-full"
                            placeholder={`Enter Password`}
                        />
                    </div>
                </div>

                <div className="text-sm text-gray-600 mt-3">
                    <div className="flex flex-col gap-1">
                        <h1>
                            Confirm Password
                        </h1>

                        <input
                            type="password"
                            className="py-2 px-5 border border-gray-300 outline-0 rounded-lg w-full"
                            placeholder={`COnfirm Password`}
                        />
                    </div>
                </div>

                <div className="text-sm mt-3 text-gray-600">
                    <div className="flex flex-col gap-1">
                        <h1>
                            Role
                        </h1>

                        <select name="" className="border py-2 px-5 rounded-lg outline-0 border-gray-300">
                            <option value="">Admin</option>
                            <option value="">Sub-admin</option>
                            <option value="">User</option>
                        </select>
                    </div>
                </div>

                <div className="mt-6 flex justify-between gap-3">
                    <button
                        onClick={onClose}
                        className="px-4 py-2 rounded-lg bg-red-500 text-white w-1/2 text-sm border border-red-300 hover:bg-red-600">
                        Cancel
                    </button>

                    <button
                        className="px-4 py-2 rounded-lg text-sm w-1/2 bg-green-700 hover:bg-green-600 text-white hover:opacity-90">
                        Add
                    </button>
                </div>
            </div>
        </div>
    )
}

export default AddUser