import React from 'react'
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

function LiveEventCard() {
    const [isTrue, setIsTrue] = React.useState<boolean>(true);
    const [isTrueNext, setIsTrueNext] = React.useState<boolean>(false);
  return (
    <section className="">
      <section className="flex h-full w-full flex-col gap-[10px] rounded-[10px] border  p-[10px]">
        <div className="self-center">
          <h1 className="text-center font-robot text-[18px] font-semibold uppercase text-white underline">
            Live Event
          </h1>
          <Stack direction={"row"} spacing={2} className="flex justify-center">
            <Button
              variant="contained"
              color={isTrue ? "secondary" : "primary"}
              size="small"
              onClick={() => {
                setIsTrue(true);
                setIsTrueNext(false);
              }}
            >
              Current
            </Button>
            <Button
              variant="contained"
              color={isTrueNext ? "secondary" : "primary"}
              size="small"
              onClick={() => {
                setIsTrueNext(true);
                setIsTrue(false);
              }}
            >
              Upcoming
            </Button>
          </Stack>
        </div>
        {isTrue && (
          <div className="">
            <div className="">
              <h2 className="font-popins text-[16px] font-semibold">
                Subject:
              </h2>
              <p className="font-popins text-[14px]">Mathematics</p>
            </div>
            <div className="">
              <h2 className="font-popins text-[16px] font-semibold">
                Date & Time:
              </h2>
              <p className="font-popins text-[14px]">
                Sept 23, 10:00 AM - 11:00 AM
              </p>
            </div>
            <div className="">
              <h2 className="font-popins text-[16px] font-semibold">
                Count Down:
              </h2>
              <p className="font-popins text-[14px]">59 minutes</p>
            </div>
            <Stack direction={"row"} spacing={2} className="">
              <h2 className="font-popins text-[16px] font-semibold">
                Location:
              </h2>
              <p className="font-popins text-[16px]">Online</p>
            </Stack>
          </div>
        )}
      </section>
    </section>
  );
}

export default LiveEventCard