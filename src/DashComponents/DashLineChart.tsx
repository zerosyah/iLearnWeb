//import React from "react";
import { CartesianGrid, Legend, Line, LineChart, XAxis, YAxis } from "recharts";
import { RechartsDevtools } from "@recharts/devtools";

type DataProps = {
  data: {
    name: string;
    mark: number;
    month: string;
    subject: string;
  }[];
};

// #endregion
export default function DashLinechart({ data }: DataProps) {
  return (
    <LineChart
      style={{
        width: "90%",
        aspectRatio: 1.618,
        maxWidth: 650,
        maxHeight: 300,
      }}
      responsive
      data={data}
      margin={{
        top: 20,
        right: 20,
        bottom: 5,
        left: 0,
      }}
    >
      <CartesianGrid strokeDasharray="5 5" />
      <Line
        type="monotone"
        dataKey="mark"
        strokeWidth={2}
        name="mark"
      />
      <XAxis dataKey="name" />
      <YAxis
        width="auto"
        label={{ value: "mark", position: "insideLeft", angle: -90 }}
      />
      <Legend position="insideBottomRight" />
      <RechartsDevtools />
    </LineChart>
  );
}
