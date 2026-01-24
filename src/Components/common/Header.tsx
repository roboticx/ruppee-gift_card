

const Header = () => {
    return (
        <header className="bg-[#2B6777] h-20.25 flex items-center justify-center">
            <div className="w-350.5">
                <div className="relative flex h-20.25 items-center justify-between md:mx-5 md:px-5">

                    {/* LEFT */}
                    <div className="flex items-center gap-2">
                        <button
                            className="w-18.5 h-8 
                                text-white text-[14px] 
                                rounded-lg 
                                border border-[#00EAFF]
                                flex items-center justify-center"
                        >
                            Login
                        </button>


                        <button
                            className="w-18.5 h-8
                                text-white text-[14px]
                                rounded-lg
                                border border-[#00EAFF]
                                flex items-center justify-center"
                        >
                            Home
                        </button>


                        <img
                            src="/icons/cart.svg"
                            alt="cart"
                            className="w-6 h-6"
                        />

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

                    {/* RIGHT SEARCH */}
                    <div className="relative hidden md:block w-61 h-8.25">
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

                        {/* Search Icon */}
                        <span
                            className="absolute right-2 top-1/2 -translate-y-1/2
                                w-4 h-4
                                flex items-center justify-center"
                        >
                            <img
                                src="/icons/search.svg"
                                alt="search"
                                className="w-2.5 h-2.5"
                            />
                        </span>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header