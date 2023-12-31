import React from "react";

export default function CircleChart({percent, color}) {
  return (
    <div
      className="w-[var(--w)] h-[var(--w)] mx-auto bg-gradient-conic rounded-full flex items-center justify-center"
      style={{
        "--p": percent,
        "--c": color,
        "--b": "20px",
        "--w": "90px",
        "--size": "calc(var(--w) - var(--b))",
      }}
    >
      <div className="font-medium flex flex-col justify-center bg-white rounded-full text-center w-[var(--size)] h-[var(--size)] ">
        <span>{percent}%</span>
        <span className="text-gray-300 text-xs">دستیابی</span>
      </div>
    </div>
  );
}
