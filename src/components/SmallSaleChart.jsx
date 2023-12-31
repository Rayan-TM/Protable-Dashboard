import React, {useContext} from "react";
import LittleLineChart from "./Charts/LittleLineChart";
import { globalContext } from "../Contexts/globalContext";

export default function SmallSaleChart({
  icon,
  iconColor,
  title,
  amount,
  percent,
  stroke,
  values
}) {
  const {toggleShadow} = useContext(globalContext)

  return (
    <div className={`${toggleShadow ? "shadow-active" : ""} relative w-1/3 box-container pb-0`}>
      <div
        className={`absolute top-7 left-7 w-11 h-11 flex justify-center items-center rounded-full ${iconColor}`}
      >
        {icon}
      </div>
      <span className="text-sm mb-7 block">{title}</span>
      <div className="text-xs font-medium">
        <span className="text-xl ">{amount}</span>{" "}
        <span className={`${percent > 0 ? "text-green-500" : "text-red-500"}`}>
          {percent > 0 ? `${percent}%+` : `${-percent}%-`}
        </span>{" "}
        <span className="text-gray-300">از هفته پیش</span>
      </div>
      <LittleLineChart data={values} dataKey="value" stroke={stroke}/>
    </div>
  );
}
