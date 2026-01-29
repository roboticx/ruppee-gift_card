import { FaRupeeSign } from "react-icons/fa"
import { FaArrowTrendUp } from "react-icons/fa6"
import { FcBullish } from "react-icons/fc"
import { FiUsers } from "react-icons/fi"
import { IoCartOutline } from "react-icons/io5"

const Analytics = () => {

    const data = [
        {
            icon: FiUsers,
            value: 25,
            title: 'Total Users',
            trendIcon: FaArrowTrendUp,
            trendValue: '+11.01% vs last Period'
        },
        {
            icon: IoCartOutline,
            value: 65,
            title: 'Total Orders',
            trendIcon: FaArrowTrendUp,
            trendValue: '+32.9% vs last Period'
        },
        {
            icon: FaRupeeSign,
            value: 654,
            title: 'Revenue',
            trendIcon: FaArrowTrendUp,
            trendValue: '+65.01% vs last Period'
        },
        {
            icon: FaArrowTrendUp,
            value: 32,
            title: 'Avg Order value',
            trendIcon: FaArrowTrendUp,
            trendValue: '+21.01% vs last Period'
        },
    ]

    return (

        <div className="p-10">

            <div className="flex flex-col gap-1">
                <h1 className="font-bold text-3xl">
                    Analytics
                </h1>

                <p className="font-semibold text-md text-gray-500 flex items-center gap-1">
                    <FcBullish size={20} />
                    <span>
                        Track Your Bussiness Performance
                    </span>
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-5">
                {
                    data.map((item: any) => (
                        <div className="p-5 bg-white border border-gray-300 flex flex-col gap-1 rounded-2xl">
                            <div className="h-10 w-10 flex justify-center items-center bg-red-100 rounded-lg">
                                <item.icon className="text-red-600 text-lg" />
                            </div>

                            <p className="text-xl sm:text-2xl font-bold">
                                {item.value}
                            </p>

                            <p className="text-sm font-medium text-gray-400">
                                {item.title}
                            </p>

                            <div className="w-full flex items-center gap-1 font-medium text-red-600 text-xs">
                                <item.trendIcon />

                                <span>
                                    {item.trendValue}
                                </span>
                            </div>
                        </div>
                    ))
                }
            </div>

        </div>
    )
}

export default Analytics