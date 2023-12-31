import React, { useState, useContext } from "react";
import TabContent from "./TabContent";
import { chatContext } from "../Contexts/chatContext.js";
import { Video, Phone, ArrowDownLeft, ArrowUpRight, Messages } from "./icons";

export default function ChatTabs() {
  const [tabs, setTabs] = useState(["گفتگوها", "تماس ها", "مخاطبین"]);
  const [currentTab, setCurrentTab] = useState("گفتگوها");
  const { contacts, callData, chatData, selectHandler } =
    useContext(chatContext);

  return (
    <div>
      <ul className="flex border-b-[1px]">
        {tabs.map((tab) => (
          <li
            onClick={() => setCurrentTab(tab)}
            className={`${
              currentTab === tab
                ? "text-blue-500 bg-white border-b-white"
                : "border-white border-b-gray-200"
            } border-[1px] -mb-[1px] rounded-t-md py-2 px-4 text-sm font-medium cursor-pointer`}
            key={tab}
          >
            {tab}
          </li>
        ))}
      </ul>
      <div className="font-medium hover:overflow-y-auto overflow-hidden custom-scrollbar h-[270px]">
        <span className="text-xs mt-5 mb-2 block">گفتگوهای اخیر</span>
        <ul>
          {currentTab === "گفتگوها"
            ? chatData.length !== 0 &&
              chatData.map((data) => (
                <TabContent
                  key={data.id}
                  onSelect={selectHandler}
                  subtitle={
                    data.chats[data.chats.length - 1].messages[
                      data.chats[data.chats.length - 1].messages.length - 1
                    ].message
                  }
                  {...data}
                >
                  {data.newInput !== 0 && (
                    <span className="bg-blue-500 text-white rounded-full py-px px-2 text-[9px]">
                      {data.newInput}
                    </span>
                  )}
                  <span className="text-left text-gray-300 font-medium w-min">
                    {data.chats[data.chats.length - 1].date}
                  </span>
                </TabContent>
              ))
            : currentTab === "تماس ها"
            ? callData.map((data) => (
                <TabContent
                  key={data.id}
                  {...data}
                  subtitle={
                    <span className="flex gap-1">
                      {data.hasReceived ? (
                        <ArrowDownLeft size={14} color="#FF3F3F" />
                      ) : (
                        <ArrowUpRight size={14} color="#10B759" />
                      )}
                      {data.date}
                    </span>
                  }
                >
                  {data.isVideoCall ? (
                    <Video
                      size={18}
                      color={data.hasReceived ? "#FF3F3F" : "#10B759"}
                    />
                  ) : (
                    <Phone
                      size={18}
                      color={data.hasReceived ? "#FF3F3F" : "#10B759"}
                    />
                  )}
                </TabContent>
              ))
            : contacts.map((contact) => (
                <TabContent 
                imgSrc={contact.imgSrc ? contact.imgSrc : "./assets/images/default-avatar.webp"}
                username={`${contact.firstname} ${contact.lastname}`}
                subtitle={contact.address}>
                  <Phone size={18} />
                  <Messages size={18} />
                  <Video size={18} />
                </TabContent>
              ))}
        </ul>
      </div>
    </div>
  );
}
