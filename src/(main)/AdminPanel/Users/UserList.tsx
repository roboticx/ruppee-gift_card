import { FaPlus, FaRegEye } from "react-icons/fa";
import { IoTrash } from "react-icons/io5";
import { PiNotePencilLight } from "react-icons/pi";
import { useEffect, useState } from "react";
import UpdateUser from "./component/UpdateUser";
import AddUser from "./component/AddUser";
import DeleteConfirmation from "../../../Components/models/DeleteConfirmation";
import ViewUserModal from "./component/ViewUserModal";
import { DELETE, FETCH, PUT } from "../../../utils/apiutils";

const UserList = () => {
    const [viewUser, setViewUser] = useState(false);
    const [adduser, setUserData] = useState(false);
    const [isViewOpen, setIsViewOpen] = useState(false);
    const [isDeleteConfirm, setDeleteConfirm] = useState(false);
    const [modalId, setModalId] = useState('');
    const [userList, setUserList] = useState<any>(null);

    useEffect(() => {
        getUserList();
    }, [adduser]);

    const getUserList = async () => {
        try {
            const res = await FETCH({
                url: `admin/users`,
            });

            setUserList(res.data);
        }
        catch (e: any) { }
        finally {
            setDeleteConfirm(false);
        }
    }

    const deleteUser = async () => {
        try {
            const res = await DELETE({
                url: `admin/users/${modalId}`,
                toast: true
            });
            console.log(res);

            const index = userList.findIndex((item: any) => item._id === modalId);
            userList.slice(index, 1);
        }
        catch (e: any) { }
        finally {
            setDeleteConfirm(false);
        }
    }

    const updateStatus = async (id: string, status: boolean) => {
        try {
            const res = await PUT({
                url: `admin/users/${id}/active`,
                data: { isActive: status },
                toast: true
            });

            setUserList((prev: any) =>
                prev.map((item: any) =>
                    item._id === id
                        ? { ...item, isActive: res.data.isActive }
                        : item
                )
            );
        }
        catch (e: any) { }
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

                {userList &&
                    (
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
                                    {
                                        userList.map((user: any) => (
                                            <tr
                                                key={user?._id}
                                                className="border-t border-gray-300 hover:bg-gray-50 transition"
                                            >
                                                <td className="px-4 flex items-center justify-center py-4 gap-1 font-semibold">
                                                    <div className="h-7 w-7 flex justify-center  items-center bg-gray-300 rounded-full font-semibold">
                                                        {user?.userName[0]}
                                                    </div>
                                                    {user?.userName}
                                                </td>

                                                <td className="px-4 py-4 font-semibold text-gray-500">
                                                    {user?.email?.value || user?.email || ''}
                                                </td>

                                                <td className="px-4 py-4 font-semibold text-gray-500">
                                                    {user?.mobileNumber}
                                                </td>

                                                <td className="px-4 py-4">
                                                    <span
                                                        className={`
                                                        px-4 py-1.5 rounded-full cursor-pointer 
                                                        ${user.isActive
                                                                ? 'bg-green-200 text-green-700'
                                                                : 'bg-red-200 text-red-700'
                                                            }
                                                      `}
                                                        onClick={() => updateStatus(user._id, !user.isActive)}
                                                    >
                                                        {user.isActive ? 'Active' : 'InActive'}
                                                    </span>
                                                </td>

                                                <td className="px-4 py-4">
                                                    <span className="bg-blue-200 px-3 py-1 rounded-full border border-blue-300 font-semibold uppercase">
                                                        {user?.role}
                                                    </span>
                                                </td>

                                                <td className="px-4 py-4">
                                                    <div className="flex justify-center items-center gap-4">
                                                        <FaRegEye
                                                            onClick={() => {
                                                                setIsViewOpen(true);
                                                                setModalId(user._id);
                                                            }}
                                                            className="cursor-pointer text-blue-500 text-lg hover:scale-110 transition"
                                                        />

                                                        <PiNotePencilLight
                                                            onClick={() => {
                                                                setViewUser(true);
                                                                setModalId(user._id);
                                                            }}
                                                            className="cursor-pointer text-gray-500 text-lg hover:scale-110 transition"
                                                        />

                                                        <IoTrash
                                                            onClick={() => {
                                                                setDeleteConfirm(true);
                                                                setModalId(user._id);
                                                            }}
                                                            className="cursor-pointer text-red-500 text-lg hover:scale-110 transition"
                                                        />
                                                    </div>
                                                </td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        </div>
                    )
                }
            </div>

            {
                isViewOpen &&
                <ViewUserModal
                    isOpen={isViewOpen}
                    onClose={() => setIsViewOpen(false)}
                    userId={modalId}
                />
            }

            {
                viewUser &&
                <UpdateUser
                    isOpen={viewUser}
                    onClose={() => setViewUser(false)}
                    userId={modalId}
                />
            }

            {
                adduser &&
                <AddUser
                    isOpen={adduser}
                    onClose={() => setUserData(false)}
                />
            }

            {
                isDeleteConfirm &&
                <DeleteConfirmation
                    isOpen={isDeleteConfirm}
                    onClose={() => setDeleteConfirm(false)}
                    onDelete={deleteUser}
                />
            }
        </>
    )
}

export default UserList