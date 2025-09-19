import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import { SelectChangeEvent } from "@mui/material/Select";
import React from "react";
import { PieChart } from "@mui/x-charts/PieChart";

function OverallPerfomanceCard() {

  // Function to handle the change of the year
  // value controlls the value of the chart and the end angle
  //const value = 300;

  // Data for the chart
  const list = [
    {
      label: "Group A",
      value: 180,
      color: "#0088FE",
      id: 1,
      years: 2023,
    },
    {
      label: "Group b",
      value: 90,
      color: "#00C49F",
      id: 1,
      years: 2022,
    },
    {
      label: "Group g",
      value: 90,
      color: "#00FFFE",
      id: 1,
      years: 2024,
    },
  ];

  const data = list
  //console.log(list.map((item)=>item.years === year));
  
  // Settings for the chart
  const settings = {
    margin: { right: 5 },
    width: 250,
    height: 200,
    hideLegend: true,
    hideTitle: true,
  };
  return (
    <section className="flex h-full w-full flex-col items-center rounded-[10px] p-[10px]">
      {/* Header of the card */}
      <div className="flex items-center justify-between ">
        <h1 className="font-popins text-[18px] font-semibold text-black">
          Perfomance
        </h1>
      </div>
      <div className="">
        <PieChart
          series={[
            {
              innerRadius: 45,
              outerRadius: 65,
              data,
              cornerRadius: 10,
              startAngle: 0,
              endAngle: 360,
              arcLabelRadius: 0,
              arcLabelMinAngle: 100,
              cy: 90,
              cx: 70,
            },
          ]}
          {...settings}
        />
      </div>
    </section>
  );
}

export default OverallPerfomanceCard;
