import { FaPlus, FaRegEye } from "react-icons/fa"
import { IoTrash } from "react-icons/io5"
import { PiNotePencilLight } from "react-icons/pi"
import { useState } from "react"
import UpdateUser from "./component/UpdateUser"
const Users = () => {
  const [isOpen, setIsOpen] = useState(false)
  const[adduser,setUserData]=useState(false)
  return (
    <div className="min-h-screen">
      <div className="w-full px-4 sm:px-6 py-16">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-10">
          <div>
             <h1 className="font-bold text-3xl">
              User Management
            </h1>
            <p className="font-semibold text-md text-gray-500">
              Manage your system users and their permissions
            </p>
          </div>
          <button  onClick={()=>setUserData(true)} className="bg-red-700 px-6 sm:px-10 py-2 flex items-center gap-3 rounded-lg text-white font-semibold justify-center">
            <FaPlus /> Add New User
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
                  className="border-t border-gray-300 hover:bg-gray-50 transition"
                >
                  <td className="px-4 flex items-center py-4 gap-1 font-semibold">
                   <div className="h-7 w-7 flex justify-center  items-center bg-gray-300 rounded-full font-semibold">A</div> AZA Fashions E-Gift Voucher
                  </td>
                  <td className="px-4 py-4 font-semibold text-gray-500">330</td>
                  <td className="px-4 py-4 font-semibold text-gray-500">₹5000 - 10000</td>
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
              {
                adduser?
                <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
      <div className="relative w-[90%] sm:w-[25%] bg-[#E4F4FF] rounded-2xl p-6  shadow-xl z-10 animate-scaleIn">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold text-gray-900">
            Add New User
          </h2>
          <button onClick={()=>setUserData(false)}
            className="text-gray-400 hover:text-gray-700 text-xl">
            ✕
          </button>
        </div>
        <hr />
        <div className="text-sm text-gray-600 mt-3">
          <div className="flex flex-col gap-1">
            <h1>Full Name</h1>
            <input type="text" className="py-2 px-5 border border-gray-300 outline-0 rounded-lg w-full" />
          </div>
        </div>
        <div className="text-sm text-gray-600 mt-3">
          <div className="flex flex-col gap-1">
            <h1>Email</h1>
            <input type="text" className="py-2 px-5 border border-gray-300 outline-0 rounded-lg w-full" />
          </div>
        </div>
        <div className="text-sm text-gray-600 mt-3">
          <div className="flex flex-col gap-1">
            <h1>Phone Number</h1>
            <input type="text" className="py-2 px-5 border border-gray-300 outline-0 rounded-lg w-full" />
          </div>
        </div>
         <div className="text-sm text-gray-600 mt-3">
          <div className="flex flex-col gap-1">
            <h1>Password</h1>
            <input type="password" className="py-2 px-5 border border-gray-300 outline-0 rounded-lg w-full" />
          </div>
        </div>
         <div className="text-sm text-gray-600 mt-3">
          <div className="flex flex-col gap-1">
            <h1>Confirm Password</h1>
            <input type="password" className="py-2 px-5 border border-gray-300 outline-0 rounded-lg w-full" />
          </div>
        </div>
        <div className="text-sm mt-3 text-gray-600">
          <div className="flex flex-col gap-1">
            <h1>Role</h1>
            <select name="" id="" className="border py-2 px-5 rounded-lg outline-0 border-gray-300">
              <option value="">Admin</option>
              <option value="">Sub-admin</option>
              <option value="">User</option>
            </select>
          </div>
        </div>
        <div className="mt-6 flex justify-between gap-3">
          <button
           onClick={()=>setUserData(false)}
            className="px-4 py-2 rounded-lg bg-gray-500 text-white w-1/2 text-sm border border-gray-300 hover:bg-gray-600">
            Cancel
          </button>
          <button
            className="px-4 py-2 rounded-lg text-sm w-1/2 bg-red-700 hover:bg-red-600 text-white hover:opacity-90">
            Update Successfully
          </button>
        </div>
      </div>
    </div>
                    :""
              }
    </div>
  )
}
export default Users