

const Header = () => {
    return (
        <header className="bg-[#2B6777] h-20.25 flex items-center justify-center">
            <div className="w-full px-4">
                <div className="relative flex h-20.25 items-center justify-between md:mx-5 md:px-5">

                    {/* LEFT */}
                    <div className="flex items-center gap-2">
                        <button className="text-white text-[14px] px-3.5 py-1.5 rounded-md border border-[#00EAFF]">
                            Login
                        </button>

                        <button className="text-white text-[14px] px-3.5 py-1.5 rounded-md border border-[#00EAFF]">
                            Home
                        </button>

                        <div className="text-white text-[16px] ml-1.5">
                            <img src="/icons/cart.svg" />
                        </div>
                    </div>

                    {/* CENTER LOGO */}
                    <div className="absolute left-1/2 -translate-x-1/2 flex items-center text-white text-[28px] font-medium tracking-[1px]">
                        <img
                            src="/images/rupee_sign.png"
                            alt=""
                            className="w-8.75 h-8.75 -mt-2.25 -mr-3.75"
                        />
                        <span>GIFT</span>
                    </div>

                    {/* RIGHT SEARCH */}
                    <div className="relative hidden md:block w-61">
                        <input
                            type="text"
                            placeholder="Search product"
                            className="
                                w-full h-8.25
                                bg-[#2B6777]
                                border border-[#3cc3e6]
                                rounded-2xl
                                pl-3.5 pr-9
                                text-[13px] text-white
                                placeholder-white/70
                                focus:outline-none
                            "
                        />
                        <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[12px] text-[#00EAFF]">
                            <img src="/icons/search.svg" />
                        </span>
                    </div>

                </div>
            </div>
        </header>
    )
}

export default Header