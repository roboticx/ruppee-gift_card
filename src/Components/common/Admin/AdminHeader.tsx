
import { FiLogOut } from "react-icons/fi";
import { useAppDispatch } from "../../../store/store";
import { logout } from "../../../store/slices/authSlice";

const AdminHeader = () => {

    const dispatch = useAppDispatch();

    return (
        <header className="bg-[#2B6777] h-20.25 flex items-center justify-center px-4 md:px-0">
            <div className="w-full md:w-350">
                <div className="relative flex h-20.25 items-center justify-end px-4">

                    {/* RIGHT */}
                    <div className="flex items-center gap-4">

                        <button
                            className="flex items-center justify-center w-8 h-8 text-white"
                            onClick={() => dispatch(logout())}
                        >
                            <FiLogOut className="w-5 h-5" />
                        </button>

                    </div>

                </div>
            </div>
        </header>
    )
}

export default AdminHeader

