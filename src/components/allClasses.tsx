"use client";

import React, { useRef, useState } from "react";
import { ArrowRight, ArrowLeft, ChevronDown } from "lucide-react";

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
      <div className="flex items-center mt-[10px] w-full gap-[7px]">
        <span className="all-classes-code">{code}</span>
        <button className="all-classes-button">•••</button>
      </div>
    </div>
  );
};

interface Class {
  title: string;
  code: string;
  active?: boolean;
}

interface ClassSelectorProps {
  classes: Class[];
  selectedClass: Class;
  setSelectedClass: (selected: Class) => void;
}

const ClassSelector: React.FC<ClassSelectorProps> = ({
  classes,
  selectedClass,
  setSelectedClass,
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleClassSelect = (selected: Class) => {
    setSelectedClass(selected);
    setIsDropdownOpen(false);
  };

  return (
    <div className="relative w-full mt-4 p-4 bg-white ssm:border-b ssm:border-[#2F58521A] ssm:px-[20px] xl:hidden md:hidden">
      <div className="flex items-start justify-between">
        <div>
          <span className="bg-yellow-200 text-gray-700 text-xs font-medium px-3 py-1 rounded-full">
            {selectedClass?.code}
          </span>
          <h2 className="ssm:text-[30px] font-cormorant text-[#12353D] mt-2">
            {selectedClass?.title}
          </h2>
        </div>
        <div className="flex flex-col items-center space-y-4">
          <button className="all-classes-button">•••</button>
          <ChevronDown
            className="text-[#12353D] cursor-pointer"
            size={30}
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          />
        </div>
      </div>
      {isDropdownOpen && (
        <div className="absolute left-0 mt-2 w-full bg-white shadow-lg rounded-lg z-10 max-h-[200px] overflow-y-auto">
          {classes.map((classData) => (
            <div
              key={classData.code}
              className="p-3 hover:bg-gray-100 cursor-pointer flex flex-col border-b"
              onClick={() => handleClassSelect(classData)}
            >
              <span className="all-classes-code">{classData.code}</span>

              <span className="text-[24px] text-[#12353D] ">
                {classData.title}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const AllClasses: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [selectedClass, setSelectedClass] = useState<Class>({
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

  const classes: Class[] = [
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
      className="relative w-full md:px-[40px] md:mt-[60px] xl:mt-[60px] xl:px-[80px]"
      style={{ fontFamily: "Cormorant Garamond, serif" }}
    >
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
      <ClassSelector
        classes={classes}
        selectedClass={selectedClass}
        setSelectedClass={setSelectedClass}
      />
      <div
        ref={scrollRef}
        className="hidden xl:flex md:flex overflow-x-auto scroll-smooth xl:px-[px] ssm:px-[10px] hide-scrollbar relative ssm:mt-[20px]"
      >
        {classes.map((classData, index) => (
          <div key={index} className="relative">
            <ClassCard {...classData} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllClasses;
