import { useState } from "react";
import NumberModal from "./models/NumberModel";

const Card = () => {
  const [count, setCount] = useState<number>(0);
  const [isOpen, setIsOpen] = useState<boolean>(false); // modal state

  return (
    <div className=" w-[1430px] px-12">
      <p className="font-inter font-semibold text-[20px] px-8 py-3 leading-[30px]">
        Cards by details
      </p>
      <hr className="border-t border-slate-400/60" />

      <div className="flex flex-wrap py-8 px-8">
        <div
          className="w-[435px] h-[207px] rounded-2xl border border-[#2B6777] bg-white
          shadow-[0_0_0_2px_rgba(43,103,119,0.22),0_8px_20px_rgba(43,103,119,0.32)]
          px-5 py-6">
          <div className="w-full h-full flex flex-col justify-between">
            <div className="flex items-center justify-center gap-1">
              <span className="font-inter font-normal text-[24px] leading-[36px] text-[#2B6777]">
                500
              </span>
              <img src={"/images/cards/rs.png"} alt="" className="h-[22px]" />
            </div>
            <div className="flex items-center justify-between">
              <img
                src={"/icons/minus.svg"}
                alt=""
                className="w-8 h-8"
                onClick={() => setCount(prev => Math.max(prev - 1, 0))}/>
              <span className="font-inter font-semibold text-[24px] leading-[36px] text-[#2B6777]">
                {count} Card{count !== 1 ? "s" : ""} worth
              </span>
              <img
                src={"/icons/plus.svg"}
                alt=""
                className="w-8 h-8"
                onClick={() => setCount(prev => prev + 1)}/>
            </div>
            <div className="flex items-center justify-center">
              <span className="font-inter font-normal text-[24px] leading-[36px] text-[#2B6777]">
                0 CARDS
              </span>
            </div>
            <div className="flex items-center w-full justify-between">
              <div className="w-1/3"><img src={"/images/cards/bklt.jpg"} alt="" className="w-[42px] h-[42px] rounded-md" /></div>
              <div className="w-1/3">
              <button
                className="border px-3 py-2 rounded-lg w-32 bg-[#2B6777] text-white font-bold"
                onClick={() => setIsOpen(true)}>
                Buy
              </button>
              </div>
          <div className="w-1/3 justify-end">
              <div className="flex  items-center  justify-end">
                <img src={"/images/cards/rs.png"} alt="" className="h-[28px]" />
                <img src={"/icons/fgt.svg"} alt="" className="h-[24px]" />
              </div>
          </div>
            </div>
          </div>
        </div>
      </div>
      <NumberModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
};

export default Card;
