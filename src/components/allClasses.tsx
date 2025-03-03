"use client";

import React, { useRef } from "react";
import BookGrid from "../components/bookGrid";
import { ArrowRight, ArrowLeft } from "lucide-react";

interface ClassCardProps {
  title: string;
  code: string;
  active?: boolean;
}

const ClassCard: React.FC<ClassCardProps> = ({
  title,
  code,
  active = false,
}) => {
  return (
    <div
      className={`py-4 px-4 flex flex-col items-start shadow-sm transition-all duration-300 ${
        active ? "bg-[#EBF7F9]" : "bg-white hover:bg-[#EBF7F9]"
      }`}
      style={{
        width: "282px",
        height: "143px",
        border: "1px solid rgba(124, 188, 200, 0.50)",
        flexShrink: 0,
        fontFamily: "Cormorant Garamond, serif",
        overflow: "hidden",
      }}
    >
      <h3
        className="text-[24px] font-medium text-[#12353D]"
        style={{
          width: "250px",
          height: "60px",
          fontStyle: "normal",
          lineHeight: "1.2",
          overflow: "hidden",
          display: "-webkit-box",
          WebkitBoxOrient: "vertical",
          WebkitLineClamp: 2,
        }}
      >
        {title}
      </h3>
      <div className="flex items-center mt-2 w-full gap-[10px]">
        <span
          className="flex flex-shrink-0 w-[77px] h-[32px] rounded-full bg-[#FFF48F] mr-2 font-dm items-center justify-center leading-[1]"
          style={{
            textAlign: "center",
            fontSize: "14px",
            fontWeight: 400,
            color: "#A89700",
            display: "flex",
          }}
        >
          {code}
        </span>
        <button
          className="flex w-[40px] h-[40px] justify-center items-center flex-shrink-0
    rounded-full border border-[rgba(47,88,82,0.19)] bg-white shadow-[0px_5px_10px_0px_rgba(21,86,98,0.10)] 
    text-gray-500 hover:text-gray-700"
        >
          •••
        </button>
      </div>
    </div>
  );
};

const AllClasses: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -200, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 200, behavior: "smooth" });
    }
  };

  return (
    <div
      className="relative max-w-full"
      style={{ fontFamily: "Cormorant Garamond, serif" }}
    >
      <div className="py-2 mb-2 flex justify-between px-16 md:flex mt-[60px]">
        <h2 className="text-[35px] font-medium text-[#12353D]">
          All of Your Classes
        </h2>
        <div className="flex gap-2">
          <button
            onClick={scrollLeft}
            className="flex w-[38px] h-[38px] justify-center items-center rounded-full border border-[#D7DFDE] bg-white shadow-md"
          >
            <ArrowLeft size={22} className="text-[#2F5852]" />
          </button>
          <button
            onClick={scrollRight}
            className="flex w-[38px] h-[38px] justify-center items-center rounded-full border border-[#D7DFDE] bg-white shadow-md"
          >
            <ArrowRight size={22} className="text-[#2F5852]" />
          </button>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="flex overflow-x-hidden scroll-smooth px-16"
        style={{ scrollBehavior: "smooth", overflowY: "hidden" }}
      >
        {[
          { title: "Fourth Grade Social Studies", code: "SS-G4", active: true },
          { title: "Fourth Grade Math", code: "MA-G4" },
          { title: "Fourth Grade Language Arts", code: "LA-G4" },
          { title: "Fourth Grade Science", code: "SC-G4" },
          { title: "Fourth Grade History", code: "HI-G4" },
          { title: "Fourth Grade Geography", code: "GE-G4" },
          { title: "Fifth Grade Social Studies", code: "SS-G5" },
          { title: "Fifth Grade Math", code: "MA-G5" },
          { title: "Fifth Grade Language Arts", code: "LA-G5" },
          { title: "Fifth Grade Science", code: "SC-G5" },
        ].map((classData, index, arr) => (
          <div key={index} className="relative">
            <ClassCard {...classData} />
          </div>
        ))}
      </div>

      <div className="xl:mt-[50px]">
        <BookGrid />
      </div>
    </div>
  );
};

export default AllClasses;
