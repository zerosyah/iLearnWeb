import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import DashSideBar from "../components/DashSideBar";
//import { Stack } from '@mui/material'
import { FaRegBell, FaSearch } from "react-icons/fa";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { useSelector } from "react-redux";
import { UserProps } from "../Constants/PropsInventory";
import avatar from "../assets/avatar.jpg";

export default function DesktopLayout({ children }: { children?: React.ReactNode }) {
  // use location hook to get tab
  const location = useLocation();

  // tab state and function
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  const [, setTab] = useState("");
  const { currentUser } = useSelector((state: UserProps) => state.user);

  //use effect to get tab from url
  useEffect(() => {
    const urlParms = new URLSearchParams(location.search);
    const tabFromUrl = urlParms.get("tab");
    if (tabFromUrl) {
      setTab(tabFromUrl);
    }
  }, [location.search]);
  return (
    <div className="layout-container h-screen w-full !bg-defaultBg p-[8px]">
      <div className="header flex items-center justify-between rounded-[6px] border border-borderGray bg-default px-6 py-3">
        
        {/** Greetings */}
        <div className="relative flex flex-col ">
          <p className="font-popins text-[16px] font-semibold leading-none tracking-widest text-ink lg:text-[18px]">
            Hello!, {currentUser?.FirstName + " " + currentUser?.LastName}
          </p>
          <p className="mt-1 truncate font-popins text-[12px] font-medium leading-none text-textGray">
            {currentUser?.Email}
          </p>
        </div>

        <div className="flex gap-[8px]">
          <div className="relative flex items-center pr-[16px]">
            <input
              type="text"
              className="h-[35px] rounded-[6px] border border-borderGray bg-defaultBg pl-[35px] font-popins text-[14px] font-medium text-[#03045E] focus:border-hoverGold"
              placeholder="Search here..."
            />
            <span className="absolute flex size-[35px] cursor-pointer items-center justify-center rounded-[50px]">
              <FaSearch size={16} color="#5F6D65" />
            </span>
          </div>
          <div className="relative flex size-[36px] cursor-pointer items-center justify-center rounded-[6px] hover:bg-[#E1B343]">
            <MdOutlineMarkEmailUnread
              size={20}
              color="#5F6D65"
              className="relative flex items-center justify-center"
            />
          </div>
          <div className="relative flex size-[36px] cursor-pointer items-center justify-center rounded-[6px] hover:bg-[#E1B343]">
            <FaRegBell size={20} color="#5F6D65" className="relative flex items-center justify-center" />
          </div>
          <div className="flex items-center gap-[6px]">
            <div className="size-[36px] rounded-[6px] border border-[#E1B343]">
              <img
                src={avatar}
                alt="avatar"
                className="size-full rounded-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Side-bar */}
      <div className="sidebar rounded-[6px] bg-nightGreen">
        <DashSideBar />
      </div>

      <div className="view-screen flex size-full min-h-0 overflow-y-scroll rounded-none">
        <div className="flex size-full min-h-full">{children}</div>
      </div>
    </div>
  );
}
