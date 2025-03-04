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
    <div className="hero-container xl:px-[80px]">
      <div className="hero-header">
        <div className="flex flex-col md:flex-row justify-between border-l border-gray-300 px-4 lg:border-hidden md:border-hidden sm:border-b sm:border-gray-300 sm:border-l-0 sm:pl-0 sm:pb-0">
          <h1 className="hero-title">
            Hello <em>Emma</em>,<br /> Welcome Back!
          </h1>

          {/* Classes section */}
          <div className="classes-section order-2 md:order-1">
            <div className="classes-header">
              <button className="classes-btn">Classes</button>
              <button className="add-class-btn">+ Add Class</button>
            </div>

            <ul className="classes-list">
              {classes.map((classItem, index) => (
                <li key={index}>{classItem.title} →</li>
              ))}
            </ul>
          </div>

          {/* Overview section */}
          <div className="overview-section order-1 md:order-2">
            <button className="overview-btn">Overview</button>
            <ul className="overview-list">
              <li>
                <i className="fa-solid fa-circle-check"></i> 1:1 Tutoring Class
              </li>
              <li>
                <i className="fa-solid fa-circle-check"></i> 35% Overall
                Progress on your classes
              </li>
            </ul>
          </div>
        </div>

        <hr className="separator" />
      </div>
      <div>
        <Slider
          title="Recent Classes"
          data={classes}
          className="font-cormorant"
        />
      </div>
    </div>
  );
}







