import React from "react";
import { ChatRightSide, ChatLeftSide } from "../components";
import ChatContextProvider from "../Contexts/chatContext";

export default function Chat() {

  return (
    <ChatContextProvider>
      <div className="box-container m-8 flex relative">
        <ChatRightSide  />
        <ChatLeftSide />
      </div>
    </ChatContextProvider>
  );
}
