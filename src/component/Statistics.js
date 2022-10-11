import React, { useContext } from "react";
import { LoadContext } from "./Root";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const Statistics = () => {
  const rechartData = useContext(LoadContext);
  // console.log(rechartData)

  return (
    <div className="flex justify-center flex-col mt-[50px]">
        <p>This is Statics Page</p>
      <LineChart
        width={500}
        height={300}
        data={rechartData}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="total"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
        <Line type="monotone" dataKey="total" stroke="#82ca9d" />
      </LineChart>
    </div>
  );
};

export default Statistics;
