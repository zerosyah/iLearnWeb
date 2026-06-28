import { Box, Stack } from '@mui/material'
//import { Image  } from "flowbite-react"
//import React from 'react'
import { teacherImages } from '../Constants/Assets'
import { TeacherYearCardProps } from '../Constants/PropsInventory'

const vw = window.innerWidth;

const containerBoxStyle = {
    width:vw*0.1611111111,
    height: vw*0.0833333333,
    border: "1px solid #003ECD",
    borderRadius: 2,
    position: "relative",
    //backGroundColor: "#FDFDFF",
    marginRight: 2,
    marginLeft: 2,
}
// const containerStackStyle = {
//     width:vw*0.1611111111,
//     height: vw*0.0833333333,
//     borderRadius: 2,
//     position: "relative"
// }

function TeacherYearCard({title, name, subject, grade, description, img}:TeacherYearCardProps):JSX.Element {
  return (
    <Box sx={[containerBoxStyle]}>
      <Stack className='relative size-full flex flex-col gap-[8px] p-[8px] rounded-[10px] overflow-hidden'>
        <h1 className="text-[20px] font-bebasNeue text-center font-bold leading-[18px] ">{title}</h1>
        <Stack className='relative gap-[8px]' direction={"row"}>
            <div className="relative" style={{width:vw*0.056, }}>
                <img src={teacherImages[img]} alt="" className="relative object-contain w-full" />
            </div> 
            <Stack className='relative flex flex-col gap-[8px]'>
                <h2 className="text-[14px] leading-[12px] font-montserrat font-bold uppercase">{name}</h2>
                <h3 className='text-[14px] leading-[12px] font-montserrat font-semibold'>{subject}</h3>
                <h4 className="text-[14px] font-montserrat leading-[12px] font-semibold">{grade}</h4>
                <p className="text-[14px] pt-[1px] leading-[10px] font-semibold font-nunito text-wrap">{description}</p>
            </Stack>
        </Stack>
      </Stack>
    </Box>
  )
}

export default TeacherYearCard
