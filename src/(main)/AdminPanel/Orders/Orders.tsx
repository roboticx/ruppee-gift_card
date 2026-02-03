import { useEffect, useState } from "react";
import { FcMoneyTransfer, FcPackage } from "react-icons/fc";
import { FETCH } from "../../../utils/apiutils";

const Orders = () => {

    const statusFilter = [
        {
            name: 'All Status',
            value: 'all'
        },
        {
            name: 'created',
            value: 'created'
        },
        {
            name: 'Payment Done',
            value: 'paid'
        },
        {
            name: 'Processing',
            value: 'processing'
        },
        {
            name: 'Confirmed',
            value: 'confirm'
        },
        {
            name: 'Completed',
            value: 'completed'
        },
        {
            name: 'Failed',
            value: 'failed'
        },
    ];

    const [orders, setOrders] = useState<any>([]);
    const [status, setStatus] = useState('all');

    const getOrderList = async () => {
        setOrders([]);
        const params = new URLSearchParams();

        if (status !== 'all') params.append("status", status);
        // if (currentPage) params.append("page", String(currentPage));
        // if (rowsPerPage) params.append("limit", String(rowsPerPage));

        const url = `admin/order?${params.toString()}`;

        try {
            const res = await FETCH({
                url: url,
                toast: true,
                showSuccess: false,
                showError: true
            });

            setOrders(res?.data);
        }
        catch (err: any) { }
    }

    useEffect(() => {
        getOrderList();
    }, [status]);

    return (
        <div className="w-full p-6">

            {/* HEADER */}
            <div className="flex flex-col gap-1 mb-6">
                <h1 className="font-bold text-3xl">
                    Orders
                </h1>

                <p className="font-semibold text-md text-gray-500 flex items-center gap-2">
                    <FcPackage />
                    Track your all order here
                </p>
            </div>

            <div className="flex flex-col items-center sm:flex-row gap-8 mb-10 px-7">
                {/* Search */}
                <div className="relative w-full">
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
                    className="w-full sm:w-64 
                            border border-gray-300 rounded-lg 
                            py-3 px-4 text-sm 
                            outline-none bg-transparent text-gray-700
                            focus:ring-2 focus:ring-gray-200 focus:border-gray-400"
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                >
                    {
                        statusFilter.map((status: any) => (
                            <option key={status?.value}
                                value={status.value}
                                className="capitalize"
                            >
                                {status.name}
                            </option>
                        ))
                    }
                </select>
            </div>

            <div className="bg-white border border-gray-300 rounded-xl overflow-x-auto">
                <table className="min-w-225 w-full border-collapse">
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
                        {
                            orders.map((order: any) => (
                                <tr
                                    key={order?._id}
                                    className="border-t border-gray-300 hover:bg-gray-50 transition"
                                >
                                    <td>
                                        <span className="font-semibold text-gray-400 uppercase">
                                            {order?._id}
                                        </span>
                                    </td>

                                    <td className="px-4 py-4 font-semibold text-gray-400">
                                        {new Date(order?.createdAt).toLocaleString()}
                                    </td>

                                    <td className="px-4 py-4 font-semibold text-gray-400">
                                        <div className="flex flex-col">
                                            <span className="font-semibold text-md  text-gray-500">
                                                {order?.user?.userName}
                                            </span>

                                            <span className="font-semibold text-xs  text-gray-400">
                                                {order?.user?.email?.value}
                                            </span>
                                        </div>
                                    </td>

                                    <td>
                                        {order?.items?.length || 0}
                                    </td>

                                    <td>
                                        <span className="bg-gray-100 px-3 py-1 rounded-full font-medium uppercase">
                                            {order?.status}
                                        </span>
                                    </td>

                                    <td className="px-4 py-4 relative">
                                        <div className="flex justify-center items-center">
                                            <button
                                                onClick={() => {
                                                    console.log("Confirm payment clicked");
                                                }}
                                                className="p-2 rounded-md text-blue-600 border border-gray-100"
                                            >
                                                <FcMoneyTransfer size={22} />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default Orders