import React from "react";

export default function TodoLabel({label}) {
  return (
    <span
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
      } text-white text-center w-fit text-[10px] rounded-md px-3 py-1`}
    >
      {label}
    </span>
  );
}
