import React, { useState, useContext, useEffect } from "react";
import TabContent from "./TabContent";
import { chatContext } from "../Contexts/chatContext.js";
import { Video, Phone, ArrowDownLeft, ArrowUpRight, Messages } from "./icons";
import { globalContext } from "../Contexts/globalContext";

export default function ChatTabs() {
  const { loggedInUser } = useContext(globalContext);

  const [tabs] = useState(["گفتگوها", "تماس ها", "مخاطبین"]);
  const [currentTab, setCurrentTab] = useState("گفتگوها");
  const { contacts, callData, chatData, selectHandler, searchedChats } =
    useContext(chatContext);
  const [filteredChats, setFilteredChats] = useState([])
  const [filteredCalls, setFilteredCalls] = useState([])

  useEffect(() => {
    setFilteredChats(chatData.filter(chat => chat.username !== loggedInUser.username))
    setFilteredCalls(callData.filter(call => call.username !== loggedInUser.username))
  }, [callData, chatData])


  return (
    <div>
      <ul className="flex border-b-[1px]">
        {tabs.map((tab) => (
          <li
            key={tab}
            onClick={() => setCurrentTab(tab)}
            className={`${
              currentTab === tab
                ? "text-blue-500 bg-white border-b-white"
                : "border-white border-b-gray-200"
            } border-[1px] -mb-[1px] rounded-t-md py-2 px-4 text-sm font-medium cursor-pointer ipad:text-xs ipad:p-2`}
          >
            {tab}
          </li>
        ))}
      </ul>
      <div className="font-medium overflow-y-auto overflow-hidden custom-scrollbar h-[270px]">
        <span className="text-xs mt-5 mb-2 block">گفتگوهای اخیر</span>
        <ul>
          {currentTab === "گفتگوها" ? (
            <>
              {searchedChats.length
                ? searchedChats.map((data) => (
                    <Chats
                      key={data.id}
                      data={data}
                      selectHandler={selectHandler}
                    />
                  ))
                : filteredChats.length !== 0 &&
                filteredChats.map((data) => (
                    <Chats key={data.id} data={data} selectHandler={selectHandler} />
                  ))}
            </>
          ) : currentTab === "تماس ها" ? (
            filteredCalls.map((data) => (
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
          ) : (
            contacts.map((contact) => (
              <TabContent
                key={contact.id}
                imgSrc={
                  contact.imgSrc
                    ? contact.imgSrc
                    : "./assets/images/default-avatar.webp"
                }
                username={`${contact.firstname} ${contact.lastname}`}
                subtitle={contact.address}
              >
                <Phone size={18} />
                <Messages size={18} />
                <Video size={18} />
              </TabContent>
            ))
          )}
        </ul>
      </div>
    </div>
  );
}

const Chats = ({ data, selectHandler }) => {
  return (
    <TabContent
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
  );
};
