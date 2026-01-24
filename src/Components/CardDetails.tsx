import Card from './Card'

const CardDetails = () => {
  return (
    <div className="flex justify-center  py-10">
      <div className="w-full max-w-350.5 ">
        <div className="flex flex-col md:flex-row gap-6 md:gap-8 rounded-2xl bg-white py-6 md:py-8 px-4 md:px-8">
          {/* Image Container */}
          <div className="w-full md:w-57.5 md:h-57.5 flex items-center justify-center border border-gray-200 rounded-xl overflow-hidden bg-gray-50">
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

            <p className="font-inter font-normal text-[16px] md:text-[20px] leading-6 md:leading-7.5 tracking-normal text-gray-600">
              Blink It is committed to delivering high-quality, fresh, and trusted products with up to 25% off, making everyday living healthier and more convenient. With a strong focus on quality sourcing and customer satisfaction, Blink It has become a preferred choice for households across India.
            </p>

            <div className="flex justify-end mt-auto">
              <button
                className="w-27.5 h-9 md:w-30.25 md:h-9.5 flex items-center justify-center rounded-lg border border-[#1090B2] bg-[#DFF5FF] text-[#1090B2] font-inter font-medium text-[12px] md:text-[14px] hover:bg-[#cfefff] transition"
              >
                Read more
              </button>
            </div>
          </div>
        </div>

        {/*  */}
        <div
          className="
            w-full
            h-30
            sm:h-35
            md:h-40.25
            lg:h-45
            bg-center bg-cover bg-no-repeat
            my-6 sm:my-8
            rounded-xl
            shadow-xl
            overflow-hidden
          "
          style={{ backgroundImage: `url(${'/images/cards/banner.png'})` }}
        >
        </div>

        {/*  */}
        <Card />
      </div>
    </div>
  )
}

export default CardDetails