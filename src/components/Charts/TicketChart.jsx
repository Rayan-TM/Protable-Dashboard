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

export default function TicketChart({datas}) {

  return (
    <div>
      <ResponsiveContainer height={300} className="text-[11px]">
        <BarChart data={datas} margin={{right: 25}}>
          <CartesianGrid vertical={false} />
          <XAxis dataKey="ماه" tickLine={false} />
          <YAxis tickCount={7} dx={-16} />
          <Tooltip />
          <Legend
            content={customChartLegend}
            verticalAlign="top"
            height={45}
            iconSize={12}
            iconType="circle"
          />
          <Bar dataKey="تیکت‌های جدید" stackId="a" fill="#004DEB" />
          <Bar dataKey="تیکت‌های حل شده" stackId="a" fill="#10B759" />
          <Bar dataKey="تیکت‌های در انتظار" stackId="a" fill="#22B9FF" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
