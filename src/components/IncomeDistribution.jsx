import React, { useContext } from "react";
import USAMap from "./Maps/USAMap";
import GermanyMap from "./Maps/GermanyMap";
import IranMap from "./Maps/IranMap";
import ItalyMap from "./Maps/ItalyMap";
import SelectBox from "./SelectBox";
import { ArrowDown } from "./icons";
import useFetch from "../hooks/useFetch";
import useSelect from "../hooks/useSelect";
import { globalContext } from "../Contexts/globalContext";
import Loader from "./Loader";

export default function IncomeDistribution() {
  const { datas, isPending, error } = useFetch(
    "http://localhost:4000/IncomeDistributionTableDatas"
  );
  const { toggleShadow } = useContext(globalContext);

  const [title, selectHandler] = useSelect("آمریکا");
  const tableData = datas.find((data) => data.country === title);

  return (
    <div
      className={`${
        toggleShadow ? "shadow-active" : ""
      } box-container relative`}
    >
      <div className="flex justify-between">
        <span className="text-sm">توزیع درآمد</span>
        <SelectBox
          icon={<ArrowDown size={10} />}
          title={title}
          options={["آمریکا", "آلمان", "ایران", "ایتالیا"]}
          hasBorder
          onSelect={selectHandler}
        />
      </div>
      {title === "آمریکا" ? (
        <USAMap />
      ) : title === "آلمان" ? (
        <GermanyMap />
      ) : title === "ایتالیا" ? (
        <ItalyMap />
      ) : (
        <IranMap />
      )}
      <div className="income-distribution-table">
        <div className="bg-gray-200">
          <span>استان</span>
          <span>سفارشات</span>
          <span>درآمد</span>
        </div>
        {error && error}
        {isPending ? (
          <Loader />
        ) : (
          tableData.detail.map((data) => (
            <div key={data.id} className="font-medium">
              <span className="w-10">{data.province}</span>
              <span className="mr-10">{data.orders}</span>
              <span className="text-green-500">{data.income}</span>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
