import { useState } from "react";
import { AiOutlineCloudSync } from "react-icons/ai";
import { FaRegEye } from "react-icons/fa";
import { IoSearchSharp, IoTrash } from "react-icons/io5";
import { PiNotePencilLight } from "react-icons/pi";
import ViewProductModal from "./ViewProductModal";
import ProductEditModal from "./ProductEditModal";
import DeleteConfirmation from "../../../Components/models/DeleteConfirmation";

const ProductList = [
    {
        _id: "65f1a1b2c3d4e501",
        Product: "Wireless Mouse",
        Category: "Electronics",
        Price: 1200,
        Discount: 10,
        DiscountedPrice: 1080,
        Status: "Active",
        LastUpdated: "2026-01-25T10:22:14Z",
    },
    {
        _id: "65f1a1b2c3d4e502",
        Product: "Running Shoes",
        Category: "Footwear",
        Price: 3500,
        Discount: 20,
        DiscountedPrice: 2800,
        Status: "Active",
        LastUpdated: "2026-01-20T08:10:45Z",
    },
    {
        _id: "65f1a1b2c3d4e503",
        Product: "Bluetooth Speaker",
        Category: "Electronics",
        Price: 2200,
        Discount: 15,
        DiscountedPrice: 1870,
        Status: "Inactive",
        LastUpdated: "2026-01-18T14:32:01Z",
    },
    {
        _id: "65f1a1b2c3d4e504",
        Product: "Office Chair",
        Category: "Furniture",
        Price: 7500,
        Discount: 25,
        DiscountedPrice: 5625,
        Status: "Active",
        LastUpdated: "2026-01-15T11:05:19Z",
    },
    {
        _id: "65f1a1b2c3d4e505",
        Product: "Smart Watch",
        Category: "Electronics",
        Price: 5000,
        Discount: 18,
        DiscountedPrice: 4100,
        Status: "Active",
        LastUpdated: "2026-01-12T16:44:09Z",
    },
    {
        _id: "65f1a1b2c3d4e506",
        Product: "Denim Jacket",
        Category: "Clothing",
        Price: 2800,
        Discount: 12,
        DiscountedPrice: 2464,
        Status: "Inactive",
        LastUpdated: "2026-01-10T09:12:33Z",
    },
    {
        _id: "65f1a1b2c3d4e507",
        Product: "Gaming Keyboard",
        Category: "Electronics",
        Price: 3200,
        Discount: 22,
        DiscountedPrice: 2496,
        Status: "Active",
        LastUpdated: "2026-01-08T13:55:27Z",
    },
    {
        _id: "65f1a1b2c3d4e508",
        Product: "LED Desk Lamp",
        Category: "Home Decor",
        Price: 1500,
        Discount: 5,
        DiscountedPrice: 1425,
        Status: "Active",
        LastUpdated: "2026-01-05T18:21:11Z",
    }
];

const ProductsList = () => {
    const [isViewOpen, setIsViewOpen] = useState(false);
    const [isEditOpen, setIsEditOpen] = useState(false);
    const [isDeleteConfirm, setDeleteConfirm] = useState(false);
    const [modalId, setModalId] = useState('');

    const deleteProduct = async () => {
        setDeleteConfirm(false);
        console.log('item Deleted : ', modalId);
    }

    return (
        <>
            <div className="w-full p-4 sm:p-6">

                {/* HEADER */}
                <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between mb-6">
                    <div>
                        <h1 className="font-bold text-3xl">
                            Products
                        </h1>

                        <p className="font-semibold text-md text-gray-500">
                            All your listed Products
                        </p>
                    </div>

                    <button className="bg-red-600 px-4 sm:px-6 py-2 flex items-center gap-3 rounded-lg text-white font-semibold">
                        <AiOutlineCloudSync size={26} />
                        Sync
                    </button>
                </div>

                {/* FILTER */}
                <div className="grid sm:grid-cols-2 grid-cols-1 items-center sm:justify-between gap-4 mb-10">
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Search products"
                            className="w-full border border-gray-300 rounded-md py-2.5 px-4 pl-8 text-sm outline-none"
                        />

                        <span className="absolute flex items-center justify-center top-2 left-2 p-1">
                            <IoSearchSharp fill="#67696b" />
                        </span>
                    </div>

                    <select className="ml-auto w-full sm:w-44 border border-gray-300 rounded-md py-2 px-3 text-sm">
                        <option>All</option>
                        <option>Active</option>
                        <option>InActive</option>
                    </select>
                </div>

                <div className="bg-white border border-gray-300 rounded-xl overflow-x-auto">
                    <table className="min-w-225 w-full">
                        <thead>
                            <tr className="bg-gray-100 text-sm font-semibold text-gray-600">
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
                            {ProductList.map((item: any) => (
                                <tr key={item._id} className="border-t hover:bg-gray-50 border-gray-300">
                                    <td className="px-4 py-4">
                                        {item?.Product}
                                    </td>
                                    <td className="px-4 py-4">
                                        {item?.Category}
                                    </td>
                                    <td className="px-4 py-4">
                                        ₹{item?.Price}
                                    </td>
                                    <td className="px-4 py-4">
                                        {item.Discount}%
                                    </td>
                                    <td className="px-4 py-4">
                                        ₹{item?.DiscountedPrice}
                                    </td>

                                    <td className="px-4 py-4">
                                        <span
                                            className={`
                                                px-3 py-1 text-xs rounded-full 
                                                ${item.Status === 'Active'
                                                    ? 'bg-green-100 text-green-600'
                                                    : 'bg-red-100 text-red-600'
                                                }
                                              `}
                                        >
                                            {item.Status}
                                        </span>
                                    </td>

                                    <td className="px-4 py-4 text-nowrap">
                                        {new Date(item.LastUpdated).toLocaleString()}
                                    </td>

                                    <td className="px-4 py-4">
                                        <div className="flex justify-center gap-4">
                                            <FaRegEye
                                                onClick={() => {
                                                    setIsViewOpen(true);
                                                    setModalId(item._id);
                                                }}
                                                className="cursor-pointer text-blue-500 text-lg"
                                            />

                                            <PiNotePencilLight
                                                onClick={() => {
                                                    setIsEditOpen(true);
                                                    setModalId(item._id);
                                                }}
                                                className="cursor-pointer text-gray-600 text-lg"
                                            />

                                            <IoTrash
                                                onClick={() => {
                                                    setDeleteConfirm(true);
                                                    setModalId(item._id);
                                                }}
                                                className="cursor-pointer text-red-500 text-lg"
                                            />
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

            </div>

            <ViewProductModal
                isOpen={isViewOpen}
                onClose={() => setIsViewOpen(false)}
                productId={modalId}
            />

            <ProductEditModal
                isOpen={isEditOpen}
                onClose={() => setIsEditOpen(false)}
                productId={modalId}
            />

            <DeleteConfirmation
                isOpen={isDeleteConfirm}
                onClose={() => setDeleteConfirm(false)}
                onDelete={deleteProduct}
            />
        </>
    )
}

export default ProductsList