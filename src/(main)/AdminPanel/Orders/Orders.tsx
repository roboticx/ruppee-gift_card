import { FaPlus } from "react-icons/fa"
import { MdFilterAlt } from "react-icons/md"
import { useState } from "react"
import { BsThreeDots } from "react-icons/bs"
const Orders = () => {
    const [openMenuIndex, setOpenMenuIndex] = useState<number | null>(null)

    return (
        <div className="min-h-screen">
            <div className="w-full px-4 sm:px-6 py-16">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-10">
                    <div>
                        <h1 className="font-semibold text-lg sm:text-xl">
                            User Management
                        </h1>
                        <p className="text-xs sm:text-sm text-gray-500">
                            Manage your system users and their permissions
                        </p>
                    </div>
                    <button className="bg-red-700 px-6 sm:px-10 py-2 flex items-center gap-3 rounded-lg text-white font-semibold justify-center">
                        <FaPlus /> Add New User
                    </button>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-10">
                    <input
                        type="text"
                        placeholder="Search user by the name,email,phone"
                        className="w-full border border-gray-300 rounded-md py-3 px-4 text-sm outline-none" />
                    <button className="w-full sm:w-44 flex justify-center items-center gap-2 bg-red-700 text-white font-bold rounded-md py-2 px-3 text-sm">
                        <MdFilterAlt size={20} /> Clear Filter
                    </button>
                </div>
                <div className="bg-white border border-gray-300 rounded-xl overflow-x-auto">
                    <table className="min-w-[900px] w-full border-collapse">
                        <thead>
                            <tr className="bg-gray-50 text-left text-sm font-semibold text-gray-600">
                                <th className="px-4 py-3">Order Id</th>
                                <th className="px-4 py-3">Date and Time</th>
                                <th className="px-4 py-3">Customer</th>
                                <th className="px-7 py-3">Items</th>
                                <th className="px-7 py-3">Status</th>
                                <th className="px-4 py-3 text-center">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="text-sm text-gray-800">
                            {[1, 2].map((_, index) => (
                                <tr
                                    key={index}
                                    className="border-t border-gray-300 hover:bg-gray-50 transition">
                                    <td className="px-4 flex items-center gap-1 py-4">
                                        <div className="h-7 w-7 flex justify-center items-center bg-gray-300 font-semibold rounded-full">A</div> <span className="font-semibold text-gray-400 uppercase">dfgjuugghur373erwefgua347347</span>
                                    </td>
                                    <td className="px-4 py-4 font-semibold text-gray-400">{Date.now().toString()}</td>
                                    <td className="px-4 py-4 font-semibold text-gray-400">
                                        <div className="flex flex-col">
                                            <span className="font-semibold text-md  text-gray-500">lorem</span>
                                            <span className="font-semibold text-xs  text-gray-400">lorem</span>
                                        </div>
                                    </td>
                                     <td className="px-4 py-4">
                                        <span className="bg-red-200 px-3 py-1 rounded-full border border-red-300 font-semibold">
                                            Active
                                        </span>
                                    </td>
                                    <td className="px-4 py-4">
                                        <span className="bg-gray-200 px-3 py-1 rounded-full font-semibold">
                                           Created
                                        </span>
                                    </td>
                                    <td className="px-4 py-4 relative">
                                        <div className="flex justify-center">
                                            <BsThreeDots
                                                onClick={() =>
                                                    setOpenMenuIndex(openMenuIndex === index ? null : index)
                                                }
                                                className="cursor-pointer text-blue-500 text-lg hover:scale-110 transition"
                                            />
                                        </div>
                                        {openMenuIndex === index && (
                                            <div className="absolute top-7 right-4 mt-2 w-44 bg-white border border-gray-200 rounded-md shadow-lg z-50">
                                                <button
                                                    onClick={() => {
                                                        console.log("Confirm payment clicked")
                                                        setOpenMenuIndex(null)
                                                    }}
                                                    className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100 rounded-md"
                                                >
                                                    Confirm payment
                                                </button>
                                            </div>
                                        )}
                                    </td>

                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
export default Orders