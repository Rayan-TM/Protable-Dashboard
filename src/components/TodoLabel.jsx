import React from "react";

export default function TodoLabel({ labels }) {
  return (
    <div className="flex gap-2">
      {labels.map((label) => (
        <span
          key={label}
          className={`${
            label === "اجتماعی"
              ? "bg-red-500"
              : label === "دوستان"
              ? "bg-blue-300"
              : label === "فریلنس"
              ? "bg-green-500"
              : label === "کدنویسی"
              ? "bg-gray-300"
              : "bg-orange-100 text-gray-400"
          } text-white text-center text-[10px] rounded-md px-3 py-1 whitespace-nowrap`}
        >
          {label}
        </span>
      ))}
    </div>
  );
}
