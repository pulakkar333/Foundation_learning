"use client";
import Slider from "../components/slider";
import "@fortawesome/fontawesome-free/css/all.min.css";

const classes = [
  {
    title: "Fourth Grade Social Studies",
    progress: 35,
    color: "bg-indigo-500",
    topic: "English Colonies",
    image: "/logo/Frame_1.png",
    code: "SS-G4",
  },
  {
    title: "Fourth Grade Math",
    progress: 13,
    color: "bg-blue-500",
    topic: "Place Value",
    image: "/logo/Frame_2.png",
    code:"MA-G4",
  },
  {
    title: "Fourth Grade Language Art",
    progress: 25,
    color: "bg-orange-500",
    topic: "Text Structure",
    image: "/logo/Frame_3.png",
    code:"MA-G4",
  },
  {
    title: "Fourth Grade Science",
    progress: 42,
    color: "bg-green-500",
    topic: "Ecosystem",
    image: "/logo/Frame_1.png",
    code:"SC-G4",
  },
  {
    title: "Fourth Grade Life Skills",
    progress: 50,
    color: "bg-purple-500",
    topic: "Critical Thinking",
    image: "/logo/Frame_2.png",
    code:"HI-G4"
  },
];

export default function HeroSection() {
  return (
    <div className="bg-[#dff2f5] w-full flex flex-col">
      <div
        className="py-6 px-10 mt-[62px]"
        style={{ paddingLeft: "80px", paddingRight: "375px" }}
      >
        <div className="flex flex-row justify-between space-y-0">
          <h1
            className="text-[50px] font-medium text-[#12353D] font-cormorant"
            style={{ lineHeight: "normal", width: "343px" }}
          >
            Hello{" "}
            <em
              className="italic text-[50px] font-normal"
              style={{ width: "343px" }}
            >
              Emma
            </em>
            ,<br /> Welcome Back!
          </h1>

          <div className="w-full md:w-1/3 border-t md:border-t-0 md:border-l border-gray-300 md:pl-6">
            <div className="flex justify-between border-b border-gray-300 pb-[10px]">
              <button
                className="inline-flex items-center justify-center gap-2 px-3 py-2 bg-white text-[#2F5852] rounded-full font-medium"
                style={{
                  fontSize: "14px",
                  fontWeight: "400",
                  lineHeight: "normal",
                }}
              >
                Classes
              </button>

              <button
                className="inline-flex items-center justify-center gap-2 px-2 py-2 text-sm text-[#2F5852] rounded-[8px]"
                style={{
                  // boxShadow: "0px 6px 10px 0px rgba(47, 88, 82, 0.10)",
                }}
              >
                <span
                  style={{
                    display: "-webkit-box",
                    transform: "rotate(-0.084deg)",
                    WebkitBoxOrient: "vertical",
                    WebkitLineClamp: 1,
                    overflow: "hidden",
                    color: "#49887F",
                    textAlign: "center",
                    textOverflow: "ellipsis",
                    fontSize: "16px",
                    fontWeight: "400",
                    lineHeight: "normal",
                  }}
                >
                  + Add Class
                </span>
              </button>
            </div>

            <ul className="mt-3 space-y-1 text-sm text-[#2F5852]  font-semibold text-left">
              {classes.map((classItem, index) => (
                <li key={index} className="cursor-pointer">
                  {classItem.title} →
                </li>
              ))}
            </ul>

            <div
              style={{
                position: "absolute",
                left: "0",
                top: "0",
                width: "1px",
                height: "190px",
                backgroundColor: "#2F5852",
                opacity: "0.15",
              }}
            />
          </div>

          <div className="w-full md:w-1/3 border-t md:border-t-0 md:border-l border-gray-300 md:pl-6">
            <div>
              <button
                className="inline-flex items-center justify-center gap-2 px-3 py-2 bg-[#FFFFFF] text-[#2F5852] rounded-full font-normal text-sm"
                style={{
                  fontSize: "14px",
                  fontWeight: "400",
                  lineHeight: "normal",
                  textAlign: "center",
                  transform: "rotate(-0.102deg)",
                }}
              >
                Overview
              </button>
            </div>
            <ul className="mt-4 space-y-2 text-[#2F5852] text-sm font-medium list-none">
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
        <hr
          className="mt-[48px] border-t border-gray-300"
          style={{
            borderColor: "rgba(47, 88, 82, 0.10)",
          }}
        />
      </div>
      <div style={{ paddingLeft: "80px", paddingRight: "50px" }}>
        <Slider
          title="Recent Classes"
          data={classes}
          className="font-cormorant"
        />
      </div>
    </div>
  );
}
