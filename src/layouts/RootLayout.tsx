import { Outlet, useLocation } from "react-router-dom";
import Header from "../Components/common/Header";
import Footer from "../Components/common/Footer";
import LoginComponent from "../(main)/Login/LoginComponent";
import { useSelector } from "react-redux";
import { useAppDispatch, type RootState } from "../store/store";
import { useEffect } from "react";
import { getAuthRedux, setLoginModal } from "../store/slices/authSlice";

const RootLayout = () => {

    const isLoginOpen = useSelector((state: RootState) => state.auth.isLoginModalOpen);

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
        </>
    );
};

export default RootLayout;
