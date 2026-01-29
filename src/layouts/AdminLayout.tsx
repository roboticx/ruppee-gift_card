
import { Outlet, useNavigate } from "react-router-dom";
import AdminHeader from "../Components/common/Admin/AdminHeader";
import { useAppSelector } from "../store/store";
import AdminSidebar from "../Components/common/Admin/AdminSidebar";

const AdminLayout = () => {

    const isLoggedIn = useAppSelector(state => state.auth.isLoggedIn);
    const navigate = useNavigate()

    if (!isLoggedIn) {
        navigate('/');
    }

    return (
        <div className="relative flex h-screen overflow-hidden">
            <div className="flex-none z-10">
                <AdminSidebar />
            </div>
            <div className="flex-1 overflow-auto z-0 bg-[#E4F4FF] px-5">
                <AdminHeader />
                <Outlet />
            </div>
        </div>
    )
}

export default AdminLayout