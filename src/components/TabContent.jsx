import React,{useContext} from "react";
import Avatar from "./Avatar";
import { chatContext } from "../Contexts/chatContext.js";

export default function TabContent({imgSrc, username, subtitle, children, subtitleColor = "gray", onSelect}) {
  const { chooseColor } = useContext(chatContext);

  const selectHandler = () => {
    onSelect(username)
  }

  return (
    <li onClick={onSelect && selectHandler} className="flex justify-between items-center border-b-[1px] last:border-b-0 py-4 cursor-pointer">
      <div className="flex gap-4">
        <Avatar src={imgSrc} avatarSize={30} badgeSize="before:w-3 before:h-3" badgeColor={chooseColor()}/>
        <div className="flex flex-col gap-1 font-medium">
          <span className="text-sm">{username}</span>
          <span className={` text-[11px] ${subtitleColor === 'green' ? 'text-green-500' : 'text-gray-300'}`}>{subtitle}</span>
        </div>
      </div>
      <div className="text-xs flex items-center gap-4 text-left">
        {children}
      </div>
    </li>
  );
}
