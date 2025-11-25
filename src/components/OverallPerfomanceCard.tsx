import { Box, Stack } from "@mui/material";
import { PieChart } from "@mui/x-charts/PieChart";
import { useState } from "react";
import DashSelectOption from "../DashComponents/DashSelectOption";

function OverallPerfomanceCard() {
  // @ ts-ignore
  const [formData, setFormData] = useState<any>({
    Subject: "",
  });

  // Data for the chart
  const data = [
    {
      label: "Term 1",
      value: 100,
      color: "#0088FE",
      id: 1,
      years: 2023,
    },
    {
      label: "Term 2",
      value: 30,
      color: "#00C49F",
      id: 2,
      years: 2022,
    },
    {
      label: "Term 3",
      value: 90,
      color: "#00FFFE",
      id: 3,
      years: 2024,
    },
  ];

  // Settings for the chart
  const settings = {
    margin: { right: 5 },
    width: 250,
    height: 200,
    hideLegend: true,
    hideTitle: false,
  };
  console.log("formData: ", formData);

  return (
    <Box
      sx={{
        display: "flex",
        height: "100%",
        flexDirection: "column",
        alignItems: "center",
        borderRadius: "10px",
        padding: "10px",
      }}
    >
      {/* Header of the card */}
      <Stack spacing={2} className="items-center justify-between ">
        <h1 className="font-roboto text-[18px] font-semibold text-default">
          Perfomance
        </h1>
        <DashSelectOption
          option="Subject"
          value={(data: any) => setFormData(data.Subject)}
          label="Subject"
        />
      </Stack>
      <Stack spacing={2} direction={"row"} className="w-full">
        <PieChart
          series={[
            {
              innerRadius: 45,
              outerRadius: 65,
              data,
              cornerRadius: 10,
              startAngle: 0,
              endAngle: 360,
              arcLabelRadius: 50,
              arcLabelMinAngle: 0,
              cy: 75,
              cx: 40,
              paddingAngle: 5,
            },
          ]}
          {...settings}
        />
      </Stack>
    </Box>
  );
}

export default OverallPerfomanceCard;
