import React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
//import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import test from "../assets/Heros/CARD/test.jpg"
import test2 from "../assets/Heros/CARD/test2.png";
import CurrentCard from "./CurrentCard";

function LiveEventCard() {
  const [isTrue, setIsTrue] = React.useState<boolean>(true);
  //const [isTrueNext, setIsTrueNext] = React.useState<boolean>(false);
  //const [isTrueDeadline, setIsTrueDeadline] = React.useState<boolean>(false);
  const data = [
    {
      subject: "English",
      class: "Assignment 1",
      date: "2025-10-24",
      location: "Grade 10A",
    },
    {
      subject: "Mathematics",
      class: "Exam",
      date: "2025-10-25",
      location: "Grade 10B",
    },
    {
      subject: "Physical Sciences",
      class: "Practical",
      date: "2025-10-26",
      location: "Grade 10C",
    },
    {
      subject: "Accounting",
      class: "Exam",
      date: "2025-10-27",
      location: "Grade 10C",
    },
    {
      subject: "Accounting",
      class: "Exam",
      date: "2025-10-27",
      location: "Grade 10C",
    },
    {
      subject: "Accounting",
      class: "Exam",
      date: "2025-10-27",
      location: "Grade 10C",
    },
  ];
  
//console.log(progress);

  return (
    <section className="h-full w-full overflow-hidden rounded-[10px] p-[10px] text-white">
      <section className="flex h-full w-full flex-col gap-[10px] rounded-[10px] ">
        <div className="self-center">
          <Stack direction={"row"} spacing={1} className="flex justify-center">
            <Button
              variant="contained"
              sx={{
                textTransform: "none",
                backgroundColor: isTrue ? "blue" : "red",
              }}
              size="small"
              onClick={() => {
                setIsTrue(!isTrue);
                //setIsTrueNext(false);
                //setIsTrueDeadline(false);
              }}
            >
              {isTrue? "CURRENT":"DEADLINE"}
            </Button>
          </Stack>
        </div>
        {isTrue && (
          <>
            <CurrentCard
              name="Ms. junchies"
              subject="Mathametics"
              location="Grade 10A"
              picture={test}
              isNext={false}
            />
            <CurrentCard
              name="Ms. junchies"
              subject="Mathametics"
              location="Grade 10A"
              picture={test2}
              isNext={true}
            />
          </>
        )}
        {!isTrue && (
          <Stack direction={"column"} spacing={1} className="w-full h-full overflow-y-auto">
            {data.map((item, index) => (
              <Stack
                direction={"row"}
                spacing={1}
                className=" hover:cursor-pointer"
                sx={{
                  borderWidth: 1,
                  borderColor: "gray",
                  borderStyle: "solid",
                  padding: "1px",
                  borderRadius: "10px",
                  boxShadow: 3,
                  width: "100%",
                  height: "84px",
                  overflow: "hidden",
                }}
                key={index + `${item}`}
              >
                <div className=" h-[40px] w-[40px] rounded-[10px] bg-black p-[10px]"></div>
                <Stack
                  direction={"column"}
                  spacing={0.2}
                  className="w-full"
                  sx={{ textOverflow: "ellipsis" }}
                >
                  <h2 className="font-popins text-[14px] font-semibold text-gray-600">
                    {item.subject} - {item.class}
                  </h2>
                  <Stack
                    direction={"row"}
                    spacing={1}
                    sx={{ flexWrap: "nowrap" }}
                  >
                    <h2 className="font-robot text-[12px]">{item.date}</h2>
                    <h2 className=" font-robot text-[12px]">{item.location}</h2>
                  </Stack>
                </Stack>
              </Stack>
            ))}
          </Stack>
        )}
      </section>
    </section>
  );
}

export default LiveEventCard;

/*
<div className="transition-all duration-500 ease-in-out">
            <Stack direction={"column"} spacing={-0.5} className="">
              <h2 className="font-roboto text-[14px] font-medium text-[#0F3A3A]">
                Subject:
              </h2>
              <p className="font-popins text-[16px]  text-default">
                Mathematics
              </p>
            </Stack>
            <Stack direction={"column"} spacing={-0.5} className="">
              <h2 className="font-inter text-[16px] font-medium text-[#222222]">
                Teacher:
              </h2>
              <p className="font-inter text-[14px]  text-[#555555]">
                Ms. Nkosi
              </p>
            </Stack>
            <Stack direction={"column"} spacing={-0.5} className="">
              <h2 className="font-inter text-[16px] font-medium text-[#222222]">
                Time:
              </h2>
              <p className="font-inter text-[14px]  text-[#555555]">
                08:00 - 09:00
              </p>
            </Stack>
            <Stack
              direction={"row"}
              spacing={1}
              className=""
              alignItems={"center"}
            >
              <h2 className="font-inter text-[16px] font-medium text-[#222222]">
                Location:
              </h2>
              <p className="font-inter text-[14px]  text-[#555555]">
                Grade 10A
              </p>
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
                <p className="font-robot overflow-hidden text-ellipsis text-[14px]">
                  English - Ms. Nkosi - 08:00 - 09:00
                </p>
              </div>
            </Stack>
          </div>
 */