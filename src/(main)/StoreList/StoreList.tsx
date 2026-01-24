import { useParams } from "react-router-dom";
import StoreComponent from "../../Components/common/StoreComponent";





const StoreList = () => {

    const params = useParams();
    const storeName = params.categoryId;

    const storeList = [
        { name: "blinkIt", imgUrl: "blinkit.jpg", discount: "12" },
        { name: "zepto", imgUrl: "zepto.jpg", discount: "12" },
        { name: "amazon Fresh", imgUrl: "amazon-fresh.jpg", discount: "12" },
        { name: "Big Basket", imgUrl: "bigbasket.jpg", discount: "13" },
        { name: "H&M", imgUrl: "h-and-m.jpg", discount: "6" },
        { name: "Nykaa", imgUrl: "nykaa.jpg", discount: "58" },
        { name: "Tommy Hilfiger", imgUrl: "tommy-hilfiger.jpg", discount: "56" },
        { name: "Zara", imgUrl: "zara.jpg", discount: "21" },
        { name: "Goibibo", imgUrl: "goibibo.jpg", discount: "28" },
        { name: "Agoda", imgUrl: "agoda.jpg", discount: "69" },
        { name: "Trip Advisor", imgUrl: "trip-advisor.jpg", discount: "9" },
        { name: "Trivago", imgUrl: "trivago.jpg", discount: "13" },
    ];

    return (
        <section className="px-4 pb-6" >
            <h3 className="text-3xl font-semibold text-[#111]">
                {storeName}
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 mb-4 space-y-6 pt-3">
                {storeList.map((item) => (
                    <StoreComponent store={item} />
                ))}
            </div>
        </section>
    )
}

export default StoreList