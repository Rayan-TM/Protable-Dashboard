import React from "react";

export default function Percent({ size = 24, color = "#000" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-percent"
    >
      <line x1="19" y1="5" x2="5" y2="19"></line>
      <circle cx="6.5" cy="6.5" r="2.5"></circle>
      <circle cx="17.5" cy="17.5" r="2.5"></circle>
    </svg>
  );
}
