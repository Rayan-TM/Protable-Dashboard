import React, { useContext } from "react";
import CircleChart from "./Charts/CircleChart";
import { globalContext } from "../Contexts/globalContext";

export default function AverageSpeedCart({chartPercent, chartColor, goalRecord, lastRecord}) {
  const {toggleShadow} = useContext(globalContext)

  return (
    <div className={`${toggleShadow ? "shadow-active" : ""} box-container flex items-center gap-3 pc:w-full`}>
      <div>
        <CircleChart percent={chartPercent} color={chartColor}/>
      </div>
      <div className="flex flex-col gap-4 font-medium ">
        <span className="text-sm">زمان رسیدگی به شکایت</span>
        <span className="text-xs text-gray-300 leading-7">
          میانگین زمان طی شده برای رسیدگی به شکایات.
        </span>
        <div>
          <span className="text-2xl">{lastRecord}</span>
          <span className="text-xs">/ هدف: {goalRecord}</span>
        </div>
      </div>
    </div>
  );
}
