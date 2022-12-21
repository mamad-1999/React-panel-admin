import React, { memo } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

const TinyBarChartPanel = ({ data }) => {
  return (
    <BarChart width={630} height={300} data={data}>
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Bar dataKey="pv" fill="#8884d8" />
      <Bar dataKey="uv" fill="#82ca9d" />
    </BarChart>
  );
};

export default memo(TinyBarChartPanel);
