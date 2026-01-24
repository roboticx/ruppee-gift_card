import { Outlet } from "react-router-dom";
import Header from "../Components/common/Header";
import Footer from "../Components/common/Footer";

const RootLayout = () => {

    return (
        <>
            <Header />
            <main className="min-h-[65.8vh] max-w-350.5 mx-auto">
                <Outlet />
            </main>
            <Footer />
        </>
    );
};

export default RootLayout;
