"use client";

import Image from "next/image";
import Link from "next/link";
import { Search, ChevronDown } from "lucide-react";

export default function Navigation() {
  return (
    <header className="bg-[#fff] flex items-center justify-between px-6 h-[60px] w-full font-dm">
      <div className="flex items-center flex-shrink-0 space-x-4 h-full">
        <Image
          src="/logo/logo.png"
          alt="Foundation Learning"
          width={277}
          height={35}
          className="w-60"
        />
        <div className="flex w-[300px] min-w-[300px] max-w-[300px] h-full items-center relative bg-[#EBF7F9]">
          <Search className="absolute left-3 text-gray-500" size={20} />
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent border-gray-300 text-gray-700 w-full h-full pl-10 pr-4 outline-none focus:ring-0 focus:border-gray-300"
          />
        </div>
      </div>

      <nav className="flex items-center flex-shrink-0 h-full relative font-dm space-x-6">
        <Link
          href="#"
          className="text-[#2F5852] text-right font-dm text-[16px] font-normal leading-normal transform rotate-[-0.084deg]"
        >
          Personalized Tutoring
        </Link>
        <div
          className="h-full"
          style={{ borderRight: "1px solid rgba(47, 88, 82, 0.10)" }}
        ></div>

        <div className="relative group">
          <button className="text-[#2F5852] text-right font-dm text-[16px] font-normal leading-normal transform rotate-[-0.084deg] flex items-center">
            Courses
            <ChevronDown className="ml-2" size={12} />
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
        <div
          className="h-full"
          style={{ borderRight: "1px solid rgba(47, 88, 82, 0.10)" }}
        ></div>

        <Link
          href="#"
          className="text-[#2F5852] text-right font-dm text-[16px] font-normal leading-normal transform rotate-[-0.084deg]"
        >
          Student Corner
        </Link>
        <div
          className="h-full"
          style={{ borderRight: "1px solid rgba(47, 88, 82, 0.10)" }}
        ></div>

        <Link
          href="#"
          className="text-[#2F5852] text-right font-dm text-[16px] font-normal leading-normal transform rotate-[-0.084deg]"
        >
          AI Activities
        </Link>
        <div
          className="h-full"
          style={{ borderRight: "1px solid rgba(47, 88, 82, 0.10)" }}
        ></div>

        <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-gray-700">
          AV
        </div>
      </nav>
    </header>
  );
}
