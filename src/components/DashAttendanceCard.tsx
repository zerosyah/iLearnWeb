import { Button, Divider, Stack } from "@mui/material";
import React from "react";

export default function DashAttendanceCard() {
  const [selected, setSelected] = React.useState<string>("weekly");
  const [showPercent, setShowPercent] = React.useState<string>("fraction");
  const [showDescription, setShowDescription] =
    React.useState<string>("description");
  const handleBtn = (value: string) => {
    //value = selected
    switch (value) {
      case "weekly":
        setSelected("weekly");
        break;
      case "monthly":
        setSelected("monthly");
        break;
      case "YTD":
        setSelected("YTD");
        break;
      default:
        setSelected("weekly");
        break;
    }
  };
  //console.log(showPercent);

  return (
    <div className="flex flex-col gap-[20px] p-[10px]">
      <div className="my-[0px]">
        <h1 className="text-center font-inter text-[18px] font-semibold  text-[#222222]">
          Attendance
        </h1>
      </div>
      <Stack direction={"row"} justifyContent={"center"} spacing={1}>
        <Button
          variant={selected === "weekly" ? "outlined" : "contained"}
          size="small"
          onClick={() => handleBtn("weekly")}
        >
          Weekly
        </Button>
        <Button
          size="small"
          variant={selected === "monthly" ? "outlined" : "contained"}
          onClick={() => handleBtn("monthly")}
          className="font-inter text-[12px] font-medium"
        >
          Monthly
        </Button>
        <Button
          size="small"
          variant={selected === "YTD" ? "outlined" : "contained"}
          onClick={() => handleBtn("YTD")}
        >
          YTD
        </Button>
      </Stack>
      <Stack direction={"row"} spacing={1}>
        {showPercent !== "percent" ? (
          <Stack
            direction={"column"}
            divider={
              <Divider
                orientation="horizontal"
                flexItem
                sx={{ width: "30px" }}
              />
            }
            sx={{
              border: 2,
              width: "50px",
              borderRadius: 2,
              paddingRight: 1,
              paddingLeft: 1,
              cursor: "pointer",
            }}
            justifyContent={"center"}
            alignItems={"center"}
            onClick={() => setShowPercent("percent")}
          >
            {selected === "weekly" && (
              <>
                <span className="font-bebasNeue text-[25px]">24</span>
                <span className="h-[5px] w-[40px] bg-gray-800"></span>
                <span className="font-bebasNeue text-[25px]">30</span>
              </>
            )}
            {selected === "monthly" && (
              <>
                <span className="font-bebasNeue text-[25px]">97</span>
                <span className="h-[5px] w-[40px] bg-gray-800"></span>
                <span className="font-bebasNeue text-[25px]">120</span>
              </>
            )}
            {selected === "YTD" && (
              <>
                <span className="font-bebasNeue text-[25px]">695</span>
                <span className="h-[5px] w-[40px] bg-gray-800"></span>
                <span className="font-bebasNeue text-[25px]">720</span>
              </>
            )}
          </Stack>
        ) : (
          <Stack
            direction={"column"}
            divider={
              <Divider
                orientation="horizontal"
                flexItem
                sx={{ width: "30px" }}
              />
            }
            sx={{
              border: 2,
              width: "55px",
              borderRadius: 2,
              paddingRight: 2,
              paddingLeft: 2,
              cursor: "pointer",
            }}
            justifyContent={"center"}
            alignItems={"center"}
            onClick={() => setShowPercent("fraction")}
          >
            {selected === "weekly" && (
              <>
                <span className="cursor-pointer px-[10px] font-bebasNeue text-[25px]">
                  80%
                </span>
              </>
            )}
            {selected === "monthly" && (
              <>
                <span className="cursor-pointer font-bebasNeue text-[25px]">
                  80%
                </span>
              </>
            )}
            {selected === "YTD" && (
              <>
                <span className="cursor-pointer font-bebasNeue text-[25px]">
                  97%
                </span>
              </>
            )}
          </Stack>
        )}
        <Stack direction={"column"}>
          <div className="">
            {showDescription === "description" ? (
              <p
                className="cursor-pointer font-robot text-[12px]"
                onClick={() => setShowDescription("review")}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
                eius veniam natus repellendus eos consequatur soluta nisi magni
                consequuntur?
              </p>
            ) : (
              <p
                className="cursor-pointer font-robot text-[12px]"
                onClick={() => setShowDescription("description")}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
                eius veniam natus repellendus eos consequatur soluta nisi magni
                consequuntur 2335678?
              </p>
            )}
          </div>
          <Stack direction={"row"} spacing={1} marginTop={1}>
            <div className="h-[30px] w-[50px] rounded-[10px] border bg-red-600"></div>
            <div className="h-[30px] w-[50px] rounded-[10px] border bg-indigo-600"></div>
            <div className="h-[30px] w-[50px] rounded-[10px] border bg-yellow-600"></div>
          </Stack>
        </Stack>
      </Stack>
    </div>
  );
}
