import { Outlet } from "react-router-dom";
import Header from "../components/common/Header/Header";
import Footer from "../components/common/Footer/Footer";

const RootLayout = () => {

    return (
        <>
            <Header />
            <main className="min-h-[65.8vh]">
                <Outlet />
            </main>
            <Footer />
        </>
    );
};

export default RootLayout;
