import React, { useEffect } from "react";
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
import {Toast2} from "../components/Toast";

export default function DashboardSales() {
  const { datas: smallChartsInfo } = useFetch(
    "http://localhost:4000/smallChartsInfos"
  );
  const { datas: littleBarData } = useFetch(
    "http://localhost:4000/littleBarDatas?_embed=smallBarChartDatas"
  );

  useEffect(() => {
    Toast2.fire({
      title: `خوش آمدید جان اسنو`,
      icon: 'info'
    })
  }, [])

  return (
    <div className="p-10">
      <h2 className="text-xl font-semibold">داشبورد فروش</h2>
      <small className="mt-5 text-xs font-medium block">
        خوش آمدید، <span className="text-blue-500">جان اسنو</span>
      </small>
      <div className="flex laptop:flex-wrap gap-8 mt-8 w-full">
        <SmallSaleChart
          {...smallChartsInfo[0]}
          icon={<Percent color="#fff" />}
        />
        <SmallSaleChart
          {...smallChartsInfo[1]}
          icon={<Dollar color="#fff" />}
        />
        <SmallSaleChart {...smallChartsInfo[2]} icon={<Cube color="#fff" />} />
      </div>
      <div className="flex laptop:flex-wrap gap-8 mt-8">
        <MonthSaleChart />
        <div className="w-1/3 laptop:w-full laptop:flex-row tablet:flex-col flex flex-col gap-8">
          <LittleBarInfo {...littleBarData[0]} />
          <LittleBarInfo {...littleBarData[1]} />
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
