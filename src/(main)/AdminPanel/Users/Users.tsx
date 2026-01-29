import { FaPlus, FaRegEye } from "react-icons/fa"
import { IoTrash } from "react-icons/io5"
import { MdFilterAlt } from "react-icons/md"
import { PiNotePencilLight } from "react-icons/pi"
import { useState } from "react"
import UpdateUser from "./component/UpdateUser"
const Users = () => {
  const [isOpen, setIsOpen] = useState(false)
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
            className="w-full border border-gray-300 rounded-md py-3 px-4 text-sm outline-none"
          />
          <button className="w-full sm:w-44 flex justify-center items-center gap-2 bg-red-700 text-white font-bold rounded-md py-2 px-3 text-sm">
            <MdFilterAlt size={20} /> Clear Filter
          </button>
        </div>
        <div className="bg-white border border-gray-300 rounded-xl overflow-x-auto">
          <table className="min-w-[900px] w-full border-collapse">
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
                  className="border-t hover:bg-gray-50 transition"
                >
                  <td className="px-4 flex items-center py-4">
                   <div className="h-7 w-7 flex justify-center items-center bg-gray-300 rounded-full">A</div> AZA Fashions E-Gift Voucher
                  </td>
                  <td className="px-4 py-4">330</td>
                  <td className="px-4 py-4">₹5000 - 10000</td>
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
                      <FaRegEye className="cursor-pointer text-blue-500 text-lg hover:scale-110 transition" />

                      <PiNotePencilLight
                        onClick={() => setIsOpen(true)}
                        className="cursor-pointer text-gray-500 text-lg hover:scale-110 transition"
                      />
                      <IoTrash className="cursor-pointer text-red-500 text-lg hover:scale-110 transition" />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <UpdateUser isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </div>
  )
}
export default Users