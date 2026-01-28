import { FiLogIn, FiLogOut } from "react-icons/fi";
import { AiOutlineShoppingCart, AiOutlineSearch } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, type RootState } from "../../store/store";
import { logout, setLoginModal } from "../../store/slices/authSlice";
import { useSelector } from "react-redux";

const Header = () => {

    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);

    return (
        <header className="bg-[#2B6777] h-20.25 flex items-center justify-center px-4 md:px-0">
            <div className="w-full md:w-350">
                <div className="relative flex h-20.25 items-center justify-between px-4">

                    {/* LEFT */}
                    <div className="flex items-center gap-4">
                        {/* Mobile: cart + search icons */}
                        <div className="flex gap-4 md:hidden text-white">
                            <AiOutlineSearch className="w-5 h-5" />
                            <AiOutlineShoppingCart className="w-5 h-5" />
                        </div>

                        {/* Desktop: search input */}
                        <div className="hidden md:block relative w-61 h-8.25">
                            <input
                                type="text"
                                placeholder="Search product"
                                className="w-full h-full
                                    bg-[#2B6777]
                                    border border-[#00EAFF]
                                    rounded-2xl
                                    pl-9 pr-4 py-4
                                    text-[13px] text-white
                                    placeholder:white/70
                                    placeholder:pl-1
                                    focus:outline-none"
                            />

                            <span className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 flex items-center justify-center">
                                <AiOutlineSearch className="w-4 h-4 text-white" />
                            </span>
                        </div>
                    </div>

                    {/* CENTER LOGO */}
                    <div
                        className="absolute left-1/2 -translate-x-1/2 flex items-center text-white text-[28px] font-medium tracking-[1px] cursor-pointer"
                        onClick={() => navigate('/')}
                    >
                        <img
                            src="/images/rupee_sign.png"
                            alt=""
                            className="w-8.75 h-8.75 -mt-2.25 -mr-3.75"
                        />

                        <span className="ml-1.75">
                            GIFT
                        </span>
                    </div>

                    {/* RIGHT */}
                    <div className="flex items-center gap-4">

                        {/* Desktop: cart icon on left */}
                        <AiOutlineShoppingCart className="hidden md:block w-6 h-6 text-white cursor-pointer" onClick={() => navigate('/cart')} />

                        {
                            !isLoggedIn &&
                            (
                                <>
                                    <button
                                        className="flex items-center justify-center w-8 h-8 border border-[#00EAFF] rounded-lg md:hidden text-white"
                                        onClick={() => dispatch(setLoginModal(true))}
                                    >
                                        <FiLogIn className="w-5 h-5" />
                                    </button>

                                    {/* Desktop: Login buttons */}
                                    <button
                                        className="hidden md:flex w-18.5 h-8 text-white text-[14px] rounded-lg border border-[#00EAFF] items-center justify-center"
                                        onClick={() => dispatch(setLoginModal(true))}
                                    >
                                        Login
                                    </button>
                                </>
                            )
                        }

                        {
                            isLoggedIn && (
                                <>
                                    <button
                                        className="flex items-center justify-center w-8 h-8 border border-[#00EAFF] rounded-lg md:hidden text-white"
                                        onClick={() => dispatch(logout())}
                                    >
                                        <FiLogOut className="w-5 h-5" />
                                    </button>


                                    {/* Desktop: Login buttons */}
                                    <button
                                        className="hidden md:flex w-18.5 h-8 text-white text-[14px] rounded-lg border border-[#00EAFF] items-center justify-center"
                                        onClick={() => dispatch(logout())}
                                    >
                                        LogOut
                                    </button>
                                </>
                            )
                        }

                    </div>

                </div>
            </div>
        </header>
    )
}

export default Header;
