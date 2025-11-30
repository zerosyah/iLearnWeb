import { Box, Stack } from "@mui/material";
import { PieChart } from "@mui/x-charts/PieChart";
import { useEffect, useState } from "react";
import DashSelectOption from "../DashComponents/DashSelectOption";
import PerfomanceLayout from "../Constants/PerformanceLayout.json";

function OverallPerfomanceCard() {
  // @ ts-ignore
  const [formData, setFormData] = useState<any>("Mathematics");
  const [PerfomanceData, setPerfomanceData] = useState<any>([]);

  useEffect(() => {
    if (!PerfomanceLayout) {
      setPerfomanceData([]);
      return;
    }
    if (formData in PerfomanceLayout) {
      // @ts-ignore
      setPerfomanceData(PerfomanceLayout[formData]);
      return;
    } else {
      setPerfomanceData([]);
    }
  }, [formData]);
  console.log("formdata subject: ", formData);
  console.log("perfomance: ", PerfomanceData);

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
        {PerfomanceData.length > 0 ? (
          <PieChart
            series={[
              {
                innerRadius: 45,
                outerRadius: 65,
                data: PerfomanceData,
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
        ) : (
          <h1 className="font-roboto text-[18px] font-semibold text-default">
            No Data Available
          </h1>
        )}
      </Stack>
    </Box>
  );
}

export default OverallPerfomanceCard;
