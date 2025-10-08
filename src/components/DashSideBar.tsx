import { Sidebar } from "flowbite-react";
import { HiArrowRight, HiDocumentText, HiOutlineUserGroup, HiUser } from "react-icons/hi";
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
import { BiMessageSquareDetail } from "react-icons/bi";

export default function DashSideBar() {
  const location = useLocation();
  const [tab, setTab] = useState("");
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
      const res = await fetch("/api/auth/logout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userId: currentUser._id }),
      })
      const data = await res.json();
      if (!res.ok) {
        console.log(data);
        return
      }
      return dispatch(signOut());
    } catch (error) {
      console.log(error);
    }
  };
  //const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <Sidebar className="rounded-[10px] absolute z-10 h-fit w-fit border shadow-md bg-[#D9D9D9]" collapseBehavior="collapse" collapsed>
      <Sidebar.Collapse icon={GiHamburgerMenu}>
      <Sidebar.Items>
        <Sidebar.ItemGroup className="flex flex-col gap-1">
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
          <Sidebar.Item active={tab === "/dashboard?tab=livechat"} icon={TiMessages}>
            Live Chat
          </Sidebar.Item>
          <Sidebar.Item active={tab === "/dashboard?tab=comments"} icon={BiMessageSquareDetail}>
            Comments
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
