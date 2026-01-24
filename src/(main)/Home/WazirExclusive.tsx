import React, { useEffect, useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

interface Category {
  name: string;
  imageUrl: string;
}

const WazirExclusive: React.FC = () => {
  const categories: Category[] = [
    { name: "Grocery", imageUrl: "grocery.jpg" },
    { name: "Kitchen Appliances", imageUrl: "kitchen-appliances.jpg" },
    { name: "Fashion Shopping", imageUrl: "shopping.jpg" },
    { name: "Travel", imageUrl: "travel.jpg" },
    { name: "Electronic", imageUrl: "electronic.jpg" },
    { name: "Jewelry", imageUrl: "jewelry.jpg" },
    { name: "Food", imageUrl: "food.jpg" },
    { name: "Coemetrics", imageUrl: "coemetrics.jpg" },
    { name: "Home", imageUrl: "home.jpg" },
    { name: "OTT", imageUrl: "ott.jpg" },
  ];

  const ITEM_WIDTH = 160;

  const viewportRef = useRef<HTMLDivElement | null>(null);

  // const [visibleItems, setVisibleItems] = useState<number>(0);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [maxIndex, setMaxIndex] = useState<number>(0);

  const calculateVisibleItems = (): void => {
    if (!viewportRef.current) return;

    const containerWidth = viewportRef.current.clientWidth;
    const visible = Math.floor(containerWidth / ITEM_WIDTH);

    // setVisibleItems(visible);
    setMaxIndex(Math.max(categories.length - visible + 1, 0));
  };

  useEffect(() => {
    calculateVisibleItems();
    window.addEventListener("resize", calculateVisibleItems);

    return () => {
      window.removeEventListener("resize", calculateVisibleItems);
    };
  }, []);

  const next = (): void => {
    setCurrentIndex((prev) => (prev < maxIndex ? prev + 1 : prev));
  };

  const prev = (): void => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : prev));
  };

  return (
    <section className=" px-5 sm:px-0 py-12">

      {/* HEADER */}
      <div className="flex items-center justify-between pb-4">
  <button
  onClick={prev}
  disabled={currentIndex === 0}
  className="
    w-7 h-7 sm:w-8 sm:h-8
    rounded-md sm:rounded-lg
    border border-[#00EAFF]
    text-[#00EAFF]
    bg-white
    flex items-center justify-center
    text-[14px] sm:text-[18px]
    shadow-[0px_0px_6px_1px_#00EAFF40]
    disabled:opacity-40
    disabled:cursor-not-allowed
  "
>
  <FaChevronLeft className="text-[12px] sm:text-[16px]" />
</button>


       <h2
  className="
    text-[18px] sm:text-[22px]
    font-semibold
    leading-[120%]
    text-center
    text-gray-900
  "
>
  Wazirz Exclusive
</h2>


        <div className="flex items-center gap-2">
     <button
  className="
    h-8 w-[94px]
    px-4
    rounded-lg
    border border-[#00C8DA]
    bg-white
    text-[#00EAFF]
    text-[14px] font-medium
    shadow-[0px_0px_6px_1px_#00EAFF40]
    flex items-center justify-center
  "
>
  Category
</button>

       <button
  onClick={next}
  disabled={currentIndex >= maxIndex}
  className="
    w-7 h-7 sm:w-8 sm:h-8
    rounded-md sm:rounded-lg
    border border-[#00EAFF]
    text-[#00EAFF]
    bg-white
    flex items-center justify-center
    text-[14px] sm:text-[18px]
    shadow-[0px_0px_6px_1px_#00EAFF40]
    disabled:opacity-40
    disabled:cursor-not-allowed
  "
>
  <FaChevronRight className="text-[12px] sm:text-[16px]" />
</button>

        </div>
      </div>

      <div ref={viewportRef} className="overflow-hidden w-full">
        <div
          className="flex gap-10 transition-transform duration-450 ease-in-out will-change-transform"
          style={{
            transform: `translateX(-${currentIndex * ITEM_WIDTH}px)`,
          }}
        >
          {categories.map((item: Category, index: number) => (
           <div
  key={index}
  className="w-28 sm:w-35 shrink-0 text-center"
>
  <div className="w-24 h-24 sm:w-30 sm:h-30 rounded-full overflow-hidden mx-auto">
    <img
      src={`/images/wazirz-exclusive/${item.imageUrl}`}
      alt={item.name}
      className="w-full h-full object-cover"
    />
  </div>

  <p className="mt-2 sm:mt-3 text-[14px] sm:text-[16px] font-medium text-[#111] leading-[120%]">
    {item.name}
  </p>
</div>

          ))}
        </div>
      </div>

    </section>
  );
};

export default WazirExclusive;
