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
      className={`border-t border-b py-4 px-4 flex flex-col items-start shadow-sm ${
        active ? "bg-teal-100 border-teal-300" : "bg-white border-gray-300"
      }`}
      style={{
        borderLeft: "2px solid #e5e7eb",
        borderRight: "2px solid #e5e7eb",
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
          top: 0,
          zIndex: 10,
        }}
      >
        {title}
      </h3>
      <div className="flex items-center mt-2 px-2 w-full">
        <span
          className="flex flex-shrink-0 items-center justify-center w-[77.029px] h-[32.065px] px-[14px] py-[7px] rounded-full bg-[#FFF48F] mr-2 font-dm"
          style={{
            transform: "rotate(-0.092deg)",
            overflow: "hidden",
            textAlign: "right",
            textOverflow: "ellipsis",
            fontSize: "14px",
            fontStyle: "normal",
            fontWeight: 400,
            lineHeight: "normal",
            color: "#A89700",
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
            WebkitLineClamp: 1,
          }}
        >
          {code}
        </span>
        <button
          className="flex w-[40px] h-[40px] justify-center items-center gap-[0px] flex-shrink-0 
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
  const scrollRef = useRef<HTMLElement>(null);

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
      <div className="py-2 mb-2 flex justify-between px-16  md:flex">
        <h2
          className="text-[35px] font-medium text-[#12353D] ml-[20px] mt-[50px]"
          style={{  fontStyle: "normal", lineHeight: "normal" }}
        >
          All of Your Classes
        </h2>
        <div className="flex gap-2">
          <button
            onClick={scrollLeft}
            className="flex w-[38px] h-[38px] p-[10.605px] justify-center items-center gap-[8.837px] flex-shrink-0 rounded-[88.372px] border border-[#D7DFDE] bg-white shadow-[0px_4.419px_8.837px_rgba(21,86,98,0.10)]"
          >
            <ArrowLeft
              size={22}
              className="text-gray-700"
              style={{
                color: "#2F5852",
                fontSize: "13.256px",
                fontWeight: "900",
                letterSpacing: "1.326px",
                textTransform: "uppercase",
              }}
            />
          </button>

          <button
            onClick={scrollRight}
            className="flex w-[38px] h-[38px] p-[10.605px] justify-center items-center gap-[8.837px] flex-shrink-0 rounded-[88.372px] border border-[#D7DFDE] bg-white shadow-[0px_4.419px_8.837px_rgba(21,86,98,0.10)]"
          >
            <ArrowRight
              size={22}
              className="text-gray-700"
              style={{
                color: "#2F5852",
                fontSize: "13.256px",
                fontWeight: "900",
                letterSpacing: "1.326px",
                textTransform: "uppercase",
              }}
            />
          </button>
        </div>
      </div>

      <div
        ref={scrollRef as React.RefObject<HTMLDivElement>}
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
          <div
            key={index}
            className="relative"
            style={{
              borderRight:
                index !== arr.length - 1 ? "rgba(124, 188, 200, 0.50)" : "none",
            }}
          >
            <ClassCard {...classData} />
          </div>
        ))}
      </div>

      <div className="mt-12 px-8">
        <BookGrid />
      </div>
    </div>
  );
};

export default AllClasses;
