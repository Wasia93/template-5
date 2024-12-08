import Image from "next/image";

export default function Whitediv() {
  return (
    <div className="w-full h-auto mt-[-1px]">
      <div className="w-full max-w-[1440px] mx-auto flex flex-col lg:flex-row gap-[30px] px-4 lg:px-0">
        {/* Image Section */}
        <div className="relative w-full lg:w-[707px] h-[682px] flex justify-center">
          <Image
            src="/asian-woman-man-with-winter-clothes 1.png" 
            alt="Asian couple in winter clothes"
            width={707} 
            height={682} 
            className="object-contain rounded-md"
            priority
            layout="intrinsic" // Adding intrinsic layout for better responsiveness
          />
        </div>

        {/* Text Section */}
        <div className="w-full lg:w-[573px] h-auto flex flex-col gap-[20px] justify-center items-center lg:items-start text-center lg:text-left mt-[20px] lg:mt-0">
          <h5 className="text-[14px] lg:text-[16px] font-Montserrat font-bold leading-[24px] text-[#BDBDBD]">
            SUMMER 2020
          </h5>
          <h2 className="lg:w-[375px] text-[24px] lg:text-[40px] font-Montserrat font-bold leading-[32px] lg:leading-[50px] text-[#252B42]">
            Part of the Neural Universe
          </h2>
          <h4 className="lg:w-[375px] text-[16px] lg:text-[20px] font-Montserrat font-normal leading-[24px] lg:leading-[30px] text-[#737373]">
            We know how large objects will act, but things on a small scale.
          </h4>
          <div className="flex flex-wrap justify-center lg:justify-start gap-[10px]">
            {/* Buy Now Button */}
            <button className="w-[140px] lg:w-[156px] h-[52px] rounded-[5px] py-[12px] px-[20px] lg:px-[40px] bg-[#2DC071] flex justify-center items-center hover:bg-[#249A5A] transition">
              <h1 className="text-[14px] font-Montserrat font-bold text-white">
                BUY NOW
              </h1>
            </button>
            {/* Read More Button */}
            <button className="w-[140px] lg:w-[156px] h-[52px] rounded-[5px] py-[12px] px-[20px] lg:px-[40px] border border-[#2DC071] flex justify-center items-center hover:bg-[#f5f5f5] transition">
              <h1 className="text-[14px] font-Montserrat font-bold whitespace-nowrap text-[#2DC071]">
                READ MORE
              </h1>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
// done