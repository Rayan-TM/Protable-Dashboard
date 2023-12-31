import React from "react";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

import customChartLegend from "./customChartLegend";
const barProps = {
  legendType: "square",
  barSize: 11,
};

export default function SaleBarChart({ data }) {
  return (
    <ResponsiveContainer aspect={1.8} className="text-xs">
      <BarChart data={data} margin={{ right: 25 }}>
        <CartesianGrid vertical={false} />
        <XAxis dataKey="ماه" dy={10} />
        <YAxis tickCount={7} axisLine={false} tickLine={false} dx={-16} />
        <Tooltip />
        <Legend
          content={customChartLegend}
          iconSize={12}
          wrapperStyle={{
            paddingTop: "20px",
          }}
        />
        <Bar {...barProps} dataKey="سود خالص" fill="#008FFB" />
        <Bar {...barProps} dataKey="درآمد" fill="#00E396" />
        <Bar {...barProps} dataKey="جریان نقدینگی" fill="#FEB019" />
      </BarChart>
    </ResponsiveContainer>
  );
}
