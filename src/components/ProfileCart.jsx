import React, { useContext } from "react";
import Avatar from "./Avatar";
import ButtonEdit from "./ButtonEdit";
import { Edit } from "./icons";
import useFetch from "../hooks/useFetch";
import { globalContext } from "../Contexts/globalContext";

export default function ProfileCart() {
  const { toggleShadow, loggedInUser } = useContext(globalContext);
  console.log(loggedInUser);
  const profileCartTemplate = [
    { id: 1, name: "مطلب", color: "#22B9FF" },
    { id: 2, name: "دنبال کننده", color: "#10B759" },
    { id: 3, name: "لایک", color: "#FEB019" },
  ];

  return (
    loggedInUser && (
      <div
        className={`${
          toggleShadow ? "shadow-active" : ""
        } text-center font-medium bg-white rounded-lg`}
      >
        <div className="flex flex-col gap-3 p-5">
          <Avatar
            avatarClass="mx-auto"
            avatarSize={80}
            src={loggedInUser.image}
          />
          <span className="font-bold text-lg">
            {loggedInUser.firstname} {loggedInUser.lastname}
          </span>
          <span className="text-gray-300 text-xs">{loggedInUser.role}</span>
          <p className="text-sm my-2 leading-7">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
          </p>
          <ButtonEdit
            size="large"
            classes="mx-auto"
            title="ویرایش پروفایل"
            icon={<Edit size={14} />}
          />
        </div>
        <hr />
        <div className="p-5 flex justify-around">
          {profileCartTemplate.map((data) => (
            <div
              key={data.id}
              style={{ color: data.color }}
              className="flex flex-col gap-3"
            >
              <span>{data.name}</span>
              <span>{loggedInUser.details?.[data.name]}</span>
            </div>
          ))}
        </div>
      </div>
    )
  );
}
