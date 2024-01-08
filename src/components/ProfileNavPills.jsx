import React, { useContext, useState } from "react";
import NavPill from "./NavPill";
import profileContext from "../Contexts/profileContext";
import { globalContext } from "../Contexts/globalContext";

export default function ProfileNavPills() {
  const {setNavPill} = useContext(profileContext)
  const {toggleShadow} = useContext(globalContext)
  const navPills = ["مطالب", "خط زمانی", "مخاطبین", "درآمد"];
  const [currentItem, setCurrentItem] = useState("مطالب");

  function selectPill(title) {
    setCurrentItem(title);
    setNavPill(title)
  }

  return (
    <div className={`${toggleShadow ? "shadow-active" : ""} box-container flex iphone:flex-col mt-8`}>
      {navPills.map((pill) => (
        <NavPill key={pill} onChoose={selectPill} isActive={currentItem === pill} title={pill} />
      ))}
    </div>
  );
}
