import React from "react";
import { LineChart, Line, ResponsiveContainer, XAxis, Tooltip } from "recharts";

export default function LittleLineChart({
  data,
  dataKey,
  stroke,
  hasDot = null,
  hasXAxis = null,
  xAxisDataKey = null,
  strokeWidth = 1,
}) {
  return (
    <ResponsiveContainer width="95%"  aspect={3}>
      <LineChart data={data}>
        <Line
          type="monotone"
          dataKey={dataKey}
          stroke={stroke}
          dot={hasDot}
          strokeWidth={strokeWidth}
        />
        {hasXAxis && (
          <>
            <XAxis
              stroke={stroke}
              dataKey={xAxisDataKey}
              strokeWidth={strokeWidth}
              fontWeight={strokeWidth !== 1 ? "bold" : "normal"}
            />
            <Tooltip />
          </>
        )}
      </LineChart>
    </ResponsiveContainer>
  );
}
