import { Sidebar, SidebarItemGroup, SidebarItem, SidebarItems, FooterBrand } from "flowbite-react";
import { HiDocumentText, HiOutlineUserGroup, HiUser, HiArrowRight } from "react-icons/hi";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
//import { GiHamburgerMenu } from "react-icons/gi";
import { signOut } from "../redux/user/userSlice";
import { useDispatch, useSelector } from "react-redux";
// @ts-ignore
import { MdEmojiEvents, MdDashboard } from "react-icons/md";
import { FaClipboardCheck } from "react-icons/fa6";
import { FaRegCalendarCheck, FaCalculator, FaSearch, } from "react-icons/fa";
import { TiMessages } from "react-icons/ti";
import { SidebarData } from "../Constants/SideBarDasktopLayout.json"
import { Divider, Stack, TextField } from "@mui/material";
import { FaUsersLine } from "react-icons/fa6";



export default function DashSideBar() {
  const iconArray = [
    MdDashboard,
    HiUser,
    HiOutlineUserGroup,
    HiDocumentText,
    FaClipboardCheck,
    FaRegCalendarCheck,
    FaUsersLine,
    TiMessages,
    FaCalculator,
    MdEmojiEvents,
    FaSearch,

  ];
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
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        }
      });
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
  console.log(iconArray);
  
  //const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <Sidebar className="scroll-container max-h-[100%] min-h-[100%] min-w-[100%] max-w-[100%] overflow-y-hidden rounded-[10px] border">
      <Stack spacing={1}>
        <FooterBrand
          href="https://ilearnweb.onrender.com"
          src="https://flowbite.com/docs/images/logo.svg"
          alt="Flowbite Logo"
          name="SOMPUKWANE"
          className="font-bebasNeue"
        />
        <Stack direction={"row"} alignItems={"center"}>
          <TextField
            placeholder="Search"
            sx={{
              "& .MuiInputBase-input": {
                paddingLeft: "32px",
                fontSize: "12px",
              },
            }}
            className="font-popins"
            variant="outlined"
            size="small"
          />
          <FaSearch
            size={20}
            className="absolute left-[25px] cursor-pointer "
          />
        </Stack>
      </Stack>
      <SidebarItems className="">
        <SidebarItemGroup className="gap-[10px]">
          {SidebarData.map((item, index) => (
            <Link to={`/dashboard?tab=${item.Tab}`} key={index}>
              {
                <SidebarItem
                  label={
                    item.Label &&
                    (currentUser.Role === "admin" ? "Admin" : "Student")
                  }
                  labelColor={
                    item.Label &&
                    (currentUser.Role === "admin" ? "red" : "dark")
                  }
                  active={tab === item.Tab}
                  icon={iconArray[index]}
                  as="div"
                  className={`${tab === item.Tab ? "font-roboto font-bold" : "font-popins font-normal"} ${item.Restrict && currentUser.Role !== "admin" && "hidden disabled:cursor-not-allowed"}`}
                >
                  {item.Name}
                </SidebarItem>
              }
            </Link>
          ))}
          {currentUser.Role === "admin" && (
            <Link to="/dashboard?tab=users">
              <Divider />
              <SidebarItem
                active={tab === "users"}
                icon={HiOutlineUserGroup}
                as="div"
              >
                Users
              </SidebarItem>
            </Link>
          )}
          {currentUser.Role === "admin" && (
            <Link to="/dashboard?tab=search">
              <SidebarItem
                active={tab === "search"}
                icon={FaRegCalendarCheck}
                as="div"
              >
                Students
              </SidebarItem>
            </Link>
          )}
          {currentUser.Role === "admin" && (
            <Link to="/dashboard?tab=result">
              <SidebarItem
                active={tab === "result"}
                icon={FaClipboardCheck}
                as="div"
              >
                Add Marks
              </SidebarItem>
            </Link>
          )}
          {currentUser.Role === "admin" && (
            <Link to="/dashboard?tab=calculator">
              <SidebarItem
                active={tab === "calculator"}
                icon={FaCalculator}
                as="div"
              >
                Applications
              </SidebarItem>
            </Link>
          )}
          <Divider />
          <SidebarItem
            icon={HiArrowRight}
            onClick={handleSignOutAccount}
            className="cursor-pointer"
          >
            Sign Out
          </SidebarItem>
        </SidebarItemGroup>
      </SidebarItems>
    </Sidebar>
  );
}


/*
<SidebarItems>
        <SidebarItemGroup>
          <Link to="/dashboard?tab=dash" className="">
            <SidebarItem
              active={tab === "dash"}
              icon={MdDashboard}
              label={currentUser.Role === "admin" ? "Admin" : "Student"}
              labelColor={currentUser.Role === "admin" ? "red" : "dark"}
              as="div"
            >
              Dashboard
            </SidebarItem>
          </Link>
          <Link to="/dashboard?tab=profile">
            <SidebarItem
              active={tab === "profile"}
              icon={HiUser}
              //label={currentUser.Role === "admin" ? "Admin" : "Student"}
              //labelColor="red"
              as="div"
            >
              Profile
            </SidebarItem>
          </Link>
          {currentUser.Role === "admin" && (
            <Link to="/dashboard?tab=posts">
              <SidebarItem
                active={tab === "posts"}
                icon={HiDocumentText}
                as="div"
              >
                Posts
              </SidebarItem>
            </Link>
          )}
          {currentUser.Role === "admin" && (
            <Link to="/dashboard?tab=users">
              <SidebarItem
                active={tab === "users"}
                icon={HiOutlineUserGroup}
                as="div"
              >
                Users
              </SidebarItem>
            </Link>
          )}
          {currentUser.Role === "admin" && (
            <Link to="/dashboard?tab=result">
              <SidebarItem
                active={tab === "result"}
                icon={FaClipboardCheck}
                as="div"
              >
                Add Marks
              </SidebarItem>
            </Link>
          )}
          {currentUser.Role === "admin" && (
            <Link to="/dashboard?tab=search">
              <SidebarItem
                active={tab === "search"}
                icon={FaRegCalendarCheck}
                as="div"
              >
                Students
              </SidebarItem>
            </Link>
          )}
          {currentUser.Role === "admin" && (
            <Link to="/dashboard?tab=calculator">
              <SidebarItem
                active={tab === "calculator"}
                icon={FaCalculator}
                as="div"
              >
                Applications
              </SidebarItem>
            </Link>
          )}
          <SidebarItem
            active={tab === "/dashboard?tab=livechat"}
            icon={TiMessages}
          >
            Live Chat
          </SidebarItem>

          <SidebarItem
            icon={HiArrowRight}
            onClick={handleSignOutAccount}
            className="cursor-pointer"
          >
            Sign Out
          </SidebarItem>
        </SidebarItemGroup>
      </SidebarItems>
 */