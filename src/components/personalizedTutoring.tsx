import React from "react";

const PersonalizedTutoring: React.FC = () => {
  return (
    <div
      style={{ padding: "20px", width: "auto", height: "auto",marginBottom:"20px" }}
      className="bg-[#F5FBFC] px-6  rounded-lg font-cormorant"
    >
      <h2
        style={{
          color: "#12353D",
          fontFamily: "Cormorant Garamond",
          fontSize: "35px",
          fontStyle: "normal",
          fontWeight: 500,
          lineHeight: "normal",
        }}
        className="ssm:whitespace-nowrap ssm:mr-[50px]"
      >
        Personalized Tutoring
      </h2>

      <hr className="mt-6 border-t border-gray-300 w-full" />

      <div className="xl:flex xl:justify-between md:flex md:justify-between md:w-100% md:h-auto md:gap-[10px]">
        <p
          style={{
            marginTop: "23px",
            color: "#2F5852",
            fontFamily: '"Cormorant Garamond", serif',
            fontSize: "20px",
            fontStyle: "normal",
            fontWeight: 500,
            lineHeight: "130%",
          }}
          className="text-base sm:text-lg md:text-xl lg:text-2xl"
        >
          Help is just a click away.{" "}
          <span
            style={{
              color: "#2F5852",
              fontFamily: '"Cormorant Garamond", serif',
              fontSize: "20px",
              fontStyle: "normal",
              fontWeight: 700,
              lineHeight: "130%",
            }}
            className="font-bold"
          >
            Get 1:1 Personalized tutoring
          </span>
          <br /> from our top-of-the-class tutors.
        </p>
        <div className="xl:mt-[25px] md:mt-[25px] mt-5">
          <button
            className="flex justify-center xl:items-center text-white font-dm xl:w-auto md:w-auto sm:w-auto px-5 py-3 text-sm xl:text-base md:whitespace-nowrap ssm:whitespace-nowrap ml-4 w-full"
            style={{
              padding: "10px 103px", // For larger screens
              borderRadius: "8px",
              background: "#2F5852",
              boxShadow: "0px 6px 10px 0px rgba(47, 88, 82, 0.30)",
              gap: "10px",
              maxWidth: "calc(100% - 20px)", // Ensures it doesn't overflow on small screens
            }}
          >
            Schedule a Class
          </button>
        </div>
      </div>
    </div>
  );
};

export default PersonalizedTutoring;
