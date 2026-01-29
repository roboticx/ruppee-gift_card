const EditCategory = () => {
    return (
        <div className=" min-h-screen">
            <div className=" px-4 sm:px-6  py-6">
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
                <div className='w-full rounded-2xl bg-white px-6 py-4'>
                    <div className='flex gap-1 flex-col'>
                        <h1>Category Name</h1>
                        <select name="" id="" className='w-full border border-gray-300 outline-0 p-2 rounded-lg'>
                            <option value="">1</option>
                            <option value="">1</option>
                            <option value="">1</option>
                        </select>
                    </div>
                    <div className='flex my-3 flex-col gap-1 w-full'>
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
                    <input type="text" className='w-full p-2 rounded-xl mt-2 outline-0 border border-gray-300' placeholder="paste image url" />
                    <div className="w-full rounded-lg border min-h-36 py-2 mt-2 border-gray-300 flex justify-center items-center text-gray-400">selected image will appear here </div>

                    <div className="w-full  flex-col mt-3">
                        <h1 className="">Select Products</h1>
                        <input type="text" className='w-full p-2 rounded-xl mt-1 outline-0 border border-gray-300' placeholder="search products here" />
                      <div className="w-full max-h-64 min-h-32 mt-2 border border-gray-300 rounded-xl p-3 overflow-y-auto">
  {[...Array(4)].map((_, index) => (
    <div
      key={index}
      className="flex items-start gap-3 p-2 rounded-md hover:bg-slate-100 transition-colors cursor-pointer"
    >
      <input
        type="checkbox"
        className="h-5 w-5 border-gray-300 mt-1"
      />
      <div className="flex flex-col w-full">
        <h2 className="text-gray-700 text-lg font-medium">
          AND India e-Gift Card
        </h2>
        <p className="text-gray-500 text-xs uppercase mt-0.5">
          Amit@10prcnt
        </p>
        <span className="text-[#F9A27D] text-[10px] font-semibold uppercase mt-1">
          Already in Fashion & Apparel Gift Cards
        </span>
      </div>
    </div>
  ))}
</div>
<div className="flex justify-end gap-3 p-2">
    <div className="flex items-center gap-3">
        <button className="px-6 py-2 bg-gray-400 cursor-pointer font-bold rounded-lg text-white">Cancel</button>
        <button className="px-6 py-2 bg-red-600 cursor-pointer font-bold rounded-lg text-white">Update Successfully</button>
    </div>
</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default EditCategory