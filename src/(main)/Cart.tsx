import { IoMdInformationCircleOutline } from "react-icons/io";
import Card from "../Components/Card";


const Cart = () => {

    return (
        <div className="w-full bg-white">
            {/* Gift Banner */}
            <div className="mx-6 mt-6 rounded-md overflow-hidden">
                <div className="relative h-25 w-full">
                    <img
                        src="https://t4.ftcdn.net/jpg/07/09/45/79/360_F_709457976_DHu3l2RML466hBI1ZZ5SPivSJOMJcp3V.jpg"
                        alt="gift banner"
                        className="absolute inset-0 h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-pink-100/40" />

                    <div className="relative flex items-center gap-3 px-4 h-full">
                        <input
                            type="checkbox"
                            className="h-5 w-5 rounded border-[#2B6777] accent-[#2B6777] "
                        />

                        <span className="text-md font-medium text-gray-800">
                            This is Gift
                        </span>

                        <div className="ml-auto text-[#2B6777] text-[31px]">
                            <IoMdInformationCircleOutline />
                        </div>
                    </div>
                </div>
            </div>

            {/* Form */}
            <div className="mx-6 mt-6 space-y-5">
                <div>
                    <label className="block text-sm text-gray-700 mb-1">
                        Recipient Name
                    </label>
                    <input
                        placeholder="Recipient Name"
                        className="w-full rounded-md border border-blue-300 px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-400"
                    />
                </div>

                <div>
                    <label className="block text-sm text-gray-700 mb-1">
                        Recipient Email
                    </label>
                    <input
                        placeholder="Recipient Email"
                        className="w-full rounded-md border border-blue-300 px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-400"
                    />
                </div>

                <div>
                    <label className="block text-sm text-gray-700 mb-1">
                        Recipient Mobile Number
                    </label>
                    <input
                        placeholder="Recipient Mobile Number"
                        className="w-full rounded-md border border-blue-300 px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-400"
                    />
                </div>

                <div>
                    <label className="block text-sm text-gray-700 mb-1">
                        Message
                    </label>
                    <input
                        placeholder="Enter Message"
                        className="w-full rounded-md border border-blue-300 px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-400"
                    />
                </div>

                {/* Buttons */}
                <div className="flex justify-end gap-3 pt-2">
                    <button className="px-6 py-2 rounded-md border border-teal-400 text-sm text-gray-600">
                        Cancel
                    </button>
                    <button className="px-6 py-2 rounded-md bg-teal-700 text-sm text-white">
                        Save
                    </button>
                </div>
            </div>

            {/* Cart */}
            <div className="mx-6 mt-8">
                <div className="flex items-center justify-between mb-4">
                    <h2 className="text-base font-semibold text-gray-800">
                        In Your Cart
                    </h2>
                    <button className="rounded-md bg-teal-700 px-4 py-1.5 text-xs text-white">
                        Add Cart
                    </button>
                </div>

                <div className="flex gap-6">
                    <Card />
                    <Card />
                </div>
            </div>

            {/* Footer */}
            <div className="mt-10 bg-gray-100 py-4 px-6 flex justify-between items-center text-sm text-gray-700">
                <div className="flex items-center gap-2">
                    <span>🛡️</span>
                    <span>Safe and Secure Payments</span>
                </div>
                <div className="flex items-center gap-2">
                    <span>📞</span>
                    <span>
                        Need Help? <span className="text-teal-700">Contact Us</span>
                    </span>
                </div>
            </div>
        </div>
    );
}

export default Cart