import { useState } from "react";

const Card = ({ cardData }: any) => {
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
            disabled={cardData?.cardCount == 0 || count == 0}
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
            disabled={count >= cardData?.cardCount}
          >
            <img
              src={"/icons/plus.svg"}
              alt=""
              className="w-8 h-8"
            />
          </button>
        </div>

        <div className="flex items-center justify-center">
          <span className="font-inter font-normal text-[24px] leading-9 text-[#2B6777]">
            {cardData?.cardCount} CARDS
          </span>
        </div>

        <div
          className={`w-full justify-between items-center
              ${count > 0
              ? 'grid md:grid-cols-3 grid-cols-5'
              : 'flex'
            }
            `}
        >
          <div>
            <img src={cardData?.storeImg} alt="" className="w-10.5 h-10.5 rounded-md" />
          </div>

          {
            (count > 0) &&
            <div className="md:col-span-1 col-span-2">
              <button className="border px-3 py-2 rounded-lg md:w-32 w-36 bg-[#2B6777] text-white font-bold">
                Buy
              </button>
            </div>
          }

          <div className="justify-end md:col-span-1 col-span-2">
            <div className="flex  items-center  justify-end">
              <img src={"/images/cards/rs.png"} alt="" className="h-7" />

              <img src={"/icons/fgt.svg"} alt="" className="h-6" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
