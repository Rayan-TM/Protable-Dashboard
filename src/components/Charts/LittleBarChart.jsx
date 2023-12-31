import React from "react";
import { Bar, BarChart, ResponsiveContainer } from "recharts";

export default function LittleBarChart({ data, colors }) {
  return (
    <ResponsiveContainer aspect={3}     >
      <BarChart data={data} margin={{right: 30, left: 30}}>
        <Bar barSize={9} dataKey="value1" fill={colors[0]} />
        <Bar barSize={9} dataKey="value2" fill={colors[1]} />
      </BarChart>
    </ResponsiveContainer>
  );
}
