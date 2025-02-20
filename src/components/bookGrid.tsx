import React from "react";
import Image from "next/image";

const books = [
  {
    title: "English colonies in North America",
    code: "SS-G4",
    image: "/logo/book1.png",
  },
  { title: "The American Revolution", code: "SS-G4", image: "/logo/book2.png" },
  {
    title: "Early 20th century American history",
    code: "SS-G4",
    image: "/logo/book3.png",
  },
  {
    title: "The Civil War and Reconstruction",
    code: "SS-G4",
    image: "/logo/book4.png",
  },
  {
    title: "Basic economic principles",
    code: "SS-G4",
    image: "/logo/book5.png",
  },
  { title: "Physical geography", code: "SS-G4", image: "/logo/book6.png" },
  {
    title: "20th century American history",
    code: "SS-G4",
    image: "/logo/book7.png",
  },
  { title: "Maps", code: "SS-G4", image: "/logo/book8.png" },
  { title: "States", code: "SS-G4", image: "/logo/book9.png" },
  { title: "State capitals", code: "SS-G4", image: "/logo/book10.png" },
  { title: "Cities", code: "SS-G4", image: "/logo/book11.png" },
  { title: "Government", code: "SS-G4", image: "/logo/book12.png" },
  {
    title: "American symbols, landmarks, and monuments",
    code: "SS-G4",
    image: "/logo/book13.png",
  },
  {
    title: "The Civil War and Reconstruction",
    code: "SS-G4",
    image: "/logo/book14.png",
  },
  { title: "Physical geography", code: "SS-G4", image: "/logo/book15.png" },
];

const BookGrid = () => {
  return (
    <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-[40px] p-8 text-left">
      {books.map((book, index) => (
        <div key={index} className="flex flex-col items-start w-full h-60">
          <Image
            width={141.713}
            height={189.639}
            src={book.image}
            alt="Book Logo"
            className=" object-contain self-start"
          />
          <p
            className="text-[14px] text-left font-dm-sans font-normal overflow-hidden text-ellipsis mt-2"
            style={{
              color: "rgba(47, 88, 82, 0.60)",
              display: "-webkit-box",
              WebkitBoxOrient: "vertical",
              WebkitLineClamp: 1,
              textOverflow: "ellipsis",
              transform: "rotate(-0.092deg)",
              lineHeight: "normal",
            }}
          >
            {book.code}
          </p>

          <p
            className="text-[18px] text-left font-cormorant font-medium overflow-hidden text-ellipsis mt-2"
            style={{
              width: "180px",
              height: "20px",
              flexShrink: 0,
              color: "#12353D",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 500,
              letterSpacing: "-0.54px",
              lineHeight: "normal",
            }}
          >
            {book.title}
          </p>
        </div>
      ))}
    </div>
  );
};

export default BookGrid;
