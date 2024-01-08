import React, {useContext} from "react";
import { MoreVertical } from "./icons";
import LargeBarChart from "./Charts/SaleBarChart";
import SelectBox from "./SelectBox";
import useFetch from "../hooks/useFetch";
import useSelect from "../hooks/useSelect"
import { globalContext } from "../Contexts/globalContext";

export default function MonthSaleChart() {
  const {toggleShadow} = useContext(globalContext)
  const {datas, isPending , error} = useFetch('http://localhost:4000/monthlySalesChartDatas')
  const [title, selectHandler] = useSelect("امسال")

  const monthlySaleData = datas.find(data => data.date === title)

  return (
    <div className={`${toggleShadow ? "shadow-active" : ""} box-container w-[70%] laptop:w-full`}>
      <div className="flex justify-between mb-14">
        <span className="text-sm">فروش {title}</span>
        <SelectBox
          icon={<MoreVertical size={16} />}
          options={["امسال", "پارسال", "2 سال گذشته"]}
          onSelect={selectHandler}
        />
      </div>
      {isPending && <div>Loading... </div>}
      {error && <div>{error}</div>}
      {monthlySaleData && <LargeBarChart data={monthlySaleData.chartData} />}
    </div>
  );
}
