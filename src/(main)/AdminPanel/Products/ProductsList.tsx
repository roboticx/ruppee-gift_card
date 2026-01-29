import { AiOutlineCloudSync } from "react-icons/ai";
import { FaRegEye } from "react-icons/fa";
import { IoTrash } from "react-icons/io5";
import { PiNotePencilLight } from "react-icons/pi";

const ProductsList = () => {
  return (
    <div className="bg-blue-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6  py-16">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-10">
          <div>
            <h1 className="font-semibold text-lg sm:text-xl">
              Products
            </h1>
            <p className="text-xs sm:text-sm text-gray-500">
              All your listed Products
            </p>
          </div>

          <button className="bg-red-700 px-6 sm:px-10 py-2 flex items-center gap-3 rounded-lg text-white font-semibold justify-center">
            <AiOutlineCloudSync size={26} />
            Sync From WooHoo
          </button>
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-10">
          <input
            type="text"
            placeholder="Search products"
            className="w-full sm:w-96 border border-gray-300 rounded-md outline-0 py-2 px-4 text-sm"
          />

          <select className="w-full sm:w-44 border border-gray-300 rounded-md py-2 px-3 text-sm outline-0">
            <option>10</option>
            <option>20</option>
            <option>50</option>
          </select>
        </div>

        {/* Table */}
        <div className="bg-white border border-gray-300 rounded-xl overflow-x-auto">
          <table className="min-w-[900px] w-full border-collapse">
            <thead>
              <tr className="bg-gray-50 text-left text-sm font-semibold text-gray-600">
                <th className="px-4 py-3">Product</th>
                <th className="px-4 py-3">Category</th>
                <th className="px-4 py-3">Price</th>
                <th className="px-4 py-3">Discount</th>
                <th className="px-4 py-3">Discounted Price</th>
                <th className="px-4 py-3">Status</th>
                <th className="px-4 py-3">Last Updated</th>
                <th className="px-4 py-3 text-center">Actions</th>
              </tr>
            </thead>

            <tbody className="text-sm text-gray-800">
              {[1, 2].map((_, index) => (
                <tr
                  key={index}
                  className="border-t hover:bg-gray-50 transition"
                >
                  <td className="px-4 py-4">
                    AZA Fashions E-Gift Voucher
                  </td>
                  <td className="px-4 py-4">330</td>
                  <td className="px-4 py-4">
                    ₹5000 - 10000
                  </td>
                  <td className="px-4 py-4">10%</td>
                  <td className="px-4 py-4">
                    ₹4500.00 - 9000.00
                  </td>
                  <td className="px-4 py-4">
                    <span className="px-3 py-1 text-xs rounded-full bg-red-100 text-red-600 font-medium">
                      Active
                    </span>
                  </td>
                  <td className="px-4 py-4">
                    1/11/2026
                  </td>
                  <td className="px-4 py-4">
                    <div className="flex justify-center items-center gap-4">
                      <FaRegEye className="cursor-pointer text-blue-500 text-lg hover:scale-110 transition" />
                      <PiNotePencilLight className="cursor-pointer text-gray-500 text-lg hover:scale-110 transition" />
                      <IoTrash className="cursor-pointer text-red-500 text-lg hover:scale-110 transition" />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
};

export default ProductsList;
