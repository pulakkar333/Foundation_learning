"use client";
import Slider from "../components/slider";
import "@fortawesome/fontawesome-free/css/all.min.css";

const classes = [
  {
    title: "Fourth Grade Social Studies",
    progress: 35,
    color: "bg-indigo-500",
    topic: "English colonies in North America",
    images: ["/logo/cover-back.png", "/logo/pages.png", "/logo/Frame_1.png"],
    code: "SS-G4",
    svgIcon: "/logo/people-arrows.svg",
  },
  {
    title: "Fourth Grade Math",
    progress: 13,
    color: "bg-green-500",
    topic: "Place Value",
    images: ["/logo/cover-back-2.png", "/logo/pages.png", "/logo/Frame_2.png"],
    code: "MA-G4",
    svgIcon: "/logo/function.svg",
  },
  {
    title: "Fourth Grade Language Arts",
    progress: 25,
    color: "bg-blue-500",
    topic: "Text Structure",
    images: ["/logo/cover-back-3.png", "/logo/pages.png", "/logo/Frame_3.png"],
    code: "SCI-G4",
    svgIcon: "/logo/input-text.svg",
  },
  {
    title: "Fourth Grade Science",
    progress: 35,
    color: "bg-indigo-500",
    topic: "English Colonies",
    images: ["/logo/cover-back.png", "/logo/pages.png", "/logo/Frame_1.png"],
    code: "SS-G4",
    svgIcon: "/logo/people-arrows.svg",
  },
];

export default function HeroSection() {
  return (
    <div
      className="w-full flex flex-col pl-[65px]"
      style={{
        background:
          "radial-gradient(71.27% 71.27% at 50% 0%, rgba(115, 169, 175, 0.50) 0%, rgba(172, 235, 243, 0.00) 100%), #D6EFF2",
      }}
    >
      <div className="ssm:mt-[150px] md:mt-[150px] xl:mt-[100px]">
        <div className="flex flex-col md:flex-row xl:justify-between border-l border-[#2F58521A] sm:border-[#2F58521A] md:border-none lg:border-none">
          <h1 className="xl:text-[50px] md:text-[50px] ssm:text-[40px] text-[#12353D] font-cormorant xl:font-[500] md:font-[500] ssm:font-[500] leading-normal ssm:px-[16px] whitespace-nowrap">
            Hello <em className="italic xl:font-[400]">Emma</em>,<br /> Welcome
            Back!
          </h1>

          <div className="w-auto xl:border-l md:border-l lg:border-l md:pl-[20px] md:pr-[20px] md:mt-0 py-4 order-2 md:order-1 border-[#2F58521A] ssm:border-t ssm:border-b md:border-0 xl:border-0 ssm:px-[16px]">
            <div className="border-[#2F58521A] pb-2 flex xl:space-x-[80px] md:space-x-[20px] ssm:space-x-[100px] w-full lg:w-[250px] xl:border-b md:border-b ">
              <button className="px-3 py-2 bg-white text-[#2F5852] rounded-full text-sm font-medium">
                Classes
              </button>
              <button className="text-[16px] text-[#49887F] rounded-lg">
                + Add Class
              </button>
            </div>

            <ul className="mt-2 text-sm text-[#2F5852] font-semibold md:whitespace-nowrap">
              {classes.map((classItem, index) => (
                <li key={index} className="cursor-pointer mb-2">
                  {classItem.title} →
                </li>
              ))}
            </ul>
          </div>

          <div className="w-full md:w-1/6 xl:w-1/3 md:border-l border-[#2F58521A] md:pl-[20px] py-4 order-3 md:order-2 xl:mr-[300px] xl:ml-[10px] ssm:px-[16px] ssm:order-1 ssm:border-t md:border-t-0 md:ml-0 md:mr-0 relative md:overflow-hidden xl:overflow-visible">
            <button className="px-3 py-2 bg-white text-[#2F5852] rounded-full text-sm font-normal">
              Overview
            </button>
            <ul className="mt-4 space-y-2 text-[#2F5852] text-[16px] font-medium md:flex md:space-y-0 md:space-x-4 md:overflow-x-auto md:no-scrollbar md:flex-col">
              <li className="flex items-center md:whitespace-nowrap xl:pl-4 md:pl-4">
                <i className="fa-solid fa-circle-check text-[#2F5852] opacity-40 mr-2 text-[9px]"></i>
                1:1 Tutoring Class
              </li>
              <li className="flex items-center md:whitespace-nowrap">
                <i className="fa-solid fa-circle-check text-[#2F5852] opacity-40 mr-2 text-[9px]"></i>
                35% Overall Progress on your classes
              </li>
            </ul>

            <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[] to-transparent pointer-events-none hidden md:block"></div>
          </div>
        </div>

        <hr className="mt-[40px] border-t-[1px] border-[#2F58521A] hidden xl:block lg:block md:block lg:border-t" />
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
