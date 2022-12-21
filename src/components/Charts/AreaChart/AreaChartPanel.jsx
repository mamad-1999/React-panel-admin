import React, { memo } from "react";
import { AreaChart, Area, XAxis, YAxis, Tooltip } from "recharts";

const AreaChartPanel = ({ data }) => {
  return (
    <AreaChart
      width={900}
      height={300}
      data={data}
      margin={{
        top: 10,
        right: 30,
        left: 0,
        bottom: 0,
      }}
    >
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Area type="monotone" dataKey="uv" stroke="#01abbb" fill="#01abbb" />
    </AreaChart>
  );
};

export default memo(AreaChartPanel);
