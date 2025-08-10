
import { Chart } from "react-google-charts"

export default function PieChart() {
  const data = [
    ["year", "Marks", "percentage"],
    ["Jan", 70, 46.7],
    ["Feb", 15, 21.4],
    ["Mar", 50, 50],
    ["Apr", 19, 10],
    ["May", 40, 35],
    ["Jun", 4, 1],
    ["Jul", 56, 60.2],
    ["Aug", 78, 79.2],
    ["Sep", 11, 20.2],
    ["Oct", 32, 15.2],
    ["Nov", 64, 64],
    ["Dec", 65, 72.2],
  ];
  const option = {
    title: "LEARNS GRADE",
    curveType: "function",
    legend: { position: "bottom" },
  }
  return (
    <div className="w-full h-fit rounded" >
      <Chart
      chartType="LineChart"
      data={data}
      options={option}
      className='w-full h-fit pb-3 rounded'
    />
    </div>
  )
}

