import React from "react";

const PersonalizedTutoring: React.FC = () => {
  return (
    <div
      style={{ paddingLeft: "70px" }}
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
        className="font-semibold"
      >
        Personalized Tutoring
      </h2>
      <hr className="mt-6 border-t border-gray-300 w-full" />
      <p style={{ marginTop: "23px" }} className="text-sm text-gray-600 mt-2">
        Help is just a click away. Get in{" "}
        <span className="font-semibold">Personalized tutoring</span>
        <br /> from our top-of-the-class tutors.
      </p>
      <div className="mt-4 flex justify-end ml-[100px]">
        <button
          className="bg-[#2F5852] text-white rounded-lg font-dm"
          style={{ width: "377px", height: "41px" }}
        >
          Schedule a Class
        </button>
      </div>
    </div>
  );
};

export default PersonalizedTutoring;
