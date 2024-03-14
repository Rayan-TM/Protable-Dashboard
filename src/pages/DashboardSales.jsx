import React, { useEffect, useContext } from "react";
import {
  MonthSaleChart,
  SmallSaleChart,
  LittleBarInfo,
  RecentIncomes,
  IncomeDistribution,
  CompanySale,
  SubsetUsers,
  TodoList,
} from "../components";
import { Percent, Dollar, Cube } from "../components/icons";
import useFetch from "../hooks/useFetch";
import { Toast2 } from "../components/Toast";
import Loader from "../components/Loader";
import { globalContext } from "../Contexts/globalContext";

export default function DashboardSales() {
  const {loggedInUser} = useContext(globalContext)

  const { datas: smallChartsInfo, isPending: isPendingSmallChartInfo } =
    useFetch("http://localhost:4000/smallChartsInfos");
  const { datas: littleBarData, isPending: isPendingLittleBarData } = useFetch(
    "http://localhost:4000/littleBarDatas?_embed=smallBarChartDatas"
  );

  useEffect(() => {
    Toast2.fire({
      title: `خوش آمدید جان اسنو`,
      icon: "info",
    });
  }, []);

  const smallChartsInfoIcons = [
    <Percent color="#fff" />,
    <Dollar color="#fff" />,
    <Cube color="#fff" />,
  ];

  return (
    <div className="p-10">
      <h2 className="text-xl font-semibold">داشبورد فروش</h2>
      <small className="mt-5 text-xs font-medium block">
        خوش آمدید، <span className="text-blue-500">{loggedInUser && `${loggedInUser.firstname} ${loggedInUser.lastname}`}</span>
      </small>
      <div className={`flex laptop:flex-wrap gap-8 mt-8 w-full ${isPendingSmallChartInfo && 'box-container'}`}>
        {isPendingSmallChartInfo ? (
          <Loader />
        ) : (
          smallChartsInfo.map((chart, index) => (
            <SmallSaleChart
              {...chart}
              icon={smallChartsInfoIcons[index]}
              key={index}
            />
          ))
        )}
      </div>
      <div className="flex laptop:flex-wrap gap-8 mt-8">
        <MonthSaleChart />
        <div className={`w-1/3 laptop:w-full laptop:flex-row tablet:flex-col flex flex-col gap-8 ${isPendingLittleBarData && 'box-container'}`}>
          {isPendingLittleBarData ? (
            <Loader />
          ) : (
            littleBarData.map((bar, index) => (
              <LittleBarInfo key={index} {...bar} />
            ))
          )}
        </div>
      </div>
      <RecentIncomes />
      <div className="mt-8 flex pc:flex-wrap gap-8">
        <div className="w-1/2 pc:w-full">
          <IncomeDistribution />
          <SubsetUsers />
        </div>
        <div className="w-1/2 pc:w-full">
          <CompanySale />
          <TodoList />
        </div>
      </div>
    </div>
  );
}
