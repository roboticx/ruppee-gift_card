import { GrAdd } from "react-icons/gr";
import { useNavigate } from "react-router-dom";

const StoreComponent = ({ store }: any) => {

    const navigate = useNavigate();

    return (
        <div className="w-full flex justify-center">
            <div className="w-[1402px]">
                <div className="relative mb-4 w-full max-w-sm sm:max-w-md aspect-[1/0.8] rounded-[15px] bg-white border border-[#e9e9e9] flex items-center justify-center shadow-lg">
                    <span
                        className="
                                    absolute
                                    -top-3 -right-3 sm:-top-5 sm:-right-6.25
                                    w-12 h-12 sm:w-17 sm:h-17
                                    text-[14px] sm:text-[20px]
                                    font-semibold
                                    text-white
                                    flex items-center justify-center
                                    shadow-[0_6px_10px_rgba(0,0,0,0.15)]"
                        style={{
                            background:
                                "linear-gradient(161.5deg, #F82D2D 37.3%, #DA3B75 84.55%)",
                            clipPath:
                                "polygon(50% 0%,79% 10%,100% 35%,100% 65%,79% 90%,50% 100%,21% 90%,0% 65%,0% 35%,21% 10%)",
                        }}
                    >
                        {store.discount}%
                    </span>
                    <img
                        src={`/images/Recommanded/${store.imgUrl}`}
                        alt={store.name}
                        className="w-full h-full object-contain rounded-[15px]"
                    />
                    <button
                        className="absolute bottom-3 right-3
                                                            w-9 h-9
                                                            rounded-sm
                                                            border border-[#00EAFF]
                                                            text-[#00EAFF]
                                                        bg-[#00EAFF14]
                                                            flex items-center justify-center"
                                                                onClick={() => navigate('/card-details')}
                    >
                        <GrAdd />
                    </button>
                </div>
            </div>
        </div>
    )
}
export default StoreComponent