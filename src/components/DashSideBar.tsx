import { Sidebar } from "flowbite-react";
import { HiArrowRight, HiDocumentText, HiHome, HiOutlineUserGroup, HiUser } from "react-icons/hi";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { signOut } from "../redux/user/userSlice";
import { useDispatch, useSelector } from "react-redux";
// @ts-ignore
import { MdEmojiEvents } from "react-icons/md";
import { FaClipboardCheck } from "react-icons/fa6";
import { FaRegCalendarCheck, FaCalculator, } from "react-icons/fa";
import { TiMessages } from "react-icons/ti";
//import { BiMessageSquareDetail } from "react-icons/bi";
//import Alert from "@mui/material/Alert";
//import AlertTitle from "@mui/material/AlertTitle";
//import Stack from "@mui/material/Stack";

export default function DashSideBar() {
  const location = useLocation();
  const [tab, setTab] = useState("");
  //@ts-ignore
  const [error, setError] = useState<boolean>(false);
  //@ts-ignore
  const [loading, setLoading] = useState<boolean>(false);
  //@ts-ignore
  const [message, setMessage] = useState<string>("");
  //@ts-ignore
  const [errorMessage, setErrorMessage] = useState<any>("");
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state: any) => state.user);

  useEffect(() => {
    const urlParms = new URLSearchParams(location.search);
    const tabFromUrl = urlParms.get("tab");
    if (tabFromUrl) {
      setTab(tabFromUrl);
    }
  }, [location.search]);
  const handleSignOutAccount = async () => {
    try {
      setLoading(true);
      const res = await fetch("https://auth.ilearn.club/api/auth/logout", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userId: currentUser._id }),
      })
      const data = await res.json();
      if (!res.ok) {
        setLoading(false);
        setError(true);
        setMessage(data.message);
        setErrorMessage(data.error);
        return alert(data.error || data.message);
      }
      setLoading(false);
      setError(false);
      setMessage(data.message);
      alert(data.message);
      return dispatch(signOut());
    } catch (error) {
      setError(true);
      setLoading(false);
      setErrorMessage(error);
      alert(error);
    }
  };
  //const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <Sidebar
      className="absolute z-10 h-fit w-fit rounded-[10px] border bg-[#D9D9D9] shadow-md"
      collapseBehavior="collapse"
      collapsed
    >
      <Sidebar.Collapse icon={GiHamburgerMenu}>
        <Sidebar.Items>
          <Sidebar.ItemGroup className="flex flex-col gap-1">
            <Link to={"/"}>
              <Sidebar.Item
                active={tab === "home"}
                icon={HiHome}
                label={currentUser.Role === "admin" ? "Admin" : "Student"}
                labelColor="dark"
                as="div"
              >
                Home
              </Sidebar.Item>
            </Link>
            <Link to="/dashboard?tab=profile">
              <Sidebar.Item
                active={tab === "profile"}
                icon={HiUser}
                label={currentUser.Role === "admin" ? "Admin" : "Student"}
                labelColor="dark"
                as="div"
              >
                Profile
              </Sidebar.Item>
            </Link>
            {currentUser.Role === "admin" && (
              <Link to="/dashboard?tab=posts">
                <Sidebar.Item
                  active={tab === "posts"}
                  icon={HiDocumentText}
                  as="div"
                >
                  Posts
                </Sidebar.Item>
              </Link>
            )}
            {currentUser.Role === "admin" && (
              <Link to="/dashboard?tab=users">
                <Sidebar.Item
                  active={tab === "users"}
                  icon={HiOutlineUserGroup}
                  as="div"
                >
                  Users
                </Sidebar.Item>
              </Link>
            )}
            {currentUser.Role === "admin" && (
              <Link to="/dashboard?tab=result">
                <Sidebar.Item
                  active={tab === "result"}
                  icon={FaClipboardCheck}
                  as="div"
                >
                  Add Marks
                </Sidebar.Item>
              </Link>
            )}
            {currentUser.Role === "admin" && (
              <Link to="/dashboard?tab=search">
                <Sidebar.Item
                  active={tab === "search"}
                  icon={FaRegCalendarCheck}
                  as="div"
                >
                  Student details
                </Sidebar.Item>
              </Link>
            )}
            {currentUser.Role === "admin" && (
              <Link to="/dashboard?tab=calculator">
                <Sidebar.Item
                  active={tab === "calculator"}
                  icon={FaCalculator}
                  as="div"
                >
                  Student Calculator
                </Sidebar.Item>
              </Link>
            )}
            <Sidebar.Item
              active={tab === "/dashboard?tab=livechat"}
              icon={TiMessages}
            >
              Live Chat
            </Sidebar.Item>

            <Sidebar.Item
              icon={HiArrowRight}
              onClick={handleSignOutAccount}
              className="cursor-pointer"
            >
              Sign Out
            </Sidebar.Item>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar.Collapse>
    </Sidebar>
  );
}
