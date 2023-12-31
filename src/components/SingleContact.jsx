import React, {useContext} from "react";
import { Messages } from "./icons";
import Avatar from "./Avatar";
import SmallButton from "./SmallButton";
import { globalContext } from "../Contexts/globalContext";

export default function SingleContact({ firstname, lastname, role, image }) {
  const {toggleShadow} = useContext(globalContext)

  return (
    <div className={`${toggleShadow ? "shadow-active" : ""} box-container w-[290px] flex items-center justify-between border-[1px] border-gray-300`}>
      <div className="flex items-center gap-3">
        <Avatar src={image ? image : "./assets/images/default-avatar.webp"} />
        <div className="flex flex-col gap-3 font-medium">
          <span>
            {firstname} {lastname}
          </span>
          <span className="text-xs text-gray-300">
            {role ? role : "نامشخص"}
          </span>
        </div>
      </div>
      <SmallButton title="ارسال پیام">
        <Messages />
      </SmallButton>
    </div>
  );
}
