import React, { useContext } from "react";
import CompanySaleInfo from "./CompanySaleInfo";
import useFetch from "../hooks/useFetch";
import { globalContext } from "../Contexts/globalContext";

export default function CompanySale() {
  const { toggleShadow } = useContext(globalContext);

  const { datas, isPending, error } = useFetch("http://localhost:4000/companySaleInfoDatas");
  return (
    <div className={`${toggleShadow ? "shadow-active" : ""} box-container flex flex-col gap-6`}>
      <span className="text-sm">مجموع فروش شرکت</span>
      <span className="text-sm text-gray-300 font-medium mt-4">مجموع فروش</span>
      <span className="font-medium text-2xl">69,453</span>
      <div className="rounded-full flex overflow-hidden h-3">
        <div className="bg-blue-500 w-1/4"></div>
        <div className="bg-blue-400 w-1/2"></div>
        <div className="bg-orange-200 w-1/4"></div>
      </div>
      <div className="flex gap-4">
        {datas.map((data) => (
          <CompanySaleInfo key={data.id} {...data} />
        ))}
      </div>
    </div>
  );
}
