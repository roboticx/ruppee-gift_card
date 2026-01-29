
import { useEffect, useState } from 'react';
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { IoIosHome } from "react-icons/io";


const AdminSidebar = () => {

    const [isSidebarOpen, setSidebar] = useState(true);
    const toggleSidebar = () => setSidebar(prev => !prev);

    const sidebarMenu = [
        {
            title: 'Pay Bills',
            route: '',
            icon: IoIosHome
        },
        {
            title: 'Login',
            route: 'login',
            icon: IoIosHome
        },
    ];

    useEffect(() => {
        const handleResize = () => {
            setSidebar(window.innerWidth > 750);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div
            className={`
                group/sidebar 
                relative flex overflow-hidden flex-col
                h-full 
                bg-gray-50/60 border-input 
                shadow-[inset_-1px_0_0_rgba(0,0,0,0.04)] backdrop-blur-sm 
                transition-[width] duration-300 
                ${isSidebarOpen ? "w-50" : "w-20"}
            `}
        >

            {/* Right divider */}
            <div
                className="pointer-events-none absolute inset-y-0 right-0 w-px bg-linear-to-b from-transparent via-black/10 to-transparent"
            />

            <div
                className={`sticky top-0 z-10 flex h-16 items-center justify-between border-b
                    bg-white/80 border-input
                    px-2 backdrop-blur-md
                `}
            >
                <a
                    href="/"
                    className={`inline-flex items-center gap-2 rounded-md px-1 py-1.5 transition
                        ${isSidebarOpen
                            ? 'hover:bg-[#7573ff]/10'
                            : 'hover:bg-transparent mx-auto'
                        }`}
                >
                    <img
                        src="/images/rupee_sign.png"
                        alt=""
                        className="w-8.75 h-8.75 -mt-2.25 -mr-3.75"
                    />

                    <span className="ml-1.75">
                        GIFT
                    </span>
                </a>

                <button
                    className={`inline-flex items-center justify-center text-sm font-medium transition-all
                        disabled:pointer-events-none disabled:opacity-50
                        focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]
                        hover:shadow size-7 rounded-full
                        hover:bg-accent hover:text-accent-foreground`}
                    onClick={toggleSidebar}
                >
                    {isSidebarOpen ? <FiChevronRight /> : <FiChevronLeft />}
                </button>
            </div>

            <nav className={`flex-1 overflow-y-auto ${isSidebarOpen ? 'px-2 py-3' : 'p-1'} hide-scroll`}>
                {isSidebarOpen && (
                    <div className="space-y-4">
                        {sidebarMenu.map((item: any, i: number) => {
                            const href = `/${item.route}`;


                            return (
                                <div key={i} className="mt-1 space-y-1 border-l border-gray-200 pl-1 capitalize">
                                    <a
                                        className={`group/link relative flex items-center gap-3 rounded-full px-3 py-2 text-sm transition-all active:scale-[0.99] text-gray-700 hover:bg-[#7573ff]/20`}
                                        href={href}
                                    >
                                        <span
                                            className={`absolute left-0 top-1/2 -translate-y-1/2 h-5 w-0.5 rounded
                    bg-transparent group-hover/link:bg-gray-300`}
                                        ></span>
                                        <item.icon className={`text-gray-700`} />
                                        <span className="truncate">{item.title}</span>
                                    </a>
                                </div>
                            );
                        })}
                    </div>
                )}

                {!isSidebarOpen && (
                    <div className="grid grid-cols-1 gap-1">
                        {sidebarMenu.map((item: any, i: number) => {
                            const href = `/${item.route}`;

                            return (
                                <a
                                    key={i}
                                    className={`group relative flex items-center justify-center rounded-xl p-3 transition active:scale-95
                hover:bg-[#7573ff]/20 bg-transparent`}
                                    href={href}
                                >
                                    <item.icon className={`text-gray-700`} />
                                    <div
                                        className="fixed left-full translate-y-0 ml-3 opacity-0 pointer-events-none z-50 
                  group-hover:opacity-100 group-hover:pointer-events-auto transition duration-150"
                                    >
                                        <div className="relative bg-primary text-white w-fit rounded-xl px-3 py-1.5 text-xs shadow-lg">
                                            <span className="text-nowrap capitalize w-max flex">{item.title || ''}</span>
                                            <span className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1">
                                                <svg className="fill-primary size-2.5 -rotate-45" width="10" height="10" viewBox="0 0 10 10">
                                                    <polygon points="0,0 10,0 0,10"></polygon>
                                                </svg>
                                            </span>
                                        </div>
                                    </div>
                                </a>
                            );
                        })}
                    </div>
                )}
            </nav>
        </div>


    );
}

export default AdminSidebar
