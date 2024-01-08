import React, {useContext} from "react";
import { globalContext } from "../Contexts/globalContext";

export default function SmallTicket({ name, amount, percent, barStyle }) {
  const {toggleShadow} = useContext(globalContext)

  return (
    <div className={`${toggleShadow ? "shadow-active" : ""} box-container w-1/3 laptop:w-full`}>
      <span className="font-bold ml-2 text-xl">{amount}</span>
      <span className="text-xs font-medium">{name}</span>
      <div className="bg-gray-200 rounded-full h-[5px] overflow-hidden flex mt-5 mb-3">
        <div className={barStyle}></div>
      </div>
      <div className="text-xs font-medium">
        <span
          className={`${percent > 0 ? "text-green-500" : "text-red-500"} ml-1`}
        >
          {percent > 0 ? `${percent}%+` : `${-percent}%-`}
        </span>
        <span>از دیروز</span>
      </div>
    </div>
  );
}
