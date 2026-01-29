import { useState } from "react";
import { AiOutlineCloudSync } from "react-icons/ai";
import { FaRegEye } from "react-icons/fa";
import { IoTrash } from "react-icons/io5";
import { PiNotePencilLight } from "react-icons/pi";

const ProductsList = () => {
  const [isViewOpen, setIsViewOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <div className="w-full px-4 sm:px-6 py-16">
        {/* HEADER */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-10">
          <div>
            <h1 className="font-semibold text-lg sm:text-xl">Products</h1>
            <p className="text-xs sm:text-sm text-gray-500">
              All your listed Products
            </p>
          </div>
          <button className="bg-red-700 px-6 sm:px-10 py-2 flex items-center gap-3 rounded-lg text-white font-semibold">
            <AiOutlineCloudSync size={26} />
            Sync From WooHoo
          </button>
        </div>

        {/* FILTER */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-10">
          <input
            type="text"
            placeholder="Search products"
            className="w-full sm:w-96 border border-gray-300 rounded-md py-2 px-4 text-sm"
          />
          <select className="w-full sm:w-44 border border-gray-300 rounded-md py-2 px-3 text-sm">
            <option>10</option>
            <option>20</option>
            <option>50</option>
          </select>
        </div>

        {/* TABLE */}
        <div className="bg-white border border-gray-300 rounded-xl overflow-x-auto">
          <table className="min-w-[900px] w-full">
            <thead>
              <tr className="bg-gray-50 text-sm font-semibold text-gray-600">
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
                <tr key={index} className="border-t hover:bg-gray-50">
                  <td className="px-4 py-4">AZA Fashions E-Gift Voucher</td>
                  <td className="px-4 py-4">330</td>
                  <td className="px-4 py-4">₹5000 - 10000</td>
                  <td className="px-4 py-4">10%</td>
                  <td className="px-4 py-4">₹4500 - 9000</td>
                  <td className="px-4 py-4">
                    <span className="px-3 py-1 text-xs rounded-full bg-red-100 text-red-600">
                      Active
                    </span>
                  </td>
                  <td className="px-4 py-4">1/11/2026</td>
                  <td className="px-4 py-4">
                    <div className="flex justify-center gap-4">
                      <FaRegEye
                        onClick={() => setIsViewOpen(true)}
                        className="cursor-pointer text-blue-500 text-lg"
                      />
                      <PiNotePencilLight
                        onClick={() => setIsEditOpen(true)}
                        className="cursor-pointer text-gray-600 text-lg"
                      />
                      <IoTrash className="cursor-pointer text-red-500 text-lg" />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* ================= VIEW MODAL ================= */}
      {isViewOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="bg-white max-w-3xl w-full rounded-xl p-6">
            <h2 className="text-lg font-semibold mb-4">Product Details</h2>

            <div className="flex justify-center mb-4">
              <div className="w-40 h-40 bg-[#243545] text-white flex items-center justify-center text-6xl rounded-lg">
                Ajio
              </div>
            </div>

            {[
              ["Name", "Amit Singh Manral"],
              ["SKU", "578678478686467"],
              ["Category", "330"],
              ["Price", "500 - 5000"],
              ["Discount", "76%"],
              ["Status", "Active"],
              ["Updated", new Date().toLocaleString()],
            ].map(([k, v]) => (
              <div key={k} className="flex gap-2 text-sm">
                <p className="font-bold text-[#243545]">{k}:</p>
                <p className="text-gray-500 font-semibold">{v}</p>
              </div>
            ))}

            <div className="flex justify-end mt-6">
              <button
                onClick={() => setIsViewOpen(false)}
                className="px-5 py-2 bg-gray-800 text-white rounded-md"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
      {isEditOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="bg-[#E4F4FF] max-w-2xl w-full rounded-xl p-6">
            <h2 className="text-lg font-semibold mb-4">Edit Product</h2>
            <div className="flex flex-col items-center justify-center">
              <div className="w-32 rounded-2xl text-white h-32 border bg-[#243545] uppercase text-[50px] flex justify-center items-center">Ajio</div>
              <p className="text-gray-400 text-sm font-bold ">Ajio E-gift Card</p>
            </div>
            <div>
              <h1 className="text-gray-400 mb-2">Products Image</h1>
              <div className="w-full border border-gray-300 p-3 border-dashed rounded-lg">
                <input type="file" className="border p-3 w-full border-gray-300 rounded-lg" />
                <p className="text-xs font-semibold text-gray-400">Upload image to cloudinary (JPEG,PNG,WEBP)</p>
              </div>
            </div>
            <div className="flex items-center gap-3 my-2 w-full">
              <hr className="flex-1 border-gray-300" />
              <div className="bg-white px-2 text-xs text-gray-500 whitespace-nowrap">
                OR USE URL
              </div>
              <hr className="flex-1 border-gray-300" />
            </div>
            <div className="w-full">
              <input type="text" className="w-full p-2 border rounded-lg outline-0 border-gray-400" placeholder="enter url" />
              <p className="text-xs font-semibold text-gray-400">Leave empty to use default woohoo image</p>
            </div>
            <div className="w-full flex gap-3 mt-4 border border-gray-300 p-2 rounded-lg">
              <div className="w-20 h-10 bg-white border border-gray-300"></div>
              <input type="text" className="w-full border border-gray-300 rounded-lg py-2 px-3" placeholder="enter color here" />
            </div>
            <p className="text-xs font-semibold text-gray-400">Leave empty to use default woohoo image</p>
            <div className="w-full flex flex-col mt-4">
              <h1 className="text-gray-400 mb-2">Discount%</h1>
              <input type="text" className="w-full border border-gray-300 outline-0 rounded-lg py-2 px-3" placeholder="enter color here" />
            </div>
            <div className="flex justify-end gap-3 mt-6">
              <button
                onClick={() => setIsEditOpen(false)}
                className="px-4 py-2 border rounded-md">
                Cancel
              </button>
              <button className="px-4 py-2 bg-red-700 text-white rounded-md">
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductsList;
