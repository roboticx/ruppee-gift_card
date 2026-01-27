import { useState } from "react";

const Card = ({ cardData }: any) => {
    const [count, setCount] = useState<number>(0);

    return (
        <div className={`flex flex-wrap 
                bg-cover bg-center bg-no-repeat
                w-full h-51.75 
                rounded-2xl 
                border border-[#2B6777] 
                shadow-[0_0_0_2px_rgba(43,103,119,0.22),0_8px_20px_rgba(43,103,119,0.32)]
                px-5 py-6
            `}
            style={{
                backgroundImage: `
                linear-gradient(rgba(255,255,255,0.4), rgba(255,255,255,0.4)), 
                url(https://blog.photoadking.com/wp-content/uploads/2023/10/Mercury-Christmas-Gift-Certificate-Template_1x.jpg)
                `
            }}
        >
            <div className="w-full h-full flex flex-col justify-between">

                <div className={`w-full justify-between items-center flex`}>
                    <div>
                        <img src={cardData?.storeImg} alt={cardData.storeName || ""} className="w-10.5 h-10.5 rounded-md" />
                    </div>

                    <div className="justify-end md:col-span-1 col-span-2">
                        <div className="flex  items-center  justify-end">
                            <img src={"/images/cards/rs.png"} alt="" className="h-7" />

                            <img src={"/icons/fgt.svg"} alt="" className="h-6" />
                        </div>
                    </div>
                </div>

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
                                <div className={`w-full justify-center items-center flex my-auto`}>
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

                                <button className="border px-3 py-2 rounded-lg bg-[#2B6777] text-white font-bold"
                                    onClick={() => setCount(1)}>
                                    Add To Cart
                                </button>
                            </>
                        )
                }

            </div>
        </div>
    )
}

export default Card