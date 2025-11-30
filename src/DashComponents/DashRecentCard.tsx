import { Box, Stack } from '@mui/material'
//import React from 'react'

interface Props {
    Subject?: string;
    Date?: string;
    Results?: string;
    Score?: number;
    Total?: number;
}

function DashRecentCard({Subject, Date, Results, Score, Total}: Props) {
  return (
    <Box>
        <Stack
          direction={"row"}
          spacing={0.1}
          className="bg-pcard w-full justify-between rounded-[10px] p-[5px]"
        >
          <Stack>
            <span className="text-ptxtl font-popins text-[14px] font-medium">
              {Subject}
            </span>
            <span className="text-ptxtd font-popins text-[12px] font-medium">
              {Date}
            </span>
            <span className="text-ptxtd font-popins text-[12px] font-medium">
              Results: <span className={`font-semibold ${Results == "Passed" ? "text-option1": "text-red-700"}`}>{Results}</span>
            </span>
          </Stack>
          <Stack className="items-center rounded-[10px] border-[2px]  p-[5px]">
            <span className={`font-popins text-[18px] font-semibold ${Results == "Passed" ? "text-option1": "text-red-700"}`}>
              {Score}
            </span>
            <hr className="bg-black" />
            <span className="font- font-popins text-[12px] text-default/90">
              {Total}
            </span>
          </Stack>
        </Stack>
    </Box>
  );
}

export default DashRecentCard