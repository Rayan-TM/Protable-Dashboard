import React, { useState } from "react";
import useFetch from "../hooks/useFetch";

export default function Todo({ title, date, checked = false }) {
  const {datas, isPending, error, setItem} = useFetch("http://localhost:4000/todoList")
  const [isChecked, setIsChecked] = useState(checked);

  return (
    <div
      className={`flex justify-between gap-5 font-medium cursor-pointer ${
        isChecked ? "line-through" : ""
      }`}
      onClick={() => setIsChecked((prevState) => !prevState)}
    >
      <div className="flex gap-2">
        <input
          id="checkbox"
          type="checkbox"
          className="cursor-pointer accent-green-500"
          checked={isChecked}
          onChange={() => isChecked}
        />
        <label
          className={`text-sm cursor-pointer ${
            isChecked ? "text-green-500" : "text-gray-400"
          }`}
        >
          {title}
        </label>
      </div>
      <span className="text-xs text-gray-300">{date}</span>
    </div>
  );
}
