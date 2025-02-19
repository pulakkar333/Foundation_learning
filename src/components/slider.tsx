"use client";
import { useState } from "react";
import { ArrowRight, ArrowLeft } from "lucide-react";
import Image from "next/image";

interface ClassItem {
  title: string;
  progress: number;
  color: string;
  topic: string;
  image: string;
}

interface SliderProps {
  title: string;
  data: ClassItem[];
  className?: string;
}

export default function Slider({ title, data, className }: SliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % data.length);
  const prevSlide = () =>
    setCurrentIndex((prev) => (prev === 0 ? data.length - 1 : prev - 1));

  return (
    <div className="mt-6 w-full pb-0 bg-[#dff2f5]">
      <div className="flex justify-between items-center md:px-0">
        <h2 className={`text-lg font-semibold text-gray-800 ${className}`}>
          {title}
        </h2>
        <div style={{ paddingRight: "50px" }} className="flex gap-2">
          <button className="w-[38px] h-[38px] p-2 bg-white rounded-full" onClick={prevSlide}>
            <ArrowLeft
              size={18}
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
          <button className="w-[38px] h-[38px] p-2 bg-white rounded-full" onClick={nextSlide}>
            <ArrowRight
              size={18}
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

      <div className="relative w-full overflow-hidden mt-4">
        <div
          className="flex transition-transform duration-1000"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {data.map((classItem, index) => (
            <div
              key={index}
              className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 px-2 flex-shrink-0 border-r border-gray-300"
            >
              <div className="bg-[#dff2f5] p-4 flex flex-col items-center sm:flex-row sm:space-x-4 w-full h-auto pb-0 mb-0">
                <Image
                  src={classItem.image}
                  alt={classItem.title}
                  width={161}
                  height={238}
                  className="w-auto h-36 object-cover shadow-md"
                />
                <i className="fa-solid fa-people-arrows text-[#2F5852] opacity-40"></i>

                <div className="flex flex-col justify-center items-center sm:items-start space-y-2">
                  <div className="flex flex-col items-center sm:items-start mb-[16px] ">
                    <span
                      className="flex flex-shrink-0 items-center justify-center w-[77.029px] h-[32.065px] px-[14px] py-[7px] rounded-full bg-[#FFF48F]"
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
                      SS-G4
                    </span>

                    <h3 className="text-lg font-medium text-gray-800 font-cormorant mt-2">
                      {classItem.topic}
                    </h3>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="relative w-12 h-12 mb-[16px]">
                      <svg className="w-full h-full" viewBox="0 0 36 36">
                        <circle
                          cx="18"
                          cy="18"
                          r="16"
                          fill="none"
                          stroke="#E0E0E0"
                          strokeWidth="4"
                        />
                        <circle
                          cx="18"
                          cy="18"
                          r="16"
                          fill="none"
                          stroke={classItem.color}
                          strokeWidth="4"
                          strokeDasharray="100"
                          strokeDashoffset={100 - classItem.progress}
                          strokeLinecap="round"
                        />
                      </svg>
                      <span className="absolute inset-0 flex items-center justify-center text-sm font-semibold text-gray-700">
                        {classItem.progress}%
                      </span>
                    </div>
                    <div className="relative mb-[16px]">
                      <button className="relative flex items-center justify-center w-[135px] h-[40px] flex-shrink-0 rounded-[100px] border border-[#D6EFF2] bg-[#EBF7F9] text-[#ED801F] text-sm font-medium shadow-md">
                        <span className="text-[#ED801F] font-semibold">
                          Continue
                        </span>
                        <span
                          className="absolute right-0 translate-x-1/3 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md border border-[#D6EFF2]"
                          style={{
                            filter:
                              "drop-shadow(0px 10.169px 20.339px rgba(18, 53, 61, 0.30))",
                          }}
                        >
                          <span
                            className="text-[#ED801F] font-bold leading-none"
                            style={{
                              fontFamily: '"Font Awesome 6 Sharp", sans-serif',
                              fontSize: "13.559px",
                              fontStyle: "normal",
                              fontWeight: 900,
                              lineHeight: "normal",
                            }}
                          >
                            ▶
                          </span>
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
