import { Outlet } from 'react-router-dom'
import { useAppSelector } from "../store/store";
import Header from '../Components/common/Header';
import Footer from '../Components/common/Footer';

const AuthLayout = () => {
    const isLoggedIn = useAppSelector(state => state.auth.isLoggedIn);

    return (
        <>
            <Header />
            <main className="min-h-screen">
                <Outlet />
            </main>
            {
                isLoggedIn && <Footer />
            }
        </>
    )
}

export default AuthLayout