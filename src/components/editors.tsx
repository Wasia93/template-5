import Image from "next/image";

export default function Editors() {
  return (
    <div className="w-full flex justify-center py-10 bg-[#f5f5f5]">
      {/* Container */}
      <div className="w-[1050px] h-auto flex flex-col gap-8 bg-[#FAFAFA] p-10 rounded-md shadow-md">
        {/* Title Section */}
        <div className="flex flex-col items-center">
          <h3 className="font-Montserrat font-semibold text-2xl text-gray-1000 font-bold">
            EDITOR’S PICK
          </h3>
          <p className="text-sm text-gray-500 text-center mt-2">
            Problems trying to resolve the conflict between
          </p>
        </div>

        {/* Images Section */}
        <div className="w-full grid grid-cols-3 gap-6">
          {/* Men Image */}
          <div className="relative">
            <Image
              src="/editor1.png"
              alt="Men"
              width={510}
              height={500}
              className="rounded-md object-cover w-full h-full"
              priority
            />
            <button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white px-8 py-2 shadow-md font-Montserrat font-bold text-gray-800 text-sm hover:bg-gray-100">
              MEN
            </button>
          </div>

          {/* Women Image */}
          <div className="relative">
            <Image
              src="/filter (1).png"
              alt="Women"
              width={240}
              height={500}
              className="rounded-md object-cover w-full h-full"
              priority
            />
            <button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white px-8 py-2 shadow-md font-Montserrat font-bold text-gray-800 text-sm hover:bg-gray-100">
              WOMEN
            </button>
          </div>

          {/* Accessories and Kids Section */}
          <div className="flex flex-col gap-6">
            {/* Accessories */}
            <div className="relative">
              <Image
                src="/filter (2).png"
                alt="Accessories"
                width={240}
                height={242}
                className="rounded-md object-cover w-full h-full"
                priority
              />
              <button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white px-6 py-2 shadow-md font-Montserrat font-bold text-gray-800 text-sm hover:bg-gray-100">
                ACCESSORIES
              </button>
            </div>

            {/* Kids */}
            <div className="relative">
              <Image
                src="/filter (3).png"
                alt="Kids"
                width={240}
                height={242}
                className="rounded-md object-cover w-full h-full"
                priority
              />
              <button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white px-6 py-2 shadow-md font-Montserrat font-bold text-gray-800 text-sm hover:bg-gray-100">
                KIDS
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}