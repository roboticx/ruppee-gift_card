import { FaRupeeSign } from "react-icons/fa"
import { FaArrowTrendUp } from "react-icons/fa6"
// import { FcBullish } from "react-icons/fc"
import { FiUsers } from "react-icons/fi"
import { IoCartOutline } from "react-icons/io5"

const Analytics = () => {

    const data = [
        {
            icon: FiUsers,
            value: 25,
            title: 'Total Users',
            trendIcon: FaArrowTrendUp,
            trendValue: '+11.01% vs last Period',
            color: 'green'
        },
        {
            icon: IoCartOutline,
            value: 65,
            title: 'Total Orders',
            trendIcon: FaArrowTrendUp,
            trendValue: '+32.9% vs last Period',
            color: 'red'
        },
        {
            icon: FaRupeeSign,
            value: 654,
            title: 'Revenue',
            trendIcon: FaArrowTrendUp,
            trendValue: '+65.01% vs last Period',
            color: 'yellow'
        },
        {
            icon: FaArrowTrendUp,
            value: 32,
            title: 'Avg Order value',
            trendIcon: FaArrowTrendUp,
            trendValue: '+21.01% vs last Period',
            color: 'purple'
        },
    ]

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-5">
            {
                data.map((item: any) => (
                    <div className={`p-5 bg-${item.color}-100 border border-${item.color}-600 flex flex-col gap-1 rounded-2xl`}>
                        <div className={`h-10 w-10 flex justify-center items-center bg-${item.color}-300 rounded-lg`}>
                            <item.icon className={`text-${item.color}-600 text-lg`} />
                        </div>

                        <p className="text-xl sm:text-2xl font-bold">
                            {item.value}
                        </p>

                        <p className={`text-sm font-medium text-${item.color}-400`}>
                            {item.title}
                        </p>

                        <div className={`w-full flex items-center gap-1 font-medium text-${item.color}-600 text-xs`}>
                            <item.trendIcon />

                            <span>
                                {item.trendValue}
                            </span>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Analytics