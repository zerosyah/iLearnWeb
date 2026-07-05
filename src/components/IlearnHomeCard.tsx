import React from "react";
import { Stack } from "@mui/material";
import "../index.css"

function IlearnHomeCard() {
  return (
    <div className="relative rounded-[10px] bg-coolWhite px-[8px] shadow-sm shadow-selectiveYellow">
      <div
        className="ilearn-card flex flex-col justify-between pb-[8px] pt-[24px]"
        // spacing={vw <= 850 ? 10 : 5}
        // justifyContent={"space-between"}
      >
        <div className="flex flex-col gap-[16px]">
          <h1 className="font-bebasNeue text-[40px] font-bold leading-[40px] text-selectiveYellow">
            Effortless Applications
          </h1>
          <p className="z-10 font-montserrat text-[16px] font-medium text-selectiveYellow">
            Real-time parental monitoring, student self-service portals, and
            advanced tracking to ensure everyone stays connected and informed.
          </p>
        </div>

        <Stack
          direction={"row"}
          className="rounded-[10px]"
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <button className="relative h-[40px] w-full rounded-[10px] border border-selectiveYellow font-montserrat text-[20px] font-bold text-selectiveYellow transition-all duration-300 ease-in-out hover:bg-selectiveYellow hover:text-coolWhite">
            Learn More
          </button>
        </Stack>
        <h1 className="absolute bottom-0 right-0 z-0 bg-gradient-to-t from-[#BD00FD] via-black/50 to-[#FF3C00] bg-clip-text font-bebasNeue text-[150px] text-transparent">
          3
        </h1>
      </div>
    </div>
  );
}

export default IlearnHomeCard;
