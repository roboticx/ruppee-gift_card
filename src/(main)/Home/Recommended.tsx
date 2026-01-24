// import React from 'react'

import { GrAdd } from "react-icons/gr";

const Recommended = () => {
    const onlineShopping = [
        { name: "blinkIt", imgUrl: "blinkit.jpg", discount: "12" },
        { name: "zepto", imgUrl: "zepto.jpg", discount: "12" },
        { name: "amazon Fresh", imgUrl: "amazon-fresh.jpg", discount: "12" },
        { name: "Big Basket", imgUrl: "bigbasket.jpg", discount: "13" },
    ];

    const ClothingStore = [
        { name: "H&M", imgUrl: "h-and-m.jpg", discount: "6" },
        { name: "Nykaa", imgUrl: "nykaa.jpg", discount: "58" },
        { name: "Tommy Hilfiger", imgUrl: "tommy-hilfiger.jpg", discount: "56" },
        { name: "Zara", imgUrl: "zara.jpg", discount: "21" },
    ];

    const Travel = [
        { name: "Goibibo", imgUrl: "goibibo.jpg", discount: "28" },
        { name: "Agoda", imgUrl: "agoda.jpg", discount: "69" },
        { name: "Trip Advisor", imgUrl: "trip-advisor.jpg", discount: "9" },
        { name: "Trivago", imgUrl: "trivago.jpg", discount: "13" },
    ];

    const categories = {
        onlineShopping,
        ClothingStore,
        Travel,
    };

    return (
        <section className="px-4 py-[24px] pb-[48px]">

            {/* HEADER */}
            <div className="flex items-center justify-between mb-4">
                <h3 className="text-[16px] font-semibold text-[#111]">
                    Recommended
                </h3>

                <a
                    href="#"
                    className="text-[12px]
                        px-[12px] py-[4px]
                        rounded-[8px]
                        border border-[#00C8DA]
                        bg-[#00EAFF0f]
                        text-[#01D4E8]
                        shadow-[0px_0px_6px_1px_#00EAFF40]"
                >
                    View All
                </a>
            </div>

            {/* SECTIONS */}
            {Object.values(categories).map((items, idx) => (
                <div
                    key={idx}
                    className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mb-4"
                >
                    {items.map((item, index) => (
                        <div
                            key={index}
                            className="relative
                                aspect-[1/0.8]
                                rounded-[15px]
                                bg-white
                                border border-[#e9e9e9]
                                flex items-center justify-center"
                        >
                            {/* DISCOUNT BADGE */}
                            <span
                                className="absolute
                                    top-[-20px] right-[-25px]
                                    w-[60px] h-[60px]
                                    text-white
                                    text-[20px] font-semibold
                                    flex items-center justify-center
                                    shadow-[0_6px_10px_rgba(0,0,0,0.15)]"
                                style={{
                                    background:
                                        "linear-gradient(161.5deg, #F82D2D 37.3%, #DA3B75 84.55%)",
                                    clipPath:
                                        "polygon(50% 0%,79% 10%,100% 35%,100% 65%,79% 90%,50% 100%,21% 90%,0% 65%,0% 35%,21% 10%)",
                                }}
                            >
                                {item.discount}%
                            </span>

                            {/* IMAGE */}
                            <img
                                src={`/images/Recommanded/${item.imgUrl}`}
                                alt={item.name}
                                className="w-full h-full object-cover rounded-[15px]"
                            />

                            {/* ADD BUTTON */}
                            <button
                                className="absolute bottom-[12px] right-[12px]
                                    w-[36px] h-[36px]
                                    rounded-[4px]
                                    border border-[#00EAFF]
                                    text-[#00EAFF]
                                    bg-[#00EAFF14]
                                    flex items-center justify-center"
                            >
                                <GrAdd />
                            </button>
                        </div>
                    ))}
                </div>
            ))}
        </section>
    );
};

export default Recommended
