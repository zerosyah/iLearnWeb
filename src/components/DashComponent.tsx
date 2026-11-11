import { useSelector } from "react-redux";
import "react-circular-progressbar/dist/styles.css";
import { FaBookReader, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import LiveEventCard from "./LiveEventCard";
import { Box, Button, Divider, Stack } from "@mui/material";
import { useEffect, useState } from "react";
import OverallPerfomanceCard from "./OverallPerfomanceCard";
import DashAttendanceCard from "./DashAttendanceCard";
import { Label } from "flowbite-react";
import DashRecentCard from "../DashComponents/DashRecentCard";
import DashSelectOption from "../DashComponents/DashSelectOption";
import DashProgressCard from "../DashComponents/DashProgressCard";
import progressLayoutData from "../Constants/ProgressLayout.json";
import { Recents } from "../Constants/RecentLayout.json";
import newsIcon from "../assets/Heros/SA/SA4.jpg";
//import { SlOptions } from "react-icons/sl";
import { IoDocumentTextOutline } from "react-icons/io5";
import {
  FaRegClock,
  FaRegEye,
  FaRegHeart,
  //FaAngleDoubleUp,
  FaUsers,
} from "react-icons/fa";
import DashImageCard from "../DashComponents/DashImageCard";
import DashMoreNewsCard from "../DashComponents/DashMoreNewsCard";
import { News } from "../Constants/NewsLayout.json";
import { Events } from "../Constants/EventLayout.json";
import { Link, useNavigate } from "react-router-dom";
import { FaGraduationCap } from "react-icons/fa6";
import DashBarChart from "../DashComponents/DashBarChart";
import { RootState } from "../redux/store";

type Props = {
  label?: string;
  BarColor?: string;
  BarNumber?: number;
  Date?: string;
  Dot?: boolean;
};
type RecentProps = {
  Subject?: string;
  Date?: string;
  Results?: string;
  Score?: number;
  Total?: number;
};

export default function DashComponent() {
  const { currentUser } = useSelector((state: RootState) => state.user);
  const [subject, setSubject] = useState<string>("Mathematics");
  const [progressData, setProgressData] = useState<string[]>([]);

  const list = ["live", "attend", "deadline"];
  const [currentState, setCurrentState] = useState<string>("live");
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const stateTracker = (motion: string) => {
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

  useEffect(() => {
    if (!subject) {
      setProgressData([]);
      return;
    }
    if (subject in progressLayoutData) {
      // @ts-expect-error will not be undefined because of the if statement.
      setProgressData(progressLayoutData[subject]);
    } else {
      setProgressData([]);
    }
  }, [subject]);

  const Navigate = useNavigate();
  console.log((currentUser as { Role?:string}| null)?.Role);

  return (
    <Box
      component={"section"}
      className="h-full w-[100%] justify-between overflow-y-hidden"
    >
      {((currentUser as { Role?:string}| null)?.Role) == "Student" && (currentUser as { IsComplete?:boolean } | null)?.IsComplete ? (
        <Stack direction={"row"} className="w-full" spacing={1}>
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
                src={(currentUser as { ProfilePicture?:string}| null)?.ProfilePicture}
                alt="Profile Picture"
                className="h-[50px] w-[50px] rounded-full border border-default object-cover p-[2px]"
              />
              <Stack direction={"column"} className="">
                <h1 className="font-roboto text-[20px] font-semibold text-default">
                  {(currentUser as { FirstName?:string}| null)?.FirstName} {(currentUser as { LastName?:string}| null)?.LastName}
                </h1>
                <Stack spacing={1} direction={"row"} className="items-center">
                  <p className="font-inter text-[14px] font-medium text-secondary">
                    ID: {(currentUser as { IdNumber?:string}| null)?.IdNumber}
                  </p>
                  <Divider orientation="vertical" className="bg-black" />
                  <p className="font-Popins text-[14px] font-medium text-secondary">
                    Email: {(currentUser as { Email?:string}| null)?.Email}
                  </p>
                  <Divider orientation="vertical" className="bg-black" />
                  <p className="font-inter text-[14px] font-medium text-secondary">
                    Phone: {(currentUser as { Phone?:string}| null)?.Phone}
                  </p>
                  <Divider orientation="vertical" className="bg-black" />
                  <p className="font-inter text-[14px] font-medium text-secondary">
                    Grade: 10
                  </p>
                </Stack>
              </Stack>
            </Stack>
            {/* second section */}
            <Stack
              spacing={1}
              direction={"row"}
              className="mb-[10px] h-[250px]"
            >
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
                  boxShadow: "0px 1px 1px rgba(0, 0, 0, 0.25)",
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
                  {progressData.length > 0 ? (
                    progressData.map((item, index: number) => (
                      <DashProgressCard
                        BarColor={item?.BarColor}
                        BarNumber={item?.BarNumber}
                        Date={item?.Date}
                        label={item?.label}
                        Dot={item?.Dot}
                        key={index}
                      />
                    ))
                  ) : (
                    <Stack>
                      <span className="flex items-center justify-center text-center font-popins text-[14px]">
                        Track your subject's progress here.
                      </span>
                    </Stack>
                  )}
                </Stack>
              </Box>
              {/* Recents */}
              <Stack className="h-full w-[30%] rounded-[10px] bg-pbase p-[10px]">
                <Stack>
                  <Label className="font-roboto text-[18px] font-semibold text-ptxtl">
                    Recents
                  </Label>
                </Stack>
                <Stack
                  spacing={1}
                  className="scroll-container overflow-y-auto rounded-[10px] "
                >
                  {Recents.length > 0
                    ? Recents.map((item: RecentProps, index: number) => (
                        <DashRecentCard
                          Subject={item?.Subject}
                          Date={item?.Date}
                          Results={item?.Results}
                          Score={item?.Score}
                          Total={item.Total}
                          key={index}
                        />
                      ))
                    : ""}
                </Stack>
              </Stack>

              {/** action card */}
              <Stack className="w-[40%] rounded-[10px] bg-sbase md:h-full">
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
            <Stack direction={"row"} spacing={1} className="">
              <Stack
                direction={"row"}
                className="h-[270px] w-[60%] rounded-[10px] border bg-pbase p-[10px]"
                alignItems={"center"}
                spacing={1}
              >
                <Stack
                  spacing={1}
                  className="scroll-container h-full w-[50%] overflow-x-hidden rounded-[10px] border-t border-t-white/50 bg-pcard bg-gradient-to-t from-pcard to-white/50 p-[5px] shadow-sm shadow-gray-400"
                >
                  <DashImageCard
                    alt="News image icon"
                    src={newsIcon}
                    border="0px"
                    borderRadius="10px"
                    height="140px"
                    width="100%"
                  />
                  <Stack className="w-full">
                    <h1 className="overflow-x-hidden truncate font-roboto text-[14px] font-bold text-ptxtl">
                      The newas title should be here dsfdsfsdfdfsdf
                    </h1>
                  </Stack>
                  <Stack
                    direction={"row"}
                    spacing={1}
                    alignItems={"center"}
                    justifyContent={"space-between"}
                  >
                    <Stack direction={"row"} spacing={1} alignItems={"center"}>
                      <FaRegClock size={14} className="text-ptxtd" />
                      <span className="font-popins text-[12px] text-ptxtd">
                        2 days ago
                      </span>
                    </Stack>
                    <Stack direction={"row"} spacing={1} alignItems={"center"}>
                      <FaRegHeart
                        size={14}
                        className="cursor-pointer text-ptxtd"
                      />
                      <span className="font-popins text-[12px] text-ptxtd">
                        43
                      </span>
                    </Stack>
                    <Stack direction={"row"} spacing={1} alignItems={"center"}>
                      <FaRegEye size={14} className="text-ptxtd" />
                      <span className="font-popins text-[12px] text-ptxtd">
                        675
                      </span>
                    </Stack>
                  </Stack>
                  <Button
                    className="w-full border"
                    sx={{ width: "100%", borderRadius: "10px" }}
                    size="small"
                    variant="outlined"
                  >
                    View
                  </Button>
                </Stack>
                <Stack spacing={1} className="h-full w-[50%] rounded-[10px]">
                  <h1 className="font-roboto text-[18px] font-bold text-ptxtl">
                    News
                  </h1>
                  <Stack
                    spacing={1}
                    className="scroll-container h-[100%] overflow-y-scroll rounded-[10px] "
                  >
                    {News.map((item: any, index: number) => (
                      <DashMoreNewsCard Data={item} Index={index} />
                    ))}
                  </Stack>
                </Stack>
              </Stack>
              <Stack className="h-[270px] w-[40%] rounded-[10px] border bg-pbase p-[10px]">
                <h1 className="">Under Maintaince</h1>
              </Stack>
            </Stack>
          </Stack>
          {/* Timetable Left Section */}
          <Stack className="scroll-container bg hidden min-w-[24.2%] max-w-[24.2%] flex-col overflow-y-auto rounded-[10px]  md:inline-block ">
            <Stack className="flex h-fit w-full items-baseline justify-between border-b-4 border-pink-500 pb-2">
              <p className="font-popins text-lg text-gray-600">Grade 10</p>
              <p className="font-bebasNeue text-4xl">Science Timetable</p>
            </Stack>
            {Events.map((item: any, index: number) => (
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
      ) : (
        !(currentUser as { IsComplete?:boolean } | null)?.IsComplete &&
        (currentUser as { Role?:string}| null)?.Role == "Student" && (
          <Stack
            alignItems={"center"}
            justifyContent={"center"}
            spacing={3}
            className="size-full"
          >
            <h1 className="font-montserrat text-[24px] font-bold text-imperialRed">
              Please complete your profile to access the dashboard.
            </h1>
            <Button
              className="w-fit border-2 border-persianBlue"
              variant="outlined"
              onClick={() => Navigate("/profile")}
            >
              Complete Profile
            </Button>
          </Stack>
        )
      )}

      {((currentUser as { Role?:string}| null)?.Role) == "admin" && (
        <div className="dash size-full bg-transparent">
          {/** First section intro */}
          <div className="card !mb-0 rounded-[6px] !pb-0">
            <h3 className="mb-2 font-popins text-[11px] font-semibold uppercase leading-none text-hoverGold">
              Ilearn / Dashboard
            </h3>
            <h1 className="font-bebasNeue text-[36px] leading-10 text-nightGreen md:text-[48px]">
              Dashboard
            </h1>
            <div className="flex items-center justify-between">
              <h2 className=" text-[14px] font-medium text-textGray">
                School at glance
              </h2>
              <Link to={`/dashboard?tab=applications`}>
                <p className="cursor-pointer rounded-[6px] border border-borderGray px-2 py-1 font-popins text-[14px] font-semibold uppercase text-strongNightGreen hover:border-hoverGold hover:bg-hoverGold hover:text-softWhite">
                  Register Student
                </p>
              </Link>
            </div>
          </div>

          {/** Card for total applications */}
          <div className="card rounded-[6px] !bg-nightGreen">
            <div className="flex items-center justify-between">
              <h2 className="font-popins text-[11px] font-semibold uppercase text-softWhite">
                Total Applications
              </h2>
              <IoDocumentTextOutline size={20} className="text-gold" />
            </div>
            <h1 className="mt-2 font-bebasNeue text-[36px] tracking-wide text-gold md:text-[48px]">
              4328
            </h1>
            <div className="h-[4px] w-[32px] rounded-full bg-gold " />
          </div>
          <div className="card rounded-[6px] shadow-md shadow-borderGray">
            <div className="flex items-center justify-between">
              <h2 className="font-popins text-[11px] font-semibold uppercase text-textGray">
                Students
              </h2>
              <FaGraduationCap size={20} className="text-gold" />
            </div>
            <h1 className="mt-3 font-bebasNeue text-[36px] tracking-wide text-strongNightGreen md:text-[48px]">
              1248
            </h1>
            <div className="h-[4px] w-[32px] rounded-full bg-[#E1EFF7]" />
          </div>
          <div className="card rounded-[6px] p-[8px] font-bold shadow-md shadow-borderGray">
            <div className="flex items-center justify-between">
              <h2 className="font-popins text-[11px] font-semibold uppercase text-textGray">
                Teachers
              </h2>
              <FaUsers size={20} className="text-gold" />
            </div>
            <h1 className="mt-3 font-bebasNeue text-[36px] tracking-wide text-strongNightGreen md:text-[48px]">
              120
            </h1>
            <div className="h-[4px] w-[32px] rounded-full bg-[#E1EFF7]" />
          </div>
          <div className="card rounded-[6px] shadow-md shadow-borderGray">
            <div className="flex items-center justify-between">
              <h2 className="font-popins text-[11px] font-semibold uppercase text-textGray">
                Classes
              </h2>
              <FaBookReader size={20} className="text-gold" />
            </div>
            <h1 className="mt-3 font-bebasNeue text-[36px] tracking-wide text-strongNightGreen md:text-[48px]">
              68
            </h1>
            <div className="h-[4px] w-[32px] rounded-full bg-[#E1EFF7]" />
          </div>

          <div className="card rounded-[6px] shadow-md shadow-borderGray">
            <div className="flex items-center justify-between">
              <div className="">
                <h1 className="font-bebasNeue text-[24px] text-nightGreen">
                  Attendance
                </h1>
                <p className="mt-1 font-popins text-[12px] font-medium text-textGray">
                  This week. Mon - Fri{" "}
                </p>
              </div>
              <div className="flex flex-col items-end">
                <h1 className="font-bebasNeue text-[36px] leading-none text-nightGreen">
                  94.22%
                </h1>
                <p className="mt-0.5 font-popins text-[12px] font-medium text-green-500">
                  +2.5% this week
                </p>
              </div>
            </div>
            <div className="size-full">
              <DashBarChart />
            </div>
          </div>

          <div className="card rounded-[6px] !border-none !p-0">
            <div className="flex items-center justify-between">
              <div className="">
                <h1 className="font-bebasNeue text-[24px] text-nightGreen">
                  Recent Activity
                </h1>
              </div>
              <div className="flex items-center">
                <Link to={`/dashboard?tab=applications`}>
                  <h1 className="font-bebasNeue leading-none text-[14pxpx] text-hoverGold">
                    Applications{" "}
                  </h1>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* Mobile */}
    </Box>
  );
}
