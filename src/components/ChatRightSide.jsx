import React, {useContext} from "react";
import ChatTabs from "./ChatTabs";
import Avatar from "./Avatar";
import SearchBox from "./SearchBox";
import { chatContext } from "../Contexts/chatContext";
import { globalContext } from "../Contexts/globalContext";

export default function ChatRightSide() {
  const {loggedInUser} = useContext(globalContext)

  const {chatData, setSearchedChats} = useContext(chatContext)

  return (
    loggedInUser && <div className="w-1/3 border-l-[1px] pl-4 laptop:w-full">
    <div className="top-section">
      <div className="flex gap-4">
        <Avatar src={loggedInUser.image} avatarSize={30} />
        <div className="flex flex-col gap-1 font-medium">
          <span className="text-sm">{loggedInUser.firstname} {loggedInUser.lastname}</span>
          <span className="text-gray-300 text-xs">{loggedInUser.role}</span>
        </div>
      </div>
      <SearchBox customStyles="w-full mt-3 mb-8" factor="username" placeholder="جستجوی گفتگو" allItems={chatData.current} setSearchItems={setSearchedChats} />
    </div>
    <ChatTabs />
  </div>
  );
}
