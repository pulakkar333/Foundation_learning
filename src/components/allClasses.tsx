"use client";

import React, { useRef } from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";
import BookGrid from "../components/bookGrid";

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
      }}
    >
      <h3 className="text-lg font-semibold text-[#1F2937]">{title}</h3>
      <div className="flex items-center mt-2">
        <span className="bg-yellow-200 text-gray-700 px-2 py-1 text-sm rounded-lg font-medium">
          {code}
        </span>
        <button className="ml-2 text-gray-500 hover:text-gray-700">•••</button>
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
    <div className="p-6 relative">
      <div
        style={{ paddingLeft: "60px", paddingRight: "79px" }}
        className="py-4 mb-4 flex justify-between"
      >
        <h2 className="text-xl font-semibold text-[#1F2937]">
          All of Your Classes
        </h2>
        <div className="flex gap-2">
          <button
            onClick={scrollLeft}
            className="p-2 bg-gray-200 rounded-full hover:bg-gray-300"
          >
            <ChevronLeft size={22} className="text-gray-700" />
          </button>
          <button
            onClick={scrollRight}
            className="p-2 bg-gray-200 rounded-full hover:bg-gray-300"
          >
            <ChevronRight size={22} className="text-gray-700" />
          </button>
        </div>
      </div>
      <div
        ref={scrollRef as React.RefObject<HTMLDivElement>}
        className="flex overflow-x-hidden scroll-smooth"
        style={{
          scrollBehavior: "smooth",
          width: "100%",
          overflowY: "hidden",
          paddingLeft: "60px",
        }}
      >
        <ClassCard title="Fourth Grade Social Studies" code="SS-G4" active />
        <ClassCard title="Fourth Grade Math" code="MA-G4" />
        <ClassCard title="Fourth Grade Language Arts" code="LA-G4" />
        <ClassCard title="Fourth Grade Science" code="SC-G4" />
        <ClassCard title="Fourth Grade History" code="HI-G4" />
        <ClassCard title="Fourth Grade Geography" code="GE-G4" />
        <ClassCard title="Fifth Grade Social Studies" code="SS-G5" />
        <ClassCard title="Fifth Grade Math" code="MA-G5" />
        <ClassCard title="Fifth Grade Language Arts" code="LA-G5" />
        <ClassCard title="Fifth Grade Science" code="SC-G5" />
      </div>
      <div style={{ marginTop: "50px", paddingLeft: "30px" }}>
        <BookGrid />
      </div>
    </div>
  );
};

export default AllClasses;
