"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, Search } from "lucide-react";

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white flex items-center justify-between px-4 sm:px-6 h-16 w-full font-dm">
      <div className="flex items-center flex-shrink-0">
        <Image
          src="/logo/logo.png"
          alt="Foundation Learning"
          width={277}
          height={35}
          className="w-40 sm:w-60"
        />
      </div>

      <div className="hidden sm:flex w-[300px] min-w-[300px] max-w-[300px] h-full items-center relative mr-5">
        <Search className="absolute left-3 text-gray-500" size={20} />
        <input
          type="text"
          placeholder="Search..."
          className="bg-[#EBF7F9] border-gray-300 text-gray-700 w-full h-full pl-10 pr-4 outline-none focus:ring-0 focus:border-gray-300"
        />
      </div>

      <nav className="hidden md:flex items-center flex-shrink-0 h-full relative font-dm">
        <Link href="#" className="text-gray-700 flex items-center pr-4">
          Personalized Tutoring
        </Link>
        <div className="border-r-[1px] border-gray-300 h-full"></div>

        <div className="relative group ml-4">
          <button className="text-[#2F5852] flex items-center pr-4">
            Courses ▾
          </button>
          <div className="absolute hidden group-hover:block bg-white shadow-md rounded-lg p-2 mt-2 w-40">
            <Link href="#" className="block text-[#2F5852] p-2">
              Course 1
            </Link>
            <Link href="#" className="block text-[#2F5852] p-2">
              Course 2
            </Link>
          </div>
        </div>
        <div className="border-r-[1px] border-gray-300 h-full"></div>

        <Link href="#" className="text-[#2F5852] flex items-center pr-4 ml-4">
          Student Corner
        </Link>
        <div className="border-r-[1px] border-gray-300 h-full"></div>

        <Link href="#" className="text-[#2F5852] flex items-center pr-4 ml-4">
          AI Activities
        </Link>
        <div className="border-r-[1px] border-gray-300 h-full"></div>

        <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-gray-700 ml-4">
          AV
        </div>
      </nav>

      <button
        className="md:hidden flex items-center text-gray-700"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md flex flex-col items-center py-4 space-y-4 md:hidden z-50 font-dm">
          <div className="relative w-11/12">
            <Search className="absolute left-3 top-3 text-gray-500" size={20} />
            <input
              type="text"
              placeholder="Search..."
              className="border border-gray-300 rounded pl-10 pr-4 py-2 text-gray-700 w-full outline-none focus:ring-0 focus:border-gray-300"
            />
          </div>
          <Link href="#" className="text-gray-700 hover:text-blue-500">
            Personalized Tutoring
          </Link>
          <div className="relative w-full text-center">
            <button className="text-gray-700 hover:text-blue-500">
              Courses ▾
            </button>
            <div className="w-full mt-2">
              <Link
                href="#"
                className="block text-gray-700 hover:text-blue-500 py-2"
              >
                Course 1
              </Link>
              <Link
                href="#"
                className="block text-gray-700 hover:text-blue-500 py-2"
              >
                Course 2
              </Link>
            </div>
          </div>
          <Link
            href="#"
            className="text-gray-700 hover:text-blue-500 border-b-2 border-blue-500"
          >
            Student Corner
          </Link>
          <Link href="#" className="text-gray-700 hover:text-blue-500">
            AI Activities
          </Link>
          <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-gray-700">
            AV
          </div>
        </div>
      )}
    </header>
  );
}
