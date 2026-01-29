import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../store/store";
import { useEffect } from "react";
import { getAuthRedux, setLoginModal } from "../store/slices/authSlice";
import AdminHeader from "../Components/common/Admin/AdminHeader";
import AdminSidebar from "../Components/common/Admin/AdminSidebar";

const AdminLayout = () => {

    const isLoggedIn = useAppSelector(state => state.auth.isLoggedIn);
    const role = useAppSelector(state => state.auth.role);
    
    const navigate = useNavigate()
    const dispatch = useAppDispatch();
    const location = useLocation();

    useEffect(() => {
        dispatch(getAuthRedux());
        dispatch(setLoginModal(false));
    }, [location.pathname])

    if (!isLoggedIn || role !== 'admin') {
        navigate('/');
        return;
    }

    return (
        <div className="relative flex h-screen">
            <div className="flex-none z-50">
                <AdminSidebar />
            </div>
            <div className="flex-1 overflow-auto z-10 bg-[#E4F4FF]">
                <AdminHeader />
                <Outlet />
            </div>
        </div>
    )
}

export default AdminLayout