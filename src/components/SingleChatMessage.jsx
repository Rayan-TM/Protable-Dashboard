import React from "react";

export default function SingleChatMessage({ message, time, hasSent }) {
  return (
    <>
      <div className={`${hasSent ? "flex-row-reverse" : ""} flex items-center gap-3 my-5 mr-3`}>
        <div className={`${hasSent ? "bg-blue-500 text-white before:left-[-7px] before:bg-blue-500" : "before:right-[-7px] before:bg-gray-200 bg-gray-200"} message  relative max-w-[75%] leading-6  px-3 py-2 rounded-md text-sm`}>
          {message}
        </div>
        <div className=" text-gray-300 text-[11px] font-medium">{time}</div>
      </div>
    </>
  );
}
