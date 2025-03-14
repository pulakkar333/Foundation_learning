"use client";
import { useState } from "react";
import { ArrowRight, ArrowLeft } from "lucide-react";
import Image from "next/image";

interface ClassItem {
  title: string;
  progress: number;
  color: string;
  topic: string;
  images: string[];
  code: string;
  svgIcon: string;
}

interface SliderProps {
  title: string;
  data: ClassItem[];
}

export default function Slider({ title, data }: SliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % data.length);
  const prevSlide = () =>
    setCurrentIndex((prev) => (prev === 0 ? data.length - 1 : prev - 1));

  return (
    <div className="mt-[45px] w-full">
      <div className="xl:flex xl:justify-between ssm:flex ssm:justify-between items-center ssm:ml-0 xl:ml-[20px]">
        <h2 className="ssm:text-[30px] md:ml-[20px] xl:text-[35px] text-[#12353D] font-cormorant ">
          {title}
        </h2>

        <div className="flex gap-[8px] md:pr-[42px] xl:pr-[80px]">
          <button
            className="w-[38px] h-[38px] p-[10px] bg-[#FFF] rounded-full"
            onClick={prevSlide}
          >
            <ArrowLeft size={18} className="text-[#2F5852]" />
          </button>
          <button
            className="w-auto h-[38px] p-[10px] bg-white rounded-full"
            onClick={nextSlide}
          >
            <ArrowRight size={18} className="text-[#2F5852]" />
          </button>
        </div>
      </div>

      <div className="relative w-full overflow-hidden mt-[22px]">
        <div
          className="flex transition-transform duration-1000"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {data.map((classItem, index) => (
            <div key={index} className="w-full md:w-1/2">
              <div className="flex flex-col items-center ssm:flex-row ssm:px-[35px] md:px-[40px] xl:px-[50px]">
                <div className="relative">
                  {classItem.images.map((imgSrc, idx) => (
                    <Image
                      key={idx}
                      src={imgSrc}
                      alt={`Image ${idx + 1} - ${classItem.title}`}
                      width={161}
                      height={256}
                      className="absolute xl:w-[161px] xl:h-[226px] md:w-[161px] md:h-[226px] ssm:w-[132px] ssm:h-[195px]"
                      style={{ maxWidth: "none" }}
                    />
                  ))}
                </div>
                <div className="flex flex-col justify-center">
                  <span className="flex items-center justify-center px-[14px] py-[7px] rounded-full bg-[#FFF48F] text-[#A89700] text-[14px]">
                    {classItem.code}
                  </span>
                  <h3 className="text-[24px] text-[#12353D] font-medium font-cormorant">
                    {classItem.topic}
                  </h3>
                  <div className="flex items-center space-x-[30px] mt-4">
                    <div className="relative w-[70px] h-[70px]">
                      <svg className="w-full h-full" viewBox="0 0 36 36">
                        <circle cx="18" cy="18" r="16" fill="none" stroke="#49887F33" strokeWidth="3" />
                        <circle
                          cx="18"
                          cy="18"
                          r="16"
                          fill="none"
                          stroke="#49887F"
                          strokeWidth="3"
                          strokeDasharray="100"
                          strokeDashoffset={100 - classItem.progress}
                          transform="rotate(-90 18 18)"
                        />
                      </svg>
                      <span className="absolute inset-0 flex items-center justify-center font-semibold text-[#49887F] text-[15px]">
                        {classItem.progress}%
                      </span>
                    </div>
                    <button className="relative flex items-center justify-center w-[135px] h-[40px] rounded-[100px] border border-[#D6EFF2] bg-[#EBF7F9] font-medium shadow-lg">
                      <span className="text-[#ED801F] text-[15px] mr-[28px]">Continue</span>
                      <span className="absolute right-0 translate-x-1/3 bg-white rounded-full flex items-center justify-center border border-[#D6EFF2] w-[40px] h-[40px] shadow-lg">
                        <span className="text-[#ED801F] text-[18px] font-extrabold">▶</span>
                      </span>
                    </button>
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
