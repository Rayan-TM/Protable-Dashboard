import React, {useContext} from "react";
import { Check, Cancel } from "./icons";
import { globalContext } from "../Contexts/globalContext";

export default function PriceTableCart({
  bgColor = "#fff",
  type,
  priceTableData,
}) {
  const {toggleShadow} = useContext(globalContext)

  return (
    <div className={`${bgColor} ${toggleShadow ? "shadow-active" : ""} box-container w-1/3 text-center laptop:w-2/3 laptop:mx-auto tablet:w-full`}>
      <div className="text-center">
        <span className="text-xs">{type[1]}</span>
        <h2 className="font-bold text-3xl mt-4">{type[2]}</h2>
      </div>
      <div className="my-10">
        {priceTableData.map((data) => (
          <div
            key={data.id}
            className="p-3 flex gap-3 border-b-[1px] last:border-none border-gray-300"
          >
            <span>{data[type[0]] ? <Check filled /> : <Cancel filled />}</span>
            <span>{data.title}</span>
          </div>
        ))}
      </div>
      <button className=" bg-blue-500 text-white py-2 px-5 rounded-md">
        شروع آزمایشی
      </button>
    </div>
  );
}
