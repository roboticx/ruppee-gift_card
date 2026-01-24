import { FiLogIn } from "react-icons/fi";
import { AiOutlineShoppingCart, AiOutlineSearch } from "react-icons/ai";

const Header = () => {
    return (
        <header className="bg-[#2B6777] h-20.25 flex items-center justify-center px-4 md:px-0">
            <div className="w-full md:w-350.5">
                <div className="relative flex h-20.25 items-center justify-between">

                    {/* LEFT */}
                    <div className="flex items-center gap-2">
                        {/* Mobile: login icon */}
                        <button className="flex items-center justify-center w-8 h-8 border border-[#00EAFF] rounded-lg md:hidden text-white">
                            <FiLogIn className="w-5 h-5" />
                        </button>

                        {/* Desktop: Login & Home buttons */}
                        <button className="hidden md:flex w-18.5 h-8 text-white text-[14px] rounded-lg border border-[#00EAFF] items-center justify-center">
                            Login
                        </button>
                        <button className="hidden md:flex w-18.5 h-8 text-white text-[14px] rounded-lg border border-[#00EAFF] items-center justify-center">
                            Home
                        </button>

                        {/* Desktop: cart icon on left */}
                        <AiOutlineShoppingCart className="hidden md:block w-6 h-6 text-white" />
                    </div>

                    {/* CENTER LOGO */}
                    <div className="absolute left-1/2 -translate-x-1/2 flex items-center text-white text-[28px] font-medium tracking-[1px]">
                        <img
                            src="/images/rupee_sign.png"
                            alt=""
                            className="w-8.75 h-8.75 -mt-2.25 -mr-3.75"
                        />
                        <span className="ml-1.75">GIFT</span>
                    </div>

                    {/* RIGHT */}
                    <div className="flex items-center gap-4">
                        {/* Mobile: cart + search icons */}
                        <div className="flex gap-4 md:hidden text-white">
                            <AiOutlineShoppingCart className="w-5 h-5" />
                            <AiOutlineSearch className="w-5 h-5" />
                        </div>

                        {/* Desktop: search input */}
                        <div className="hidden md:block relative w-61 h-8.25">
                            <input
                                type="text"
                                placeholder="Search product"
                                className="
                                    w-full h-full
                                    bg-[#2B6777]
                                    border border-[#00EAFF]
                                    rounded-2xl
                                    pl-3 pr-10
                                    text-[13px] text-white
                                    placeholder-white/70
                                    focus:outline-none
                                "
                            />
                            <span className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 flex items-center justify-center">
                                <AiOutlineSearch className="w-4 h-4 text-white" />
                            </span>
                        </div>
                    </div>

                </div>
            </div>
        </header>
    )
}

export default Header;
