"use client";

import React, { useRef, useState } from "react";
import BookGrid from "../components/bookGrid";
import { ArrowRight, ArrowLeft, MoreVertical, ChevronDown } from "lucide-react";

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

const ClassSelector = ({ classes, selectedClass, setSelectedClass }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleClassSelect = (selected) => {
    setSelectedClass(selected);
    setIsDropdownOpen(false); // Close dropdown after selection
  };

  return (
    <div className="relative w-full mt-4 p-4 bg-white ssm:border-b ssm:border-[#2F58521A] ssm:px-[20px] xl:hidden md:hidden">
      <div className="flex items-start justify-between">
        <div>
          {/* Badge for class code */}
          <span className="bg-yellow-200 text-gray-700 text-xs font-medium px-3 py-1 rounded-full">
            {selectedClass?.code}
          </span>

          {/* Class Title */}
          <h2 className="ssm:text-[30px] font-cormorant text-[#12353D] mt-2">
            {selectedClass?.title}
          </h2>
        </div>

        {/* Right-side icons */}
        <div className="flex items-center space-x-2">
          <MoreVertical className="text-gray-500 cursor-pointer" size={20} />
          {/* Clickable Dropdown Arrow */}
          <ChevronDown
            className="text-gray-500 cursor-pointer"
            size={20}
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          />
        </div>
      </div>

      {/* Dropdown List (Visible when isDropdownOpen is true) */}
      {isDropdownOpen && (
        <div className="absolute left-0 mt-2 w-full bg-white shadow-lg rounded-lg z-10 max-h-[200px] overflow-y-auto">
          {classes.map((classData) => (
            <div
              key={classData.code}
              className="p-3 hover:bg-gray-100 cursor-pointer flex justify-between"
              onClick={() => handleClassSelect(classData)}
            >
              <span className="text-gray-800">{classData.title}</span>
              <span className="text-gray-500 text-xs">{classData.code}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const AllClasses: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [selectedClass, setSelectedClass] = useState({
    title: "Fourth Grade Social Studies",
    code: "SS-G4",
  });

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
  const classes = [
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
  ];

  return (
    <div
      className="relative w-full xl:px-[50px] md:px-[20px] md:pr-[0px]"
      style={{ fontFamily: "Cormorant Garamond, serif" }}
    >
      {/* Header for Larger Screens */}
      <div className="all-classes-header ssm:hidden xl:flex md:flex items-center justify-between">
        <h2 className="all-classes-main-title">All of Your Classes</h2>
        <div className="all-classes-nav-buttons gap-[10px]">
          <button onClick={scrollLeft} className="all-classes-nav-button">
            <ArrowLeft size={22} />
          </button>
          <button onClick={scrollRight} className="all-classes-nav-button">
            <ArrowRight size={22} />
          </button>
        </div>
      </div>

      {/* Dropdown for Small Screens */}
      <ClassSelector
        classes={classes}
        selectedClass={selectedClass}
        setSelectedClass={setSelectedClass}
      />

      {/* Scrollable List for Larger Screens */}
      <div
        ref={scrollRef}
        className="hidden xl:flex md:flex overflow-x-auto scroll-smooth xl:px-[40px] ssm:px-[10px] hide-scrollbar relative ssm:mt-[20px]"
      >
        {classes.map((classData, index) => (
          <div key={index} className="relative">
            <ClassCard {...classData} />
          </div>
        ))}
      </div>

      <div className="xl:mt-[50px] md:mt-[50px]">
        <BookGrid />
      </div>
    </div>
  );
};

export default AllClasses;
