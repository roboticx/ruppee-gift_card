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
                                Failed
                                <img src="/images/r.png" alt="" className="h-3 sm:h-4" />
                            </span>
                        </div>
                    </div>
                </div>
                <div className="flex mb-7 justify-center px-2">
                    <div className="max-w-[95vw] flex items-center gap-1.5 sm:gap-3">
                        <img
                            src="/icons/varify.svg"
                            alt=""
                            className="h-5 sm:h-8 shrink-0"
                        />

                        <div className="flex items-center overflow-hidden">
                            <p className="font-sans font-semibold text-[16px] sm:text-[18px] leading-[100%] shrink-0">
                                1002.3
                            </p>

                            <img
                                src="/images/r.png"
                                alt=""
                                className="h-3 sm:h-4 shrink-0"
                            />

                            <p className="font-sans font-normal text-[13px] sm:text-[18px] leading-[100%] whitespace-nowrap truncate">
                                Paid Successfully
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
                                <div className='flex flex-row sm:flex-col'>
                                    <div className='flex items-center gap-1'>
                                        <p className="font-sans font-medium text-[17px] line-through leading-[100%] tracking-normal text-[#828282]">
                                            1000.00
                                        </p>
                                        <img src="/images/r.png" alt="" className='h-5 w-5 rounded-lg' />
                                    </div>
                                    <div className='flex items-center gap-1'>
                                        <p className="font-sans font-medium text-[17px] leading-[100%] tracking-normal text-[#828282]">
                                            1000.00
                                        </p>
                                        <img src="/images/r.png" alt="" className='h-5 w-5 rounded-lg' />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='w-full flex justify-start sm:justify-end'>
                            <div className="bg-[#15997226] font-semibold flex items-center justify-center gap-3 sm:gap-4 px-4 py-2 w-full sm:w-[173px] h-[40px] rounded-[22px] border border-[#159972] text-sm sm:text-base">
                                Purchased
                                <img src="/icons/varify.svg" alt="" className='h-5 w-5' />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="p-5 bg-[#FBFCFC] grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="w-full border-b md:border-b-0 md:border-r border-[#afaeae] flex justify-center pb-6 md:pb-0">
                        <div className="text-center  md:text-left">
                            <img src="/images/bc.png" alt="" className="mx-auto md:mx-0" />
                            <p className="font-inter text-[#828282] font-normal text-[12px] mb-6 leading-[120%] text-center tracking-normal">
                                Ask the cashier to scan the barcode <br /> or manually enter the code in the POS
                            </p>
                        </div>
                    </div>
                    <div className="w-full flex flex-col gap-4 py-6">
                        <div className="bg-[#EFEFEF] p-4 rounded-lg flex justify-between items-center">
                            <p className="font-inter font-semibold text-[16px] leading-[120%] tracking-normal">
                                Code : 746547564785648
                            </p>
                            <img src="/icons/copy.svg" alt="" className="h-5 w-5" />
                        </div>
                        <div className="bg-[#EFEFEF] p-4 rounded-lg flex justify-between items-center">
                            <p className="font-inter font-semibold text-[16px] leading-[120%] tracking-normal">
                                Code : 746547564785648
                            </p>
                            <img src="/icons/copy.svg" alt="" className="h-5 w-5" />
                        </div>
                        <div className="border border-[#afaeae] p-3 rounded-lg flex flex-col sm:flex-row sm:justify-between gap-4">
                            <div className="flex gap-2 items-center justify-between">
                                <p className="font-inter font-semibold text-[16px] leading-[120%] tracking-normal">How to redeem</p>
                                <img src="/icons/info.svg" alt="" className="h-5 w-5" />
                            </div>
                            <div className="flex gap-2 items-center justify-between">
                                <p className="font-inter font-semibold text-[16px] leading-[120%] tracking-normal">Help</p>
                                <img src="/icons/cloud.svg" alt="" className="h-5 w-5" />
                            </div>
                            <div className="flex gap-2 items-center justify-between">
                                <p className="font-inter font-semibold text-[16px] leading-[120%] tracking-normal">Share</p>
                                <img src="/icons/share.svg" alt="" className="h-5 w-5" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 mt-7 gap-6">
                    <div className="w-full flex items-center gap-4 p-3 bg-[#F9A20126] border border-dashed border-[#F9A201] rounded-lg">
                        <div className="w-20 h-20 bg-orange-500 rounded-md flex-shrink-0"></div>
                        <div className="flex flex-col justify-center">
                            <p className="font-inter font-medium text-[16px] leading-[120%] tracking-normal">
                                One scratch card(s) earned
                            </p>
                            <p className="font-inter font-normal text-[16px] leading-[120%] tracking-normal text-[#333]">
                                Tap to scratch
                            </p>
                        </div>
                    </div>
                    <div className="w-full border  rounded-lg p-4 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
                        <p className="font-inter font-medium text-[16px] leading-[120%] tracking-normal">
                            Transaction Details
                        </p>
                        <button className="flex items-center gap-2 px-4 py-2 bg-[#F6F6F6] rounded-lg border border-gray-200 w-full sm:w-auto justify-center">
                            <span className="font-inter font-medium text-[16px] leading-[120%] tracking-normal">
                                Saved : 76
                            </span>
                            <img src="/images/r.png" alt="" className="h-5 w-5" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Failed