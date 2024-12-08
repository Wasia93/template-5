import React from 'react';
import Link from 'next/link';
import { RiArrowDropDownLine } from 'react-icons/ri';
import { MdOutlineAccountCircle } from 'react-icons/md';
import { IoCartOutline } from 'react-icons/io5';
import { CiSearch, CiHeart } from 'react-icons/ci';

const Navbar = () => {
  return (
    <div className="max-w-[1437px] h-[58px] mx-auto flex justify-between items-center text-[#252B42]">
      {/* Logo Section */}
      <div className="w-[187px] h-[58px] py-[13px]">
        <h3 className="text-2xl font-bold leading-8 tracking-[0.100px]">Bandage</h3>
      </div>

      {/* Navigation Links */}
      <div className="w-[1155px] h-[58px] flex justify-between items-center py-[2px]">
        {/* Links */}
        <div className="w-[361px] h-[25px] flex gap-[15px]">
          <Link href="/" className="text-sm font-bold leading-6 tracking-[0.200px] text-[#737373]">
            Home
          </Link>
          <Link
            href="/"
            className="text-sm leading-6 tracking-[0.200px] flex items-center text-[#252B42]"
          >
            Shop <RiArrowDropDownLine className="text-[20px]" />
          </Link>
          <Link href="/" className="text-sm font-bold leading-6 tracking-[0.200px] text-[#737373]">
            About
          </Link>
          <Link href="/" className="text-sm font-bold leading-6 tracking-[0.200px] text-[#737373]">
            Blog
          </Link>
          <Link href="/" className="text-sm font-bold leading-6 tracking-[0.200px] text-[#737373]">
            Contact
          </Link>
          <Link href="/" className="text-sm font-bold leading-6 tracking-[0.200px] text-[#737373]">
            Pages
          </Link>
        </div>

        {/* Utility Links */}
        <div className="w-[324px] h-[54px] flex justify-center items-center list-none text-[#23A6F0]">
          {/* Login/Register */}
          <li className="w-[166px] h-[54px] flex items-center">
            <a href="#" className="flex items-center gap-[2px]">
              <MdOutlineAccountCircle />
              <button className="rounded-[37px] text-sm font-bold leading-6 tracking-[0.200px]">
                Login / Register
              </button>
            </a>
          </li>
          {/* Search Icon */}
          <li className="w-[46px] h-[46px] flex items-center">
            <a href="#">
              <button className="text-xs flex">
                <CiSearch className="text-base" />
              </button>
            </a>
          </li>
          {/* Cart Icon */}
          <li className="w-[46px] h-[46px] flex items-center">
            <a href="#">
              <button className="text-xs flex">
                <IoCartOutline className="text-base" />1
              </button>
            </a>
          </li>
          {/* Wishlist Icon */}
          <li className="w-[46px] h-[46px] flex items-center">
            <a href="#">
              <button className="text-xs flex">
                <CiHeart className="text-base" />1
              </button>
            </a>
          </li>
        </div>
      </div>
    </div>
  );
};

export default Navbar;