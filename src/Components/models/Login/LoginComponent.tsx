import React, { useEffect, useState } from "react";
import { ImCross } from "react-icons/im";
import { setLoginModal, loginSuccess } from "../../../store/slices/authSlice";
import { useAppDispatch } from "../../../store/store";
import { POST } from "../../../utils/apiutils";

interface Props {
    isOpen: boolean;
}

const LoginComponent: React.FC<Props> = ({ isOpen }) => {

    const [loading, setLoading] = useState(false);
    const [isOtpSend, setIsOtpSended] = useState(false);
    const [mobileNumber, setMobileNumber] = useState('');
    const [otp, setOtp] = useState('');
    const [timeLeft, setTimeLeft] = useState(0);
    const [canResend, setCanResend] = useState(true);

    const dispatch = useAppDispatch();

    const startOtpTimer = (
        setTimeLeft: React.Dispatch<React.SetStateAction<number>>,
        setCanResend: React.Dispatch<React.SetStateAction<boolean>>
    ) => {
        setCanResend(false);
        setTimeLeft(60);

        const interval = setInterval(() => {
            setTimeLeft((prev) => {
                if (prev <= 1) {
                    clearInterval(interval);
                    setCanResend(true);
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);
    };

    const sendOtp = async () => {
        if (loading) return;
        setLoading(true);

        try {
            const res = await POST({
                url: 'auth/send-otp',
                data: { mobileNumber: mobileNumber },
                toast: true
            });

            startOtpTimer(setTimeLeft, setCanResend);

            res.status == "SUCCESS" ? setIsOtpSended(true) : dispatch(setLoginModal(false));
        }
        catch (e: any) { }
        finally {
            setLoading(false);
        }
    };

    const verifyOtp = async () => {
        if (loading) return;
        setLoading(true);

        try {
            const res = await POST({
                url: 'auth/verify-otp',
                data: { mobileNumber, otp },
                toast: true
            });

            if (res.status === 'SUCCESS') {
                setIsOtpSended(false);

                localStorage.setItem("token", res.data.token);
                localStorage.setItem("user", JSON.stringify(res.data.user));
                localStorage.setItem("role", res.data.user.role);
                dispatch(loginSuccess(res.data));
            }
        }
        catch (e: any) { }
        finally {
            dispatch(setLoginModal(false))
            setLoading(false);
        }
    };

    const resendOtp = async () => {
        if (loading) return;
        setLoading(true);

        try {
            const res = await POST({
                url: 'auth/resend-otp',
                data: { mobileNumber },
                toast: true
            });

            if (res.status === 'SUCCESS') {
                startOtpTimer(setTimeLeft, setCanResend);
            }
        }
        catch (e: any) { }
    };

    useEffect(() => {
        if (isOpen) {
            const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

            document.body.style.overflow = "hidden";
            document.body.style.paddingRight = `${scrollbarWidth}px`;
        }
        else {
            document.body.style.overflow = "";
            document.body.style.paddingRight = "";
        }

        return () => {
            document.body.style.overflow = "";
            document.body.style.paddingRight = "";
        };
    }, [isOpen]);

    useEffect(() => {
        if (!isOpen) return;

        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                dispatch(setLoginModal(false));
            }
        };

        window.addEventListener("keydown", handleEsc);
        return () => window.removeEventListener("keydown", handleEsc);
    }, [isOpen, dispatch]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
            <div className="w-full max-w-130 bg-white rounded-[14px] px-10 py-12 text-center shadow-xl relative">

                <button
                    className="absolute top-4 right-4 z-50"
                    onClick={() => dispatch(setLoginModal(false))}
                >
                    <ImCross className="text-red-500 text-xl" />
                </button>

                {/* ICON */}
                <div className="flex justify-center mb-6">
                    <div className="w-18 h-26 rounded-[14px] border-2 border-[#2f6f7e] flex items-center justify-center relative">
                        <span className="absolute top-3.5 w-5.5 h-0.5 bg-[#2f6f7e] rounded"></span>
                    </div>
                </div>

                {
                    !isOtpSend &&
                    <>
                        {/* TITLE */}
                        < h2 className="text-[20px] font-semibold text-black mb-2">
                            Please enter your mobile number
                        </h2>

                        {/* DESCRIPTION */}
                        <p className="text-[18px] text-black/80 leading-relaxed mb-8 font-normal">
                            Your transaction will be linked with this number. Don’t worry, we’ll
                            never share it.
                        </p>

                        {/* MOBILE NUMBER */}
                        <input
                            type="text"
                            placeholder="Enter Mobile Number"
                            className="border-0 
                                mb-6 p-3
                                text-[28px] text-center font-bold 
                                placeholder:font-semibold placeholder:text-neutral-400
                                tracking-[2px] 
                                outline-none"
                            maxLength={10}
                            value={mobileNumber}
                            onChange={(e) => {
                                const value = e.target.value.replace(/\D/g, '');
                                setMobileNumber(value);
                            }}
                        />

                        {/* BUTTON */}
                        <button
                            className="
                                bg-[#2f6f7e]
                                text-white
                                text-[18px]
                                px-10 py-2.5
                                rounded-[10px]
                                hover:bg-[#285f6b]
                                transition
                                mb-6
                                disabled:bg-[#2f6f7e]/80 disabled:pointer-events-none
                            "
                            onClick={sendOtp}
                            disabled={mobileNumber.length < 10 || loading}
                        >
                            Send OTP
                        </button>

                        {/* PRIVACY TEXT */}
                        <p className="text-[18px] text-black/80">
                            By clicking ‘Send OTP’, you accept our{" "} <br />
                            <span className="text-[#2f6f7e] font-semibold cursor-pointer">
                                Privacy Policy
                            </span>
                        </p>
                    </>
                }

                {
                    isOtpSend &&
                    <>
                        {/* TITLE */}
                        < h2 className="text-[20px] font-semibold text-black mb-2">
                            We text you a code
                        </h2>

                        {/* DESCRIPTION */}
                        <p className="text-[18px] text-black/80 leading-relaxed font-normal mb-4">
                            Please enter the OTP sent to {mobileNumber.replace(/(\d{5})(\d+)/, "$1-$2")}.
                        </p>

                        <p className="text-[18px] text-black/90 leading-relaxed mb-8 font-normal">
                            Don’t receive it yet? {" "}
                            {canResend
                                ? (
                                    <button
                                        className="underline"
                                        onClick={resendOtp}
                                    >
                                        Resend OTP
                                    </button>
                                )
                                : (
                                    <span>
                                        Retry again in {" "}
                                        <span className="text-red-500">
                                            {timeLeft}s
                                        </span>
                                    </span>
                                )
                            }
                        </p>

                        {/* MOBILE NUMBER */}
                        <input
                            type="text"
                            placeholder="6-digit code"
                            className="border-0 
                                mb-6 p-3
                                text-[28px] text-center font-bold 
                                placeholder:font-semibold placeholder:text-neutral-400
                                tracking-[2px] 
                                outline-none"
                            maxLength={6}
                            value={otp}
                            onChange={(e) => {
                                const value = e.target.value.replace(/\D/g, '');
                                setOtp(value);
                            }}
                        />

                        {/* BUTTON */}
                        <button
                            className="
                                bg-[#2f6f7e]
                                text-white
                                text-[18px]
                                px-10 py-2.5
                                rounded-[10px]
                                hover:bg-[#285f6b]
                                transition
                            "
                            onClick={verifyOtp}
                            disabled={otp.length < 6 || loading}
                        >
                            Log In
                        </button>
                    </>
                }

            </div>
        </div >
    );
};

export default LoginComponent;