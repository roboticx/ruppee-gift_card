import { Outlet } from 'react-router-dom'
import Footer from '../components/common/Footer/Footer'
import Header from '../components/common/Header/Header'
import { useAppSelector } from "../store/store";

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