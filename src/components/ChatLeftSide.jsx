import React, { useContext, useEffect, useState } from "react";
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
  const { currentChat, setCurrentChat, editItem } = useContext(chatContext);
  const [isIconBoxOpen, SetIsIconBoxOpen] = useState(false);
  const [currentIconCategory, setCurrentIconCategory] = useState("😊");
  const [iconCategories] = useState(["😊", "🎈", "🍕"]);
  const [chatInput, setChatInput] = useState("");
  const [newMessage, setNewMessage] = useState(null);

  useEffect(() => {
    if (newMessage) {
      if (newMessage.date) {
        setCurrentChat((prevState) => ({
          ...prevState,
          chats: [...prevState.chats, newMessage],
        }));
      } else {
        let newChat = currentChat
        newChat.chats[newChat.chats.length -1].messages.push(newMessage)
        setCurrentChat({...newChat})
      }
    }
  }, [newMessage]);

  useEffect(() => {
    if (newMessage) {
      const baseUrl = "http://localhost:4000/";
      editItem(`${baseUrl}chatDatas`, currentChat.id, currentChat);
    }
  }, [currentChat]);

  const options = [
    { title: "شروع تماس تصویری", icon: <Video size={19} /> },
    { title: "شروع تماس صوتی", icon: <Phone size={19} /> },
    { title: "افزودن به مخاطبین", icon: <UserPlus size={19} /> },
  ];

  const allIcons = [
    {
      name: "😊",
      icons: [
        "😀",
        "😁",
        "😂",
        "🤣",
        "😃",
        "😄",
        "😅",
        "😆",
        "😉",
        "😊",
        "😋",
        "😎",
        "😍",
        "😘",
        "🥰",
        "😗",
        "😙",
        "😚",
        "🙂",
        "🤗",
        "🤩",
        "🤔",
        "🤨",
        "😐",
        "😑",
        "😶",
        "🙄",
        "😏",
        "😣",
        "😥",
        "😮",
        "🤐",
        "😯",
        "😪",
        "😫",
        "🥱",
        "😴",
        "😌",
        "😛",
        "😜",
        "😝",
        "🤤",
        "😒",
        "😓",
        "😔",
        "😕",
        "🙃",
        "🤑",
        "😲",
        "🙁",
        "😖",
        "😞",
        "😟",
        "😤",
        "😢",
        "😭",
        "😦",
        "😧",
        "😨",
        "😩",
        "🤯",
        "😬",
        "😰",
        "😱",
        "🥵",
        "🥶",
        "😳",
        "🤪",
        "😵",
        "🥴",
        "😠",
        "😡",
        "🤬",
        "😷",
        "🤒",
        "🤕",
        "🤢",
        "🤮",
        "🤧",
        "😇",
        "🥳",
        "🥺",
        "🤠",
        "🤡",
        "🤥",
        "🤫",
        "🤭",
        "🧐",
        "🤓",
        "😈",
        "👿",
        "👹",
        "👺",
        "💀",
        "👻",
        "👽",
        "👾",
        "🤖",
      ],
    },
    {
      name: "🎈",
      icons: [
        "🎈",
        "🎆",
        "🎇",
        "🧨",
        "✨",
        "🎉",
        "🎊",
        "🎃",
        "🎄",
        "🎋",
        "🎍",
        "🎎",
        "🎏",
        "🎐",
        "🎑",
        "🧧",
        "🎀",
        "🎁",
        "🎫",
        "🎠",
        "🎡",
        "🎢",
        "🎪",
        "🎭",
        "🎨",
        "🧵",
        "🧶",
        "🛒",
        "👓",
        "🦺",
        "🥽",
        "🥼",
        "🧥",
        "👔",
        "👕",
        "👖",
        "🩳",
        "🧣",
        "🧤",
        "🧦",
        "👗",
        "🥻",
        "👘",
        "👚",
        "👛",
        "👜",
        "👝",
        "🎒",
        "👞",
        "👟",
        "🥾",
        "🥿",
        "👠",
        "👡",
        "👢",
        "🩰",
        "👑",
        "🧢",
        "👒",
        "🎩",
        "🎓",
        "💋",
        "💄",
        "💍",
        "💎",
        "⚽",
        "⚾",
        "🥎",
        "🏀",
        "🏐",
        "🏈",
        "🏉",
        "🎱",
        "🎳",
        "🥌",
        "⛳",
        "🎣",
        "🤿",
        "🎽",
        "🛶",
        "🎿",
        "🛷",
        "🥅",
        "🏒",
        "🥍",
        "🏏",
        "🏑",
        "🏓",
        "🏸",
        "🎾",
        "🥏",
        "🪁",
        "🎯",
      ],
    },
    {
      name: "🍕",
      icons: [
        "🍕",
        "🍔",
        "🍟",
        "🌭",
        "🍿",
        "🧂",
        "🥓",
        "🥚",
        "🍳",
        "🧇",
        "🥞",
        "🧈",
        "🍞",
        "🥐",
        "🥨",
        "🥯",
        "🥖",
        "🧀",
        "🥗",
        "🥙",
        "🥪",
        "🌮",
        "🌯",
        "🥫",
        "🍖",
        "🍗",
        "🥩",
        "🍠",
        "🥟",
        "🥠",
        "🥡",
        "🍱",
        "🍘",
        "🍙",
        "🍚",
        "🍛",
        "🍜",
        "🦪",
        "🍣",
        "🍤",
        "🍥",
        "🥮",
        "🍢",
        "🧆",
        "🥘",
        "🍲",
        "🍝",
        "🥣",
        "🥧",
        "🍦",
        "🍧",
        "🍨",
        "🍩",
        "🍪",
        "🎂",
        "🍰",
        "🧁",
        "🍫",
        "🍬",
        "🍭",
        "🍡",
        "🍮",
        "🍯",
        "🍼",
        "🥛",
        "🧃",
        "☕",
        "🍵",
        "🧉",
        "🍶",
        "🍾",
        "🍷",
      ],
    },
  ];

  function toggleIconBox() {
    SetIsIconBoxOpen((prevState) => !prevState);
  }

  function getDateAndTime() {
    const date = new Date();
    const hour = date.getHours();
    const formatedHour = hour > 12 ? hour - 12 : hour;
    const minute = date.getMinutes();
    const currentTime = `${formatedHour}:${minute} ${
      hour >= 12 ? "ب.ظ" : "ق.ظ"
    }`;
    const currentDate = `${date.getFullYear()}/${
      date.getMonth() + 1
    }/${date.getDate()}`;
    return { currentTime, currentDate };
  }

  function sendMessage() {

    const { currentTime, currentDate } = getDateAndTime();
    const TodayMessagesIndex = currentChat.chats.findIndex(
      (chat) => chat.date === currentDate
    );

    if (TodayMessagesIndex !== -1) {
      setNewMessage({
        id: currentChat.chats[TodayMessagesIndex].messages.length + 1,
        message: chatInput,
        hasSend: false,
        time: currentTime,
      });
    } else {
      setNewMessage({
        date: currentDate,
        id: currentChat.chats.length + 1,
        messages: [
          { id: 1, message: chatInput, hasSent: false, time: currentTime },
        ],
      });
    }

    setChatInput("");
  }

  return (
    <div
      className={`${
        currentChat
          ? "laptop:bg-white laptop:mr-0 laptop:absolute laptop:inset-0 laptop:left-3 laptop:w-full rounded-md px-4"
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
          <div className="flex relative gap-2 border-t-[1px] pt-5 items-center">
            <div
              className={`${
                isIconBoxOpen ? "z-10 opacity-100" : "opacity-0 -z-10"
              } transition-opacity duration-300 box-container p-3 bg-gray-400 w-[200px] h-[200px] absolute bottom-12 -right-10 overflow-hidden overflow-y-auto custom-scrollbar`}
            >
              <div className="flex sticky bg-gray-400 py-2 top-0 justify-around">
                {iconCategories.map((icon) => (
                  <button
                    key={icon}
                    onClick={() => setCurrentIconCategory(icon)}
                    className={`icon-btn ${
                      icon === currentIconCategory && "bg-white"
                    }`}
                  >
                    {icon}
                  </button>
                ))}
              </div>
              <hr className="my-2" />
              <div className="flex justify-between flex-wrap">
                {allIcons
                  .filter(
                    (categories) => categories.name === currentIconCategory
                  )[0]
                  .icons.map((icon) => (
                    <button
                      key={icon}
                      onClick={() =>
                        setChatInput((prevText) => (prevText += icon))
                      }
                      className="icon-btn"
                    >
                      {icon}
                    </button>
                  ))}
              </div>
            </div>
            <SmallButton title="شکلک" hasBorder onClickHandler={toggleIconBox}>
              <Smile size={15} />
            </SmallButton>
            <div className="flex gap-4 justify-between items-center w-full border-[1px] rounded-md text-sm px-3 py-2">
              <input
                className="outline-none w-full"
                type="text"
                placeholder="پیام خود را بنویسید"
                value={chatInput}
                onChange={(e) => {
                  setChatInput(e.target.value);
                }}
              />
              <button
                onClick={() => setChatInput("")}
                className={`cursor-pointer ${
                  chatInput.length ? "block" : "hidden"
                }`}
              >
                <Cancel size={18} />
              </button>
            </div>
            <button
              onClick={sendMessage}
              disabled={!chatInput.length}
              className={`${
                chatInput.length
                  ? "bg-blue-500"
                  : "bg-blue-100 cursor-not-allowed"
              } px-4 py-[10px] rounded-md`}
            >
              <Send size={15} color="#fff" />
            </button>
          </div>
        </>
      )}
    </div>
  );
}
