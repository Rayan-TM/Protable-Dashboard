import React, { useState } from "react";

export default function SmallButton({
  children,
  styles,
  title,
  bgColor,
  hasBorder,
  onClickHandler,
  direction = "-top-10",
  isInMenu,
  isInTodoList,
}) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      style={styles}
      className={`flex ${isInMenu ? "m-auto" : ""} relative items-center ${
        isInTodoList ? "" : "w-[48px]"
      } h-9  ${bgColor ? bgColor + " rounded-[3px]" : ""} justify-center group`}
    >
      <button
        onClick={() => onClickHandler && onClickHandler()}
        onMouseOver={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`${
          hasBorder ? "small-btn" : ""
        } h-full w-full flex justify-center items-center`}
      >
        {children}
      </button>
      <span
        className={`${direction} badge w-max absolute ${
          isHovered
            ? "opacity-100 z-0"
            : "opacity-0 -z-30"
        } bg-gray-400 text-white text-xs p-2 rounded-md transition-opacity duration-300 cursor-default`}
      >
        {title}
      </span>
    </div>
  );
}
