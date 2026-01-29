import { useEffect, useState } from 'react';
import { CiShoppingCart } from 'react-icons/ci';
import { FiChevronLeft, FiChevronRight, FiUsers } from "react-icons/fi";
import { LuFolderTree, LuPackage } from 'react-icons/lu';
import { MdOutlineDashboard } from 'react-icons/md';
import { VscGraph } from 'react-icons/vsc';

const AdminSidebar = () => {

    const [isSidebarOpen, setSidebar] = useState(true);
    const [isSmallScreen, setSmallScreen] = useState(false);
    const toggleSidebar = () => setSidebar(prev => !prev);
    const [tooltipPos, setTooltipPos] = useState<{ top: number; left: number } | null>(null);

    const sidebarMenu = [
        {
            title: 'Overview',
            route: 'overview',
            icon: MdOutlineDashboard
        },
        {
            title: 'Products',
            route: 'products-list',
            icon: LuPackage
        },
        {
            title: 'Categories',
            route: 'categories',
            icon: LuFolderTree
        },
        {
            title: 'Users',
            route: 'users',
            icon: FiUsers
        },
        {
            title: 'Orders',
            route: 'orders',
            icon: CiShoppingCart
        },
        {
            title: 'Analytics',
            route: 'analytics',
            icon: VscGraph
        },
    ];

    useEffect(() => {
        const handleResize = () => {
            setSidebar(window.innerWidth > 750);
            setSmallScreen(window.innerWidth < 750)
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const showTooltip = (e: React.MouseEvent<HTMLAnchorElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();

        setTooltipPos({
            top: (rect.top + rect.height / 2) - 12,
            left: rect.right + 8,
        });
    };

    const hideTooltip = () => setTooltipPos(null);

    return (
        <div
            className={`
                group/sidebar 
                relative flex flex-col
                h-full 
                bg-[#E4F4FF]/60 border-input 
                shadow-[inset_-1px_0_0_rgba(0,0,0,0.04)] backdrop-blur-sm 
                transition-[width] duration-300 
                ${isSidebarOpen ? "w-50" : "w-20"}
            `}
        >

            {/* Right divider */}
            <div
                className="pointer-events-none absolute inset-y-0 right-0 w-px bg-linear-to-b from-transparent via-black/10 to-transparent"
            />

            <div className={`sticky top-0 z-10 flex h-16 items-center justify-between border-b border-gray-300 px-2 backdrop-blur-md`}>
                <a
                    href="/"
                    className={`flex items-center justify-center rounded-md px-1 py-1.5 transition
                        ${isSidebarOpen
                            ? 'hover:bg-[#7573ff]/10'
                            : 'hover:bg-transparent mx-auto'
                        }
                    `}
                >
                    <img
                        src="/images/r.png"
                        alt=""
                        className={`${isSidebarOpen ? 'size-8' : 'size-7'}`}
                    />
                    {
                        isSidebarOpen &&
                        (
                            <span className="font-bold text-xl text-[#2B6777]">
                                GIFT
                            </span>
                        )
                    }
                </a>

                {
                    !isSmallScreen &&
                    (
                        <button
                            className={`
                                bg-[#2B6777]/10 text-[#2b6777]
                                absolute -right-3 top-1/2 -translate-y-1/2
                                z-500
                                flex items-center justify-center 
                                font-bold p-1.5
                                transition 
                                disabled:pointer-events-none disabled:opacity-50
                                shadow rounded-full
                                hover:bg-[#2B6777]/30 hover:text-[#2b6777]
                                outline-none
                            `}
                            onClick={toggleSidebar}
                            disabled={isSmallScreen}
                        >
                            {isSidebarOpen ? <FiChevronRight /> : <FiChevronLeft />}
                        </button>
                    )
                }
            </div>

            <nav className={`flex-1 overflow-y-auto ${isSidebarOpen ? 'px-2 py-3' : 'p-1'} hide-scroll`}>

                {isSidebarOpen && (
                    <div className="space-y-3">
                        {sidebarMenu.map((item: any, i: number) => {
                            const href = `/${item.route}`;
                            return (
                                <div key={i} className="mt-1 space-y-1 border-l border-gray-200 pl-1 capitalize">
                                    <a
                                        className={`group/link relative flex items-center gap-3 rounded-full px-3 py-2 text-sm transition-all active:scale-[0.99] text-gray-700 hover:bg-[#7573ff]/20`}
                                        href={href}
                                    >
                                        <span className={`absolute left-0 top-1/2 -translate-y-1/2 h-5 w-0.5 rounded bg-transparent group-hover/link:bg-gray-300`}></span>
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
                            return (
                                <a
                                    key={i}
                                    href={`/${item.route}`}
                                    onMouseEnter={showTooltip}
                                    onMouseLeave={hideTooltip}
                                    className={`group relative flex items-center justify-center rounded-xl p-3 transition active:scale-95 hover:bg-[#7573ff]/20 bg-transparent`}
                                >
                                    <item.icon className={`text-gray-700`} />

                                    {tooltipPos && (
                                        <div
                                            className="
                                            fixed z-9999
                                            ml-3 
                                            opacity-0 pointer-events-none 
                                            group-hover:opacity-100 group-hover:pointer-events-auto 
                                            transition duration-150
                                        "
                                            style={{
                                                top: tooltipPos.top,
                                                left: tooltipPos.left,
                                            }}
                                        >
                                            <div className="relative bg-violet-500 text-white w-fit rounded-xl px-3 py-1.5 text-xs shadow-lg">
                                                <span className="text-nowrap capitalize w-max flex">
                                                    {item.title || ''}
                                                </span>

                                                <span className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1">
                                                    <svg className="fill-violet-500 size-2.5 -rotate-45" width="10" height="10" viewBox="0 0 10 10">
                                                        <polygon points="0,0 10,0 0,10"></polygon>
                                                    </svg>
                                                </span>
                                            </div>
                                        </div>
                                    )}
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
