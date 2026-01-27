import { IoMdInformationCircleOutline } from "react-icons/io";
import CardList from "../Components/Card/CardList";


const Cart = () => {

    const cardData = [
        {
            amount: 500,
            id: '3',
            imgUrl: '/images/cards/rs.png',
            cardCount: 2,
            storeImg: "/images/cards/bklt.jpg",
        },
        {
            amount: 500,
            id: '4',
            imgUrl: '/images/cards/rs.png',
            cardCount: 2,
            storeImg: "/images/cards/bklt.jpg",
        },
        {
            amount: 500,
            id: '5',
            imgUrl: '/images/cards/rs.png',
            cardCount: 2,
            storeImg: "/images/cards/bklt.jpg",
        },
    ];

    return (
        <div className="w-full bg-white px-3">
            {/* Gift Banner */}
            <div className="mx-6 mt-6 rounded-md overflow-hidden">
                <div className="relative h-25 w-full">
                    <img
                        src="https://t4.ftcdn.net/jpg/07/09/45/79/360_F_709457976_DHu3l2RML466hBI1ZZ5SPivSJOMJcp3V.jpg"
                        alt="gift banner"
                        className="absolute inset-0 h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-pink-100/50" />

                    <div className="relative flex items-center gap-3 px-4 h-full">
                        <input
                            type="checkbox"
                            className="h-8 w-8 rounded border-[#2B6777] accent-[#2B6777] "
                        />

                        <span className="text-2xl font-semibold text-gray-800">
                            This is Gift
                        </span>

                        <div className="ml-auto text-[#2B6777]">
                            <IoMdInformationCircleOutline size={26} />
                        </div>

                    </div>
                </div>
            </div>

            {/* Form */}
            <div className="mx-6 mt-6 space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 items-center">
                    <div>
                        <label className="block font-inter text-[20px] font-normal leading-[150%] tracking-normal text-gray-700 mb-1">
                            Recipient Name
                        </label>

                        <input
                            placeholder="Enter Recipient Name"
                            className="
                            w-full h-12
                            rounded-lg
                            border border-[#2B6777]
                            font-inter
                            text-[20px]
                            font-normal
                            leading-[150%]
                            tracking-normal
                            px-4
                            text-gray-800
                            placeholder:text-gray-400
                            focus:outline-none
                            focus:ring-1
                            focus:ring-[#2B6777]
                        "
                        />
                    </div>

                    <div>
                        <label className="block font-inter text-[20px] font-normal leading-[150%] tracking-normal text-gray-700 mb-1">
                            Recipient Email
                        </label>

                        <input
                            placeholder="Enter Recipient Email"
                            className="
                            w-full h-12
                            rounded-lg
                            border border-[#2B6777]
                            font-inter
                            text-[20px]
                            font-normal
                            leading-[150%]
                            tracking-normal
                            px-4
                            text-gray-800
                            placeholder:text-gray-400
                            focus:outline-none
                            focus:ring-1
                            focus:ring-[#2B6777]
                        "
                        />
                    </div>

                    <div>
                        <label className="block font-inter text-[20px] font-normal leading-[150%] tracking-normal text-gray-700 mb-1">
                            Recipient Mobile Number
                        </label>

                        <input
                            placeholder="Enter Recipient Mobile Number"
                            className="
                            w-full h-12
                            rounded-lg
                            border border-[#2B6777]
                            font-inter
                            text-[20px]
                            font-normal
                            leading-[150%]
                            tracking-normal
                            px-4
                            text-gray-800
                            placeholder:text-gray-400
                            focus:outline-none
                            focus:ring-1
                            focus:ring-[#2B6777]
                        "
                        />
                    </div>
                </div>


                <div>
                    <label className="block font-inter text-[20px] font-normal leading-[150%] tracking-normal text-gray-700 mb-1">
                        Message
                    </label>

                    <textarea
                        placeholder="Enter Message"
                        className="w-full 
                            px-4 py-3
                            rounded-lg
                            border border-[#2B6777]
                            font-inter
                            font-normal
                            text-[20px]
                            leading-[150%]
                            tracking-normal
                            text-gray-800
                            placeholder:text-gray-400
                            focus:outline-none
                            focus:ring-1
                            focus:ring-[#2B6777]"
                        rows={3}
                    />

                </div>

                {/* Buttons */}
                <div className="flex justify-end gap-3 pt-2">
                    <button className="w-27.75 h-9
                        rounded-lg
                        border border-[#C8CBCC]
                        bg-transparent
                        font-sen
                        text-[14px]
                        font-normal
                        leading-[120%]
                        tracking-normal
                        text-[#8D8C8C]
                        flex items-center justify-center
                        text-center
                        shadow-[0px_0px_6px_1px_#00EAFF40]
                        "

                    >
                        Cancel
                    </button>

                    <button className="w-[87.38px] h-9
                        rounded-lg
                        bg-[#2B6777]
                        font-sen
                        text-[14px]
                        font-normal
                        leading-[120%]
                        tracking-normal
                        text-white
                        flex items-center justify-center
                        text-center
                        shadow-[0px_0px_6px_1px_#00EAFF40]
                        "
                    >
                        Save
                    </button>

                </div>
            </div>

            {/* Cart */}
            <div className="mx-6 mt-8">
                <div className="flex items-center justify-between mb-4">
                    <h2 className="font-sen text-[24px] font-semibold leading-[120%] tracking-normal align-middle text-gray-800">
                        In Your Cart
                    </h2>
                </div>

                <CardList cardsData={cardData} />

            </div>

            {/* Footer */}
            <div className="w-full my-10 h-auto sm:h-20.75 rounded-lg bg-[#2B67770F] flex flex-col sm:flex-row">
                {/* Safe and Secure Payments */}
                <div className="w-full sm:w-1/2 flex items-center gap-3 px-4 py-3 sm:px-6 sm:py-0">
                    <img
                        src="/icons/vir.svg"
                        alt="Safe and Secure Payments"
                        className="w-8 h-9 sm:w-[30.75px] sm:h-[37.58px]"
                    />
                    <span className="font-inter font-normal text-base sm:text-[20px] leading-[150%] tracking-[0%]">
                        Safe and Secure Payments
                    </span>
                </div>

                {/* Need Help? Contact Us */}
                <div className="w-full sm:w-1/2 flex items-center gap-3 px-4 py-3 sm:px-6 sm:py-0">
                    <img
                        src="/icons/calll.svg"
                        alt="Contact Us"
                        className="w-8 h-8 sm:w-[30.47px] sm:h-[30.47px]"
                    />
                    <span className="font-inter font-normal text-base sm:text-[20px] leading-[150%] tracking-[0%]">
                        Need Help? <span className="text-[#2B6777]">Contact Us</span>
                    </span>
                </div>
            </div>

        </div>
    );
}

export default Cart