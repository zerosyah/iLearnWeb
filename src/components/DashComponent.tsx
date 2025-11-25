// import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import "react-circular-progressbar/dist/styles.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import LiveEventCard from "./LiveEventCard";
import { Box, Button, Divider, Stack } from "@mui/material";
import { useState } from "react";
import OverallPerfomanceCard from "./OverallPerfomanceCard";
import DashAttendanceCard from "./DashAttendanceCard";
import { Label } from "flowbite-react";
import DashRecentCard from "../DashComponents/DashRecentCard";
import DashSelectOption from "../DashComponents/DashSelectOption";
import DashProgressCard from "../DashComponents/DashProgressCard";


export default function DashComponent() {
  const { currentUser } = useSelector((state: any) => state.user);
  // @ts-ignore
  const [subject, setSubject] = useState<any>("");
  console.log(currentUser);

  // @ts-ignore
  const details = [
    {
      label: "Course of Study:",
      value: "Science",
    },
    {
      label: "GPA",
      value: "4.0",
    },
    {
      label: "Career",
      value: "Computer Sciences",
    },
    {
      label: "Grade",
      value: "10A",
    },
    {
      label: "Hobbies",
      value: "Football",
    },
    {
      label: "Badges",
      value: "5",
    },
    {
      label: "Id Number",
      value: currentUser?.IdNumber,
    },
    {
      label: "Email",
      value: currentUser?.Email,
    },
    {
      label: "Phone",
      value: currentUser?.Phone,
    },
  ];

  const events = [
    {
      subject: "Mathematics",
      date: "2025-09-14",
      time: "07:00 - 09:00",
      bColor: "orange",
    },
    {
      subject: "Chemistry",
      date: "2025-09-14",
      time: "09:00 - 11:00",
      bColor: "blue",
    },
    {
      subject: "Break Time",
      date: "2025-09-14",
      time: "11:00 - 13:00",
      bColor: "hotpink",
    },
    {
      subject: "Life Sciences",
      date: "2025-09-14",
      time: "11:00 - 13:00",
      bColor: "green",
    },
    {
      subject: "Life Orientation",
      date: "2025-09-14",
      time: "13:00 - 15:00",
      bColor: "orange",
    },
    {
      subject: "Study Time",
      date: "2025-09-14",
      time: "15:00 - 17:00",
      bColor: "blue",
    },
  ];

  const list = ["live", "attend", "deadline"];
  const [currentState, setCurrentState] = useState<string>("live");
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const stateTracker = (motion: any) => {
    let localIndex = currentIndex;
    if (motion == "next") {
      list.forEach((stat: string, index: number) => {
        if (stat == currentState) {
          //console.log("ts: ", stat, index);
          localIndex = index + 1;
          if (localIndex > 2) {
            localIndex = 0;
          }
          setCurrentIndex(localIndex);
        }
      });
    }
    if (motion == "back") {
      list.forEach((stat: string, index: number) => {
        if (stat == currentState) {
          //console.log("ts: ", stat, index);
          localIndex = index - 1;
          if (localIndex < 0) {
            localIndex = 2;
          }
          setCurrentIndex(localIndex);
        }
      });
    }
    setCurrentState(list[localIndex]);
  };

  const progressCardData = [
    { label: "Trigonometry", BarColor: "cyan", BarNumber: 80, Date: "Oct - Dec 2025", Dot: true },
    { label: "Algebra", BarColor: "blue", BarNumber: 65, Date: "Jul - Sep 2025", Dot: false },
    { label: "Calculus", BarColor: "green", BarNumber: 50, Date: "Apr - Jun 2025", Dot: false },
  ]

  return (
    <Box
      component={"section"}
      className="h-[98vh] w-[100%] justify-between overflow-y-hidden"
    >
      <Stack direction={"row"} className="w-[100%]" spacing={1}>
        {/* Right Section */}
        <Stack
          spacing={1}
          className="flex min-w-[75%] max-w-[75%] flex-col rounded-[10px] md:inline-block "
        >
          {/* first section */}
          <Stack
            direction={"row"}
            spacing={2}
            className="overflow-x-hidden rounded-[10px] bg-primary p-[5px] shadow-sm shadow-black"
          >
            <img
              src={currentUser?.ProfilePicture}
              alt="Profile Picture"
              className="h-[50px] w-[50px] rounded-full border border-default object-cover p-[2px]"
            />
            <Stack direction={"column"} className="">
              <h1 className="font-roboto text-[20px] font-semibold text-default">
                {currentUser?.FirstName + " " + currentUser?.LastName}
              </h1>
              <Stack spacing={1} direction={"row"} className="items-center">
                <p className="font-inter text-[14px] font-medium text-secondary">
                  ID: {currentUser?.IdNumber}
                </p>
                <Divider orientation="vertical" className="bg-black" />
                <p className="font-Popins text-[14px] font-medium text-secondary">
                  Email: {currentUser?.Email}
                </p>
                <Divider orientation="vertical" className="bg-black" />
                <p className="font-inter text-[14px] font-medium text-secondary">
                  Phone: {currentUser?.Phone}
                </p>
                <Divider orientation="vertical" className="bg-black" />
                <p className="font-inter text-[14px] font-medium text-secondary">
                  Grade: 10
                </p>
              </Stack>
            </Stack>
          </Stack>
          {/* second section */}
          <Stack spacing={1} direction={"row"} className="mb-[10px] h-[250px]">
            {/* Progress */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                width: "30%",
                //border: "1px solid red",
                borderRadius: "10px",
                padding: "10px",
                gap: "10px",
              }}
            >
              <Label className="font-roboto text-[18px] font-semibold">
                Progress
              </Label>
              <DashSelectOption
                option="Subject"
                value={(data: any) => setSubject(data?.Subject)}
                label="Subject"
              />
              <Stack
                spacing={1}
                className="scroll-container h-[80%] overflow-y-auto rounded-[10px]"
              >
                {progressCardData.map((item, index) => (
                  <DashProgressCard
                    BarColor={item?.BarColor}
                    BarNumber={item?.BarNumber}
                    Date={item?.Date}
                    label={item?.label}
                    Dot={item?.Dot}
                    key={index}
                  />
                ))}
              </Stack>
            </Box>
            {/* Recents */}
            <Stack className="bg-pbase h-full w-[30%] rounded-[10px] p-[10px]">
              <Stack>
                <Label className="text-ptxtl font-roboto text-[18px] font-semibold">
                  Recents
                </Label>
              </Stack>
              <Stack
                spacing={1}
                className="scroll-container overflow-y-auto rounded-[10px] "
              >
                <DashRecentCard
                  subject="Mathematics"
                  date="20 Nov 2025"
                  results="Passed"
                  score={93}
                  total={150}
                />
                <DashRecentCard
                  subject="English"
                  date="19 Nov 2025"
                  results="Passed"
                  score={87}
                  total={100}
                />
                <DashRecentCard
                  subject="Phsyical Sciences"
                  date="15 Nov 2025"
                  results="Failed"
                  score={23}
                  total={150}
                />
              </Stack>
            </Stack>

            {/** action card */}
            <Stack className="bg-sbase w-[40%] rounded-[10px] md:h-full">
              <Stack
                className=""
                direction={"row"}
                sx={{ justifyContent: "space-between", position: "relative" }}
              >
                <Button
                  variant="contained"
                  size="large"
                  sx={{
                    position: "absolute",
                    left: "10px",
                    marginTop: "10px",
                    backgroundColor: "hsl(182 34% 83%)",
                  }}
                  onClick={() => {
                    stateTracker("back");
                  }}
                >
                  <FaChevronLeft />
                </Button>
                <Button
                  variant="contained"
                  color="success"
                  size="large"
                  sx={{
                    position: "absolute",
                    right: "10px",
                    marginTop: "10px",
                    width: "40px",
                    backgroundColor: "hsl(182 34% 83%)",
                  }}
                  onClick={() => {
                    stateTracker("next");
                  }}
                >
                  <FaChevronRight />
                </Button>
              </Stack>
              {currentIndex === 2 && <DashAttendanceCard />}
              {currentIndex === 0 && <LiveEventCard />}
              {currentIndex === 1 && <OverallPerfomanceCard />}
            </Stack>
          </Stack>
          {/* third section */}
          <section className="h-[100px] w-full rounded-[10px] border bg-[#D9D9D9]">
            <div className="flex h-full w-full items-center justify-center">
              <h1 className="font-bebasNeue text-[20px] text-cyan-600">
                Under Maintaince
              </h1>
            </div>
          </section>
        </Stack>
        {/* Timetable Left Section */}
        <Stack className="scroll-container hidden min-w-[24.2%] max-w-[24.2%] flex-col overflow-y-auto rounded-[10px] bg  md:inline-block ">
          <Stack className="flex h-fit w-full items-baseline justify-between border-b-4 border-pink-500 pb-2">
            <p className="font-popins text-lg text-gray-600">Grade 10</p>
            <p className="font-bebasNeue text-4xl">Science Timetable</p>
          </Stack>
          {events.map((item: any, index: number) => (
            <div
              className={`flex border-b-4 border-${item.bColor}-500 overflow-x-hidden px-[10px] py-2 `}
              key={index + Math.random() * 23}
            >
              <span className="flex h-fit flex-col items-center border-l-4 border-r-4 border-gray-500 px-4 font-bebasNeue text-2xl ">
                <h1 className="font-popins text-xl">
                  {new Date(item.date).toLocaleDateString("default", {
                    month: "short",
                  })}
                </h1>
                <h1 className={`text-4xl text-${item.bColor}-500`}>
                  {new Date(item.date).toLocaleDateString("default", {
                    day: "numeric",
                  })}
                </h1>
              </span>
              <span className="flex flex-col pl-4">
                <h1 className="font-popins text-xl text-gray-600">
                  {item.time}
                </h1>
                <h1 className="whitespace-nowrap font-bebasNeue text-4xl">
                  {item.subject}
                </h1>
              </span>
            </div>
          ))}
        </Stack>
      </Stack>

      {/* Mobile */}
    </Box>
  );
}

