import React, {useContext} from "react";
import LittleBarChart from "./Charts/LittleBarChart";
import { globalContext } from "../Contexts/globalContext";

export default function LittleBarInfo({
  title,
  amount,
  weeklyAmount,
  arrowDirection,
  colors = [],
  smallBarChartDatas,
}) {
  const {toggleShadow} = useContext(globalContext)

  return (
    <div className={`${toggleShadow ? "shadow-active" : ""} box-container`}>
      <span className="text-sm mb-7 block">{title}</span>
      <div className="w-2/3 mx-auto flex flex-col text-center gap-3">
        <LittleBarChart
          data={smallBarChartDatas?.[0]?.values}
          colors={colors}
        />
        <span style={{ color: colors[0] }} className="text-2xl font-semibold">
          {amount}
        </span>
        <small className="flex items-center justify-center">
          {arrowDirection === "up" ? (
            <span className="carrot-arrow border-b-4 border-b-blue-500"></span>
          ) : (
            <span className="carrot-arrow border-t-4 border-t-red-500"></span>
          )}
          <span className="mr-2 text-xs font-medium text-gray-300">
            {weeklyAmount}
          </span>
        </small>
      </div>
    </div>
  );
}
