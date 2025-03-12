"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, ChevronDown } from "lucide-react";

export default function Layout() {
  return (
    <>
      <div className="">
        <Navigation />
      </div>
      <div className="xl:hidden">
        <Navigation second />
      </div>
    </>
  );
}

function Navigation({ second = false }: { second?: boolean }) {
  return (
    <header
      className={`fixed w-full z-50 bg-white flex items-center justify-between h-[60px] font-dm xl:pl-[0px] xl:pr-[0px] transition-all duration-300 border-b-[1px] border-[#2F58521A] ${
        second ? "top-[60px]" : "top-0"
      }`}
    >
      <div className="flex items-center flex-shrink-0 space-x-4 h-full">
        {!second && (
          <div className="md:hidden">
            <Search
              className="text-[#2F5852] cursor-pointer ssm:ml-2"
              size={24}
            />
          </div>
        )}

        {!second && (
          <>
            <Image
              src="/logo/logo.png"
              alt="Foundation Learning"
              width={277}
              height={35}
              className="hidden lg:block"
            />
            <Image
              src="/logo/logo.png"
              alt="Foundation Learning"
              width={221}
              height={28}
              className="lg:hidden"
            />
          </>
        )}

        {!second && (
          <div className="hidden md:flex w-auto h-full items-center relative bg-[#EBF7F9]">
            <Search className="absolute left-3 text-[#2F5852]" size={20} />
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent text-[#2F5852] w-[300px] h-[60px] pl-10 pr-4 outline-none focus:ring-0"
            />
          </div>
        )}
      </div>

      {/* Main Navigation (For Larger Screens) */}
      <nav
        className={`${
          second ? "flex w-full" : "hidden xl:flex lg:hidden"
        } items-center justify-between flex-shrink-0 h-full ml-auto`}
      >
        <NavLinks />
      </nav>

      {/* Second Navigation (Mobile and Smaller Screens) */}
      <div
        className={`xl:hidden ${
          second ? "flex w-full" : "hidden"
        } items-center justify-between w-full h-full`}
      >
        <NavLinks />
      </div>

      {!second && (
        <div className="relative px-4">
          <div className="w-[40px] h-[40px] bg-[#D6EFF2] rounded-full flex items-center justify-center text-[#2F5852] text-[16px] font-bold">
            AV
          </div>
        </div>
      )}
    </header>
  );
}

function NavLinks() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <Link
        href="#"
        className="text-[#2F5852] text-[16px] font-normal leading-normal border-r-[1px] border-[#2F58521A] px-4 h-full hover:bg-[#D6EFF2] transition-colors duration-200 flex items-center justify-center border-b-4 border-transparent hover:border-b-[#2F5852] ssm:whitespace-nowrap w-auto"
      >
        Personalized Tutoring
      </Link>

      <Divider />

      <div className="relative" ref={dropdownRef}>
        <button
          className="text-[#2F5852] text-[16px] font-normal flex items-center h-full px-4"
          onClick={toggleDropdown}
        >
          Courses
          <ChevronDown className="ml-2" size={12} />
        </button>

        {dropdownOpen && (
          <div className="absolute bg-white shadow-md rounded-lg p-2 mt-2 w-40">
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
        )}
      </div>

      <Divider />

      <Link
        href="#"
        className="text-[#2F5852] text-[16px] font-normal leading-normal border-r-[1px] border-l-[1px] border-[#2F58521A] px-4 h-full hover:bg-[#D6EFF2] transition-colors duration-200 flex items-center justify-center border-b-4 border-transparent hover:border-b-[#2F5852] ssm:whitespace-nowrap"
      >
        Student Corner
      </Link>

      <Divider />

      <Link
        href="#"
        className="text-[#2F5852] text-[16px] font-normal leading-normal border-r border-[#0715131a] border-l-[px] border-[#2F58521A] px-4 h-full hover:bg-[#D6EFF2] transition-colors duration-200 flex items-center justify-center hover:border-b-4 border-[#2F5852] ssm:whitespace-nowrap hover:border-b-[#2F5852] border-transparent"
      >
        AI Activities
      </Link>
      <Divider />
    </>
  );
}

function Divider() {
  return <div className="h-full border-r border-gray-200"></div>;
}
