import React, { useContext } from "react";
import ButtonEdit from "./ButtonEdit";
import { Edit } from "./icons";
import useFetch from "../hooks/useFetch";
import { globalContext } from "../Contexts/globalContext";

export default function ProfileInfo() {
  const { toggleShadow, loggedInUser } = useContext(globalContext);

  const profileInfoData = loggedInUser
    ? [
        ["نام", loggedInUser.firstname],
        ["نام خانوادگی", loggedInUser.lastname],
        ["سن", loggedInUser.age],
        ["شغل", loggedInUser.role],
        ["شهر", loggedInUser.city],
        ["آدرس", loggedInUser.address],
        ["تلفن", loggedInUser.phone],
        ["ایمیل", loggedInUser.email],
      ]
    : [];

  return (
    <div
      className={`${
        toggleShadow ? "shadow-active" : ""
      } box-container mt-8 text-sm`}
    >
      <div className="flex justify-between items-center mb-8">
        <span>اطلاعات</span>
        <ButtonEdit
          classes="font-bold"
          title="ویرایش"
          icon={<Edit size={14} />}
        />
      </div>
      <div className="flex flex-col gap-4">
        {profileInfoData.map((data) => (
          <div key={data[0]} className="flex font-medium">
            <span className="w-1/2 text-gray-300">{data[0]}:</span>
            <span className="w-1/2">{data[1]}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
