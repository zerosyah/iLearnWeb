import { Box, Stack } from '@mui/material'
import { Progress } from 'flowbite-react';
import { FaCalendar } from "react-icons/fa";
import { MdSubject } from "react-icons/md";
import { GoDotFill } from "react-icons/go";
//import React from 'react'

type Props = {
    label?: string,
    BarColor?: string,
    BarNumber?: any,
    Date?: string,
    Dot?: boolean
}

function DashProgressCard({ label, BarColor, BarNumber, Date, Dot }: Props) {
    // const [subject, setSubject] = React.useState<any>("");
  return (
    <Box sx={{
      paddingX: "5px"
    }}>
      <Stack spacing={0.5} className={`"rounded-[10px] bg-pcard p-[5px] ${Dot ? "border-scards shadow-md shadow-secondary border rounded-[10px]": "rounded-[10px]"}`}>
        <Stack
          direction={"row"}
          spacing={1}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Stack direction={"row"} spacing={1} alignItems={"center"}>
            <span>
              <MdSubject size={20} />
            </span>
            <span className="font-roboto text-[16px] font-semibold">
              {label}
            </span>
          </Stack>
          <span>
            <GoDotFill size={20} color={Dot ? "red" : "gray"} />
          </span>
        </Stack>
        <Stack className="w-[80%]">
          <Progress color={BarColor} progress={BarNumber} size={"sm"} />
        </Stack>
        <Stack direction={"row"} spacing={1} alignItems={"center"}>
          <FaCalendar size={14} className="" />
                  <span className="font-roboto text-[14px]">{ Date }</span>
        </Stack>
      </Stack>
    </Box>
  );
}

export default DashProgressCard