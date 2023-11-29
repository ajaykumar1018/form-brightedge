import React from "react";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";

const CustomLeftArrow = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`custom-arrow custom-left-arrow absolute left-5 top-1/2`}
    >
      {/* <ArrowLeftIcon style={{ color: "white" }} /> */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="51"
        height="51"
        viewBox="0 0 51 51"
        fill="none"
      >
        <circle
          cx="25.4438"
          cy="25.4438"
          r="25.4438"
          transform="matrix(-1 0 0 1 50.8877 0.112427)"
          fill="#1682FB"
        />
        <path
          d="M27.4585 34.7568L18.5308 25.8038L27.4585 16.8509"
          fill="#1682FB"
        />
        <path
          d="M27.4585 34.7568L18.5308 25.8038L27.4585 16.8509"
          stroke="white"
          stroke-width="2.96331"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </button>
  );
};

export default CustomLeftArrow;
