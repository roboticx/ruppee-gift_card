
const Footer = () => {
    return (
        <footer className="bg-[#2b6574] text-white text-[13px]">

            {/* CONTAINER */}
            <div className="w-full px-5">

                {/* TOP */}
                <div className="flex flex-col md:flex-row py-7 pb-4">

                    {/* LEFT */}
                    <div className="md:w-1/3 mb-6 md:mb-0">
                        <div className="text-[20px] font-semibold tracking-[1px]">
                            <span className="text-[#ffcc4d] mr-0.5">₹</span>GIFT
                        </div>
                    </div>

                    {/* CENTER LINKS */}
                    <div className="md:w-1/3 mb-6 md:mb-0">
                        <ul className="space-y-2.5">
                            <li className="text-white/85">About Us</li>
                            <li className="text-white/85">Terms and Condition</li>
                            <li className="text-white/85">Privacy Policy</li>
                        </ul>
                    </div>

                    {/* RIGHT LINKS */}
                    <div className="md:w-1/3">
                        <ul className="space-y-2.5">
                            <li className="text-white/85">Shipping Policy</li>
                            <li className="text-white/85">
                                Cancellation and Refund Policy
                            </li>
                        </ul>
                    </div>

                </div>

                {/* MIDDLE */}
                <div className="flex flex-col md:flex-row items-start md:items-center py-3 pb-4.5">

                    {/* CONTACT */}
                    <div className="md:w-1/3 text-[12px] text-white/85 space-y-1.5 mb-4 md:mb-0">
                        <p>
                            <span className="mr-1">📞</span> +91 8851867109
                        </p>
                        <p>
                            <span className="mr-1">✉</span> wazirz@wazirzindiapvtltd.com
                        </p>
                    </div>

                    {/* ADDRESS */}
                    <div className="md:w-2/3 text-[12px] text-white/85">
                        <p>
                            📍 3097, FLAT NO 2 LEFT SIDE, 2ND FLOOR BACK SIDE GALI NO 34,
                            TUGHLAKABAD EXTN, Delhi, India - 110019
                        </p>
                    </div>

                </div>

            </div>

            {/* BOTTOM */}
            <div className="border-t border-white py-2.5 text-center text-[12px] text-white/85">
                Wazirz © 2025. All rights reserved
            </div>

        </footer>
    );
};

export default Footer