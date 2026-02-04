import { useNavigate } from "react-router-dom";
import StoreComponent from "../../../Components/common/StoreComponent";

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
        onlineShopping: onlineShopping,
        ClothingStore: ClothingStore,
        Travel: Travel,
    };

    const navigator = useNavigate();

    return (
        Object.entries(categories).map(([categoryName, items]) => (
            <section className="px-4 pb-2 md:pb-6" key={categoryName}>
                <div className="flex items-center justify-between mb-4">
                    <h3 className="text-3xl font-semibold text-[#111]">
                        {categoryName}
                    </h3>

                    <a onClick={() => navigator(`/store-list/${categoryName}`)}
                        className="text-[12px]
                        px-3 py-1
                        rounded-lg
                        border border-[#00C8DA]
                        bg-[#00EAFF0f]
                        text-[#01D4E8]
                        shadow-[0px_0px_6px_1px_#00EAFF40]"
                    >
                        View All
                    </a>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-10 space-y-2 md:space-y-6 p-3 pb-0">
                    {items.map((item, index) => (
                        <StoreComponent store={item} key={index} />
                    ))}
                </div>
            </section>
        ))
    );
};

export default Recommended
