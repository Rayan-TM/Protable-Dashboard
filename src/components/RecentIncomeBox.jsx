import React, {useContext} from "react";
import useFetch from "../hooks/useFetch";
import { globalContext } from "../Contexts/globalContext";

export default function RecentIncomeBox({ icon, iconBorder, title, date }) {
  const {toggleShadow} = useContext(globalContext)
  const { datas } = useFetch("http://localhost:4000/recentIncomeInfos");
  const incomeBoxPrice = datas.find(data => data.date === date)

  return (
    <div className={`${toggleShadow ? "shadow-active" : ""} flex gap-4 border-[1px] border-gray-300 rounded-lg p-4`}>
      <div className={`border-2 p-3 rounded-md ${iconBorder}`}>{icon}</div>
      <div className="flex flex-col justify-between">
        <span className="text-xs">{title}</span>
        <span className="font-medium text-xl">{incomeBoxPrice?.[title]} تومان</span>
      </div>
    </div>
  );
}
