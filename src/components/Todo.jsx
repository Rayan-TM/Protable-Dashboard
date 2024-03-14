import React from "react";

export default function Todo({ onUpdate, ...info }) {
  return (
    <div
      className={`flex justify-between gap-5 font-medium cursor-pointer ${
        info.checked ? "line-through" : ""
      }`}
      onClick={() => onUpdate(info)}
    >
      <div className="flex gap-2">
        <input
          id="checkbox"
          type="checkbox"
          className="cursor-pointer accent-green-500"
          checked={info.checked}
          onChange={() => onUpdate(info)}
        />
        <label
          className={`text-sm cursor-pointer ${
            info.checked ? "text-green-500" : "text-gray-400"
          }`}
        >
          {info.title}
        </label>
      </div>
      <span className="text-xs text-gray-300">{info.date}</span>
    </div>
  );
}
