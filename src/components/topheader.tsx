import React from "react";
import { BsTelephone } from "react-icons/bs";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";

const TopHeader = () => {
  return (
    <div className="bg-[#252B42] w-full py-3 text-sm text-white font-montserrat font-bold">
      <div className="max-w-[1440px] mx-auto flex justify-between items-center px-4">
        {/* Left Section */}
        <div className="flex items-center space-x-6">
          {/* Phone Section */}
          <div className="flex items-center space-x-2">
            <BsTelephone className="w-[16px] h-[16px] text-white" />
            <span>(225) 555-0118</span>
          </div>

          {/* Email Section */}
          <div className="flex items-center space-x-2 font-bold">
            <TfiEmail className="w-[16px] h-[16px] text-white" />
            <span>michelle.rivera@example.com</span>
          </div>
        </div>

        {/* Center Section (Promo Text) */}
        <div className="text-center">
          <span>
            Follow us and get a chance to win <span className="font-bold">80% off</span>
          </span>
        </div>

        {/* Right Section (Follow Us with Icons) */}
        <div className="flex items-center space-x-4">
          {/* Follow Us Text */}
          <span className="font-bold">Follow Us:</span>

          {/* Instagram Icon */}
          <a href="#" className="hover:text-gray-400">
            <FaInstagram className="w-[16px] h-[16px]" />
          </a>

          {/* YouTube Icon */}
          <a href="#" className="hover:text-gray-400">
            <FaYoutube className="w-[16px] h-[16px]" />
          </a>

          {/* Facebook Icon */}
          <a href="#" className="hover:text-gray-400">
            <FaFacebookF className="w-[16px] h-[16px]" />
          </a>

          {/* Twitter Icon */}
          <a href="#" className="hover:text-gray-400">
            <FaTwitter className="w-[16px] h-[16px]" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;