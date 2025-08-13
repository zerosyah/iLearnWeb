//import * as React from "react";
import { LineChart } from "@mui/x-charts/LineChart";

export default function DashChart() {
  return (
    <LineChart
      xAxis={[{ data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] }]}
      series={[
          {
            id: "series-1",
              data: [10, 5.5, 2, 8.5, 1.5, 5, 9, 6.5, 3.5, 4.5],
          area: true
          }
  
      ]}
      width={700}
      height={300}
    />
  );
}
