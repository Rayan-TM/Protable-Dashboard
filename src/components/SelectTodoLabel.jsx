import React, { useState, useRef } from "react";
import useDropDown from "../hooks/useDropDown";

export default function SelectTodoLabel({ values, options, onChange }) {
  const selectBox = useRef();
  const [isBoxOpen, setIsBoxOpen] = useDropDown(selectBox);

  return (
    <div
      ref={selectBox}
      onClick={() => setIsBoxOpen((prevState) => !prevState)}
      className="w-full min-h-[35px] border-[1px] border-gray-300 rounded-md p-1 flex gap-1 flex-wrap relative z-[100]"
    >
      {values.map((value) => (
        <div
          key={value.name}
          className={`${value.color} px-3 py-1 w-fit rounded-md`}
        >
          <button
            onClick={(e) => {
              e.stopPropagation();
              onChange(values.filter((item) => item !== value));
            }}
            className="text-gray-400 ml-1 hover:text-white"
          >
            &times;
          </button>
          <span className="text-xs">{value.name}</span>
        </div>
      ))}
      <ul
        className={`${
          isBoxOpen ? "block" : "hidden"
        } absolute top-full right-0 bg-white border-[1px] border-gray-300 w-full rounded-b-md`}
      >
        {options.map((option) => (
          <li
            onClick={(e) => {
              e.stopPropagation();
              values.includes(option)
                ? onChange(values.filter((value) => value !== option))
                : onChange([...values, option]);
            }}
            className={`${
              values.includes(option) ? "bg-gray-300" : ""
            } hover:bg-blue-500 hover:text-white p-2 text-sm`}
            key={option.name}
          >
            {option.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
