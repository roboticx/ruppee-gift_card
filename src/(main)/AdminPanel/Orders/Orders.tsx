
import { useState } from "react"
import { BsThreeDots } from "react-icons/bs"
const Orders = () => {
    const [openMenuIndex, setOpenMenuIndex] = useState<number | null>(null)

    return (
        <div className="min-h-screen">
            <div className="w-full px-4 sm:px-6 py-16">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-10">
                    <div>
                        <h1 className="font-bold text-3xl">
                            Orders
                        </h1>
                         <p className="font-semibold text-md text-gray-500">
                            Track your all order here
                        </p>
                    </div>
                 
                </div>
          <div className="flex flex-col sm:flex-row gap-4 mb-10">
  {/* Search */}
  <div className="relative w-full sm:w-[450px]">
    <input
      type="text"
      placeholder="Search by name, email, or phone"
      className="w-full border border-gray-300 bg-tr rounded-lg py-3 pl-11 pr-4 text-sm 
                 outline-none focus:ring-2 focus:ring-gray-200 focus:border-gray-400"
    />
    <svg
      className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
      width="18"
      height="18"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        d="M21 21l-4.35-4.35m1.85-5.65a7.5 7.5 0 11-15 0 7.5 7.5 0 0115 0z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  </div>

  {/* Status Filter */}
  <select
    className="w-full sm:w-64 border border-gray-300 rounded-lg py-3 px-4 text-sm 
               outline-none bg-transparent text-gray-700
               focus:ring-2 focus:ring-gray-200 focus:border-gray-400"
  >
    <option value="">All Status</option>
    <option value="created">Created</option>
    <option value="paid">Payment Done</option>
    <option value="processing">Processing</option>
    <option value="confirmed">Confirmed</option>
    <option value="completed">Completed</option>
    <option value="failed">Failed</option>
  </select>
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