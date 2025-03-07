"use client";

import Image from "next/image";
import Link from "next/link";
import { Search, ChevronDown } from "lucide-react";
import { useState } from "react";

export default function Navigation() {
  return (
    <header className="bg-white flex items-center justify-between h-[60px] font-dm xl:pl-[40px] xl:pr-[20px]">
      {/* Left Section */}
      <div className="flex items-center flex-shrink-0 space-x-4 h-full">
        <Image
          src="/logo/logo.png"
          alt="Foundation Learning"
          width={277}
          height={35}
          className="hidden lg:block"
        />

        {/* Mobile Logo */}
        <Image
          src="/logo/logo.png"
          alt="Foundation Learning"
          width={150}
          height={30}
          className="lg:hidden"
        />

        {/* Search Bar */}
        <div className="hidden md:flex w-auto h-full items-center relative bg-[#EBF7F9]">
          <Search className="absolute left-3 text-[#2F5852]" size={20} />
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent text-[#2F5852] w-[300px] h-[60px] pl-10 pr-4 outline-none focus:ring-0"
          />
        </div>
        {/* Mobile Search Icon */}
        <Search className="md:hidden text-gray-500 cursor-pointer" size={24} />
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden lg:flex items-center flex-shrink-0 h-full">
        <NavLinks />
      </nav>
    </header>
  );
}

function NavLinks({ mobile = false }: { mobile?: boolean }) {
  return (
    <>
      <Link
        href="#"
        className={`text-[#2F5852] text-[16px] font-normal leading-normal border-r-[1px] border-[#2F58521A] px-4 ${
          mobile ? "block py-2" : "h-full"
        } hover:bg-[#D6EFF2] transition-colors duration-200 flex items-center justify-center border-b-4 border-transparent hover:border-b-[#2F5852]`}
      >
        Personalized Tutoring
      </Link>

      <Divider mobile={mobile} />

      {/* Dropdown */}
      <div className={`relative group ${mobile ? "block" : "hidden lg:block"}`}>
        <button className="text-[#2F5852] text-[16px] font-normal flex items-center h-full px-4">
          Courses
          <ChevronDown className="ml-2" size={12} />
        </button>

        <div
          className={`absolute hidden group-hover:block bg-white shadow-md rounded-lg p-2 mt-2 w-40  ${
            mobile ? "block static shadow-none mt-0" : ""
          }`}
        >
          <Link
            href="#"
            className="block text-[#2F5852] p-2 hover:bg-[#D6EFF2] transition-colors duration-200"
          >
            Course 1
          </Link>
          <Link
            href="#"
            className="block text-[#2F5852] p-2 hover:bg-[#D6EFF2] transition-colors duration-200"
          >
            Course 2
          </Link>
        </div>
      </div>
      <Divider mobile={mobile} />

      <Link
        href="#"
        className={`text-[#2F5852] text-[16px] font-normal leading-normal border-r-[1px] border-l-[1px] border-[#2F58521A] px-4 ${
          mobile ? "block py-2" : "h-full"
        } hover:bg-[#D6EFF2] transition-colors duration-200 flex items-center justify-center border-b-4 border-transparent hover:border-b-[#2F5852]`}
      >
        Student Corner
      </Link>

      <Divider mobile={mobile} />

      <Link
        href="#"
        className={`text-[#2F5852] text-[16px] font-normal leading-normal border-r-[1px] border-[#2F58521A] px-4 ${
          mobile ? "block py-2" : "h-full"
        } hover:bg-[#D6EFF2] transition-colors duration-200 flex items-center justify-center border-b-4 border-transparent hover:border-b-[#2F5852]`}
      >
        AI Activities
      </Link>

      <Divider mobile={mobile} />

      {/* Avatar */}
      <div className="relative px-4">
        <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-gray-700">
          AV
        </div>
      </div>
    </>
  );
}

function Divider({ mobile }: { mobile?: boolean }) {
  return (
    <div
      className={`${
        mobile
          ? "border-t border-gray-300 my-2"
          : "h-full border- border-gray-200"
      }`}
    ></div>
  );
}
