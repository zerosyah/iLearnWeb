import React from 'react'
import { FaAngleDoubleUp, FaUsers } from 'react-icons/fa'
import { SlOptions } from 'react-icons/sl'
import { MdClose, MdOpenInFull } from "react-icons/md";
import { useNavigate } from 'react-router-dom';

function DashTotalApplication() {
    const [show, setShow] = React.useState<boolean>(false)
    const navigate = useNavigate();
  return (
    <div className="card relative flex flex-col gap-[8px] rounded-[8px] bg-[#90E0EF] p-[8px] font-bold">
                <div className="flex items-center justify-between">
                  <h1 className="font-bebasNeue text-xl tracking-[0.15em] text-[#03045E] ">
                  Total Applications
                </h1>
                <div className="">
                    {!show && <SlOptions size={20} className="cursor-pointer" onClick={()=>setShow(!show)} />}
                { show && <MdClose size={20} className="cursor-pointer" onClick={()=>setShow(!show)} />}
                    {
                        show && (
                            <div className="absolute right-0 top-0 z-10 rounded-[8px] bg-[#90E0EF] p-[8px] shadow-lg">
                               <ul className="">
                                <li className="flex cursor-pointer items-center gap-[8px] font-montserrat text-sm" onClick={()=>navigate("/dashboard?tab=calculator")}><MdOpenInFull size={15}/>Open</li>
                                <li className="flex cursor-pointer items-center gap-[8px] font-montserrat text-sm" onClick={()=>setShow(!show)}><MdClose size={15}/>close</li>
                               </ul>
                            </div>
                        )
                    }
                </div>
                </div>
                <div className="flex flex-col">
                  <div className="flex items-center justify-between gap-[8px] font-bebasNeue text-[40px] leading-[30px] tracking-wider text-coolWhite">
                    {" "}
                    <div className="flex items-center gap-[8px]">
                      <FaUsers size={50} className="relative top-[-3px]" />
                      <span className="drop-shadow-[1px_1px_1px_black]">4851</span>
                    </div>{" "}
                    <span className="">
                      <FaAngleDoubleUp
                        size={30}
                        className="rounded-[50px] border border-green-500 text-green-500 drop-shadow-[1px_1px_1px_white]"
                      />
                    </span>
                  </div>
                  <span className="relative top-[-6px] font-montserrat text-sm font-medium italic tracking-wider text-persianBlue">
                    <span className="rounded-[50px] pr-[8px] font-bold tracking-wide text-coolWhite">
                      +2.4%
                    </span>{" "}
                    in the last 24h
                  </span>
                </div>
                <div className="flex items-center gap-[16px]">
                  <div className="flex size-[80px] items-center justify-center rounded-full bg-coolWhite" >
                    <div className="size-[65px] rounded-full bg-[#90E0EF] "></div>
                  </div>
                  <ul className="flex flex-col gap-[6px]">
                    <li className=" flex items-center gap-[8px] font-montserrat text-sm tracking-[0.15em] text-persianBlue opacity-80">
                      <div className="chart-span rounded-[50px] bg-persianBlue" />{" "}
                      65% ~ Approved
                    </li>
                    <li className="flex items-center gap-[8px] font-montserrat text-sm tracking-[0.15em] text-selectiveYellow opacity-80">
                      <div className="chart-span rounded-[50px] bg-selectiveYellow" />{" "}
                      25% ~ Pending
                    </li>
                    <li className="flex items-center gap-[8px] font-montserrat text-sm tracking-[0.15em] text-imperialRed opacity-80">
                      <div className="chart-span rounded-[50px] bg-imperialRed" />{" "}
                      10% ~ Declined
                    </li>
                  </ul>
                </div>
              </div>
  )
}

export default DashTotalApplication
