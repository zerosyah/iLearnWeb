import React, { useState , useEffect} from 'react'
import { useLocation } from 'react-router-dom'
import DashSideBar from "../components/DashSideBar";
import { Stack } from '@mui/material'
import { FaRegBell, FaSearch } from "react-icons/fa";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { useSelector, UseSelector } from 'react-redux';
import { UserProps } from '../Constants/PropsInventory';
import avatar from "../assets/avatar.jpg"

export default function DesktopLayout({ children }: {children: React.ReactNode}) {
  // use location hook to get tab
  const location = useLocation()
  
  // tab state and function
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
    const [tab, setTab] = useState('');
    const { currentUser } = useSelector((state: UserProps) => state.user);
    
    //use effect to get tab from url
    useEffect(()=>{
      const urlParms = new URLSearchParams(location.search)
      const tabFromUrl = urlParms.get('tab')
      if (tabFromUrl) {
        setTab(tabFromUrl)
      }
    }, [location.search])
  return (
    <div className="layout-container h-screen w-full bg-[#CAF0F8] p-[8px]">
      <div className="header flex items-center justify-between rounded-[8px] border bg-[#0077B6] px-[8px]">
        <div className="relative flex items-center">
              <div className="text-[#03045E]">
                  <p className="font-montserrat text-[16px] font-semibold tracking-widest">Hello!, {currentUser?.FirstName + " " + currentUser?.LastName}</p>
                  <p className="font-montserrat text-[14px]">{currentUser?.Email}</p>
                </div>
            </div>

            <div className="flex gap-[8px]">
              <div className="relative flex pr-[16px] items-center">
              <input type='text' className='h-[35px] rounded-[50px] border-none bg-[#CAF0F8] pl-[35px] font-montserrat text-sm font-medium text-[#03045E] focus:border-none' placeholder='Search here' />
              <span className='absolute flex size-[35px] cursor-pointer items-center justify-center rounded-[50px]'><FaSearch size={20} color='#03045E' /></span>
            </div>
              <div className="relative flex size-[40px] cursor-pointer items-center justify-center rounded-[50px] bg-[#CAF0F8]">
                <MdOutlineMarkEmailUnread size={20} color='#03045E' className='relative flex items-center justify-center' />
              </div>
              <div className="flex size-[40px] cursor-pointer items-center justify-center rounded-[50px] bg-[#CAF0F8]">
                <FaRegBell size={20} color='#03045E' />
              </div>
              <div className="flex items-center gap-[6px]">
                <div className="size-[35px] rounded-full">
                  <img src={avatar} alt="avatar" className="size-full rounded-full object-contain" />
                </div>
                
              </div>
            </div>
      </div>

      {/* Side-bar */}
      <div className="sidebar rounded-[8px] bg-[#90E0EF]">
        <DashSideBar />
      </div>

      <div className="view-screen flex h-full w-full min-h-0 overflow-hidden rounded-[10px] bg-transparent">
        <div className="flex h-full w-full min-h-0">
          {children}
        </div>
      </div>
    </div>
  );
}

// /**


//  * // the Main section opening tag below this line
//     <section className="MAIN flex h-full w-full justify-start gap-[2%] p-[3%]">
//       {/* the Main section opening tag above this line */}

//       {/* the sidebar section opening tag below tis line */}
//       <section className="h-fit w-[20%] rounded-[10px]  ">
//         {/* the sidebar section opening tag above this line */}

//         <DashSideBar />

//         {/* the sidebar section closing tag below this line */}
//       </section>
//       {/* the sidebar section closing tag above this line */}

//       {/* the right section section opening tag below tis line */}
//       <section className="flex w-full flex-col gap-[5%] rounded-[10px]">
//         {/* the right section opening tag above this line */}

//         <section className=" h-[10%] w-full rounded-[10px] border-2">
//           { children }
//         </section>
//         <section className="h-[25%] w-full rounded-[10px] border-2 ">
//           bottom part
//         </section>
//         <section className="h-[54%] w-full rounded-[10px] border-2 ">
//           bottom part
//         </section>

//         {/* the right section closing tag below this line */}
//       </section>
//       {/* the right section closing tag above this line */}

//       {/* the Main section closing tag below this line  */}
//     </section>
//     // the Main section closing tag above this line

{/* <div className="header flex items-center justify-between rounded-[8px] bg-gray-100 p-[8px]">
            <div className="relative flex items-center">
              <input type='text' className='h-[35px] rounded-[50px] pl-[35px] font-montserrat text-sm font-medium' placeholder='Search here' />
              <span className='absolute flex size-[35px] cursor-pointer items-center justify-center rounded-[50px]'><FaSearch size=20 /></span>
            </div>

            <div className="flex gap-[8px]">
              <div className="relative flex size-[40px] cursor-pointer items-center justify-center rounded-[50px] bg-coolWhite">
                <MdOutlineMarkEmailUnread size=20 className='relative flex items-center justify-center' />
              </div>
              <div className="flex size-[40px] cursor-pointer items-center justify-center rounded-[50px] bg-coolWhite">
                <FaRegBell size=20 />
              </div>
              <div className="flex items-center gap-[6px]">
                <div className="size-[35px] rounded-full bg-imperialRed"></div>
                <div className="">
                  <p className="font-montserrat text-[12px] font-semibold tracking-widest">currentUser?.FirstName + " " + currentUser?.LastName</p>
                  <p className="font-montserrat text-[11px]">currentUser?.Email</p>
                </div>
              </div>
            </div>
          </div> */}
//  */