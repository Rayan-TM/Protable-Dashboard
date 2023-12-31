import React from "react";

export default function MoreHorizontal({ size = 24, color = "#000" }) {
  return (
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        height={size}
        width={size}
        stroke={color}
        viewBox="0 0 448 512">
      <path d="M8 256a56 56 0 1 1 112 0A56 56 0 1 1 8 256zm160 0a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm216-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112z" />
    </svg>
  );
}
