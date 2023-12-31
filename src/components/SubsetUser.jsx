import React from "react";
import { MoreHorizontal } from "./icons";
import SelectBox from "./SelectBox";
import useSelect from '../hooks/useSelect'

export default function SubsetUser({ children, role, firstname, lastname, status }) {

  const [title, selectHandler] = useSelect()
  return (
    <div className="flex justify-between border-b-[1px] border-gray-300 py-5">
      <div className="flex gap-3">
        {children}
        <div className="flex flex-col gap-2 font-medium">
          <span className="text-sm">{firstname} {lastname}</span>
          <span className="text-xs text-gray-300">{role}</span>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <span
          className={`text-xs p-2 rounded-md ${
            status === "رد شده"
              ? "bg-red-500"
              : status === "در انتظار"
              ? "bg-orange-200"
              : status === "اتمام یافته"
              ? "bg-green-500"
              : ""
          } ${status === "در انتظار" ? "text-gray-400" : "text-white"}`}
        >
          {status}
        </span>

        <SelectBox
          icon={<MoreHorizontal size={13} />}
          options={["مشاهده", "ارسال پیام", "اختصاص دادن"]}
          hasBorder
          onSelect={selectHandler}
        />
      </div>
    </div>
  );
}
