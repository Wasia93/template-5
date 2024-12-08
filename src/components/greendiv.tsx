import Image from "next/image";

const GreenDiv = () => {
  return (
    <div className="w-full bg-[#23856D] mt-[-40px] py-[35px] relative">
      <div className="max-w-[1200px] mx-auto flex items-center justify-between gap-[35px] px-[16px]">
        {/* Left Section */}
        <div className="flex flex-col gap-[20px] text-white">
          <h4 className="font-Montserrat font-normal text-[20px]">SUMMER 2020</h4>
          <h1 className="font-Montserrat font-bold text-[48px] leading-[58px]">
            Vita Classic Product
          </h1>
          <p className="font-Montserrat font-medium text-[14px] leading-[20px] max-w-[340px]">
            We know how large objects will act, We know how objects will act, We know
          </p>
          <div className="flex items-center gap-[20px] mt-[20px]">
            <h3 className="font-Montserrat font-bold text-[24px]">$16.48</h3>
            <button className="bg-[#2DC071] px-[30px] py-[10px] rounded-md text-[14px] font-Montserrat font-semibold hover:bg-[#249A5A] transition">
              ADD TO CART
            </button>
          </div>
        </div>
        {/* Right Section (Image) */}
        <div className="flex-shrink-0 relative top-[35px]">
          <Image
            src="/shop-hero-2-png-picture-1.png" // Direct path from public folder
            alt="Vita Classic Product"
            width={443}
            height={900}
            className="rounded-md object-contain"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default GreenDiv;