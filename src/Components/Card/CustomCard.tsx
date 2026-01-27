import { useState } from "react";

const CustomCard = ({ cardData }: any) => {
    const [count, setCount] = useState<number>(0);

    return (
        <div className="flex flex-wrap 
            w-full h-51.75 
            rounded-2xl 
            border border-[#2B6777] 
            bg-white
            shadow-[0_0_0_2px_rgba(43,103,119,0.22),0_8px_20px_rgba(43,103,119,0.32)]
            px-5 py-6"
        >
            <div className="w-full h-full flex flex-col justify-between">
                {
                    (count > 0) ?
                        (
                            <>
                                <div className="flex items-center justify-center gap-1">
                                    <span className="font-inter font-normal text-[24px] leading-9 text-[#2B6777]">
                                        <span className={count > 1 ? `line-through` : ''}>
                                            {cardData.amount} {''}
                                        </span>
                                        {(count > 1) &&
                                            (cardData.amount * count)
                                        }
                                    </span>

                                    <img src={cardData.imgUrl} alt="" className="h-5.5" />
                                </div>

                                <div className="flex items-center justify-between">

                                    <button
                                        onClick={() => setCount(prev => Math.max(prev - 1, 0))}
                                        disabled={count == 0}
                                    >
                                        <img
                                            src={"/icons/minus.svg"}
                                            alt=""
                                            className="w-8 h-8" />
                                    </button>

                                    {
                                        (count > 0) &&
                                        <span className="font-inter font-semibold text-[24px] leading-9 text-[#2B6777]">
                                            {count} Card{count !== 1 ? "s" : ""} worth
                                        </span>
                                    }

                                    <button
                                        onClick={() => setCount(prev => prev + 1)}
                                    >
                                        <img src={"/icons/plus.svg"} alt="" className="w-8 h-8" />
                                    </button>
                                </div>
                            </>
                        )
                        : (
                            <>
                                <div className={`w-full justify-between items-center flex my-auto`}>
                                    <div>
                                        <span className="font-inter font-semibold text-[24px] leading-9 text-[#2B6777]">
                                            {cardData.cardCount} Cards
                                        </span>
                                    </div>


                                    <div className="flex items-center justify-center gap-1">
                                        <span className="font-inter font-normal text-[24px] leading-9 text-[#2B6777]">
                                            <span className={count > 1 ? `line-through` : ''}>
                                                {cardData.amount} {''}
                                            </span>
                                            {(count > 1) &&
                                                (cardData.amount * count)
                                            }
                                        </span>

                                        <img src={cardData.imgUrl} alt="" className="h-5.5" />
                                    </div>

                                </div>

                                <button className="border px-3 py-2 mx-auto rounded-lg md:w-32 w-36 bg-[#2B6777] text-white font-bold">
                                    Add To Cart
                                </button>
                            </>
                        )
                }


                <div className={`w-full justify-between items-center flex`}>
                    <div>
                        <img src={cardData?.storeImg} alt={cardData.storeName || ""} className="w-10.5 h-10.5 rounded-md" />
                    </div>

                    <div className="flex items-center justify-end">
                        <img src={"/images/cards/rs.png"} alt="" className="h-7" />

                        <img src={"/icons/fgt.svg"} alt="" className="h-6" />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default CustomCard