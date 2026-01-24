

const Checkout = () => {
    return (
        <div className='flex justify-between'>
            <div className='w-full py-12'>
                <div className='flex justify-center'>
                    <div className="w-193.25 border-r-0 relative mb-10 overflow-hidden h-20 rounded-lg flex justify-start items-center border border-[#2B6777] ">
                        <div className='w-[70%]  p-6'>
                            <span className="font-sans font-normal text-2xl leading-[100%] tracking-normal">
                                Txn ID :
                            </span> <span className="font-sans font-normal text-2xl leading-[100%] tracking-normal">
                                94545126545655
                            </span>
                        </div>
                        <div className='w-[30%] flex justify-center items-center bg-[#2B6777] h-full rounded-full -right-7 absolute'>
                            <span className="font-sans font-normal text-[#FFFFFF] not-italic text-2xl leading-[100%] tracking-normal">
                                lorem
                            </span>

                            <img
                                src="/images/rupee_sign.png"
                                alt=""
                                className="w-[16px] h-[16px] -mt-2.25 -mr-3.75"
                            />
                        </div>
                    </div>

                </div>
                <div className='flex justify-center'>
                    <div className="flex gap-6 items-center ">
                        <img src="/icons/varify.svg" alt="" className='h-[55px] w-[55px]' />
                        <div className='flex gap-1'>
                            <span className="font-sans font-semibold text-[28px] leading-[100%] tracking-normal">
                                1002.30</span>   <img
                                src="/images/r.png"
                                alt=""
                                className="w-[27px] h-[27px] mix-blend-multiply "
                            />
                            <span className="font-sans font-normal text-[20px] leading-[100%] tracking-normal">
                                paid successfully
                            </span>

                        </div>
                    </div>
                </div>
                <div className='flex justify-center '>
                    <div className="flex gap-6 flex items-center bg-[#FBFCFC] p-10 w-full">
                        <div className='w-1/2'>
                            <div className='flex gap-3'>
                                <img src={"/images/cards/bklt.jpg"} alt="" className="w-10.5 h-10.5" />
                            </div>
                            <div className='flex items-center py-10 justify-between'>
                                <div className='flex gap-1'>
                                    <h1 className="font-sans font-normal text-2xl leading-[100%] tracking-normal">
                                        Gift voucher worth of 1000
                                    </h1>

                                    <img
                                        src="/images/r.png"
                                        alt=""
                                        className="w-5 pt-1 h-full"
                                    />
                                </div> <div className='flex flex-col'>

                                    <div className='flex justify-end gap-2   items-center'>
                                        <h1 className="font-sans font-normal text-2xl leading-[100%] text-[#828282] tracking-normal">
                                            1000.00
                                        </h1>

                                        <img
                                            src="/images/r.png"
                                            alt=""
                                            className="w-5 pt-1 h-full"
                                        />
                                    </div>
                                    <div className='flex justify-end gap-2   items-center'>
                                        <h1 className="font-sans font-normal text-2xl leading-[100%] text-[#828282] tracking-normal">
                                            937.00
                                        </h1>

                                        <img
                                            src="/images/r.png"
                                            alt=""
                                            className="w-5 pt-1 h-full"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className='border-r py-10 border-[#828282]'>
                                <img src="/images/bc.png" alt="" />
                                <p className="font-sans text-[#828282] font-normal text-[20px] leading-[100%] tracking-normal text-center">
                                    Ask the cashier to scan the barcode or manually enter the code in the POS
                                </p>

                            </div>
                        </div>
                        <div className='w-1/2'>
                            <div className='flex justify-end'>
                                <button className="absolute top-[488px] justify-between left-[1403px] w-[173px] h-[40px] bg-[#15997226] border border-[#159972] rounded-[22px] flex items-center pl-7 pr-3">
                                    <span className="font-sans font-normal text-[20px] leading-[100%] tracking-normal">
                                        Purchased
                                    </span> <img src="/icons/varify.svg" className='w-[25px]' alt="" /> </button>
                            </div>
                            <div className='bg-[#EFEFEF] mb-12 rounded-[8px] flex justify-between py-10 px-7'>
                                    <div>
                                        <span className="font-sans font-semibold text-[28px] leading-[100%] tracking-normal">
  Code :
</span><span className="font-sans font-semibold text-[28px] leading-[100%] tracking-normal">
746547564785648
</span>
                                    </div>
                                    <img src="/icons/copy.svg" className='h-[35.75px]' alt="" />
                            </div>
                            <div className='bg-[#EFEFEF] rounded-[8px] flex justify-between py-10 px-7'>
                                    <div>
                                        <span className="font-sans font-semibold text-[28px] leading-[100%] tracking-normal">
  Code :
</span><span className="font-sans font-semibold text-[28px] leading-[100%] tracking-normal">
746547564785648
</span>
                                    </div>
                                    <img src="/icons/copy.svg" className='h-[35.75px]' alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Checkout