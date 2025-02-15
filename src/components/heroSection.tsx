"use client";
import Slider from "../components/slider";

const classes = [
  {
    title: "Fourth Grade Social Studies",
    progress: 35,
    color: "bg-indigo-500",
    topic: "English Colonies",
    image: "/logo/Frame_1.png",
  },
  {
    title: "Fourth Grade Math",
    progress: 13,
    color: "bg-blue-500",
    topic: "Place Value",
    image: "/logo/Frame_2.png",
  },
  {
    title: "Fourth Grade Language Art",
    progress: 25,
    color: "bg-orange-500",
    topic: "Text Structure",
    image: "/logo/Frame_3.png",
  },
  {
    title: "Fourth Grade Science",
    progress: 42,
    color: "bg-green-500",
    topic: "Ecosystem",
    image: "/logo/Frame_1.png",
  },
  {
    title: "Fourth Grade Life Skills",
    progress: 50,
    color: "bg-purple-500",
    topic: "Critical Thinking",
    image: "/logo/Frame_2.png",
  },
];

export default function HeroSection() {
  return (
    <div className="bg-[#dff2f5] w-full flex flex-col">
      <div
        className="sm:py-6 sm:px-6 md:px-10 mt-[30px]"
        style={{ paddingLeft: "80px", paddingRight: "375px" }}
      >
        <div className="flex flex-col md:flex-row md:justify-between space-y-6 md:space-y-0">
          <h1 className="text-3xl sm:text-4xl font-light text-gray-900 mt-4">
            Hello <em className="italic">Emma</em>,<br /> Welcome Back!
          </h1>

          <div className="w-full md:w-1/3 border-l border-gray-300 pt-4 md:pl-6">
            <div className="flex justify-between border-b border-gray-300 pb-4">
              <button className="px-5 py-2 bg-white text-[#2F5852] text-sm font-medium rounded-full shadow-md">
                Classes
              </button>
              <button className="px-4 py-2 text-sm text-[#2F5852] rounded-full hover:bg-blue-100 transition">
                + Add Class
              </button>
            </div>
            <ul className="mt-3 space-y-1 text-gray-700 text-sm">
              {classes.map((classItem, index) => (
                <li key={index} className="cursor-pointer hover:text-blue-600">
                  {classItem.title} →
                </li>
              ))}
            </ul>
          </div>

          <div className="w-full md:w-1/3 border-t md:border-t-0 md:border-l border-gray-300 pt-4 md:pl-6">
            <div>
              <button className="px-5 py-2 bg-[#FFFFFF] text-[#2F5852] text-sm font-medium rounded-full shadow-md">
                Overview
              </button>
            </div>
            <ul className="mt-4 space-y-2 text-gray-700 text-sm">
              <li>• 1:1 Tutoring Class</li>
              <li>• 35% Overall Progress on your classes</li>
            </ul>
          </div>
        </div>
        <hr className="mt-8 border-t border-gray-300" />
      </div>

      <div style={{ paddingLeft: "80px", paddingRight: "50px" }}>
        <Slider title="Recent Classes" data={classes} />
      </div>
    </div>
  );
}
