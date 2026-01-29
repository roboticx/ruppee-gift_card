import { IoMdTrendingUp } from "react-icons/io";
import { GoPlus } from "react-icons/go";
import { FaFileAlt } from "react-icons/fa";
import { ImUsers } from "react-icons/im";
import { BsThreeDots } from "react-icons/bs";
import ViewMoreDialog from "./Components/Viewmore";
import { useState } from "react";

const UserList = () => {
    const[isOpen, setISopen]=useState(false)
  return (
    <div className="p-4 bg-blue-50 min-h-screen">
      <div className="flex flex-col gap-1">
        <h1 className="font-semibold text-lg sm:text-xl">
          Welcome Back Admin
        </h1>
        <p className="text-xs sm:text-sm text-gray-500">
          Here's whats happening with your store today
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-5">
        {[
          "Total users",
          "Active Products",
          "Total orders",
          "Revenue",
        ].map((title, index) => (
          <div
            key={index}
            className="px-3 py-3 flex flex-col bg-[#EBF4DD] gap-3 rounded-lg">
            <p className="text-sm sm:text-lg font-bold">{title}</p>
            <div className="w-full flex justify-between items-center">
              <p className="text-xl sm:text-2xl font-bold">21</p>
              <IoMdTrendingUp className="text-red-600 text-xl" />
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6">
        <h1 className="text-lg sm:text-xl font-semibold">
          Quick Actions
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-5">
          <div className="p-4 flex gap-4 bg-[#EBF4DD] rounded-xl cursor-pointer transition hover:shadow-md hover:scale-[1.01]">
            <div className="h-12 w-12 flex justify-center items-center bg-green-200 rounded-lg">
              <GoPlus className="text-green-600 text-xl" />
            </div>
            <div className="flex flex-col">
              <p className="text-sm sm:text-lg font-semibold text-gray-400">
                Edit Products
              </p>
              <p className="text-xs font-semibold text-gray-900">
                Edit an existing product listing
              </p>
            </div>
          </div>
          <div className="p-4 flex gap-4 bg-[#FEF2F2] rounded-xl cursor-pointer transition hover:shadow-md hover:scale-[1.01]">
            <div className="h-12 w-12 flex justify-center items-center bg-red-200 rounded-lg">
              <FaFileAlt className="text-red-600 text-xl" />
            </div>
            <div className="flex flex-col">
              <p className="text-sm sm:text-lg font-semibold text-gray-400">
                View recent orders
              </p>
              <p className="text-xs font-semibold text-gray-900">
                Check Latest Orders
              </p>
            </div>
          </div>
          <div className="p-4 flex gap-4 bg-[#FAF5FF] rounded-xl cursor-pointer transition hover:shadow-md hover:scale-[1.01]">
            <div className="h-12 w-12 flex justify-center items-center bg-purple-200 rounded-lg">
              <ImUsers className="text-purple-600 text-xl" />
            </div>
            <div className="flex flex-col">
              <p className="text-sm sm:text-lg font-semibold text-gray-400">
                Manage users
              </p>
              <p className="text-xs font-semibold text-gray-900">
                Update User Info
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white p-4 sm:p-6 rounded-2xl border border-gray-300 mt-6 space-y-4">
        <h2 className="text-lg sm:text-xl font-semibold text-gray-900">
          Recent Orders
        </h2>

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border border-gray-200 p-4 rounded-xl">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-lg bg-gray-200 flex items-center justify-center font-semibold">
              A
            </div>
            <div>
              <p className="font-semibold text-gray-900">Admin</p>
              <p className="text-sm text-gray-500">
                admin@admin.com
              </p>
            </div>
          </div>
          <div className="flex justify-between sm:flex-col">
            <p className="font-semibold text-gray-900">
              ₹468.75
            </p>
            <p className="text-sm text-gray-500">
              12 Jan 2026
            </p>
          </div>
          <div className="flex justify-between sm:justify-start items-center gap-4">
            <span className="px-4 py-1 rounded-lg bg-gray-100 text-sm font-medium">
              Created
            </span>
            <BsThreeDots className="text-gray-500 cursor-pointer" onClick={()=>setISopen(true)}/>
                <ViewMoreDialog
  isOpen={isOpen}
  onClose={() => setISopen(false)}
/>
          </div>
        </div>
         <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border border-gray-200 p-4 rounded-xl">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-lg bg-gray-200 flex items-center justify-center font-semibold">
              A
            </div>
            <div>
              <p className="font-semibold text-gray-900">Admin</p>
              <p className="text-sm text-gray-500">
                admin@admin.com
              </p>
            </div>
          </div>
          <div className="flex justify-between sm:flex-col">
            <p className="font-semibold text-gray-900">
              ₹468.75
            </p>
            <p className="text-sm text-gray-500">
              12 Jan 2026
            </p>
          </div>
          <div className="flex justify-between sm:justify-start items-center gap-4">
            <span className="px-4 py-1 rounded-lg bg-gray-100 text-sm font-medium">
              Created
            </span>
            <BsThreeDots className="text-gray-500 cursor-pointer" onClick={()=>setISopen(true)}/>
                <ViewMoreDialog
  isOpen={isOpen}
  onClose={() => setISopen(false)}
/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserList;