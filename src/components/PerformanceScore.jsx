import React from "react";
import useFetch from "../hooks/useFetch";
import Loader from "./Loader";

export default function PerformanceScore() {
  const { datas, isPending, error } = useFetch(
    "http://localhost:4000/customerSatisfactionDatas"
  );

  return (
    <>
      {error && error}
      {isPending ? (
        <Loader />
      ) : (
        <div>
          <div className="rounded-full flex overflow-hidden h-3 mb-3">
            {datas.map((data) => (
              <div
                key={data.id}
                className={data.color}
                style={{ width: data.percent + "%" }}
              ></div>
            ))}
          </div>
          {datas.map((data) => (
            <div
              key={data.id}
              className="border-b-[1px] flex justify-between items-center py-3 last:border-none"
            >
              <div className="flex gap-2 items-center">
                <div className={`w-3 h-3 rounded-full ${data.color}`}></div>
                <span>{data.quality}</span>
              </div>
              <div className="flex gap-5 font-medium text-xs">
                <span>{data.quantity}</span>
                <span>{data.percent}%</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
