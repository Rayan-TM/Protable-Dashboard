import React from "react";
import useFetch from '../hooks/useFetch'

export default function RecentIncomeTable() {

  const {datas, isPending, error} = useFetch('http://localhost:4000/recentIncomeTableDatas')
  
  return (
    <div className="recent-income-table w-full">
      <div className="bg-gray-200 flex">
        <span>تاریخ</span>
        <span>تعداد فروش</span>
        <span>سود ناخالص</span>
        <span>کسر مالیات</span>
        <span>سود خالص</span>
      </div>
      {datas.map((data) => (
        <div
          key={data.id}
          className="font-medium flex hover:bg-gray-200 last:border-b-0"
        >
          <span>{data.date}</span>
          <span>{data.sales}</span>
          <span className="text-green-500">{data.grossProfit}</span>
          <span className="text-red-500">{data.tax}</span>
          <span>{data.netProfit}</span>
        </div>
      ))}
    </div>
  );
}
