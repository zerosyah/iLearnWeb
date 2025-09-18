// import { useEffect, useState } from "react";
// import { useSelector } from "react-redux";
// import { PiStudentBold } from "react-icons/pi";
// import { HiBookOpen, HiOutlineUserGroup } from "react-icons/hi2";
// import { SlOptionsVertical } from "react-icons/sl";
// import ProgressBar from "@ramonak/react-progress-bar";
//import {
  //Table,
  //Avatar,
  //List,
 // Dropdown,
//} from "flowbite-react";
//import logo from "../assets/image2.jpg";
//import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
//import { MdOutlineReadMore } from "react-icons/md";
//import CircularProgress from "@mui/joy/CircularProgress";
import DashChart from "./DashChart";
//import { Label, TextInput } from "flowbite-react";
import DashInput from "./DashInput";
//import OverallPerfomanceCard from "./OverallPerfomanceCard";
import LiveEventCard from "./LiveEventCard";
import { Button, Stack } from "@mui/material";
import { useState } from "react";
import OverallPerfomanceCard from "./OverallPerfomanceCard";


export default function DashComponent() {
  // const [users, setUsers] = useState([]);
  // // @ts-ignore
  // const [comments, setComments] = useState([]);
  // // @ts-ignore
  // const [posts, setPosts] = useState([]);
  // // @ts-ignore
  // const [totalUsers, setTotalUsers] = useState(0);
  // const [totalComments, setTotalComments] = useState(0);
  // const [totalPosts, setTotalPosts] = useState(0);
  // // @ts-ignore
  // const [lastMonthUsers, setLastMonthUsers] = useState(0);
  // const { currentUser } = useSelector((state: any) => state.user);
  // const teacher =
  //   "https://pikwizard.com/pw/small/fe895262fcddf4c758f76566e0f41103.jpg";
  // const staff =
  //   "https://www.shutterstock.com/image-photo/business-team-standing-over-dark-260nw-181166018.jpg";
  // const student =
  //   "https://img.pikbest.com/ai/illus_our/20230414/593b2c90239e6d9710e4471b4823d69a.jpg!w700wp";
  // const mothevent =
  //   "https://floatiekings.com/cdn/shop/articles/creative-school-event-ideas.jpg?v=1703670883&width=2000";
  // const tableChamp =
  //   "https://t4.ftcdn.net/jpg/06/03/94/97/360_F_603949786_1JqD1nWoCDK0Fvo0t2D2dYVMSl0FPiv8.jpg";
  // const libraryImg =
  //   "https://png.pngtree.com/thumb_back/fh260/background/20230526/pngtree-an-old-bookcase-in-a-library-image_2642908.jpg";
  // const [interval, setInterval] = useState("Month");

  // useEffect(() => {
  //   const fetchUsers = async () => {
  //     const res = await fetch("/api/user/getUsers?limit=5");
  //     const data = await res.json();
  //     if (res.ok) {
  //       setUsers(data.users);
  //       setTotalUsers(data.totalUsers);
  //       setLastMonthUsers(data.lastMonthUsers);
  //     }
  //   };
  //   const fetchComments = async () => {
  //     const res = await fetch("/api/comment/comments?limit=5");
  //     const data = await res.json();
  //     if (res.ok) {
  //       setComments(data.comments);
  //       setTotalComments(data.totalComments);
  //     }
  //   };
  //   const fetchPosts = async () => {
  //     const res = await fetch("/api/post/posts?limit=5");
  //     const data = await res.json();
  //     if (res.ok) {
  //       setPosts(data.posts);
  //       setTotalPosts(data.totalPosts);
  //     }
  //   };
  //   if (currentUser.isAdmin) {
  //     fetchUsers();
  //     fetchComments();
  //     fetchPosts();
  //   }
  // }, [currentUser]);

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
    }
  ]

  const [count, setCount] = useState<number>(1)
  const [actualCount, setActualCount] = useState<number>(0)
  const handleNavigateNext = () => {  
    setCount((prev) => prev + 1)
    let value = count
    if (value > 1) {
      setActualCount((prev) => prev + 1)
    }
    console.log("value: ", value);
    if (count > 1) {
      setCount(0)
    }
    return;
  }

  const handleNavigatePrev = () => {
    setCount((prev) => prev - 1)
    if (count < 0) {
      setCount(1)
    }
    return;
  }

  console.log(count);
  console.log(actualCount);
  
  return (
    <section className="flex h-fit w-full justify-between gap-[10px] p-[10px]">
      {/* Right Section */}
      <section className="flex w-[75%] flex-col gap-[10px] rounded-[10px] md:inline-block ">
        {/* first section */}
        <section className="mb-[10px] flex flex-col gap-[10px] md:flex-row">
          <div className="flex w-full flex-col items-center justify-center overflow-auto rounded-[10px] border bg-[#D9D9D9] p-[10px] text-center md:h-[200px] md:w-[25%] md:justify-between md:overflow-hidden ">
            <div className="">
              <h1 className="font-robot text-[18px] font-bold text-black">
                {"Siyabonga Shezi"}
              </h1>
              <p className="font-popins text-[12px] text-black">Grade: 10</p>
            </div>
            <div className="mt-[5px] flex h-[200px] w-[200px] rounded-full border-[10px] md:h-[130px] md:w-[130px]">
              <img
                src="https://i.pinimg.com/736x/49/3c/e7/493ce760bc067f2530d73365ace0d66c.jpg"
                alt="Profile Picture"
                className="h-full w-full rounded-full object-cover"
              />
            </div>
          </div>
          <div className="h-[200px] w-full overflow-auto rounded-[10px] border bg-[#D9D9D9] p-[10px] md:w-[80%]">
            <div className="">
              <h1 className="font-robot text-[18px] font-bold">
                Bio $ Other Details
              </h1>
            </div>
            <div className="flex flex-wrap justify-start  gap-[10px]">
              {details.map((item: any) => (
                <DashInput
                  key={item.label}
                  label={item.label}
                  value={item.value}
                />
              ))}
            </div>
          </div>
        </section>
        {/* second section */}
        <section className="mb-[10px] flex h-[250px] w-full gap-[10px]">
          <section className="hidden h-full w-full rounded-[10px] bg-[#D9D9D9] p-[10px] md:inline md:w-[65%] ">
            <h1 className="font-popins text-[18px] font-bold uppercase text-black underline  ">
              Mark's Performance:
            </h1>
            <div className="flex items-start justify-start">
              <div className="">
                <DashChart />
              </div>
            </div>
          </section>
          <section className="w-full rounded-[10px] bg-[#D9D9D9] md:h-full md:w-[35%]">
            <Stack className="" direction={"row"} sx={{ justifyContent: "space-between", position: "relative"}} >
              <Button variant="contained" color="warning" size="large"
                sx={{ position: "absolute", left: "10px", marginTop: "10px" }}
                onClick={handleNavigatePrev}>
                <FaChevronLeft />
              </Button>
              <Button variant="contained" color="success" size="large"
                sx={{ position: "absolute", right: "10px", marginTop: "10px", width: "40px" }}
              onClick={handleNavigateNext}>
                <FaChevronRight />
              </Button>
            </Stack>
            {
              count === -1 && (<div className="flex h-full w-full items-center justify-center">
                <h1 className="">Under Maintaince</h1>
              </div>)
            }
            {
              count === 0 && <LiveEventCard />
            }
            {
              count === 1 && <OverallPerfomanceCard />
            }
            {
              count === 2 && (
                <div className="flex h-full w-full items-center justify-center">
                  <h1 className="">Under Maintaince</h1>
                </div>
              )
            }
          </section>
        </section>
        {/* third section */}
        <section className="h-[100px] w-full rounded-[10px] border bg-[#D9D9D9]"></section>
      </section>
      {/* Timetable Left Section */}
      <section className="hidden h-[572px] w-[25%] flex-col gap-[1%] overflow-y-scroll rounded-[10px] border md:inline-block ">
        <div className="flex w-full flex-col overflow-y-scroll rounded-[10px] p-2  shadow-sm shadow-white scrollbar-hide">
          <div className="flex h-fit w-full items-baseline justify-between border-b-4 border-pink-500 pb-2">
            <div className="">
              <span className="flex flex-col">
                <p className="font-popins text-lg text-gray-600">Grade 10</p>
                <p className="font-bebasNeue text-4xl">Science Timetable</p>
              </span>
            </div>
          </div>
          {events.map((item: any, index: number) => (
            <div
              className={`flex border-b-4 border-${item.bColor}-500 overflow-x-hidden px-[10px] py-2 `}
              key={index}
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
        </div>
      </section>

      {/* Mobile */}
    </section>
  );
}
/**
  <div className="">
        <div className="bg-gray-200 w-48 px-2 rounded bg-cover" style={{
          backgroundImage: `url(${logo})`
        }}>
          <h3 className="text-white text-1xl font-semibold">Student Attendance</h3>
          <div className="flex gap-4 items-center mt-2 justify-between">
            <div className="">
              <p className="text-xs text-white">Present No.</p>
              <h2 className="font-semibold text-sm text-white">4782</h2>
              <p className="text-xs text-white">Absent No.</p>
              <h2 className="font-semibold text-sm text-white">437</h2>
            </div>
            <div className="relative self-center">
              <CircularProgressbar value={75} text={"75%"} className="text-white" strokeWidth={10} styles={{
                root:{
                  width: '60',
                  height: '60',
                  position: 'relative',
                  top: 0,
                  left: 0,
                  color: 'white',
                }
              }}/>
            </div>
          </div>
        </div>
      </div>
 */
