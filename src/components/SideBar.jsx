import React, { useContext } from "react";
import TopSidebar from "./TopSidebar";
import SidebarMenu from "./SidebarMenu";
import { globalContext } from "../Contexts/globalContext";
import { createPortal } from "react-dom";
import LargeSidebarMenu from "./LargeSidebarMenu";

export default function SideBar() {
  const { toggleShadow, toggleSidebar, setToggleSidebar } =
    useContext(globalContext);
  const sidebarMenuItems = [
    {
      title: "داشبورد",
      links: [
        { id: 1, title: "داشبورد 1", src: "/" },
        { id: 2, title: "داشبورد 2", src: "/dashboard_support" },
      ],
    },
    {
      title: "احراز هویت",
      links: [
        { id: 1, title: "ورود", src: "/login" },
        { id: 2, title: "ثبت نام", src: "/register" },
        { id: 3, title: "بازیابی رمز عبور", src: "/password_recovery" },
      ],
    },
    {
      title: "صفحات",
      links: [
        { id: 1, title: "پروفایل", src: "/profile" },
        { id: 2, title: "جدول قیمت ها", src: "/price_table" },
      ],
    },
  ];

  return (
    <>
      <div
        className={`${toggleShadow ? "shadow-active" : ""} ${
          toggleSidebar ? "w-[7%]" : "w-[22%]"
        } bg-white transition-all duration-300 block tv:hidden`}
      >
        <TopSidebar />
        <SidebarMenu menuItems={sidebarMenuItems} />
      </div>
      <div
        className={`${
          toggleSidebar ? "tv:flex" : ""
        } hidden z-[1000] absolute inset-0`}
      >
        <div className="bg-white w-[300px]">
          <TopSidebar />
          <LargeSidebarMenu menuItems={sidebarMenuItems} />
        </div>
        <div
          onClick={() => setToggleSidebar(false)}
          className={` bg-gray-300/50 w-full h-screen`}
        ></div>
      </div>
    </>
  );
}
