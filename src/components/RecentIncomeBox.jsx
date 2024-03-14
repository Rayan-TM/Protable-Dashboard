import React, { useContext } from "react";
import useFetch from "../hooks/useFetch";
import { globalContext } from "../Contexts/globalContext";
import Loader from "./Loader";

export default function RecentIncomeBox({ icon, iconBorder, title, date }) {
  const { toggleShadow } = useContext(globalContext);
  const { datas, isPending } = useFetch(
    "http://localhost:4000/recentIncomeInfos"
  );
  const incomeBoxPrice = datas?.find((data) => data.date === date);

  return isPending ? (
    <Loader />
  ) : (
    <div
      className={`${
        toggleShadow ? "shadow-active" : ""
      } flex items-center gap-4 border-[1px] border-gray-300 rounded-lg p-4`}
    >
      <div className={`border-2 p-3 rounded-md ${iconBorder}`}>{icon}</div>
      <div className="flex flex-col justify-between">
        <span className="text-xs">{title}</span>
        <span className="font-medium text-xl ipad:text-sm">
          {incomeBoxPrice[title]} تومان
        </span>
      </div>
    </div>
  );
}
