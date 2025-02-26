import React from "react";

const PersonalizedTutoring: React.FC = () => {
  return (
    <div
      style={{ paddingLeft: "70px", marginTop:"60px" }}
      className="bg-[#F5FBFC] p-6 rounded-lg font-cormorant"
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
        className=""
      >
        Personalized Tutoring
      </h2>
      <hr className="mt-6 border-t border-gray-300 w-full" />
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
          Get 1:1 Personalized tutoring
        </span>
        <br /> from our top-of-the-class tutors.
      </p>

      <div className="mt-4 flex justify-end ml-[100px]">
        <button
          className="flex justify-center items-center text-white font-dm"
          style={{
            width: "377px",
            padding: "10px 103px",
            borderRadius: "8px",
            background: "#2F5852",
            boxShadow: "0px 6px 10px 0px rgba(47, 88, 82, 0.30)",
            gap: "10px",
          }}
        >
          Schedule a Class
        </button>
      </div>
    </div>
  );
};

export default PersonalizedTutoring;
