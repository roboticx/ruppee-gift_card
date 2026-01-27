import { useState } from "react";

const CustomCard = ({ store }: any) => {
    const [amount, setAmount] = useState<number>(1000);
    const [cardCount, setCardCount] = useState<number>(1);

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
                        <img src={store?.storeImg} alt={store.storeName || ""} className="w-10.5 h-10.5 rounded-md" />
                    </div>

                    <div className="justify-end md:col-span-1 col-span-2">
                        <div className="flex  items-center  justify-end">
                            <img src={"/images/cards/rs.png"} alt="" className="h-7" />

                            <img src={"/icons/fgt.svg"} alt="" className="h-6" />
                        </div>
                    </div>
                </div>

                <div className="flex items-center justify-center gap-1">
                    <input
                        placeholder="Amount"
                        value={amount}
                        type="number"
                        style={{
                            width: `${Math.max(String(amount).length + 2, 2)}ch`,
                            minWidth: '2ch'
                        }}
                        className="bg-transparent outline-none text-center font-inter font-normal text-[24px] leading-9 text-[#2B6777] transition-[width] duration-150 ease-out"
                        onChange={(e) => setAmount(Number(e.target.value))}
                    />

                    <img src={`/images/cards/rs.png`} alt="" className="h-5.5" />
                </div>

                <div className="flex items-center justify-center">

                    <span className="font-inter font-semibold text-[24px] leading-9 text-[#2B6777]">
                        <input
                            placeholder="Cards"
                            value={cardCount}
                            type="number"
                            style={{
                                width: `${Math.max(String(cardCount).length + 2, 1)}ch`,
                            }}
                            className="bg-transparent outline-none text-center font-inter font-normal text-[24px] leading-9 text-[#2B6777] transition-[width] duration-150 ease-out"
                            onChange={(e) => setCardCount(Number(e.target.value))}
                        />

                        Cards worth
                    </span>

                </div>

            </div>
        </div>
    )
}

export default CustomCard