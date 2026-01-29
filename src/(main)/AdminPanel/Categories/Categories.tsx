import { useState } from "react";
import { GoPlus } from "react-icons/go";
import { Link } from "react-router-dom";
const Categories = () => {
    const [isActive, setIsActive] = useState(true);
    return (
        <div className=" min-h-screen">
            <div className=" px-4 sm:px-6  py-10">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-7">
                    <div>
                            <h1 className="font-bold text-3xl">
                            Products
                        </h1>
                         <p className="font-semibold text-md text-gray-500">
                            All your listed Products
                        </p>
                    </div>
                </div>
                <div className="flex items-start w-full">
                    <button className="flex items-center gap-2 bg-red-700 px-4 py-2 text-white font-semibold rounded-lg"><GoPlus color="white" size={22} /><span>Add Category</span></button>
                </div>
                <div className="bg-white border mt-12 border-gray-300 rounded-xl overflow-x-auto">
                    <table className="min-w-[900px] w-full border-collapse">
                        <thead>
                            <tr className="bg-gray-50 text-left text-sm font-semibold text-gray-600">
                                <th className="px-4 py-2">Image</th>
                                <th className="px-4 py-2">Name</th>
                                <th className="px-4 py-2">Products</th>
                                <th className="px-4 py-2">Status</th>
                                <th className="px-4 py-2">Created at</th>
                                <th className="px-4 py-2 text-center">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="text-sm text-gray-800">
                               <tr
                                className="border-t border-gray-300 hover:bg-gray-50 transition">
                                <td className="px-4 py-2">
                                    <div className="w-16 h-16 overflow-hidden rounded-lg">
                                        <img src="https://thumbs.dreamstime.com/b/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg" alt="" className="w-16 h-16 object-cover" />
                                    </div>
                                </td>
                                <td className="px-4 py-4 text-sm font-semibold text-gray-500">Amit singh manral</td>
                                <td className="px-4 py-4 text-sm font-semibold text-gray-500">
                                    
                                    10%
                                </td>
                                <td className="px-4 py-4"><button
                                        onClick={() => setIsActive(!isActive)}
                                        className={`relative inline-flex h-6 w-11 items-center rounded-full transition
                                        ${isActive ? "bg-green-500" : "bg-gray-300"}`}>
                                        <span
                                            className={`inline-block h-4 w-4 transform rounded-full bg-white transition
                                        ${isActive ? "translate-x-6" : "translate-x-1"}`}/>
                                    </button></td>
                                <td className="px-4 py-4 text-sm font-semibold text-gray-500">
                                    {new Date().toLocaleDateString()}
                                </td>
                                <td className="px-4 py-4">
                                    <div className="flex justify-center items-center gap-4">
                                        <span className=" text-sm font-semibold text-gray-500 underline">Edit</span>
                                        <span className=" text-sm font-semibold text-red-500 underline">Delete</span>
                                    </div>
                                </td>
                            </tr>
                             <tr
                                className="border-t border-gray-300 hover:bg-gray-50 transition">
                                <td className="px-4 py-4">
                                    <div className="w-16 h-16 overflow-hidden rounded-lg">
                                        <img src="https://121clicks.com/wp-content/uploads/2023/11/outstanding-nature-photos-reddit-02.jpg" alt="" className="w-16 h-16 object-cover" />
                                    </div>
                                </td>
                                <td className="px-4 py-4 text-sm font-semibold text-gray-500">Amit singh manral</td>
                                <td className="px-4 py-4 text-sm font-semibold text-gray-500">
                                    
                                    10%
                                </td>
                                <td className="px-4 py-4"><button
                                        onClick={() => setIsActive(!isActive)}
                                        className={`relative inline-flex h-6 w-11 items-center rounded-full transition
                                        ${isActive ? "bg-green-500" : "bg-gray-300"}`}>
                                        <span
                                            className={`inline-block h-4 w-4 transform rounded-full bg-white transition
                                        ${isActive ? "translate-x-6" : "translate-x-1"}`}/>
                                    </button></td>
                                <td className="px-4 py-4 text-sm font-semibold text-gray-500">
                                    {new Date().toLocaleDateString()}
                                </td>
                                <td className="px-4 py-4">
                                    <div className="flex justify-center items-center gap-4">
                                        <Link to={"/edit-categories"} className=" text-sm font-semibold text-gray-500 underline" >Edit</Link>
                                        <span className=" text-sm font-semibold text-red-500 underline">Delete</span>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};
export default Categories;