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
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
//import { FaLongArrowAltRight } from "react-icons/fa";
//import { MdOutlineReadMore } from "react-icons/md";
import CircularProgress from "@mui/joy/CircularProgress";
import DashChart from "./DashChart";


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

  return (
    <main className="flex w-full justify-between gap-[0.5%] p-[2%]">
      <section className="flex h-full w-[75%] flex-col gap-[1%] rounded-[10px] ">
        <div className="flex h-[20%] w-full justify-between gap-[1%] rounded-[10px] ">
          <span className="flex h-full w-[25%] items-center justify-center gap-2 rounded-[10px] bg-gradient-to-tl from-[#FFF7AE] to-[#007CBE] p-2">
            <img
              src="https://i.pinimg.com/736x/49/3c/e7/493ce760bc067f2530d73365ace0d66c.jpg"
              alt="Profile Picture"
              className="h-[90px] self-center rounded-[90%] border border-red-100 object-cover"
            />
            <div className="">
              <h1 className="text-center text-xl text-cyan-300 drop-shadow-[0px_5px_5px_rgba(0,0,0,3)] ">
                {"Hello!"}
              </h1>
              <h1 className="truncate text-center text-xl font-bold uppercase drop-shadow-[0px_5px_5px_rgba(0,0,0,3)] ">
                {"Siyabonga"}
              </h1>
              <h2 className="text-center text-sm font-bold text-[#000]">
                {"Student"}
              </h2>
            </div>
          </span>
          <span className="h-full w-[25%] rounded-[10px] bg-gradient-to-tl from-[#E57A44] to-[#251351] p-2">
            <div className="flex items-center justify-between">
              <h1 className="font-bebasNeue text-2xl uppercase text-gray-400 underline">
                Next Dead lines:
              </h1>
            </div>
            <div className="truncate pt-2 font-popins text-white">
              <ol className="">
                <li className="whitespace-nowrap">
                  <span className="font-mono text-lime-300">10/10/2024:</span>{" "}
                  Mathematics
                </li>
                <li className="whitespace-nowrap">
                  <span className="font-mono text-lime-300">10/10/2024:</span>{" "}
                  English
                </li>
                <li className="whitespace-nowrap">
                  <span className="font-mono text-lime-300">10/10/2024:</span>{" "}
                  Physical Sciences
                </li>
              </ol>
            </div>
          </span>
          <span className="h-full w-[25%] rounded-[10px] bg-gradient-to-tl from-[#A882DD] to-[#F1FEC6] p-2 ">
            <h1 className="font-bebasNeue text-2xl uppercase text-gray-400 underline  ">
              Recent Result:
            </h1>
            <div className="flex items-center gap-4 truncate p-2">
              <span className="">
                <CircularProgressbar
                  className="w-[70px] font-popins font-extrabold text-white"
                  maxValue={120}
                  value={90}
                  text="90%"
                  counterClockwise
                  styles={{}}
                />
              </span>
              <span className="flex flex-col font-popins font-semibold text-gray-600">
                <p className="uppercase">Mathematics</p>
                <p className="text-sm uppercase">Second Test</p>
                <p className="text-sm text-lime-200">24/01/2025</p>
              </span>
            </div>
          </span>
          <span className="h-full w-[25%] rounded-[10px] bg-gradient-to-tl from-[#DB5375] to-[#B3FFB3] p-2 ">
            <h1 className="font-bebasNeue text-2xl uppercase text-gray-400 underline  ">
              Notification:
            </h1>
            <p className="pt-2 text-center font-popins text-6xl text-gray-600">
              24
            </p>
          </span>
        </div>
        <div className="h-[55%] w-full rounded-[10px] bg-[#8DEE98] p-2 ">
          <h1 className="font-bebasNeue text-2xl uppercase text-gray-400 underline  ">
            Mark's Performance:
          </h1>
          <div className="flex items-start justify-start">
            <div className="">
              <DashChart />
            </div>
            <div className="">
              <h1 className="font-popins text-xl font-bold text-gray-600">
                Options:
              </h1>
              <div className="">
                
              </div>
            </div>
          </div>
        </div>
        <div className="flex h-[25%] w-full justify-between gap-[1%] rounded-[10px] ">
          <span className="h-full w-full rounded-[10px] bg-[#E8BCB9] p-2">
            <h1 className="font-bebasNeue text-2xl uppercase text-gray-400 underline">
              Status:
            </h1>
            <p className="mt-5 flex items-center justify-center gap-2 text-center text-2xl font-bold uppercase text-gray-600">
              panding{"  "}
              <CircularProgress
                color="primary"
                determinate={false}
                size="sm"
                variant="plain"
              />
            </p>
          </span>
          <span className="h-full w-full rounded-[10px] bg-[#451952] p-2">
            <h1 className="font-bebasNeue text-2xl uppercase text-gray-400 underline">
              Top Performer:
            </h1>
            <div className="flex items-center gap-5 pt-2">
              <img
                src="https://i.pinimg.com/736x/49/0a/2a/490a2a05a694ce26a8bf2e93044c6180.jpg"
                alt="photo"
                className="h-[100px] w-[100px] rounded-full border border-red-100 object-cover"
              />
              <div className="font-popins text-gray-300">
                <h1 className="">
                  <span className="font-popins font-bold">Name:</span> Siyabonga
                </h1>
                <h1 className="">
                  <span className="font-popins font-bold">Grade: </span>10
                </h1>
                <h1 className="">
                  <span className="font-popins font-bold">Age:</span> 16
                </h1>
              </div>
            </div>
          </span>
          <span className="h-full w-full rounded-[10px] bg-[#662549] "></span>
        </div>
      </section>
      <section className="flex h-full w-[25%] flex-col gap-[1%] rounded-[10px] ">
        <div className="flex h-[75%] w-full flex-col overflow-y-scroll rounded-[10px] p-2  shadow-sm shadow-white scrollbar-hide">
          <div className="flex h-fit w-full items-baseline justify-between border-b-4 border-pink-500 pb-2">
            <div className="">
              <span className="flex flex-col">
                <p className="font-popins text-lg text-gray-600">Grade 10</p>
                <p className="font-bebasNeue text-4xl">Science Timetable</p>
              </span>
            </div>
            <div className="flex h-fit flex-col items-center border-l-4 border-gray-500 px-5 font-bebasNeue text-4xl text-orange-300">
              <span className="">20</span>
              <span className="">25</span>
            </div>
          </div>
          {/* schedule*/}
          <div className="flex border-b-4 border-orange-500 py-2 ">
            <span className="flex h-fit flex-col items-center border-l-4 border-r-4 border-gray-500 px-4 font-bebasNeue text-2xl ">
              <h1 className="font-popins text-xl">JAN</h1>
              <h1 className="text-4xl text-orange-500">14</h1>
            </span>
            <span className="flex flex-col pl-4">
              <h1 className="font-popins text-xl text-gray-600">
                07:00 - 09:00
              </h1>
              <h1 className="font-bebasNeue text-4xl">Mathematics</h1>
            </span>
          </div>
          {/* schedule*/}
          <div className="flex border-b-4 border-red-400 py-2 ">
            <span className="flex h-fit flex-col items-center border-l-4 border-r-4 border-gray-500 px-4 font-bebasNeue text-2xl ">
              <h1 className="font-popins text-xl">JAN</h1>
              <h1 className="text-4xl text-red-400 ">14</h1>
            </span>
            <span className="flex flex-col pl-4">
              <h1 className="font-popins text-xl text-gray-600">
                09:05 - 11:05
              </h1>
              <h1 className="font-bebasNeue text-4xl">English</h1>
            </span>
          </div>
          {/* schedule*/}
          <div className="flex border-b-4 border-cyan-400 py-2 ">
            <span className="flex h-fit flex-col items-center border-l-4 border-r-4 border-gray-500 px-4 font-bebasNeue text-2xl ">
              <h1 className="font-popins text-xl">JAN</h1>
              <h1 className="text-4xl text-cyan-400">14</h1>
            </span>
            <span className="flex flex-col pl-4">
              <h1 className="font-popins text-xl text-gray-600">
                11:10 - 13:15
              </h1>
              <h1 className="truncate font-bebasNeue text-4xl">
                Physical science
              </h1>
            </span>
          </div>
          {/* schedule*/}
          <div className="flex border-b-4 border-yellow-400 py-2 ">
            <span className="flex h-fit flex-col items-center border-l-4 border-r-4 border-gray-500 px-4 font-bebasNeue text-2xl ">
              <h1 className="font-popins text-xl">JAN</h1>
              <h1 className="text-4xl text-yellow-400">14</h1>
            </span>
            <span className="flex flex-col pl-4">
              <h1 className="font-popins text-xl text-gray-600">
                13:20 - 15:25
              </h1>
              <h1 className="font-bebasNeue text-4xl">Life Sciences</h1>
            </span>
          </div>
          {/* schedule*/}
          <div className="flex border-b-4 border-blue-400 py-2 ">
            <span className="flex h-fit flex-col items-center border-l-4 border-r-4 border-gray-500 px-4 font-bebasNeue text-2xl ">
              <h1 className="font-popins text-xl">JAN</h1>
              <h1 className="text-4xl text-blue-400">14</h1>
            </span>
            <span className="flex flex-col pl-4">
              <h1 className="font-popins text-xl text-gray-600">
                14:30 - 16:35
              </h1>
              <h1 className="font-bebasNeue text-4xl">Life Orientation</h1>
            </span>
          </div>
          {/* schedule*/}
          <div className="flex border-b-4 border-purple-400 py-2 ">
            <span className="flex h-fit flex-col items-center border-l-4 border-r-4 border-gray-500 px-4 font-bebasNeue text-2xl ">
              <h1 className="font-popins text-xl">JAN</h1>
              <h1 className="text-4xl text-purple-400">14</h1>
            </span>
            <span className="flex flex-col pl-4">
              <h1 className="font-popins text-xl text-gray-600">
                14:30 - 16:35
              </h1>
              <h1 className="font-bebasNeue text-4xl">Geography</h1>
            </span>
          </div>
        </div>
        <div className="h-[25%] w-full rounded-[10px] bg-[#0C6478] "></div>
      </section>
    </main>
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
