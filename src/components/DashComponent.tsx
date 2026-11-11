import { useSelector } from "react-redux";
import "react-circular-progressbar/dist/styles.css";
import { FaBookReader } from "react-icons/fa";
// import LiveEventCard from "./LiveEventCard";
import { Box, Button, Stack } from "@mui/material";
// import { useEffect, useState } from "react";
// import OverallPerfomanceCard from "./OverallPerfomanceCard";
// import DashAttendanceCard from "./DashAttendanceCard";
// import { Label } from "flowbite-react";
// import DashRecentCard from "../DashComponents/DashRecentCard";
// import DashSelectOption from "../DashComponents/DashSelectOption";
// import DashProgressCard from "../DashComponents/DashProgressCard";
// import progressLayoutData from "../Constants/ProgressLayout.json";
// import { Recents } from "../Constants/RecentLayout.json";
// import newsIcon from "../assets/Heros/SA/SA4.jpg";
//import { SlOptions } from "react-icons/sl";
import { IoDocumentTextOutline } from "react-icons/io5";
import {
  // FaRegClock,
  // FaRegEye,
  // FaRegHeart,
  //FaAngleDoubleUp,
  FaUsers,
} from "react-icons/fa";
// import DashImageCard from "../DashComponents/DashImageCard";
// import DashMoreNewsCard from "../DashComponents/DashMoreNewsCard";
// import { News } from "../Constants/NewsLayout.json";
// import { Events } from "../Constants/EventLayout.json";
import { Link, useNavigate } from "react-router-dom";
import { FaGraduationCap } from "react-icons/fa6";
import DashBarChart from "../DashComponents/DashBarChart";
import { RootState } from "../redux/store";

// type Props = {
//   label?: string;
//   BarColor?: string;
//   BarNumber?: number;
//   Date?: string;
//   Dot?: boolean;
// };
// type RecentProps = {
//   Subject?: string;
//   Date?: string;
//   Results?: string;
//   Score?: number;
//   Total?: number;
// };

export default function DashComponent() {
  const { currentUser } = useSelector((state: RootState) => state.user);
  // const [subject, setSubject] = useState<string>("Mathematics");
  // const [progressData, setProgressData] = useState();
  // useEffect(() => {
  //   if (!subject) {
  //     setProgressData([]);
  //     return;
  //   }
  //   if (subject in progressLayoutData) {
  //     // @ts-expect-error will not be undefined because of the if statement.
  //     setProgressData(progressLayoutData[subject]);
  //   } else {
  //     setProgressData([]);
  //   }
  // }, [subject]);

  const Navigate = useNavigate();
  console.log((currentUser as { Role?:string}| null)?.Role);

  return (
    <Box
      component={"section"}
      className="size-full justify-between overflow-y-hidden"
    >
      {((currentUser as { Role?:string}| null)?.Role) == "Student" && (currentUser as { IsComplete?:boolean } | null)?.IsComplete ? (
        <div className="">
          <h1 className="">Dashboard is in development</h1>
        </div>
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
