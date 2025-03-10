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
    image: "/logo/book1.png",
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
    <div className="book-grid grid-cols-3 ssm:px-[5px] md:px-[0px] ssm:mt-[10px] ssm:grid-cols-3 md:grid-cols-5 xl:grid-cols-6 xl:gap-x-[50px] md:gap-x-[50px] ssm:gap-x-[10px] xl:gap-y-[40px] md:gap-y-[40px] xl:pl-[0px] md:pl-[0px] md:pr-[40px] xl:pr-[0px] lg:pl-[0px] sm:pl-[0px] 2xl:pl-[0px]">
      {books.map((book, index) => (
        <div key={index} className="book-card">
          <div className="book-image-wrapper md:w-[121px] md:h-[161px]">
            <Image
              width={142}
              height={190}
              src={book.image}
              alt="Book Logo"
              className="book-image"
            />
            <div className="book-overlay">
              <Image
                width={91}
                height={72}
                src={book.svgIcon}
                alt="SVG Icon"
                className="ssm:w-[61px] ssm:h-[48px] md:w-[77px] md:h-[61px] xl:font-[72px]"
              />
            </div>
          </div>

          <div className="book-info">
            <p className="book-code ">{book.code}</p>
            <p className="book-title md:w-auto md:h-auto">{book.title}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BookGrid;
