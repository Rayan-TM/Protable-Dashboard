import React, { useContext } from "react";
import SmallButton from "./SmallButton";
import {
  Video,
  Phone,
  UserPlus,
  Smile,
  Send,
  PaperClip,
  Cancel,
} from "./icons";
import TabContent from "./TabContent";
import SingleChatMessage from "./SingleChatMessage";
import ChatDivider from "./ChatDivider";
import { chatContext } from "../Contexts/chatContext";

export default function ChatLeftSide() {
  const { currentChat, setCurrentChat } = useContext(chatContext);
  const options = [
    { title: "شروع تماس تصویری", icon: <Video size={19} /> },
    { title: "شروع تماس صوتی", icon: <Phone size={19} /> },
    { title: "افزودن به مخاطبین", icon: <UserPlus size={19} /> },
  ];

  return (
    <div
      className={`${
        currentChat
          ? "laptop:bg-white laptop:mr-0 laptop:absolute laptop:inset-0 laptop:left-3 w-full rounded-md px-4"
          : "laptop:hidden"
      } mr-5 w-2/3 flex-col flex justify-between `}
    >
      {currentChat && (
        <>
          <TabContent
            imgSrc={currentChat.imgSrc}
            username={currentChat.username}
            subtitle="در حال نوشتن ..."
            subtitleColor="green"
          >
            {options.map((option) => (
              <SmallButton key={option.title} isInTodoList title={option.title}>
                {option.icon}
              </SmallButton>
            ))}
            <button
              onClick={() => setCurrentChat(null)}
              className="laptop:block hidden bg-gray-200 px-3 py-1 rounded-md hover:bg-gray-400"
            >
              <Cancel />
            </button>
          </TabContent>
          <div className="h-[300px] pt-5 overflow-hidden overflow-y-auto custom-scrollbar">
            {currentChat.chats.map((chat) => (
              <div key={chat.id}>
                <ChatDivider date={chat.date} />
                {chat.messages.map((message) => (
                  <SingleChatMessage key={message.id} {...message} />
                ))}
              </div>
            ))}
          </div>
          <div className="flex gap-2 border-t-[1px] pt-5 items-center">
            <SmallButton title="شکلک" hasBorder>
              <Smile size={15} />
            </SmallButton>
            <input
              className="w-full border-[1px] rounded-md outline-none text-sm px-3 py-2"
              type="text"
              placeholder="پیام خود را بنویسید"
            />
            <button className="bg-blue-500 self-stretch px-4 rounded-md">
              <Send size={15} color="#fff" />
            </button>
            <SmallButton title="الحاق فایل" hasBorder>
              <PaperClip size={15} />
            </SmallButton>
          </div>
        </>
      )}
    </div>
  );
}
