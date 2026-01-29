
import { FiLogOut } from "react-icons/fi";
import { useAppDispatch } from "../../../store/store";
import { logout } from "../../../store/slices/authSlice";

const AdminHeader = () => {

    const dispatch = useAppDispatch();

    return (
        <header className="bg-[#E4F4FF] h-16 flex items-center px-4 md:px-0 border-b border-gray-300">

            <div className="ml-auto px-10">
                <button
                    className="flex items-center justify-center text-[#2B6777]"
                    onClick={() => dispatch(logout())}
                >
                    <FiLogOut className="w-5 h-5" />
                </button>
            </div>
        </header >
    )
}

export default AdminHeader