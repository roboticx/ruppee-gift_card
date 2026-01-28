import { IoWarningOutline } from "react-icons/io5";
import { RxCrossCircled } from "react-icons/rx";
import { FaGifts } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa6";
const Failed = () => {
    return (
        <div className='flex justify-center py-5'>
            <div className=' w-full'>
                <div className="flex justify-center px-3 overflow-hidden  ">
                    <div
                        className="w-full max-w-[773px] border-2 border-[#c9c8c8]/50 rounded-xl shadow-lg  mb-5 overflow-hidden relative flex">
                        <div className="w-full h-12 sm:h-16 flex items-center px-3 sm:px-4">
                            <p className="font-sans font-medium text-[14px] sm:text-[18px] leading-[100%] break-all">
                                Txn ID : 94545126545655
                            </p>
                        </div>
                        <div
                            className="w-[140px] sm:w-[215px] h-72  absolute top-1/2 rotate-[-40deg] -translate-y-1/2 -right-5 shadow-black shadow-xl flex justify-center items-center gap-1 sm:gap-2
                            bg-[#D22E2D] ">
                            <span className="font-sans font-semibold text-white text-[13px] rotate-[40deg] flex items-center gap-2 justify-center sm:text-[16px] leading-[100%]">
                                <IoWarningOutline size={22} />
                                Failed
                            </span>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center px-3 sm:px-4 mb-7">
                    <div className="w-full max-w-md flex flex-col items-center text-center gap-2">
                        {/* Icon */}
                        <RxCrossCircled
                            size={28}
                            className="text-[#D22E2D] sm:w-8 sm:h-8"
                        />
                        {/* Content */}
                        <div className="flex flex-col items-center gap-1">
                            <p className="font-sans font-semibold text-[#D22E2D] text-[18px] sm:text-[28px] leading-tight">
                                Payment Failed
                            </p>
                            {/* Amount */}
                            <div className="flex items-center gap-1">
                                <p className="font-sans font-semibold text-[16px] sm:text-[18px]">
                                    1002.3
                                </p>
                                <img
                                    src="/images/r.png"
                                    alt=""
                                    className="h-3 sm:h-4"
                                />
                            </div>
                            <p className="font-sans font-normal text-[13px] sm:text-[16px] text-gray-600">
                                Transaction Declined
                            </p>
                        </div>
                    </div>
                </div>
                <div className='p-5 bg-[#FBFCFC] rounded-lg shadow-sm'>
                    <div className='flex gap-3 mb-5 items-center'>
                        <img src="/images/cards/bklt.jpg" alt="" className='h-12 w-12 rounded-lg object-cover' />
                        <p className="font-sans font-medium text-[16px] leading-[100%] tracking-normal">Blink it</p>
                    </div>
                    <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 items-start'>
                        <div className='w-full'>
                            <div className='flex flex-col sm:flex-row sm:justify-between gap-3'>
                                <p className="font-sans font-medium text-[16px] leading-[100%] tracking-normal">
                                    Gift voucher worth of 1000
                                </p>
                            </div>
                        </div>
                        <div className='w-full flex justify-start sm:justify-end'>
                            <div className="bg-[#991515f1] text-white font-semibold flex items-center justify-center gap-3 sm:gap-4 px-4 py-2 w-full sm:w-[173px] h-[40px] rounded-[22px]  text-sm sm:text-base">
                                Failed
                                <IoWarningOutline size={22} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="p-5 bg-[#FBFCFC] grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="w-full border-b md:border-b-0 md:border-r border-[#afaeae] px-4 sm:px-6 md:px-10 py-6 flex justify-center">
                        <div className="w-full max-w-md grid grid-cols-1 gap-6">
                            <div className="w-full bg-white shadow-xl rounded-xl p-4 sm:p-5">
                                <div className="border p-3 rounded-md flex items-center gap-3 w-full">
                                    <img src="/images/bc.png" alt="" className="h-4 sm:h-5" />
                                    <span className="text-base sm:text-lg font-semibold">
                                        Need Help?
                                    </span>
                                </div>
                                <div className="mt-4 space-y-3">
                                    <button className="w-full flex items-center justify-between text-left">
                                        <span className="text-sm sm:text-base">
                                            How to resolve payment issues
                                        </span>
                                        <FaAngleRight size={20} className="shrink-0" />
                                    </button>
                                    <div className="flex justify-end">
                                        <button className="px-4 py-2 rounded-md bg-slate-300 hover:bg-slate-400 transition font-semibold text-sm">
                                            Learn more
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full bg-white shadow-xl rounded-xl p-4 sm:p-5 flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
                                <FaGifts size={40} className="text-[#9F2222]" />
                                <div className="flex flex-col items-center sm:items-start gap-1 w-full">
                                    <span className="font-medium text-sm sm:text-base">
                                        No gift card available this time.
                                    </span>
                                    <span className="text-sm text-gray-600">
                                        Better luck next time
                                    </span>
                                    <img src="/images/r.png" alt="" className="h-4 w-4 mt-1" />
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="w-full flex flex-col gap-4 py-6">
                        <div className="bg-white shadow-2xl p-4 rounded-lg flex flex-col gap-3 justify-between">
                            <div className="flex gap-2 items-center">
                                <IoWarningOutline size={22} color="#9F2222" />
                                <p className="font-inter text-red-700  font-semibold text-[16px] leading-[120%] tracking-normal">
                                    Insufficient balance in your account
                                </p>
                            </div>
                            <p className="font-inter text-black  font-semibold text-[16px] leading-[120%] tracking-normal">
                                Please check your bank balance and try again.
                            </p>
                        </div>
                        <div className="bg-white shadow-2xl p-4 rounded-lg flex flex-col gap-3 justify-between">
                            <div className="flex gap-2 items-center">
                                <IoWarningOutline size={22} color="#9F2222" />
                                <p className="font-inter text-red-700  font-semibold text-[16px] leading-[120%] tracking-normal">
                                    Transaction declined by Bank
                                </p>
                            </div>
                            <p className="font-inter text-black  font-semibold text-[16px] leading-[120%] tracking-normal">
                                Contact your bank for more details.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Failed