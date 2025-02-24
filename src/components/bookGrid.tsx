import React from "react";
import Image from "next/image";

const books = [
  {
    title: "English colonies in North America",
    code: "SS-G4",
    image: "/logo/book1.png",
    svgIcon: "/logo/people-arrows.svg",
  },
  {
    title: "The American Revolution",
    code: "SS-G4",
    image: "/logo/book2.png",
    svgIcon: "/logo/people-arrows.svg",
  },
  {
    title: "Early 20th century American history",
    code: "SS-G4",
    image: "/logo/book3.png",
    svgIcon: "/logo/people-arrows.svg",
  },
  {
    title: "The Civil War and Reconstruction",
    code: "SS-G4",
    image: "/logo/book4.png",
    svgIcon: "/logo/people-arrows.svg",
  },
  {
    title: "Basic economic principles",
    code: "SS-G4",
    image: "/logo/book5.png",
    svgIcon: "/logo/people-arrows.svg",
  },
  {
    title: "Physical geography",
    code: "SS-G4",
    image: "/logo/book6.png",
    svgIcon: "/logo/people-arrows.svg",
  },
  {
    title: "20th century American history",
    code: "SS-G4",
    image: "/logo/book7.png",
    svgIcon: "/logo/people-arrows.svg",
  },
  {
    title: "Maps",
    code: "SS-G4",
    image: "/logo/book8.png",
    svgIcon: "/logo/people-arrows.svg",
  },
  {
    title: "States",
    code: "SS-G4",
    image: "/logo/book9.png",
    svgIcon: "/logo/people-arrows.svg",
  },
  {
    title: "State capitals",
    code: "SS-G4",
    image: "/logo/book10.png",
    svgIcon: "/logo/people-arrows.svg",
  },
  {
    title: "Cities",
    code: "SS-G4",
    image: "/logo/book11.png",
    svgIcon: "/logo/people-arrows.svg",
  },
  {
    title: "Government",
    code: "SS-G4",
    image: "/logo/book12.png",
    svgIcon: "/logo/people-arrows.svg",
  },
  {
    title: "American symbols, landmarks, and monuments",
    code: "SS-G4",
    image: "/logo/book13.png",
    svgIcon: "/logo/people-arrows.svg",
  },
  {
    title: "The Civil War and Reconstruction",
    code: "SS-G4",
    image: "/logo/book14.png",
    svgIcon: "/logo/people-arrows.svg",
  },
  {
    title: "Physical geography",
    code: "SS-G4",
    image: "/logo/book15.png",
    svgIcon: "/logo/people-arrows.svg",
  },
];

const BookGrid = () => {
  return (
    <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-x-[40px] gap-y-[60px] p-8 text-left">
      {books.map((book, index) => (
        <div
          key={index}
          className="flex flex-col items-start w-full h-60 relative"
        >
          <div className="relative">
            <Image
              width={142}
              height={190}
              src={book.image}
              alt="Book Logo"
              className="object-contain self-start"
            />
            <div className="absolute inset-0 flex items-center justify-center mr-[5px] mb-[10px]">
              <Image
                width={91}
                height={72}
                src={book.svgIcon}
                alt="SVG Icon"
                className=""
              />
            </div>
          </div>
          <div className="mt-4">
            <p className="text-[14px] text-left font-normal font-dm text-[#2F585299]">
              {book.code}
            </p>
            <p className="text-[18px] text-left font-cormorant font-medium mt-2 w-[180px] h-[50px] text-[#12353D] truncate">
              {book.title}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BookGrid;
