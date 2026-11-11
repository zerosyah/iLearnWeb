import { Sidebar } from "flowbite-react";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
//import { GiHamburgerMenu } from "react-icons/gi";
import { signOut } from "../redux/user/userSlice";
import { useDispatch, useSelector } from "react-redux";
import {
  MdDashboard,
  MdMenuBook,
  MdSearch,
  MdChecklist,
  MdEmail,
  MdOutlineVerified,
} from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import { UserProps } from "../Constants/PropsInventory";

export default function DashSideBar() {
  const location = useLocation();
  const [tab, setTab] = useState("");
  const [, setError] = useState<boolean>(false);
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  const [, setLoading] = useState<boolean>(false);
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
      const res = await fetch("https://auth.apexegdestudios.co.za/api/auth/logout", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
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
  const [selected, setSelected] = useState<string>("");
  const onSelectNavigation = (value: string) => {
    if (selected == value) return;
    return setSelected(value);
  };
  return (
    <section className="size-full rounded-[6px]">
      <Sidebar className="flowSidebar scroll-container max-h-full min-h-full w-full overflow-y-hidden rounded-[6px]">
        <div className="pb-2">
          <div className="flex items-center gap-[12px] pb-4">
            <div className="titleLogo flex size-[35px] items-center justify-center rounded-[6px] border border-[#E1B343] bg-[#E1B343]">
              <MdMenuBook size={25} color="#121E17" />
            </div>
            <h1 className="font-bebasNeue text-[24px] leading-none tracking-[0.04em] text-[#faf8f3]">
              ILEARN WEB
            </h1>
          </div>
          <span className="font-popins text-[11px] font-semibold uppercase text-[#bac4be]">
            Admin Navigation
          </span>
        </div>
        <div className="flex flex-col gap-1">
          <Link to={`/dashboard?tab=dash`}>
            <div
              className={`flex items-center gap-[16px] rounded-[6px] px-2 py-1 ${tab == "dash" ? "!bg-[#e1b34d]" : ""} hover:!bg-[#b08423]`}
            >
              <MdDashboard
                size={25}
                color={tab == "dash" ? "#0A2519" : "#bac4be"}
              />
              <h1
                className={`font-popins text-[14px] font-medium leading-none ${tab == "dash" ? "text-[#0a2519]" : "text-[#bac4be]"} `}
              >
                Dashboard
              </h1>
            </div>
          </Link>
          {currentUser.Role == "admin" && (
            <Link to={`/dashboard?tab=users`}>
              <div
                className={`flex items-center gap-[16px] rounded-[6px] px-2 py-1 ${tab == "users" ? "!bg-[#e1b34d]" : ""} hover:!bg-[#b08423]`}
              >
                <FaUsers
                  size={25}
                  color={tab == "users" ? "#0A2519" : "#bac4be"}
                />
                <h1
                  className={`font-popins text-[14px] font-medium leading-none ${tab == "users" ? "text-[#0a2519]" : "text-[#bac4be]"} `}
                >
                  Users
                </h1>
              </div>
            </Link>
          )}
          {currentUser.Role == "admin" && (
            <Link to={`/dashboard?tab=search`}>
              <div
                className={`flex items-center gap-[16px] rounded-[6px] px-2 py-1 ${tab == "search" ? "!bg-[#e1b34d]" : ""} hover:!bg-[#b08423]`}
              >
                <MdSearch
                  size={25}
                  color={tab == "search" ? "#0A2519" : "#bac4be"}
                />
                <h1
                  className={`font-popins text-[14px] font-medium leading-none ${tab == "search" ? "text-[#0a2519]" : "text-[#bac4be]"} `}
                >
                  Search
                </h1>
              </div>
            </Link>
          )}
          {currentUser.Role == "admin" && (
            <Link to={`/dashboard?tab=result`}>
              <div
                onClick={() => onSelectNavigation("result")}
                className={`flex items-center gap-[16px] rounded-[6px] px-2 py-1 ${tab == "result" ? "!bg-[#e1b34d]" : ""} hover:!bg-[#b08423]`}
              >
                <MdChecklist
                  size={25}
                  color={tab == "result" ? "#0A2519" : "#bac4be"}
                />
                <h1
                  className={`font-popins text-[14px] font-medium leading-none ${tab == "result" ? "text-[#0a2519]" : "text-[#bac4be]"} `}
                >
                  Result
                </h1>
              </div>
            </Link>
          )}
          {currentUser.Role == "admin" && (
            <Link to={`/dashboard?tab=applications`}>
              <div
                className={`flex items-center gap-[16px] rounded-[6px] px-2 py-1 ${tab == "applications" ? "!bg-[#e1b34d]" : ""} hover:!bg-[#b08423]`}
              >
                <MdEmail
                  size={25}
                  color={tab == "applications" ? "#0A2519" : "#bac4be"}
                />
                <h1
                  className={`font-popins text-[14px] font-medium leading-none ${tab == "applications" ? "text-[#0a2519]" : "text-[#bac4be]"} `}
                >
                  Applications
                </h1>
              </div>
            </Link>
          )}
          <Link to={`/dashboard?tab=profile`}>
            <div
              className={`flex items-center gap-[16px] rounded-[6px] px-2 py-1 ${tab == "profile" ? "!bg-[#e1b34d]" : ""} hover:!bg-[#b08423]`}
            >
              <MdOutlineVerified
                size={25}
                color={tab == "profile" ? "#0A2519" : "#bac4be"}
              />
              <h1
                className={`font-popins text-[14px] font-medium leading-none ${tab == "profile" ? "text-[#0a2519]" : "text-[#bac4be]"} `}
              >
                Profile
              </h1>
            </div>
          </Link>
          <hr className="my-1 bg-white" />
          <div
            onClick={handleSignOutAccount}
            className={`flex cursor-pointer items-center gap-[16px] rounded-[6px] px-2 py-1 ${tab == "logout" ? "!bg-[#e1b34d]" : ""} hover:!bg-[#b08423]`}
          >
            <MdEmail
              size={25}
              color={tab == "logout" ? "#0A2519" : "#bac4be"}
            />
            <h1
              className={`font-popins text-[14px] font-medium leading-none ${tab == "logout" ? "text-[#0a2519]" : "text-[#bac4be]"} `}
            >
              Sign Out
            </h1>
          </div>
        </div>
        <div className="mt-[8px] h-[120px] w-full rounded-[8px] border bg-imperialRed"></div>
      </Sidebar>
    </section>
  );
}
