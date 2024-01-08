import React from "react";
import PriceTableHeader from "../components/PriceTableHeader";
import PriceTableCart from "../components/PriceTableCart";
import useFetch from "../hooks/useFetch";

export default function PriceTable() {
  const cartTypes = [
    ["free", "برای شروع", "رایگان"],
    ["base", "پایه", "189,000"],
    ["golden", "طلایی", "289,000"],
  ];

  const {datas, isPending, error} = useFetch('http://localhost:4000/priceTableDatas')

  return (
    <div className="m-8">
      <PriceTableHeader priceTableData={datas} />
      <div className="flex laptop:flex-wrap mt-8 gap-8">
        {cartTypes.map((type) => (
          <PriceTableCart
            key={type[0]}
            priceTableData={datas}
            type={type}
            bgColor={type[0] === 'base' && "bg-green-100"}
          />
        ))}
      </div>
    </div>
  );
}
