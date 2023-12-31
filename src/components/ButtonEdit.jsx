import React from "react";

export default function ButtonEdit({ size, classes, title, icon }) {
  return (
    <button
      className={`${
        size === "large"
          ? "py-2 px-3 border-blue-500 hover:bg-blue-500"
          : "py-1 px-2 border-gray-400 hover:bg-gray-400"
      } ${classes} group font-medium flex gap-2 w-fit  items-center justify-center border-[1px] hover:text-white rounded-[4px] transition-all duration-200`}
    >
      {icon}
      <span className={size === "large" ? "text-sm" : "text-xs"}>{title}</span>
    </button>
  );
}
