import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { GoPlus } from "react-icons/go";
import Toggle from "../../../Components/common/Toggle";
import DeleteConfirmation from "../../../Components/models/DeleteConfirmation";
import { DELETE, FETCH, PUT } from "../../../utils/apiutils";

const categoryList = [
    {
        _id: "cat_001",
        Image: "https://picsum.photos/seed/p1/200/200",
        Name: "Digital Subscriptions",
        Products: 17,
        Status: true,
        Created: "2025-11-03"
    },
    {
        _id: "cat_002",
        Image: "https://picsum.photos/seed/p2/200/200",
        Name: "Adventure & Outdoor Experiences",
        Products: 9,
        Status: false,
        Created: "2025-12-21"
    },
    {
        _id: "cat_003",
        Image: "https://picsum.photos/seed/p3/200/200",
        Name: "Gourmet & Dining Deals",
        Products: 31,
        Status: true,
        Created: "2025-10-14"
    },
    {
        _id: "cat_004",
        Image: "https://picsum.photos/seed/p4/200/200",
        Name: "Smart Gadgets & Accessories",
        Products: 22,
        Status: true,
        Created: "2025-09-09"
    },
    {
        _id: "cat_005",
        Image: "https://picsum.photos/seed/p5/200/200",
        Name: "Luxury Beauty Collections",
        Products: 14,
        Status: false,
        Created: "2025-12-02"
    },
    {
        _id: "cat_006",
        Image: "https://picsum.photos/seed/p6/200/200",
        Name: "Fitness & Lifestyle Passes",
        Products: 27,
        Status: true,
        Created: "2026-01-05"
    },
    {
        _id: "cat_007",
        Image: "https://picsum.photos/seed/p7/200/200",
        Name: "Gaming Credits & Wallets",
        Products: 35,
        Status: true,
        Created: "2025-11-28"
    },
    {
        _id: "cat_008",
        Image: "https://picsum.photos/seed/p8/200/200",
        Name: "Daily Essentials & Mart Deals",
        Products: 12,
        Status: true,
        Created: "2026-01-11"
    },
    {
        _id: "cat_009",
        Image: "https://picsum.photos/seed/p9/200/200",
        Name: "Streetwear & Apparel Cards",
        Products: 19,
        Status: false,
        Created: "2025-08-17"
    },
    {
        _id: "cat_010",
        Image: "https://picsum.photos/seed/p10/200/200",
        Name: "Health Services & Checkups",
        Products: 8,
        Status: true,
        Created: "2026-01-18"
    }
];

const Categories = () => {

    const [categories, setCategories] = useState<any>(categoryList);
    const [isDeleteConfirm, setDeleteConfirm] = useState(false);
    const [modalId, setModalId] = useState('');

    const navigate = useNavigate();

    useEffect(() => {
        getCategories();
    }, []);

    const getCategories = async () => {
        try {
            const res = await FETCH({
                url: `admin/categories`,
                showError: true,
            });

            setCategories(res.data);
        }
        catch (e: any) { }
    }


    const updateStatus = async (id: string, status: boolean) => {
        try {
            const res = await PUT({
                url: `admin/categories/${id}`,
                data: { isActive: status },
                toast: true
            });

            setCategories((prev: any) =>
                prev.map((item: any) =>
                    item._id === id
                        ? { ...item, isActive: res.data.isActive }
                        : item
                )
            );
        }
        catch (e: any) { }
    }

    const deleteCategory = async () => {
        try {
            const res = await DELETE({
                url: `/api/admin/categories/${modalId}`,
                toast: true
            });

            const index = categories.findIndex((item: any) => item._id === res?.data?._id);
            categories.slice(index, 1);
        }
        catch (e: any) { }
        finally {
            setDeleteConfirm(false);
        }
    }

    const joinImageUrl = (base: string, path?: string) => {
        if (!path) {
            return "https://cdn.iconscout.com/icon/free/png-256/free-category-icon-svg-download-png-267498.png";
        }

        let cleanBase = base.replace(/api\/?$/, "");
        cleanBase = cleanBase.replace(/\/+$/, "");
        const cleanPath = path.replace(/^\/+/, "");

        return `${cleanBase}/${cleanPath}`;
    };

    return (
        <div className=" min-h-screen">
            <div className="px-4 sm:px-6  py-10">

                <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between mb-2">
                    <div>
                        <h1 className="font-bold text-3xl">
                            Categories
                        </h1>

                        <p className="font-semibold text-md text-gray-500">
                            Manage Products Categories
                        </p>
                    </div>

                    <button
                        className="flex items-center gap-1 bg-purple-600 px-4 py-2 text-white font-semibold rounded-lg"
                        onClick={() => navigate('/add-category')}
                    >
                        <GoPlus color="white" size={22} />

                        <span>Add Category</span>
                    </button>
                </div>

                {
                    (categories?.length > 0) &&
                    (
                        <div className="bg-white border border-gray-300 rounded-xl overflow-x-auto mt-6">
                            <table className="min-w-225 w-full">
                                <thead>
                                    <tr className="bg-gray-100 text-sm font-semibold text-gray-600">
                                        <th className="px-4 py-3">Image</th>
                                        <th className="px-4 py-3">Name</th>
                                        <th className="px-4 py-3">
                                            GiftCards
                                        </th>
                                        <th className="px-4 py-3">Status</th>
                                        <th className="px-4 py-3">Created at</th>
                                        <th className="px-4 py-3 text-center">Actions</th>
                                    </tr>
                                </thead>

                                <tbody className="text-sm text-gray-800">
                                    {
                                        categories.map((item: any) => (
                                            <tr key={item._id}
                                                className="border-t hover:bg-gray-50 border-gray-300">
                                                <td className="px-4 py-4">
                                                    <div className="w-16 h-16 overflow-hidden rounded-lg">
                                                        <img
                                                            src={joinImageUrl(import.meta.env.VITE_API_BASE_URL, item?.image)}
                                                            alt={item?.name}
                                                            className="w-16 h-16 object-cover"
                                                            crossOrigin="anonymous"
                                                        />
                                                    </div>
                                                </td>

                                                <td className="px-4 py-4 text-sm font-semibold text-gray-500">
                                                    {item?.name}
                                                </td>

                                                <td className="px-4 py-4 text-sm font-semibold text-gray-500">
                                                    {item?.giftCards?.length || 0} GiftCards
                                                </td>

                                                <td className="px-4 py-4">
                                                    <Toggle
                                                        status={item?.isActive}
                                                        toggleName={'status'}
                                                        onChange={() => updateStatus(item?._id, !item?.isActive)}
                                                    />
                                                </td>

                                                <td className="px-4 py-4 text-sm font-semibold text-gray-500 text-nowrap">
                                                    {new Date(item?.createdAt).toLocaleString()}
                                                </td>

                                                <td className="px-4 py-4">
                                                    <div className="flex justify-center items-center gap-4">
                                                        <button
                                                            className="text-sm font-semibold text-gray-500 hover:underline"
                                                            onClick={() => navigate(`/edit-category/${item?._id}`)}
                                                        >
                                                            Edit
                                                        </button>

                                                        <button
                                                            className="text-sm font-semibold text-red-500 hover:underline"
                                                            onClick={() => {
                                                                setDeleteConfirm(true);
                                                                setModalId(item?._id);
                                                            }}
                                                        >
                                                            Delete
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        </div>
                    )
                }
            </div>

            {
                isDeleteConfirm &&
                (
                    <DeleteConfirmation
                        isOpen={isDeleteConfirm}
                        onClose={() => setDeleteConfirm(false)}
                        onDelete={deleteCategory}
                    />
                )
            }
        </div>
    );
};

export default Categories;