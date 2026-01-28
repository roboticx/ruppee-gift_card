import { Outlet, useLocation } from "react-router-dom";
import Header from "../Components/common/Header";
import Footer from "../Components/common/Footer";
import LoginComponent from "../Components/models/Login/LoginComponent";
import SignUpComponent from "../Components/models/SignUp/Signup";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch, type RootState } from "../store/store";
import { getAuthRedux, setLoginModal } from "../store/slices/authSlice";

const RootLayout = () => {

    const isLoginOpen = useSelector((state: RootState) => state.auth.isLoginModalOpen);
    const isSignupOpen = useSelector((state: RootState) => state.auth.isSignupModalOpen);

    const dispatch = useAppDispatch();
    const location = useLocation();

    useEffect(() => {
        dispatch(getAuthRedux());
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
