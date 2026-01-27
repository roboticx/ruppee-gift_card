import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="bg-[#2b6574] text-white text-[13px] w-full overflow-x-hidden">
      <div className="flex justify-center px-4">
        <div className="w-full md:w-340">

          {/* TOP SECTION */}
          <div className="flex flex-col md:flex-row justify-between py-10 gap-8">

            {/* LOGO */}
            <div className="w-full md:w-[60%]">
              <div className="flex items-center text-[28px] font-medium tracking-[1px]">
                <img
                  src="/images/rupee_sign.png"
                  alt=""
                  className="w-8 h-8 -mt-2 -mr-3"
                />
                <span className="ml-2">GIFT</span>
              </div>
            </div>

            {/* LINKS 1 */}
            <div className="w-full md:w-[20%]">
              <ul className="flex flex-col gap-2">
                {["About Us", "Terms and Condition", "Privacy Policy"].map(
                  (item, i) => (
                    <li
                      key={i}
                      className="text-[16px] leading-[150%] cursor-pointer"
                      onClick={() => navigate("/")}
                    >
                      {item}
                    </li>
                  )
                )}
              </ul>
            </div>

            {/* LINKS 2 */}
            <div className="w-full md:w-[20%]">
              <ul className="flex flex-col gap-2">
                {["Shipping Policy", "Cancellation and Refund Policy"].map(
                  (item, i) => (
                    <li
                      key={i}
                      className="text-[16px] leading-[150%] cursor-pointer"
                      onClick={() => navigate("/")}
                    >
                      {item}
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>

          {/* CONTACT SECTION */}
          <div className="flex flex-col md:flex-row justify-between pb-10 gap-8">

            {/* CONTACT */}
            <div className="w-full md:w-[60%] flex flex-col gap-3">

              <div className="flex items-center gap-2">
                <img src="/icons/tele.svg" className="w-3 h-3" />
                <span
                  className="text-[13px] cursor-pointer"
                  onClick={() => (window.location.href = "tel:7706063838")}
                >
                  7706063838
                </span>
              </div>

              <div className="flex items-center gap-2">
                <img src="/icons/mail.svg" className="w-3 h-3" />
                <span
                  className="text-[13px] cursor-pointer break-all"
                  onClick={() =>
                    (window.location.href = "mailto:roboticx@gmail.com")
                  }
                >
                  roboticx@gmail.com
                </span>
              </div>
            </div>

            {/* ADDRESS */}
            <div className="w-full md:w-[40%]">
              <div className="flex items-start gap-2">
                <img src="/icons/pin.svg" className="w-4 h-4 mt-1" />
                <span className="text-[12px] leading-[150%] break-words">
                  3097, FLAT NO 2 LEFT SIDE, 2ND FLOOR BACK SIDE GALI NO 34,
                  TUGHLAKABAD EXTN, Delhi, India - 110019
                </span>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* FOOTER BOTTOM */}
      <hr className="opacity-30" />

      <div className="flex justify-center py-5 px-4 text-center">
        <span className="text-[14px] md:text-[16px]">
          Wazirz © 2025. All rights reserved
        </span>
      </div>
    </footer>
  );
};

export default Footer;
