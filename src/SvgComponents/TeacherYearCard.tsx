import { Box, Stack } from '@mui/material'
//import { Image  } from "flowbite-react"
//import React from 'react'
import { teacherImages } from '../Constants/Assets'
import { TeacherYearCardProps } from '../Constants/PropsInventory'

const vw = window.innerWidth;

const containerBoxStyle = {
    width:vw <= 850 ? vw*0.6: vw*0.1611111111,
    //height: vw*0.0833333333,
    border: "1px solid #003ECD",
    borderRadius: 2,
    position: "relative",
    //backGroundColor: "#FDFDFF",
    // marginRight: 2,
    // marginLeft: 2,
}
const containerStackStyle = {
    width:vw <= 850 ? vw*0.6: vw*0.1611111111,
    //height: vw*0.0833333333,
    borderRadius: 2,
    position: "relative"
}

function TeacherYearCard({title, name, subject, grade, description, img}:TeacherYearCardProps):JSX.Element {
  return (
    <Box sx={[containerBoxStyle]} className="mx-[8px]">
      <Stack sx={containerStackStyle} className='relative flex size-full flex-col gap-[16px] overflow-hidden rounded-[10px] p-[8px]'>
        <h1 className="text-center font-bebasNeue text-[24px] font-bold leading-[18px] ">{title}</h1>
        <Stack className='relative gap-[8px]' direction={"row"}>
            <div className="relative rounded-[10px]" style={{width: vw <= 850 ? vw*0.2: vw*0.056, height: vw <= 850 ? vw*0.185: vw*0.056 }}>
                <img src={teacherImages[img]} alt="" className='size-full rounded-[10px] object-center' />
            </div> 
            <Stack className='relative flex flex-col gap-[8px]'>
                <h2 className="overflow-hidden truncate font-montserrat text-[14px] font-bold uppercase leading-[16px]">{name}</h2>
                <h3 className='font-montserrat text-[14px] font-semibold leading-[12px]'>{subject}</h3>
                <h4 className="font-montserrat text-[12px] font-semibold leading-[12px]">{grade}</h4>
                <p className="text-nowrap font-nunito text-[16px] font-bold leading-[10px]">{description}</p>
            </Stack>
        </Stack>
      </Stack>
    </Box>
  )
}

export default TeacherYearCard
