import React, { useState } from "react";

export default function SelectBox({ icon, title, options, hasBorder, onSelect }) {
  const [isHidden, setIsHidden] = useState(true);
  const [selectTitle, setSelectTitle] = useState(title)

  const selectHandler = (e) => {
    onSelect(e.target.innerText)
    setSelectTitle(title && e.target.innerText)
  }

  return (
    <button
      onBlur={() => setIsHidden(true)}
      onClick={() => setIsHidden((prevState) => !prevState)}
      className={`${
        hasBorder &&
        "flex items-center gap-2 border-[1px] border-gray-300 py-1 px-2 rounded-md"
      } relative text-xs font-bold cursor-pointer`}
    >
      {selectTitle && <span>{selectTitle}</span>}
      {icon}

      <div
        className={`${
          isHidden ? "opacity-0 -z-50 h-0 top-12 " : "opacity-1 h-fit z-10 top-7 "
        } select-box custom-scrollbar `}
      >
        {options.map((option) => (
          <span onClick={selectHandler} key={option}>{option}</span>
        ))}
      </div>
    </button>
  );
}
