import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import React from "react";
import { PieChart } from "@mui/x-charts/PieChart";

function OverallPerfomanceCard() {
  const [year, setYear] = React.useState<string>("");

  // Function to handle the change of the year
  const handleChange = (event: SelectChangeEvent) => {
    setYear(event.target.value as string);
  };
  // value controlls the value of the chart and the end angle
  const value = 300;

  // Data for the chart
  const data = [{ label: "", value: value, color: "#0088FE", id: 0 }];

  // Settings for the chart
  const settings = {
    margin: { right: 5 },
    width: 250,
    height: 200,
    hideLegend: true,
    hideTitle: true,
  };
  return (
    <section className="h-full w-full rounded-[10px] p-[10px]">
      {/* Header of the card */}
      <div className="flex items-center justify-between ">
        <h1 className="font-popins text-[18px] font-semibold text-black">
          Overall Perfomance
        </h1>
        <FormControl
          variant="standard"
          sx={{ m: 1, minWidth: 100, minHeight: 20 }}
          size="small"
        >
          <InputLabel id="year">Year</InputLabel>
          <Select
            labelId="year"
            id="year"
            value={year}
            onChange={handleChange}
            label="Age"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={2025}>2025</MenuItem>
            <MenuItem value={2024}>2024</MenuItem>
            <MenuItem value={2023}>2023</MenuItem>
          </Select>
        </FormControl>
      </div>
      <div className="">
        <PieChart
          series={[
            {
              innerRadius: 50,
              outerRadius: 70,
              data,
              arcLabel: "value",
              cornerRadius: 10,
              startAngle: 0,
              endAngle: value,
              arcLabelRadius: 0,
              arcLabelMinAngle: 100,
              cy: 80,
              cx: 70
              
            },
          ]}
          {...settings}
        />
      </div>
    </section>
  );
}

export default OverallPerfomanceCard;
