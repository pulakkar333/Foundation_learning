import React from "react";

const PersonalizedTutoring: React.FC = () => {
  return (
    <div
      style={{ padding: "30px 40px", width: "auto", height: "auto" }}
      className="bg-[#F5FBFC] rounded-lg font-cormorant"
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
        className="ssm:whitespace-nowrap"
      >
        Personalized Tutoring
      </h2>

      <hr className="mt-6 border-t border-gray-300 w-full" />

      <div className="flex xl:justify-between">
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
          className="text-lg md:text-xl lg:text-2xl"
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
          >
            Get 1:1 Personalized
            <span className="hidden xl:inline">
              <br />
            </span>
            tutoring
          </span>{" "}
          from our top-of-the-class tutors.
        </p>

        <div className="md:mt-[40px] xl:mt-[25px]">
          {/* <button
            className="flex justify-center xl:items-center text-white font-dm xl:w-[377px] xl:h-[42px] ml-[20px] md:w-auto sm:w-auto text-sm xl:text-base md:whitespace-nowrap ssm:whitespace-nowrap"
            style={{
              padding: "10px 103px",
              borderRadius: "8px",
              background: "#2F5852",
              boxShadow: "0px 6px 10px 0px rgba(47, 88, 82, 0.30)",
              gap: "10px",
              maxWidth: "calc(100% - 20px)",
            }}
          >
            Schedule a Class
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default PersonalizedTutoring;
