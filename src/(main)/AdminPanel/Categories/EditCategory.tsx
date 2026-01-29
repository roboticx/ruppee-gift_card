const EditCategory = () => {
    return (
        <div className=" min-h-screen">
            <div className=" px-4 sm:px-6  py-10">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-7">
                    <div>
                        <h1 className="font-semibold text-lg sm:text-xl">
                            Edit Category
                        </h1>
                        <p className="text-xs sm:text-sm text-gray-500">
                            Update Category Information
                        </p>
                    </div>
                </div>
                <div className='w-full rounded-2xl bg-white p-6'>
                    <div className='flex gap-2 flex-col'>
                        <h1>Category Name</h1>
                        <select name="" id="" className='w-full border border-gray-300 outline-0 p-2 rounded-lg'>
                            <option value="">1</option>
                            <option value="">1</option>
                            <option value="">1</option>
                        </select>
                    </div>
                    <div className='flex my-7 flex-col gap-2 w-full'>
                        <h1>Category Name</h1>
                        <div className='w-full flex flex-col gap-1 border border-gray-400 rounded-xl border-dashed p-3'>
                            <input type="file" className='w-full  border p-2 border-gray-300 rounded-lg' />
                            <p className='font-semibold text-gray-500 text-xs'>Upload image to cloudinary(JPEG,WEBP,PNG -MAX-5MB)</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        <hr className="flex-1 border-t border-gray-300" />
                        <span className="text-xs font-semibold text-gray-500 whitespace-nowrap">
                            or use url
                        </span>
                        <hr className="flex-1 border-t border-gray-300" />
                    </div>
                    <input type="text" className='w-full p-2 rounded-xl mt-3 outline-0 border border-gray-300' />
                </div>
            </div>
        </div>
    )
}
export default EditCategory