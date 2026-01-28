
import { Outlet, useNavigate } from "react-router-dom";
import AdminHeader from "../Components/common/Admin/AdminHeader";
import { useAppSelector } from "../store/store";

const AdminLayout = () => {

    const isLoggedIn = useAppSelector(state => state.auth.isLoggedIn);
    const navigate = useNavigate()

    if (!isLoggedIn) {
        navigate('/');
    }

    return (
        <>
            <AdminHeader />
            <main className="min-h-[65.8vh] max-w-350.5 mx-auto">
                <Outlet />
            </main>
        </>
    )
}

export default AdminLayout