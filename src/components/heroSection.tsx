"use client";
import Slider from "../components/slider";
import "@fortawesome/fontawesome-free/css/all.min.css";

const classes = [
  {
    title: "Fourth Grade Social Studies",
    progress: 35,
    color: "bg-indigo-500",
    topic: "English Colonies",
    images: ["/logo/cover-back.png", "/logo/pages.png", "/logo/Frame_1.png"],
    code: "SS-G4",
    svgIcon: "/logo/people-arrows.svg",
  },
  {
    title: "Fourth Grade Math",
    progress: 60,
    color: "bg-green-500",
    topic: "Algebra Basics",
    images: ["/logo/cover-back-2.png", "/logo/pages.png", "/logo/Frame_2.png"],
    code: "MA-G4",
    svgIcon: "/logo/function.svg",
  },
  {
    title: "Fourth Grade Language Arts",
    progress: 75,
    color: "bg-blue-500",
    topic: "Physics & Chemistry",
    images: ["/logo/cover-back-3.png", "/logo/pages.png", "/logo/Frame_3.png"],
    code: "SCI-G4",
    svgIcon: "/logo/input-text.svg",
  },
  {
    title: "Fourth Grade Social Studies",
    progress: 35,
    color: "bg-indigo-500",
    topic: "English Colonies",
    images: ["/logo/cover-back.png", "/logo/pages.png", "/logo/Frame_1.png"],
    code: "SS-G4",
    svgIcon: "/logo/people-arrows.svg",
  },
  {
    title: "Fourth Grade Math",
    progress: 60,
    color: "bg-green-500",
    topic: "Algebra Basics",
    images: ["/logo/cover-back-2.png", "/logo/pages.png", "/logo/Frame_2.png"],
    code: "MA-G4",
    svgIcon: "/logo/function.svg",
  },
  {
    title: "Fourth Grade Language Arts",
    progress: 75,
    color: "bg-blue-500",
    topic: "Physics & Chemistry",
    images: ["/logo/cover-back-3.png", "/logo/pages.png", "/logo/Frame_3.png"],
    code: "SCI-G4",
    svgIcon: "/logo/input-text.svg",
  },
];

export default function HeroSection() {
  return (
    <div className="bg-[#dff2f5] w-full flex flex-col px-4 md:px-10 lg:px-[80px]">
      <div className="mt-[40px]">
        <div className="flex flex-col md:flex-row justify-between border-l border-gray-300 px-4 lg:border-hidden md:border-hidden sm:border-b sm:border-gray-300 sm:border-l-0 sm:pl-0 sm:pb-0">
          <h1 className="text-[32px] md:text-[50px] font-medium text-[#12353D] font-cormorant leading-normal md:w-auto">
            Hello <em className="italic font-normal">Emma</em>,<br /> Welcome
            Back!
          </h1>

          {/* Classes section */}
          <div className="w-full md:w-1/3 md:border-l border-gray-300 md:pl-6 mt-4 md:mt-0 py-4 order-2 md:order-1 border-b sm:border-b-1 sm:border-gray-300 md:border-b-0">
            <div className="flex justify-between border-b border-gray-300 pb-2">
              <button className="px-3 py-2 bg-white text-[#2F5852] rounded-full text-sm font-medium">
                Classes
              </button>
              <button className="text-sm text-[#2F5852] rounded-lg">
                + Add Class
              </button>
            </div>
            <ul className="mt-3 space-y-1 text-sm text-[#2F5852] font-semibold">
              {classes.map((classItem, index) => (
                <li key={index} className="cursor-pointer">
                  {classItem.title} →
                </li>
              ))}
            </ul>
          </div>

          <div className="w-full md:w-1/3 lg:border-l border-gray-300 md:pl-6 border-t lg:border-t-0 lg:border-b-0 py-4 border-b order-1 md:order-2">
            <button className="px-3 py-2 bg-white text-[#2F5852] rounded-full text-sm font-normal">
              Overview
            </button>
            <ul className="mt-4 space-y-2 text-[#2F5852] text-sm font-medium">
              <li className="flex items-center">
                <i className="fa-solid fa-circle-check text-[#2F5852] opacity-40 mr-2"></i>
                1:1 Tutoring Class
              </li>
              <li className="flex items-center">
                <i className="fa-solid fa-circle-check text-[#2F5852] opacity-40 mr-2"></i>
                35% Overall Progress on your classes
              </li>
            </ul>
          </div>
        </div>
        <hr className="mt-6 border-t border-gray-300 hidden sm:block lg:border-t" />
      </div>
      <div className="">
        <Slider
          title="Recent Classes"
          data={classes}
          className="font-cormorant"
        />
      </div>
    </div>
  );
}
