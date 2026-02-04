import React, { useEffect, useState } from "react";
import { FaIdCard } from "react-icons/fa6";
import { SiAmazonsimpleemailservice } from "react-icons/si";
import { setSigninModal } from "../../../store/slices/authSlice";
import { useAppDispatch } from "../../../store/store";
import { createPortal } from "react-dom";
import { POST } from "../../../utils/apiutils";

interface Props {
  isOpen: boolean;
}

const SignUpComponent: React.FC<Props> = ({ isOpen }) => {
  const dispatch = useAppDispatch();
  const [toggleCard, setToggleCards] = useState(true)
  const [showOtp, setShowOtp] = useState(false)
  const [panLoading, setPanLoading] = useState(false);
  const [emailLoading, setEmailLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [timeLeft, setTimeLeft] = useState(0);
  const [canResend, setCanResend] = useState(true);

  useEffect(() => {
    if (!isOpen) return;
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        dispatch(setSigninModal(false));
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [isOpen, dispatch]);


  const sendOtp = async () => {
    if (emailLoading) return;
    setEmailLoading(true);

    try {
      const res = await POST({
        url: 'auth/send-otp',
        data: { email: email },
        toast: true
      });

      if (res.status === "SUCCESS") {
        startOtpTimer(setTimeLeft, setCanResend);
        setShowOtp(true);
      }
    }
    catch (e: any) { }
    finally {
      setEmailLoading(false);
    }
  };

  const verifyOtp = async () => {
    if (emailLoading) return;
    setEmailLoading(true);

    try {
      const res = await POST({
        url: 'auth/verify-otp',
        data: { email, otp },
        toast: true
      });

      if (res.status === "SUCCESS") {
        setShowOtp(true);
      }
    }
    catch (e: any) { }
    finally {
      setEmailLoading(false);
    }
  };

  const resendOtp = async () => {
    if (emailLoading) return;
    setEmailLoading(true);

    try {
      const res = await POST({
        url: 'auth/resend-otp',
        data: { email },
        toast: true
      });

      if (res.status === "SUCCESS") {
        startOtpTimer(setTimeLeft, setCanResend);
      }
    }
    catch (e: any) { }
    finally {
      setEmailLoading(false);
    }
  };

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


  if (!isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="w-full max-w-137.5 bg-white rounded-3xl shadow-2xl overflow-hidden">
        <div className="flex w-full">
          <button
            onClick={() => setToggleCards(true)}
            className="w-1/2 bg-[#2B6777] text-white text-center py-5 font-semibold text-lg border-r border-slate-400"
          >
            PAN CARD
          </button>

          <button
            onClick={() => setToggleCards(false)}
            className="w-1/2 bg-[#2b6777de] text-white text-center py-5 font-semibold text-lg"
          >
            EMAIL
          </button>
        </div>

        {
          toggleCard
            ? (
              <div className="px-14 py-12">
                <div className="flex flex-col items-center mb-8">
                  <FaIdCard size={64} className="text-[#2B6777] mb-3" />

                  <h1 className="text-2xl font-bold text-[#2B6777]">
                    Enter your details to register
                  </h1>

                  <p className="text-[#2B6777] font-bold mt-2 text-sm">
                    We verify your PAN for secure onboarding
                  </p>
                </div>

                <div className="flex flex-col gap-4">
                  <input
                    type="text"
                    placeholder="Enter name as per PAN card"
                    className="py-3 px-6 border-[#2B6777] text-[#2B6777] rounded-full border text-lg outline-0"
                  />

                  <input
                    type="text"
                    placeholder="Enter PAN number"
                    className="py-3 px-6 rounded-full border-[#2B6777] text-[#2B6777] border uppercase tracking-widest text-lg outline-0"
                  />

                  <button
                    disabled={panLoading}
                    onClick={() => {
                      setPanLoading(true);
                      setTimeout(() => setPanLoading(false), 2000);
                    }}
                    className="mt-2 bg-[#2B6777] disabled:opacity-60
                  text-white py-3 rounded-full text-lg font-semibold
                  flex justify-center items-center gap-2"
                  >
                    {panLoading ? <div className="loader" /> : "Verify PAN"}
                  </button>

                </div>

                <p className="text-gray-400 text-sm font-medium text-center mt-6">
                  Note: Please enter the same name as mentioned on your PAN card
                </p>
              </div>
            ) : (
              <div className="px-14 py-12">
                <div className="flex flex-col items-center mb-8">
                  <SiAmazonsimpleemailservice size={64} className="text-[#2B6777] mb-3" />

                  <h1 className="text-2xl font-bold text-[#2B6777]">
                    Enter your details to register
                  </h1>

                  <p className="text-[#2B6777] font-semibold mt-2 text-sm">
                    We verify your Email for secure onboarding
                  </p>
                </div>

                <div className="flex flex-col gap-4">
                  <input
                    type="text"
                    placeholder="Enter email"
                    className="py-3 px-6 rounded-full border border-[#2B6777] text-[#2B6777] text-lg  outline-0"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />

                  {
                    showOtp ? (
                      <div >
                        <input
                          type="text"
                          placeholder="Enter 6 digit OTP"
                          className="w-full py-3 px-6 rounded-full border border-[#2B6777] text-[#2B6777] tracking-widest text-md outline-0"
                          value={otp}
                          onChange={(e) => setOtp(e.target.value)}
                        />

                        <p className="text-[18px] text-black/90 leading-relaxed mt-3 font-normal text-end">
                          Don’t receive it yet? {" "}
                          {canResend
                            ? (
                              <button
                                className="underline text-blue-500 font-semibold"
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

                      </div>
                    )
                      : ""
                  }

                  <button
                    disabled={emailLoading}
                    onClick={showOtp ? verifyOtp : sendOtp}
                    className="mt-2 bg-[#2B6777] disabled:opacity-60
                    text-white py-3 rounded-full text-lg font-semibold
                    flex justify-center items-center gap-2"
                  >
                    {emailLoading
                      ? (
                        <div className="loader" />
                      )
                      : (
                        showOtp
                          ? (
                            "Verify Email"
                          )
                          : (
                            "Send OTP"
                          )
                      )
                    }
                  </button>
                </div>
              </div>
            )
        }
      </div>
    </div>,
    document.body
  );
};

export default SignUpComponent;