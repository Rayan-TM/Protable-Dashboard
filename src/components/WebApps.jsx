import React from "react";
import WebApp from "./WebApp";
import { Messages, CheckCircle, User, UserPlus } from "./icons";

export default function WebApps({toggleDisplay }) {
  return (
    <div className={`${toggleDisplay ? "block" : "hidden"} top-bar-boxes p-3`}>
      <small className="mb-3 block text-xs">برنامه های وب</small>
      <div className="">
        <div className="flex gap-2">
          <WebApp icon={<Messages stroke="#00E396"/>} name="گفتگو" href="/chat" />
          <WebApp icon={<CheckCircle color="#22B9FF"/>} name="برای انجام" href="/todo" />
        </div>
        <div className="flex gap-2">
          <WebApp icon={<UserPlus color="#FEB019" />} name="مخاطب جدید" href="/new_contact" />
          <WebApp icon={<User color="#FF3F3F"/>} name="ورود" href="/login" />
        </div>
      </div>
    </div>
  );
}
