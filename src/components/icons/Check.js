import React from "react";

export default function Check({ size = 24, filled, bg = '#10B759', color = filled ? "#fff" : "#10B759" }) {
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
      style={{backgroundColor: filled && bg}}
      className={`feather feather-check ${filled && `rounded-full w-5 h-5`}`}
    >
      <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
  );
}
