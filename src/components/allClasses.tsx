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
      className={`all-classes-container ${
        active ? "bg-[#EBF7F9]" : "bg-white"
      }`}
    >
      <h3 className="all-classes-title">{title}</h3>
      <div className="flex items-center mt-2 w-full gap-[10px]">
        <span className="all-classes-code">{code}</span>
        <button className="all-classes-button">•••</button>
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
      <div className="all-classes-header">
        <h2 className="all-classes-main-title">All of Your Classes</h2>
        <div className="all-classes-nav-buttons">
          <button onClick={scrollLeft} className="all-classes-nav-button">
            <ArrowLeft size={22} />
          </button>
          <button onClick={scrollRight} className="all-classes-nav-button">
            <ArrowRight size={22} />
          </button>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="flex overflow-x-auto scroll-smooth px-16 hide-scrollbar"
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
        ].map((classData, index) => (
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
