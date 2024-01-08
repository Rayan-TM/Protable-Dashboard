import React, { useContext, useState } from "react";
import {
  Fullscreen,
  Apps,
  Messages,
  Notification,
  BurgerMenu,
  Search,
} from "./icons";
import { globalContext } from "../Contexts/globalContext";
import { toggleFullScreen } from "../utilities";
import WebApps from "./WebApps";
import NotificationBox from "./NotificationBox";
import MessageBox from "./MessageBox";

export default function TopBar() {
  const {
    toggleShadow,
    toggleFixedHeader,
    toggleLightHeader,
    setToggleSidebar,
  } = useContext(globalContext);

  const topBarDatas = [
    {
      id: 1,
      title: "برنامه ها",
      icon: Apps,
      content: WebApps,
    },
    {
      id: 2,
      title: "پیام ها",
      icon: Messages,
      content: MessageBox,
    },
    {
      id: 3,
      title: "اعلان ها",
      icon: Notification,
      content: NotificationBox,
    },
  ];
  const [currentItem, setCurrentItem] = useState("");

  return (
    <>
      <div
        className={`${toggleShadow ? "shadow-active" : ""} ${
          toggleFixedHeader ? "sticky top-0 z-10 " : ""
        } ${
          toggleLightHeader ? "bg-white" : ""
        } tv:bg-white py-5 pr-8 pl-10 bg-gray-200`}
      >
        <div className="top-bar flex laptop:flex-wrap justify-between items-center gap-2">
          <div className="right-side flex items-center gap-3">
            <div
              onClick={() => setToggleSidebar((prevState) => !prevState)}
              className="menu-bar py-2 px-3 bg-gray-100 tv:bg-white rounded-md hover:opacity-70 cursor-pointer group"
            >
              <BurgerMenu size={19} />
            </div>
            <h1 className="font-bold text-2xl mt-2 hidden tv:block">
              Pro<span className="text-blue-500">table</span>
            </h1>
            <div className="laptop:hidden search-section w-96 px-3 bg-gray-100 rounded-md flex justify-between items-center focus-within:bg-white">
              <input
                className="bg-[transparent] text-right placeholder:text-[#495057] border-none outline-none text-sm w-full h-9"
                type="text"
                placeholder="جستجو"
              />
              <Search size={19} />
            </div>
          </div>
          <hr className="laptop:w-full" />
          <div className="left-side flex items-center justify-between gap-2 laptop:w-full">
            <div className="laptop:flex iphone:hidden hidden search-section w-96 px-3 bg-gray-100 rounded-md justify-between items-center focus-within:bg-white">
              <input
                className="bg-[transparent] text-right placeholder:text-[#495057] border-none outline-none text-sm w-full h-9"
                type="text"
                placeholder="جستجو"
              />
              <Search size={19} />
            </div>
            <div className="flex gap-8 iphone:mr-auto">
              <a href="#" title="تمام صفحه">
                <Fullscreen clickHandler={toggleFullScreen} size={19} />
              </a>
              {topBarDatas.map((data) => (
                <div key={data.id} className="relative">
                  <a
                    onClick={() => {
                      currentItem === data.title
                        ? setCurrentItem("")
                        : setCurrentItem(data.title);
                    }}
                    href="#"
                    title={data.title}
                  >
                    <data.icon
                      stroke={data.title === currentItem ? "#004DEB" : "#000"}
                      size={19}
                    />
                  </a>
                  <data.content toggleDisplay={data.title === currentItem} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
