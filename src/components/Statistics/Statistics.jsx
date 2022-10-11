import React from "react";
import { useLoaderData } from "react-router-dom";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const Statistics = () => {
  const data = useLoaderData().data;
  return (
    <div className="my-5">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-semibold">Statistics of total quiz on <br /> every <span className="text-purple-600">topic</span></h1>
      </div>
      <div className="flex justify-center mb-36">
        <div>
          <LineChart width={450} height={300} data={data}>
            <Line type="monotone" dataKey="total" stroke="#82ca9d" />
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
          </LineChart>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
