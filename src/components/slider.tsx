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
  className?: string;
}

export default function Slider({ title, data, className }: SliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % data.length);
  const prevSlide = () =>
    setCurrentIndex((prev) => (prev === 0 ? data.length - 1 : prev - 1));

  return (
    <div className="mt-[45px] w-full pb-0">
      <div className="flex justify-between items-center md:px-0">
        <h2
          className={`text-lg font-semibold ${className}`}
          style={{
            color: "#12353D",
            fontFamily: '"Cormorant Garamond", serif',
            fontSize: "35px",
            fontStyle: "normal",
            fontWeight: 500,
            lineHeight: "normal",
          }}
        >
          {title}
        </h2>

        <div style={{ paddingRight: "" }} className="flex gap-[8px]">
          <button
            className="w-[38px] h-[38px] p-2 bg-white rounded-full"
            onClick={prevSlide}
          >
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
          <button
            className="w-auto h-[38px] p-2 bg-white rounded-full"
            onClick={nextSlide}
          >
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

      <div className="relative w-full overflow-hidden xl:mt-[22px]">
        <div
          className="flex transition-transform duration-1000"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {data.map((classItem, index) => (
            <div
              key={index}
              className="w-full sm:w-1/1 md:w-1/1 lg:w-1/2 md:pl-[15px] relative"
            >
              {index !== 0 && (
                <div
                  className="h-full w-px absolute left-0 top-0 bottom-0 ssm:hidden md:block xl:block"
                  style={{
                    strokeWidth: "1px",
                    stroke: "rgba(47, 88, 82, 0.00)",
                    opacity: 0.3,
                    backgroundColor: "rgba(47, 88, 82, 0.3)",
                  }}
                ></div>
              )}

              <div className="p-6 flex flex-col items-center pb-0 mb-0 ssm:flex-row">
                <div className="relative mr-[10px]">
                  {classItem.images.map((imgSrc, idx) => (
                    <Image
                      key={idx}
                      src={imgSrc}
                      alt={`Image ${idx + 1} - ${classItem.title}`}
                      width={161}
                      height={256}
                      className={`absolute ssm:w-[123px] ssm:h-[195px] xl:w-[161px] xl:h-[256px] ${
                        idx === 0
                          ? "relative top-[6px] right-[14px]"
                          : idx === 1
                          ? "bottom-0 left-[-16px]"
                          : "bottom-0 right-[20px]"
                      }`}
                      style={{
                        maxWidth: "none",
                      }}
                    />
                  ))}
                  <div className="absolute inset-0 flex flex-col mt-[20px] xl:mt-[20px] md:mt-[15px] gap-[30px]">
                    <Image
                      src={classItem.svgIcon}
                      alt="Custom SVG"
                      width={41}
                      height={32}
                      className="text-white xl:mb-4"
                    />
                    <h3
                      style={{
                        color: "#FFF",
                        fontFamily: '"Cormorant Garamond", serif',
                        fontSize: "20px",
                        fontStyle: "normal",
                        fontWeight: 500,
                        lineHeight: "normal",
                        marginTop: "10px",
                        textAlign: "left",
                        marginRight: "100px",
                      }}
                    >
                      {classItem.title}
                    </h3>
                  </div>
                </div>

                <div className="flex flex-col justify-center ssm:ml-[10px]">
                  <div className="flex flex-col items-center ssm:items-start sm:items-start xl:gap-4">
                    <span
                      className="flex flex-shrink-0 items-center justify-center w-auto h-[32px] px-[14px] py-[7px] rounded-full bg-[#FFF48F] ssm:self-start"
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
                      {classItem.code}
                    </span>

                    <h3 className="xl:text-[24px] md:text-[24px] ssm:text-[20px] font-medium text-gray-800 font-cormorant xl:w-[250px] xl:h-[87px] md:w-[250px] md:h-[87px] mb-[10px] ssm:self-start xl:mb-6">
                      {classItem.topic}
                    </h3>
                  </div>

                  <div className="flex items-center xl:space-x-[50px] md:space-x-[50px] ssm:space-x-[5px] xl:mt-[20px]">
                    <div className="relative xl:w-[59px] xl:h-[59px] ssm:w-[40px] ssm:h-[40px]">
                      <svg className="w-full h-full" viewBox="0 0 36 36">
                        <circle
                          cx="18"
                          cy="18"
                          r="16"
                          fill="none"
                          stroke="#49887F33"
                          strokeWidth="4"
                        />
                        <circle
                          cx="18"
                          cy="18"
                          r="16"
                          fill="none"
                          stroke="#49887F"
                          strokeWidth="4"
                          strokeDasharray="100"
                          strokeDashoffset={100 - classItem.progress}
                          strokeLinecap="round"
                          transform="rotate(-90 18 18)"
                        />
                      </svg>
                      <span className="absolute inset-0 flex items-center justify-center text-sm font-semibold text-gray-700 ssm:text-[12px] xl:text-[15px]">
                        {classItem.progress}%
                      </span>
                    </div>

                    <div className="relative">
                      <button className="relative flex items-center justify-center xl:w-[135px] xl:h-[40px] md:w-[135px] md:h-[40px] ssm:w-[120px] ssm:h-[40px] flex-shrink-0 rounded-[100px] border border-[#D6EFF2] bg-[#EBF7F9] text-sm font-medium">
                        <span className="text-[#ED801F]">Continue</span>
                        <span className="absolute right-0 translate-x-1/3 bg-white rounded-full flex items-center justify-center shadow-md border border-[#D6EFF2] w-[40px] h-[40px] xl:mb-[5px]">
                          <span className="text-[#ED801F] text-[18px] font-extrabold inline-block">
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
