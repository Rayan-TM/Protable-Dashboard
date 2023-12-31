import React, { useState } from "react";
import {
  ProfileCart,
  ProfileImages,
  ProfileInfo,
  ProfileSkills,
  NewPost,
  ProfileContents,
  ProfileNavPills,
  ProfileTimeLine,
  ProfileContacts,
  RecentIncomeTable,
} from "../components";
import profileContext from "../Contexts/profileContext";

export default function Profile() {
  const [navPill, setNavPill] = useState("مطالب");
  return (
    <div className="flex gap-8 p-10">
      <div className="right w-1/3">
        <ProfileCart />
        <ProfileInfo />
        <ProfileImages />
        <ProfileSkills />
      </div>
      <profileContext.Provider value={{ navPill, setNavPill }}>
        <div className="left w-2/3">
          <NewPost />
          <ProfileNavPills />
          {navPill === "مطالب" ? (
            <ProfileContents />
          ) : navPill === "خط زمانی" ? (
            <ProfileTimeLine />
          ) : navPill === "مخاطبین" ? (
            <ProfileContacts />
          ) : (
            <div className="box-container mt-8">
              <h3 className="text-sm mb-5">درآمد اخیر شما</h3>
              <RecentIncomeTable />
            </div>
          )}
        </div>
      </profileContext.Provider>
    </div>
  );
}
