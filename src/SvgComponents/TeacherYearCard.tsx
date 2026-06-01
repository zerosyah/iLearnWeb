import { Box, Stack } from '@mui/material'
//import { Image  } from "flowbite-react"
//import React from 'react'
import { teacherImages } from '../Constants/Assets'
import { TeacherYearCardProps } from '../Constants/PropsInventory'

const containerBoxStyle = {
    width:360,
    height: 200,
   // border: "1px solid red",
    borderRadius: 2,
    position: "relative",
    backGroundColor: "lime"
}
const containerStackStyle = {
    width:360,
    height: 200,
    borderRadius: 2,
    position: "relative"
}

function TeacherYearCard({title, name, subject, grade, description, img}:TeacherYearCardProps):JSX.Element {
  return (
    <Box sx={[containerBoxStyle, {marginRight:2, marginLeft:2}]}>
      <Stack sx={containerStackStyle} className='bg-gradient-to-tr from-defaultYellow to-defaultGreen shadow-md shadow-black'>
        <h1 className="text-[30px] font-bebasNeue text-center font-bold leading-0 ">{title}</h1>
        <Stack className='absolute bottom-0' direction={"row"} gap={1}>
            <div className="w-[140px] h-[150px] border-black rounded-[5px]">
                <img src={teacherImages[img]} alt="text image" className='w-[140px] h-[150px] object-fill rounded-[6px]' />
            </div> 
            <Stack className='w-[210px] h-[150px] left-0 rounded-[7px] border-blue-400'>
                <h2 className="text-[18px] font-pacifico font-bold uppercase">{name}</h2>
                <h3 className='text-[16px] leading-0 font-montserrat font-semibold'>{subject}</h3>
                <h4 className="text-[14px] font-montserrat font-semibold">{grade}</h4>
                <p className="text-[12px] pt-[12px] font-semibold font-nunito text-wrap">{description}</p>
            </Stack>
        </Stack>
      </Stack>
    </Box>
  )
}

export default TeacherYearCard
