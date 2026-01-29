import React from "react"
interface ViewMoreDialogProps {
  isOpen: boolean
  onClose: () => void
}
const UpdateUser: React.FC<ViewMoreDialogProps> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
      <div className="relative w-[90%] sm:w-[65%] bg-[#E4F4FF] rounded-2xl p-6  shadow-xl z-10 animate-scaleIn">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold text-gray-900">
            Edit User
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-700 text-xl">
            ✕
          </button>
        </div>
        <div className="text-sm text-gray-600 mt-3">
          <div className="flex flex-col gap-1">
            <h1>Full Name</h1>
            <input type="text" className="py-3 px-5 border border-gray-300 outline-0 rounded-lg w-full" />
          </div>
        </div>
        <div className="text-sm text-gray-600 mt-3">
          <div className="flex flex-col gap-1">
            <h1>Email</h1>
            <input type="text" className="py-3 px-5 border border-gray-300 outline-0 rounded-lg w-full" />
          </div>
        </div>
        <div className="text-sm text-gray-600 mt-3">
          <div className="flex flex-col gap-1">
            <h1>Phone Number</h1>
            <input type="text" className="py-3 px-5 border border-gray-300 outline-0 rounded-lg w-full" />
          </div>
        </div>
        <div className="text-sm mt-3 text-gray-600">
          <div className="flex flex-col gap-1">
            <h1>Role</h1>
            <select name="" id="" className="border py-3 px-5 rounded-lg outline-0 border-gray-300">
              <option value="">1</option>
              <option value="">2</option>
              <option value="">3</option>
              <option value="">4</option>
            </select>
          </div>
        </div>
        <div className="mt-6 flex justify-between gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-gray-500 text-white w-1/2 text-sm border border-gray-300 hover:bg-gray-100">
            Cancel
          </button>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg text-sm w-1/2 bg-red-700 text-white hover:opacity-90">
            Update Successfully
          </button>
        </div>
      </div>
    </div>
  )
}
export default UpdateUser