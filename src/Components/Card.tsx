import { useState } from "react";

const Card = () => {
  const [count, setCount] = useState<number>(0);

  return (

    <div className="flex flex-wrap py-8 px-0">
      <div
        className="w-108.75 h-51.75 rounded-2xl border border-[#2B6777] bg-white
          shadow-[0_0_0_2px_rgba(43,103,119,0.22),0_8px_20px_rgba(43,103,119,0.32)]
          px-5 py-6">
        <div className="w-full h-full flex flex-col justify-between">
          <div className="flex items-center justify-center gap-1">
            <span className="font-inter font-normal text-[24px] leading-9 text-[#2B6777]">
              500
            </span>
            <img src={"/images/cards/rs.png"} alt="" className="h-5.5" />
          </div>
          <div className="flex items-center justify-between">
            <img
              src={"/icons/minus.svg"}
              alt=""
              className="w-8 h-8"
              onClick={() => setCount(prev => Math.max(prev - 1, 0))} />
            <span className="font-inter font-semibold text-[24px] leading-9 text-[#2B6777]">
              {count} Card{count !== 1 ? "s" : ""} worth
            </span>
            <img
              src={"/icons/plus.svg"}
              alt=""
              className="w-8 h-8"
              onClick={() => setCount(prev => prev + 1)} />
          </div>
          <div className="flex items-center justify-center">
            <span className="font-inter font-normal text-[24px] leading-9 text-[#2B6777]">
              0 CARDS
            </span>
          </div>
          <div className="grid md:grid-cols-3 grid-cols-5 w-full justify-between items-center">
            <div ><img src={"/images/cards/bklt.jpg"} alt="" className="w-10.5 h-10.5 rounded-md" /></div>
            <div className="md:col-span-1 col-span-2">
              <button
                className="border px-3 py-2 rounded-lg md:w-32 w-36 bg-[#2B6777] text-white font-bold"
              >
                Buy
              </button>
            </div>
            <div className="justify-end md:col-span-1 col-span-2">
              <div className="flex  items-center  justify-end">
                <img src={"/images/cards/rs.png"} alt="" className="h-7" />
                <img src={"/icons/fgt.svg"} alt="" className="h-6" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
