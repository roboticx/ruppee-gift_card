import { useEffect, useState } from "react";
import { AiOutlineCloudSync } from "react-icons/ai";
import { FaRegEye } from "react-icons/fa";
import { IoSearchSharp } from "react-icons/io5";
import { PiNotePencilLight } from "react-icons/pi";
import ViewProductModal from "./ViewProductModal";
import ProductEditModal from "./ProductEditModal";
import { FETCH, PUT } from "../../../utils/apiutils";

const ProductsList = () => {
    const [isViewOpen, setIsViewOpen] = useState(false);
    const [isEditOpen, setIsEditOpen] = useState(false);
    const [modalId, setModalId] = useState('');

    const [statusFilter, setStatusFilter] = useState('all');
    // const [currentPage, setCurrentPage] = useState(1);
    // const [rowsPerPage, setRowsPerPage] = useState(10);

    const [productList, setProductList] = useState<any>(null);

    useEffect(() => {
        getProductList();
    }, []);

    const getProductList = async () => {

        const params = new URLSearchParams();

        if (statusFilter == 'active') {
            params.append("isActive", 'true');
        }
        if (statusFilter == 'inactive') {
            params.append("isActive", 'false');
        }
        // if (currentPage) params.append("page", String(currentPage));
        // if (rowsPerPage) params.append("limit", String(rowsPerPage));

        const url = `admin/giftcards?${params.toString()}`;

        try {
            const response = await FETCH({
                url: url,
                toast: true,
                showSuccess: false,
                showError: true
            });

            setProductList(response.data);
        }
        catch (e: any) { }
    }

    const updateStatus = async (id: string, status: boolean) => {
        try {
            const res = await PUT({
                url: `admin/giftcards/${id}`,
                data: { isActive: status },
                toast: true
            });

            setProductList((prev: any) =>
                prev.map((item: any) =>
                    item._id === id
                        ? { ...item, isActive: res.data.isActive }
                        : item
                )
            );
        }
        catch (e: any) { }
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

                    <button
                        className="bg-red-600 px-4 sm:px-6 py-2 flex items-center gap-3 rounded-lg text-white font-semibold"
                        onClick={getProductList}
                    >
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

                    <select
                        value={statusFilter}
                        onChange={(e) => setStatusFilter(e.target.value)}
                        className="ml-auto w-full sm:w-44 border border-gray-300 rounded-md py-2 px-3 text-sm"
                    >
                        <option value={'all'}>
                            All
                        </option>
                        <option value={'active'}>
                            Active
                        </option>
                        <option value={'inactive'}>
                            InActive
                        </option>
                    </select>
                </div>

                {
                    productList &&
                    <div className="bg-white border border-gray-300 rounded-xl overflow-x-auto">
                        <table className="min-w-225 w-full">
                            <thead>
                                <tr className="bg-gray-100 text-sm font-semibold text-gray-600">
                                    <th className="px-4 py-3">
                                        Title
                                    </th>
                                    <th className="px-4 py-3">
                                        Category
                                    </th>
                                    <th className="px-4 py-3">
                                        Price
                                    </th>
                                    <th className="px-4 py-3">
                                        Discount
                                    </th>
                                    <th className="px-4 py-3">
                                        Discounted Price
                                    </th>
                                    <th className="px-4 py-3">
                                        Status
                                    </th>
                                    <th className="px-4 py-3">
                                        Last Updated
                                    </th>
                                    <th className="px-4 py-3 text-center">
                                        Actions
                                    </th>
                                </tr>
                            </thead>

                            <tbody className="text-sm text-gray-800">
                                {productList.map((item: any) => (
                                    <tr
                                        key={item._id}
                                        className="border-t hover:bg-gray-50 border-gray-300"
                                    >
                                        <td className="px-4 py-4">
                                            {item?.title}
                                        </td>
                                        <td className="px-4 py-4">
                                            {item?.category?.name}
                                        </td>
                                        <td className="px-4 py-4">
                                            ₹{item?.price}
                                        </td>
                                        <td className="px-4 py-4">
                                            {item.discount}%
                                        </td>
                                        <td className="px-4 py-4">
                                            ₹{item?.price - ((item?.price / 100) * item?.discount)}
                                        </td>

                                        <td className="px-4 py-4">
                                            <span
                                                className={`
                                                px-3 py-1 text-xs rounded-full cursor-pointer
                                                ${item.isActive
                                                        ? 'bg-green-100 text-green-600'
                                                        : 'bg-red-100 text-red-600'
                                                    }
                                              `}
                                                onClick={() => updateStatus(item._id, !item.isActive)}
                                            >
                                                {item.isActive ? 'Active' : 'InActive'}
                                            </span>
                                        </td>

                                        <td className="px-4 py-4 text-nowrap">
                                            {new Date(item.updatedAt).toLocaleString()}
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
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                }
            </div>

            {
                isViewOpen &&
                <ViewProductModal
                    isOpen={isViewOpen}
                    onClose={() => setIsViewOpen(false)}
                    productId={modalId}
                />
            }

            {
                isEditOpen &&
                <ProductEditModal
                    isOpen={isEditOpen}
                    onClose={() => {
                        setIsEditOpen(false)
                        getProductList();
                    }}
                    productId={modalId}
                />
            }
        </>
    )
}

export default ProductsList