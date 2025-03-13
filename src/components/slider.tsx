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
    <div className="mt-[45px] w-full">
      <div className="xl:flex xl:justify-between ssm:flex ssm:justify-between items-center xl:ml-[20px]">
        <h2 className="ssm:text-[30px] md:ml-[20px] xl:text-[35px] text-[#12353D] font-cormorant ">
          {title}
        </h2>

        <div
          style={{ paddingRight: "" }}
          className="flex gap-[8px] md:pr-[42px] xl:pr-[80px]"
        >
          <button
            className="w-[38px] h-[38px] p-[10px] bg-[#FFF] rounded-full"
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
            className="w-auto h-[38px] p-[10px] bg-white rounded-full"
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

      <div className="relative w-full overflow-hidden mt-[22px]">
        <div
          className="flex transition-transform duration-1000"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {data.map((classItem, index) => (
            <div
              key={index}
              className="w-full sm:w-1/1 md:w-1/1 lg:w-1/2 md:pl-[px] relative"
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

              <div className="flex flex-col items-center ssm:flex-row ssm:px-[15px] md:px-[40px] xl:px-[50px]">
                <div className="relative">
                  {classItem.images.map((imgSrc, idx) => (
                    <Image
                      key={idx}
                      src={imgSrc}
                      alt={`Image ${idx + 1} - ${classItem.title}`}
                      width={161}
                      height={256}
                      className={`absolute  ${
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
                  <div className="absolute inset-0 flex flex-col xl:mt-[30px] md:mt-[20px] ssm:mt-[20px]">
                    <Image
                      src={classItem.svgIcon}
                      alt="Custom SVG"
                      width={53}
                      height={42}
                      className="text-white mb-2"
                    />
                    <h3
                      style={{
                        color: "#FFF",
                        fontFamily: '"Cormorant Garamond", serif',
                        fontSize: "24px",
                        fontStyle: "normal",
                        fontWeight: 500,
                        lineHeight: "normal",
                        marginTop: "10px",
                        textAlign: "left",
                        marginRight: "50px",
                      }}
                    >
                      {classItem.title}
                    </h3>
                  </div>
                </div>

                <div className="flex flex-col justify-center">
                  <div className="flex flex-col items-center ssm:items-start sm:items-start gap-2">
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

                    <h3 className="xl:text-[24px] md:text-[24px] ssm:text-[20px] font-medium text-[#12353D] font-cormorant xl:w-[250px] xl:h-[87px] md:w-[250px] md:h-[87px] ssm:self-start ssm:w-[186px] ssm:h-[48px] mb-[10px]">
                      {classItem.topic}
                    </h3>
                  </div>

                  <div className="flex items-center xl:space-x-[30px] md:space-x-[48px] ssm:space-x-[px] ssm:mt-[20px] xl:mt-0 md:mt-0 mb-[10px]">
                    <div className="relative xl:w-[70px] xl:h-[70px] md:w-[70px] md:h-[70px] ssm:w-[70px] ssm:h-[70px]">
                      <svg className="w-full h-full" viewBox="0 0 36 36">
                        <circle
                          cx="18"
                          cy="18"
                          r="16"
                          fill="none"
                          stroke="#49887F33"
                          strokeWidth="3"
                        />
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
                      <span className="absolute inset-0 flex items-center justify-center font-semibold text-[#49887F] ssm:text-[12px] text-[15px]">
                        {classItem.progress}%
                      </span>
                    </div>

                    <div className="relative">
                      <button className="relative flex items-center justify-center ssm:w-[90px] ssm:h-[35px] md:w-[135px] md:h-[40px] xl:w-[135px] xl:h-[40px] flex-shrink-0 rounded-[100px] border border-[#D6EFF2] bg-[#EBF7F9] font-medium">
                        <span className="text-[#ED801F] ssm:text-[12px] md:text-[15px] xl:text-[15px]  ssm:mr-3">
                          Continue
                        </span>
                        <span className="absolute right-0 translate-x-1/3 bg-white rounded-full flex items-center justify-center border border-[#D6EFF2] xl:w-[42px] xl:h-[42px] md:w-[42px] md:h-[42px] xl:mb-[4px] ssm:mb-[4px] md:mb-[4px] ssm:w-[35px] ssm:h-[35px] shadow-xl">
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
