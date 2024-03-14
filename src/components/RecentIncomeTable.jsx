import React from "react";
import useFetch from "../hooks/useFetch";
import Loader from "./Loader";

export default function RecentIncomeTable() {
  const { datas, isPending, error } = useFetch(
    "http://localhost:4000/recentIncomeTableDatas"
  );

  return (
    <div className="recent-income-table w-full">
      <div className="bg-gray-200 flex">
        <span>تاریخ</span>
        <span className="iphone:hidden">تعداد فروش</span>
        <span className="galaxy:hidden">سود ناخالص</span>
        <span className="galaxy:hidden">کسر مالیات</span>
        <span>سود خالص</span>
      </div>
      {error && error}
      {isPending ? (
        <Loader />
      ) : (
        datas.map((data) => (
          <div
            key={data.id}
            className="font-medium flex hover:bg-gray-200 last:border-b-0"
          >
            <span>{data.date}</span>
            <span className="iphone:hidden">{data.sales}</span>
            <span className="text-green-500 galaxy:hidden">
              {data.grossProfit}
            </span>
            <span className="text-red-500 galaxy:hidden">{data.tax}</span>
            <span>{data.netProfit}</span>
          </div>
        ))
      )}
    </div>
  );
}
