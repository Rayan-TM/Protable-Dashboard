import React, { useContext } from "react";
import {
  SmallTicket,
  TicketState,
  AverageSpeedCart,
  TotalScore,
  CustomerSatisfaction,
} from "../components";
import useFetch from "../hooks/useFetch";
import Loader from "../components/Loader";
import { globalContext } from "../Contexts/globalContext";

export default function DashboardSupport() {

  const {loggedInUser} = useContext(globalContext)

  const { datas: smallTicketInfo, isPending: isPendingSmallTicket } = useFetch(
    "http://localhost:4000/smallTicketInfos"
  );
  const { datas: averageSpeedCartData, isPending: isPendingAverageSpeed } =
    useFetch("http://localhost:4000/averageSpeedCartDatas");

  return (
    <div className="p-10">
      <h2 className="text-xl font-semibold">داشبورد پشتیبانی</h2>
      <small className="mt-5 text-xs font-medium block">
        خوش آمدید، <span className="text-blue-500">{loggedInUser && `${loggedInUser.firstname} ${loggedInUser.lastname}`}</span>
      </small>
      <div className={`flex laptop:flex-wrap gap-8 mt-8 ${isPendingSmallTicket && 'box-container'}`}>
        {isPendingSmallTicket ? (
          <Loader />
        ) : (
          smallTicketInfo.map((info) => <SmallTicket key={info.id} {...info} />)
        )}
      </div>
      <div className="flex pc:flex-wrap gap-8 mt-8">
        <TicketState />
        <div className={`w-1/3 pc:flex-row pc:w-full laptop:flex-col flex flex-col gap-8 ${isPendingAverageSpeed && 'box-container'}`}>
          {isPendingAverageSpeed ? (
            <Loader />
          ) : (
            averageSpeedCartData.map((cart) => <AverageSpeedCart {...cart} />)
          )}
        </div>
      </div>
      <div className="flex laptop:flex-wrap gap-8 mt-8">
        <TotalScore />
        <CustomerSatisfaction />
      </div>
    </div>
  );
}
