import { Outlet, useLocation } from "react-router-dom";
import Header from "../Components/common/Header";
import Footer from "../Components/common/Footer";
import LoginComponent from "../(main)/Login/LoginComponent";
import { useSelector } from "react-redux";
import { useAppDispatch, type RootState } from "../store/store";
import { useEffect } from "react";
import { setLoginModal } from "../store/slices/authSlice";
import SignUpComponent from "../(main)/SignUp/Signup";

const RootLayout = () => {

    const isLoginOpen = useSelector((state: RootState) => state.auth.isLoginModalOpen);
    const isSignupOpen = useSelector((state: RootState) => state.auth.isSignupModalOpen);

    const dispatch = useAppDispatch();
    const location = useLocation();

    useEffect(() => {
        dispatch(setLoginModal(false));
    }, [location.pathname])

    return (
        <>
            <Header />
            <main className="min-h-[65.8vh] max-w-350.5 mx-auto">
                <Outlet />
            </main>
            <Footer />
            {isLoginOpen && <LoginComponent isOpen={isLoginOpen} />}
            {isSignupOpen && <SignUpComponent isOpen={isSignupOpen} />}
        </>
        
    );
};

export default RootLayout;
