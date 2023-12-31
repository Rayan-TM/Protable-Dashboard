import React from "react";

export default function ChatDivider({date}) {
  return (
    <div className="before:block before:h-[1px] before:bg-gray-200 relative">
      <span className="bg-white text-gray-300 absolute -top-5 right-1/2 translate-x-1/2 text-xs p-3">
        {date}
      </span>
    </div>
  );
}
