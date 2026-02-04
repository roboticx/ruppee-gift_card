import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { GoPlus } from "react-icons/go";
import { FaEye, FaFileAlt } from "react-icons/fa";
import { ImUsers } from "react-icons/im";
import ViewMore from "./Components/ViewMore";
import Analytics from "../Analytics/Analytics";

const Overview = () => {
    const [isOpen, setISopen] = useState(false);

    const navigate = useNavigate();

    const randomDateStr = (): string => {
        const month = Math.floor(Math.random() * 12) + 1;
        const day = Math.floor(Math.random() * 30) + 1;
        const year = Math.floor(Math.random() * (2026 - 2025 + 1)) + 2025;
        const hour = Math.floor(Math.random() * 24) + 1;
        const min = Math.floor(Math.random() * 60) + 1;
        const sec = Math.floor(Math.random() * 60) + 1;
        const type = hour > 12 ? 'PM' : 'AM';

        const date = `${month}/${day}/${year} at ${hour > 12 ? (hour - 12) : hour}:${min}:${sec} ${type}`
        return date;
    }

    return (
        <div className="p-10">
            <div className="flex flex-col gap-1">
                <h1 className="font-bold text-3xl">
                    Welcome Back Admin
                </h1>

                <p className="font-semibold text-md text-gray-500">
                    Here's whats happening with your store today
                </p>
            </div>

            <Analytics />

            <div className="mt-6">
                <h1 className="text-lg sm:text-xl font-semibold">
                    Quick Actions
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-5">
                    <div
                        className="bg-green-100 border-green-600 border p-6 flex gap-4 rounded-xl cursor-pointer transition hover:shadow-md hover:scale-[1.01]"
                        onClick={() => navigate('/products-list')}
                    >
                        <div className="h-12 w-12 flex justify-center items-center bg-green-300/50 rounded-xl">
                            <GoPlus className="text-green-600 text-3xl" />
                        </div>

                        <div className="flex flex-col">
                            <p className="text-sm sm:text-lg font-medium text-gray-400">
                                Edit Products
                            </p>

                            <p className="text-xs font-semibold text-gray-900">
                                Edit an existing product listing
                            </p>
                        </div>
                    </div>

                    <div
                        className="border-red-400 border p-6 flex gap-4 bg-[#FEF2F2] rounded-xl cursor-pointer transition hover:shadow-md hover:scale-[1.01]"
                        onClick={() => navigate('/orders')}
                    >
                        <div className="h-12 w-12 flex justify-center items-center bg-[#FFE2E2] rounded-xl">
                            <FaFileAlt className="text-[#E61213] text-xl" />
                        </div>

                        <div className="flex flex-col">
                            <p className="text-sm sm:text-lg font-medium text-gray-400">
                                View Recent Orders
                            </p>

                            <p className="text-xs font-semibold text-gray-900">
                                Check Latest Orders
                            </p>
                        </div>
                    </div>

                    <div
                        className="border-purple-400 border bg-[#FAF5FF] p-6 flex gap-4 rounded-xl cursor-pointer transition hover:shadow-md hover:scale-[1.01]"
                        onClick={() => navigate('/users')}
                    >
                        <div className="h-12 w-12 flex justify-center items-center bg-[#F3E8FF] rounded-xl">
                            <ImUsers className="text-[#9810FA] text-xl" />
                        </div>

                        <div className="flex flex-col">
                            <p className="text-sm sm:text-lg font-medium text-gray-400">
                                Manage Users
                            </p>

                            <p className="text-xs font-semibold text-gray-900">
                                Update user Information
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-white p-4 sm:p-6 rounded-2xl border border-gray-300 mt-6 space-y-4 max-h-[42vh] overflow-auto thin-scroll">
                <h2 className="text-lg sm:text-xl font-semibold text-gray-900">
                    Recent Orders
                </h2>

                {
                    [1, 2, 3, 4, 5, 6, 7, 8].map((item: any) => (
                        <div key={item} className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border border-gray-200 p-4 rounded-xl">
                            <div className="flex items-center gap-3">
                                <div className="h-10 w-10 rounded-xl bg-gray-100 flex items-center justify-center font-semibold">
                                    A
                                </div>

                                <div>
                                    <p className="font-semibold text-gray-900">
                                        Admin
                                    </p>

                                    <p className="text-sm text-gray-500">
                                        admin@admin.com
                                    </p>
                                </div>
                            </div>

                            <div className="flex justify-between sm:flex-col">
                                <p className="font-semibold text-gray-700 text-end text-lg">
                                    ₹{468 + Math.floor(Math.random() * 999)}
                                </p>

                                <p className="text-sm text-gray-400 font-medium">
                                    {randomDateStr()}
                                </p>
                            </div>

                            <div className="flex justify-between sm:justify-start items-center gap-4">
                                <span className="px-4 py-1 rounded-xl bg-green-100 text-green-800 text-sm font-medium">
                                    Created
                                </span>

                                <FaEye className="text-gray-500 cursor-pointer" onClick={() => setISopen(true)} />

                                <ViewMore
                                    isOpen={isOpen}
                                    onClose={() => setISopen(false)}
                                />
                            </div>
                        </div>
                    ))
                }

            </div>
        </div>
    )
}

export default Overview