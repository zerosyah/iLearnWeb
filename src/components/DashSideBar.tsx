import { Sidebar, SidebarItemGroup, SidebarItem, SidebarItems, FooterBrand } from "flowbite-react";
import { HiDocumentText, HiOutlineUserGroup, HiUser, HiArrowRight } from "react-icons/hi";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
//import { GiHamburgerMenu } from "react-icons/gi";
import { signOut } from "../redux/user/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { MdEmojiEvents, MdDashboard } from "react-icons/md";
import { FaClipboardCheck } from "react-icons/fa6";
import { FaRegCalendarCheck, FaCalculator, FaSearch, } from "react-icons/fa";
import { TiMessages } from "react-icons/ti";
import { SidebarData } from "../Constants/SideBarDasktopLayout.json"
import { Divider, Stack } from "@mui/material";
import { FaUsersLine } from "react-icons/fa6";
import { UserProps } from "../Constants/PropsInventory";



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
  const [, setError] = useState<boolean>(false);
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  const [loading, setLoading] = useState<boolean>(false);
  // const [message, setMessage] = useState<string>("");
  // const [errorMessage, setErrorMessage] = useState<string>("");
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state: UserProps) => state.user);

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
        // setMessage(data.message);
        // setErrorMessage(data.error);
        return alert(data.error || data.message);
      }
      setLoading(false);
      setError(false);
      // setMessage(data.message);
      alert(data.message);
      return dispatch(signOut());
    } catch (error) {
      setError(true);
      setLoading(false);
      //setErrorMessage(error);
      alert(error);
    }
  };
  //console.log(iconArray);
  return (

    <section className="size-full rounded-[8px] bg-[#90E0EF]">
      <Sidebar
        color="#90E0EF"
        style={{ backgroundColor: "#90E0EF" }}
        className="flowSidebar scroll-container max-h-full min-h-full w-full overflow-y-hidden rounded-[10px] border  bg-[#90E0EF]"
      >
      <Stack spacing={3}>
        <FooterBrand
          href="https://ilearnweb.onrender.com"
          src="https://flowbite.com/docs/images/logo.svg"
          alt="Flowbite Logo"
          name="ILearn Web"
          className="font-bebasNeue"
        />
        <div className="mx-auto flex w-fit items-center gap-2 rounded-[50px] border border-imperialRed px-[16px] py-1 text-[10px] font-semibold uppercase tracking-[0.3em] text-imperialRed sm:mx-0">
            <span className="size-2 rounded-full bg-imperialRed font-semibold" />
            {currentUser?.Role}
          </div>
      </Stack>
      <SidebarItems className="">
        <SidebarItemGroup className="gap-[16px]">
          {SidebarData.map((item, index) => (
            <Link to={`/dashboard?tab=${item.Tab}`} key={index}>
              {
                <SidebarItem
                  active={tab === item.Tab}
                  icon={iconArray[index]}
                  as="div"
                  className={`${tab === item.Tab ? "font-roboto font-bold text-[#0077B6]" : "font-popins font-normal"} ${item.Restrict && currentUser.Role !== "admin" && "hidden disabled:cursor-not-allowed"}`}
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
          className={`cursor-pointer ${loading && "pointer-events-none opacity-50"}`}
            
          >
            Sign Out
          </SidebarItem>
        </SidebarItemGroup>
      </SidebarItems>
      <div className="mt-[8px] h-[120px] w-full rounded-[8px] border bg-imperialRed">
      </div>
    </Sidebar>

    </section>
    
  );
}


/*
<Sidebar className="scroll-container max-h-[100%] min-h-[100%] w-fit overflow-y-hidden bg-gray-100 rounded-[10px] border">
      <Stack spacing={3}>
        <FooterBrand
          href="https://ilearnweb.onrender.com"
          src="https://flowbite.com/docs/images/logo.svg"
          alt="Flowbite Logo"
          name="ILearn Web"
          className="font-bebasNeue"
        />
        <div className="mx-auto flex w-fit items-center gap-2 px-[16px] py-1 text-[10px] font-semibold uppercase tracking-[0.3em] text-imperialRed sm:mx-0">
            <span className="size-2 rounded-full bg-imperialRed" />
            {currentUser?.Role}
          </div>
      </Stack>
      <SidebarItems className="">
        <SidebarItemGroup className="gap-[16px]">
          {SidebarData.map((item, index) => (
            <Link to={`/dashboard?tab=${item.Tab}`} key={index}>
              {
                <SidebarItem
                  active={tab === item.Tab}
                  icon={iconArray[index]}
                  as="div"
                  className={`${tab === item.Tab ? "font-roboto font-bold" : "font-popins font-normal"} ${item.Restrict && currentUser.Role !== "admin" && "hidden disabled:cursor-not-allowed"} border-l-2 border-imperialRed`}
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
      <div className="h-[120px] rounded-[8px] mt-[8px] w-full bg-imperialRed"></div>
    </Sidebar>


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