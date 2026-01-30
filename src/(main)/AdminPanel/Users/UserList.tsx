import { FaPlus, FaRegEye } from "react-icons/fa";
import { IoTrash } from "react-icons/io5";
import { PiNotePencilLight } from "react-icons/pi";
import { useState } from "react";
import UpdateUser from "./component/UpdateUser";
import AddUser from "./component/AddUser";
import DeleteConfirmation from "../../../Components/models/DeleteConfirmation";
import ViewUserModal from "./component/ViewUserModal";

const UserList = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [adduser, setUserData] = useState(false);
    const [isViewOpen, setIsViewOpen] = useState(false);
    const [isDeleteConfirm, setDeleteConfirm] = useState(false);
    const [modalId, setModalId] = useState('');

    const deleteProduct = async () => {
        setDeleteConfirm(false);
        console.log('item Deleted : ', modalId);
    }

    return (
        <>
            <div className="w-full p-6">

                {/* HEADER */}
                <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between mb-6">
                    <div>
                        <h1 className="font-bold text-3xl">
                            User Management
                        </h1>

                        <p className="font-semibold text-md text-gray-500">
                            Manage your system users and their permissions
                        </p>
                    </div>

                    <button
                        className="bg-red-600 px-4 py-2 flex items-center gap-3 rounded-lg text-white font-semibold"
                        onClick={() => setUserData(true)}
                    >
                        <FaPlus size={20} />
                        Add New User
                    </button>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-10">
                    <input
                        type="text"
                        placeholder="Search user by the name,email,phone"
                        className="w-full border border-gray-300 rounded-md py-3 px-4 text-sm outline-none"
                    />
                </div>

                <div className="bg-white border border-gray-300 rounded-xl overflow-x-auto">
                    <table className="min-w-225 w-full border-collapse">
                        <thead>
                            <tr className="bg-gray-50 text-left text-sm font-semibold text-gray-600">
                                <th className="px-4 py-3">Name</th>
                                <th className="px-4 py-3">Emails</th>
                                <th className="px-4 py-3">Phone</th>
                                <th className="px-4 py-3">Status</th>
                                <th className="px-4 py-3">Role</th>
                                <th className="px-4 py-3 text-center">Actions</th>
                            </tr>
                        </thead>

                        <tbody className="text-sm text-gray-800">
                            {[1, 2].map((_, index) => (
                                <tr
                                    key={index}
                                    className="border-t border-gray-300 hover:bg-gray-50 transition"
                                >
                                    <td className="px-4 flex items-center justify-center py-4 gap-1 font-semibold">
                                        <div className="h-7 w-7 flex justify-center  items-center bg-gray-300 rounded-full font-semibold">A</div>
                                        Rahul Kumar
                                    </td>

                                    <td className="px-4 py-4 font-semibold text-gray-500">
                                        amit@hai.kya
                                    </td>

                                    <td className="px-4 py-4 font-semibold text-gray-500">
                                        098763543210
                                    </td>

                                    <td className="px-4 py-4">
                                        <span className="bg-red-200 px-3 py-1 rounded-full border border-red-300 font-semibold">
                                            Active
                                        </span>
                                    </td>

                                    <td className="px-4 py-4">
                                        <span className="bg-red-200 px-3 py-1 rounded-full border border-red-300 font-semibold">
                                            Admin
                                        </span>
                                    </td>

                                    <td className="px-4 py-4">
                                        <div className="flex justify-center items-center gap-4">
                                            <FaRegEye
                                                onClick={() => {
                                                    setIsViewOpen(true);
                                                    setModalId('item._id');
                                                }}
                                                className="cursor-pointer text-blue-500 text-lg hover:scale-110 transition"
                                            />

                                            <PiNotePencilLight
                                                onClick={() => setIsOpen(true)}
                                                className="cursor-pointer text-gray-500 text-lg hover:scale-110 transition"
                                            />

                                            <IoTrash
                                                onClick={() => {
                                                    setDeleteConfirm(true);
                                                    setModalId('item._id');
                                                }}
                                                className="cursor-pointer text-red-500 text-lg hover:scale-110 transition"
                                            />
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            <ViewUserModal
                isOpen={isViewOpen}
                onClose={() => setIsViewOpen(false)}
                userId={modalId}
            />

            <UpdateUser
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
            />

            <AddUser
                isOpen={adduser}
                onClose={() => setUserData(false)}
            />

            <DeleteConfirmation
                isOpen={isDeleteConfirm}
                onClose={() => setDeleteConfirm(false)}
                onDelete={deleteProduct}
            />
        </>
    )
}

export default UserList