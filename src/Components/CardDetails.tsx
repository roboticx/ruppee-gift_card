import Card from './Card'

const CardDetails = () => {
  return (
    <div className="flex justify-center px-4 sm:px-6 py-10">
      <div className="w-full max-w-[350.5px] sm:max-w-[700px] lg:max-w-[1402px]">

        {/* Card Container */}
        <div className="flex flex-col md:flex-row gap-6 md:gap-8 rounded-2xl bg-white py-6 md:py-8 px-4 md:px-8">
          
          {/* Image Container */}
          <div className="w-full md:w-[230px] md:h-[230px] flex items-center justify-center border border-gray-200 rounded-xl overflow-hidden bg-gray-50">
            <img
              src={'/images/cards/sct.jpg'}
              alt="Blink It"
              className="h-full w-full object-cover shadow-2xl"
            />
          </div>

          {/* Text Content */}
          <div className="flex-1 flex flex-col gap-4 md:gap-6 py-2 md:py-4">
            <h1 className="font-inter font-semibold text-[18px] md:text-[20px] leading-7 md:leading-7.5 tracking-normal text-gray-900">
              Blink It
            </h1>

            <p className="font-inter font-normal text-[14px] sm:text-[16px] md:text-[20px] leading-5 sm:leading-6 md:leading-7.5 tracking-normal text-gray-600">
              Blink It is committed to delivering high-quality, fresh, and trusted products with up to 25% off, making everyday living healthier and more convenient. With a strong focus on quality sourcing and customer satisfaction, Blink It has become a preferred choice for households across India.
            </p>

            <div className="flex justify-end mt-auto">
              <button
                className="w-24 h-9 sm:w-28 md:w-30.25 md:h-9.5 flex items-center justify-center rounded-lg border border-[#1090B2] bg-[#DFF5FF] text-[#1090B2] font-inter font-medium text-[12px] sm:text-[13px] md:text-[14px] hover:bg-[#cfefff] transition"
              >
                Read more
              </button>
            </div>
          </div>
        </div>

        {/* Banner Image */}
        <div className="px-0 sm:px-4 lg:px-10 mt-6">
          <div
            className="
              w-full
              aspect-[4/1] sm:aspect-[5/1] md:aspect-[6/1]
              bg-center bg-cover bg-no-repeat
              rounded-xl
              shadow-xl
              overflow-hidden
              bg-[url(/images/cards/banner.png)]"
          ></div>
        </div>

        {/* Additional Card Component */}
        <div className="mt-6">
          <Card />
        </div>
      </div>
    </div>
  )
}

export default CardDetails
