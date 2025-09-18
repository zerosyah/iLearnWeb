import React from 'react'
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

function LiveEventCard() {
    const [isTrue, setIsTrue] = React.useState<boolean>(true);
    const [isTrueNext, setIsTrueNext] = React.useState<boolean>(false);
    const [isTrueDeadline, setIsTrueDeadline] = React.useState<boolean>(false);
  return (
    <section className="bg-[#9c27b0] rounded-[10px] text-white w-full h-full p-[10px]">
      <section className="flex h-full w-full flex-col gap-[10px] rounded-[10px] ">
        <div className="self-center">
          <Stack direction={"row"} spacing={2} className="flex justify-center">
            <Button
              variant="contained"
              color={isTrue ? "secondary" : "primary"}
              size="small"
              onClick={() => {
                setIsTrue(true);
                setIsTrueNext(false);
                setIsTrueDeadline(false);
              }}
            >
              Live
            </Button>
            <Button
              variant="contained"
              color={isTrueNext ? "secondary" : "primary"}
              size="small"
              onClick={() => {
                setIsTrueNext(true);
                setIsTrue(false);
                setIsTrueDeadline(false);
              }}
            >
              Upcoming
            </Button>
            <Button
              variant="contained"
              color={isTrueDeadline ? "secondary" : "primary"}
              size="small"
              onClick={() => {
                setIsTrueDeadline(true);
                setIsTrueNext(false);
                setIsTrue(false);
              }}
            >
              Deadlines
            </Button>
          </Stack>
        </div>
        {isTrue && (
          <div className="">
            <Stack direction={"column"} spacing={-0.5} className="">
              <h2 className="font-popins text-[16px] font-semibold">
                Subject:
              </h2>
              <p className="font-robot text-[14px]">Mathematics</p>
            </Stack>
            <Stack direction={"column"} spacing={-0.5} className="">
              <h2 className="font-popins text-[16px] font-semibold">
                Teacher:
              </h2>
              <p className="font-robot text-[14px]">Ms. Nkosi</p>
            </Stack>
            <Stack direction={"column"} spacing={-0.5} className="">
              <h2 className="font-popins text-[16px] font-semibold">Time:</h2>
              <p className="font-robot text-[14px]">08:00 - 09:00</p>
            </Stack>
            <Stack direction={"row"} spacing={1} className="">
              <h2 className="font-popins text-[16px] font-semibold">
                Location:
              </h2>
              <p className="font-robot text-[16px] italic">Grade 10A</p>
            </Stack>
            <Stack
              direction={"column"}
              spacing={-0.2}
              className="rounded-[10px] bg-gray-600 px-[10px] shadow-lg"
            >
              <h2 className="font-popins text-[14px] font-semibold">
                Next Class Preview:
              </h2>
              <div className="w-full overflow-hidden text-ellipsis text-nowrap rounded-[10px] border px-[10px] shadow-lg">
                <p className="overflow-hidden text-ellipsis font-robot text-[14px]">
                  English - Ms. Nkosi - 08:00 - 09:00
                </p>
              </div>
            </Stack>
          </div>
        )}
      </section>
    </section>
  );
}

export default LiveEventCard