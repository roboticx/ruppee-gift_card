import { useState } from 'react'

const Cart = () => {
    const[count,setCount]=useState<any>(0)
    return (
        <div className="w-full">
            <p className="font-inter font-semibold text-[20px] px-8 py-3 leading-[30px]">
                cart
            </p>
            <hr className="border-t border-slate-400/60" />
            <div className="flex flex-wrap py-8 px-8">
                <div
                    className="w-[435px] h-[207px]
      rounded-2xl
      border border-[#2B6777]
      bg-white
      shadow-[0_0_0_2px_rgba(43,103,119,0.22),0_8px_20px_rgba(43,103,119,0.32)]
      px-5 py-6">
                    <div className="w-full h-full flex flex-col justify-between">
                        <div className="flex items-center justify-center gap-1">
                            <span className="font-inter font-normal text-[24px] leading-[36px] text-[#2B6777]">
                                500
                            </span>
                            <img src={'/images/cards/rs.png'} alt="" className="h-[22px]" />
                        </div>
                        <div className="flex items-center justify-between">
                            <img src={'/icons/minus.svg'} alt="" className="w-8 h-8"  onClick={()=>{setCount(count-1)}}/>
                            <span className="font-inter font-semibold text-[24px] leading-[36px] text-[#2B6777]">
                                {count} Card worth
                            </span>
                            <img src={'/icons/plus.svg'} alt="" className="w-8 h-8" onClick={()=>{setCount(count+1)}}/>
                        </div>
                        <div className="flex items-center justify-center">
                            <span className="font-inter font-normal text-[24px] leading-[36px] text-[#2B6777]">
                                0 CARDS
                            </span>
                        </div>
                        <div className="flex items-center justify-between">
                            <img src={'/images/cards/bklt.jpg'} alt="" className="w-[42px] h-[42px] rounded-md" />
                            <div className="flex items-center gap-1">
                                <img src={'/images/cards/rs.png'} alt="" className="h-[34px]" />
                                <img src={'/icons/fgt.svg'} alt="" className="h-[30px]" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart