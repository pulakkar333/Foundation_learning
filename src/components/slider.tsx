"use client";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";
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
  className?:string;
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
          <button className="p-2 bg-white rounded-full" onClick={prevSlide}>
            <ChevronLeft size={22} className="text-gray-700" />
          </button>
          <button className="p-2 bg-white rounded-full" onClick={nextSlide}>
            <ChevronRight size={22} className="text-gray-700" />
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
                  width={100}
                  height={130}
                  className="w-auto h-36 object-cover shadow-md"
                />

                <div className="flex flex-col justify-center items-center sm:items-start space-y-2">
                  <div className="flex flex-col items-center sm:items-start mt-[16px] ">
                  <span
                      className="text-xs font-semibold text-gray-800"
                      style={{
                        borderRadius: "100px",
                        backgroundColor: "#FFF48F",
                        width: "77.029px",
                        height: "32.065px",
                        padding: "7px 14px",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "10px",
                        display: "flex",
                        flexShrink: 0,
                      }}
                    >
                      SS-G4
                    </span>
                    <h3 className="text-lg font-medium text-gray-800 font-cormorant">
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
                      <button className="gap-4 relative flex items-center bg-white text-[#ED801F] text-sm font-medium px-3 py-2 rounded-full shadow-lg">
                        Continue
                        <span className="ml-2 w-7 h-7 bg-white rounded-[100%] flex items-center justify-center shadow-md">
                          <Play size={14} className="text-[#ED801F]" />
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

