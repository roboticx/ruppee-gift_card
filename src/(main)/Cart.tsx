

const Cart = () => {

    return (
        <div className="w-full bg-white">
            {/* Gift Banner */}
            <div className="mx-6 mt-6 rounded-md overflow-hidden border">
                <div className="relative h-17.5 w-full">
                    {/* Placeholder image – you will replace */}
                    <img
                        src="/images/bg-hearts-banner.jpg"
                        alt="gift banner"
                        className="absolute inset-0 h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-pink-200/40" />
                    <div className="relative flex items-center gap-3 px-4 h-full">
                        <input
                            type="checkbox"
                            checked
                            readOnly
                            className="h-4 w-4 rounded border-gray-300 accent-teal-600"
                        />
                        <span className="text-sm text-gray-800">This is Gift</span>
                        <div className="ml-auto text-gray-600 text-sm">ⓘ</div>
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
                    {/* Card 1 */}
                    <div className="w-70 rounded-lg border shadow-sm p-4">
                        <div className="flex justify-between text-sm font-medium">
                            <span>2 Card worth</span>
                            <span className="text-orange-500">1000 ₹</span>
                        </div>

                        <div className="mt-2 text-sm text-gray-700">934 ₹</div>

                        <div className="mt-4 flex items-center justify-between">
                            <button className="rounded-md bg-teal-700 px-5 py-1.5 text-xs text-white">
                                Pay
                            </button>
                            <span className="text-orange-500 font-semibold">₹GIFT</span>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="w-70 rounded-lg border shadow-sm p-4 relative">
                        <div className="absolute right-3 top-3 flex gap-2">
                            <button className="h-6 w-6 rounded-full bg-teal-700 text-white text-sm flex items-center justify-center">
                                +
                            </button>
                            <button className="h-6 w-6 rounded-full bg-gray-300 text-gray-700 text-sm flex items-center justify-center">
                                −
                            </button>
                        </div>

                        <div className="text-sm font-medium text-center">
                            <div className="text-base">500 ₹</div>
                            <div className="mt-1">1 Card worth</div>
                            <div className="mt-1 text-gray-700">2 Card</div>
                        </div>

                        <div className="mt-6 flex justify-between items-center">
                            <span className="text-xs text-gray-500">blinkit</span>
                            <span className="text-orange-500 font-semibold">₹GIFT</span>
                        </div>
                    </div>
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