import React from "react";
import LittleLineChart from "./../components/Charts/LittleLineChart";
import useFetch from "../hooks/useFetch";
import { Link, useParams } from "react-router-dom";

export default function Product() {
  const params = useParams();
  const { datas } = useFetch(
    `http://localhost:4000/products/${params.productID}`
  );

  return (
    <div className="box-container m-8 ">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold mb-5">محصول</h2>
        <Link className="text-red-500" to="/products">برگشت</Link>
      </div>
      <div className="flex justify-center laptop:flex-wrap gap-5">
        <div className="w-1/3 tablet:w-2/3 iphone:w-full">
          <img src={datas.imageSrc} alt="product image" />
        </div>
        <div className="flex flex-col gap-20 w-full">
          <h3 className="text-2xl font-medium laptop:text-xl iphone:text-lg">{datas.name}</h3>
          <div className="flex items-end justify-between tablet:gap-20 mt-auto tablet:flex-wrap ">
            <ul className="list-disc list-inside text-xl product-info">
              <li>
                <span>موجودی:</span>{" "}
                {datas.stock}
              </li>
              <li>
                <span>وضعیت:</span>{" "}
                {datas.status ? "فعال" : "غیرفعال"}
              </li>
              <li>
                <span>قیمت:</span>{" "}
                {datas.price}
              </li>
            </ul>
            <div className="w-1/2 tablet:w-full">
              <LittleLineChart
                data={datas.chartData}
                dataKey="فروش"
                stroke="#10B759"
                hasDot={true}
                hasXAxis={true}
                xAxisDataKey="month"
                strokeWidth={2}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
