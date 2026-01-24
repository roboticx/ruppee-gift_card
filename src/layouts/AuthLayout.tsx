import { Outlet } from 'react-router-dom'
import Footer from '../Components/common/Footer'
import Header from '../Components/common/Header'
import { useAppSelector } from "../store/store";

const AuthLayout = () => {
    const isLoggedIn = useAppSelector(state => state.auth.isLoggedIn);

    return (
        <>
            <Header />
            <main className="min-h-screen">
                <Outlet />
            </main>
            <Footer />
            {
                isLoggedIn && <Footer />
            }
        </>
    )
}

export default AuthLayout