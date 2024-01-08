import React from "react";
import {
  SmallTicket,
  TicketState,
  AverageSpeedCart,
  TotalScore,
  CustomerSatisfaction,
} from "../components";
import useFetch from "../hooks/useFetch";

export default function DashboardSupport() {
  const {datas: smallTicketInfo} = useFetch("http://localhost:4000/smallTicketInfos")
  const {datas: averageSpeedCartData} = useFetch("http://localhost:4000/averageSpeedCartDatas")  

  return (
    <div className="p-10">
      <h2 className="text-xl font-semibold">داشبورد پشتیبانی</h2>
      <small className="mt-5 text-xs font-medium block">
        خوش آمدید، <span className="text-blue-500">جان اسنو</span>
      </small>
      <div className="flex laptop:flex-wrap gap-8 mt-8">
        {smallTicketInfo.map((info) => (
          <SmallTicket key={info.id} {...info} />
        ))}
      </div>
      <div className="flex pc:flex-wrap gap-8 mt-8">
        <TicketState />
        <div className="w-1/3 pc:flex-row pc:w-full laptop:flex-col flex flex-col gap-8 ">
          <AverageSpeedCart {...averageSpeedCartData[0]} />
          <AverageSpeedCart {...averageSpeedCartData[1]} />
        </div>
      </div>
      <div className="flex laptop:flex-wrap gap-8 mt-8">
        <TotalScore />
        <CustomerSatisfaction />
      </div>
    </div>
  );
}
