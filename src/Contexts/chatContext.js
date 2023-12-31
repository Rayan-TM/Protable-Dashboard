import { createContext, useState } from "react";
import useFetch from "../hooks/useFetch";

const chatContext = createContext();

export default function ChatContextProvider({ children }) {
  const baseUrl = "http://localhost:4000/"
  const { datas: chatData } = useFetch(`${baseUrl}chatDatas`);
  const {datas: callData} = useFetch(`${baseUrl}callDatas`)
  const {datas: contacts} = useFetch(`${baseUrl}contacts`)
  const [currentChat, setCurrentChat] = useState()

  const colors = [
    "before:bg-red-500",
    "before:bg-blue-500",
    "before:bg-blue-300",
    "before:bg-green-500",
    "before:bg-orange-200",
  ];

  const chooseColor = () => {
    const random = Math.floor(Math.random() * colors.length);

    return colors[random];
  };

  const selectHandler = (username) => {
    const filteredItem = chatData.filter(data => data.username === username)
    setCurrentChat(filteredItem[0])
  }

  return (
    <chatContext.Provider value={{ contacts, callData, chatData, chooseColor, selectHandler, currentChat }}>
      {children}
    </chatContext.Provider>
  );
}

export { chatContext };
