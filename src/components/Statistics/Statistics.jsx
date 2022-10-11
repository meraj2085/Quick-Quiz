import React from "react";
import { useLoaderData } from "react-router-dom";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Statistics = () => {
  const data = useLoaderData().data;
  return (
    <div className="flex justify-center my-32">
      <div>
        <LineChart width={700} height={400} data={data}>
          <Line type="monotone" dataKey="total" stroke="#82ca9d" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          {/* <Legend /> */}
        </LineChart>
      </div>
    </div>
  );
};

export default Statistics;
