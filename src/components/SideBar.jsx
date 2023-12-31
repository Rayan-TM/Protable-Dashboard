import React, { useContext } from "react";
import TopSidebar from "./TopSidebar";
import SidebarMenu from "./SidebarMenu";
import { globalContext } from "../Contexts/globalContext";

export default function SideBar() {
  const { toggleShadow, toggleSidebar } = useContext(globalContext);

  return (
    <div
      className={`${toggleShadow ? "shadow-active" : ""} ${
        toggleSidebar ? "w-[7%]" : "w-[22%]"
      } bg-white transition-all duration-300`}
    >
      <TopSidebar />
      <SidebarMenu />
    </div>
  );
}
