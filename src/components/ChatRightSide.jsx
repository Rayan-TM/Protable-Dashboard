import React, { useState } from "react";
import ChatTabs from "./ChatTabs";
import Avatar from "./Avatar";
import { Search } from "./icons";

export default function ChatRightSide() {
  const [searchValue, setSearchValue] = useState("");
  return (
    <div className="w-1/2 border-l-[1px] pl-4">
      <div className="top-section">
        <div className="flex gap-4">
          <Avatar src="./assets/images/man_avatar3.jpg" avatarSize={30} />
          <div className="flex flex-col gap-1 font-medium">
            <span className="text-sm">جان اسنو</span>
            <span className="text-gray-300 text-xs">مدیر</span>
          </div>
        </div>
        <div className="border-[1px] rounded-md border-gray-300 overflow-hidden flex my-5">
          <input
            onChange={(e) => setSearchValue(e.target.value)}
            value={searchValue}
            className="outline-none text-sm px-3 py-2 w-full"
            type="text"
            placeholder="جستجوی گفتگو"
          />
          <button className="w-10 border-r-[1px] border-gray-300 flex justify-center items-center">
            <Search size={14} />
          </button>
        </div>
      </div>
      <ChatTabs />
    </div>
  );
}
