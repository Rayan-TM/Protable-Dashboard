import React, {useContext} from "react";
import Stars from "./Stars";
import { globalContext } from "../Contexts/globalContext";
import useFetch from './../hooks/useFetch'

export default function TotalScore() {
  const {toggleShadow} = useContext(globalContext)
  const {datas} = useFetch('http://localhost:4000/totalScore')

  return (
    <div className={`${toggleShadow ? "shadow-active" : ""} box-container flex flex-col gap-5 w-1/2`}>
      <span className="text-sm">امتیاز کل</span>
      <span className="text-sm text-gray-300 font-medium">
        کیفیت عملکرد تیم پشتیبانی را بسنجید.
      </span>
      <div>
        {datas.map((data, index) => (
          <div
            key={data.id}
            className="border-t-[1px] flex justify-between items-center py-3 first:border-none"
          >
            <div className="flex gap-3 items-center">
              <span
                className={`${
                  index !== 0 ? "text-sm" : "text-2xl"
                } font-medium`}
              >
                {data.rate.toFixed(1)}
              </span>
              <Stars
                size={index !== 0 ? 15 : 20}
                onStarsNumber={Math.floor(data.rate)}
              />
            </div>
            {index !== 0 && (
              <div className="flex gap-5 font-medium text-xs">
                <span>{data.quantity}</span>
                <span>{data.percent}%</span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
