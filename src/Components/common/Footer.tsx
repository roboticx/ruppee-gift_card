const Footer = () => {
    return (
        <footer className="bg-[#2b6574]  text-white text-[13px]">
            {/* CONTAINER */}
            <div className="flex justify-center">
                <div className="w-[1350px] px-5 ">
                    <div className="flex justify-between py-10">
                        <div className="w-[60%]">
                            <div className=" mt-1 flex items-center text-white text-[28px] font-medium tracking-[1px]">
                                <img
                                    src="/images/rupee_sign.png"
                                    alt=""
                                    className="w-8.75 h-8.75 -mt-2.25 -mr-3.75"
                                />
                                <span className="ml-1.75">GIFT</span>
                            </div>
                        </div>

                        <div className="w-[20%]">
                            <ul className="flex flex-col gap-2">
                                <li
                                    className="font-inter 
                                        text-[16px] leading-[150%]
                                        text-white
                                        inline-flex items-center"
                                >
                                    About Us
                                </li>
                                <li
                                    className="font-inter 
                                        text-[16px] leading-[150%]
                                        text-white
                                        inline-flex items-center"
                                >
                                    Terms and Condition
                                </li>
                                <li
                                    className="font-inter 
                                        text-[16px] leading-[150%]
                                        text-white
                                        inline-flex items-center"
                                >
                                    Privacy Policy
                                </li>
                            </ul>
                        </div>
                        <div className="w-[20%]">
                            <ul className="flex flex-col gap-2">
                                <li
                                    className="font-inter 
                                        text-[16px] leading-[150%]
                                        text-white
                                        inline-flex items-center"
                                >
                                    Shipping Policy
                                </li>
                                <li
                                    className="font-inter 
                                        text-[16px] leading-[150%]
                                        text-white
                                        inline-flex items-center"
                                >
                                    Cancellation and Refund Policy
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="flex justify-between pb-10">
                        <div className="w-[60%]">
                            <div className=" mt-1 flex items-center text-white text-[28px] font-medium tracking-[1px]">
                                <img
                                    src="/icons/tele.svg"
                                    alt="telegram"
                                    className="w-[12.67px] h-[12.67px]"
                                />
                                <span
                                    className="ml-1.75
                                        inline-flex items-center
                                        font-inter font-medium
                                        text-[13px] leading-[150%]
                                        text-white"
                                >
                                    8860262227
                                </span>

                            </div>
                            <div className=" mt-1 flex items-center text-white text-[28px] font-medium tracking-[1px]">
                                <img
                                    src="/icons/mail.svg"
                                    alt="telegram"
                                    className="w-[12.67px] h-[12.67px]"
                                />
                                <span
                                    className="ml-1.75
                                        inline-flex items-center
                                        font-inter font-medium
                                        text-[13px] leading-[150%]
                                        text-white"
                                >
                                    wazirz@wazirzsmindiapvtltd.com
                                </span>

                            </div>
                        </div>
                        <div className="w-[40%]">
                            <div className=" mt-1 flex items-center text-white text-[28px]">
                                <img
                                    src="/icons/pin.svg"
                                    alt="telegram"
                                    className="w-[15.67px] h-[15.67px]"
                                />
                                <span
                                    className="ml-1.75
                                        inline-flex items-center
                                        font-inter font-medium
                                        text-[12px] leading-[150%]
                                        text-white"
                                >
                                    3097, FLAT NO 2 LEFT SIDE, 2ND FLOOR BACK SIDE GALI NO 34,
                                    TUGHLAKABAD EXTN, Delhi, India - 110019
                                </span>

                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <hr />
            <div className="flex py-5 justify-center">
                <span
                    className="font-inter font-medium
                        text-[16px] leading-[150%]
                        text-white
                        inline-flex items-center"
                >
                    Wazirz © 2025. All rights reserved
                </span>
            </div>
        </footer>
    );
};

export default Footer;
