import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { getAuthRedux, setLoginModal } from '../store/slices/authSlice';
import { useAppSelector, useAppDispatch } from '../store/store';
import Footer from '../Components/common/Footer';
import Header from '../Components/common/Header';

const AuthLayout = () => {

    const isLoggedIn = useAppSelector(state => state.auth.isLoggedIn);
    const role = useAppSelector(state => state.auth.role);
    
    const navigate = useNavigate()
    const dispatch = useAppDispatch();
    const location = useLocation();

    useEffect(() => {
        dispatch(getAuthRedux());
        dispatch(setLoginModal(false));
    }, [location.pathname])

    if (!isLoggedIn || role !== 'user') {
        navigate('/');
        return;
    }

    return (
        <>
            <Header />
            <main className="min-h-[65.8vh] max-w-350.5 mx-auto">
                <Outlet />
            </main>
            <Footer />
        </>
    )
}

export default AuthLayout