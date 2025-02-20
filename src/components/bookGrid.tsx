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
    <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-2 p-8 text-left">
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
            style={{ color: "#2F5852" }}
            className="text-[10px] text-black font-medium mt-2 text-left"
          >
            {book.code}
          </p>
          <p className="text-[18px] text-black mt-1 text-left line-clamp-2 overflow-hidden font-cormorant">
            {book.title}
          </p>
        </div>
      ))}
    </div>
  );
};

export default BookGrid;
