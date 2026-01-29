const Categories = () => {
  return (
    <div className="bg-blue-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6  py-16">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-10">
          <div>
            <h1 className="font-semibold text-lg sm:text-xl">
              Products
            </h1>
            <p className="text-xs sm:text-sm text-gray-500">
              All your listed Products
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;