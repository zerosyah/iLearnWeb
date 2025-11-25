import { Box, Stack } from '@mui/material'
//import React from 'react'

interface Props {
    subject?: string;
    date?: string;
    results?: string;
    score?: number;
    total?: number;
}

function DashRecentCard({subject, date, results, score, total}: Props) {
  return (
    <Box>
        <Stack
          direction={"row"}
          spacing={0.1}
          className="bg-pcard w-full justify-between rounded-[10px] p-[5px]"
        >
          <Stack>
            <span className="text-ptxtl font-popins text-[14px] font-medium">
              {subject}
            </span>
            <span className="text-ptxtd font-popins text-[12px] font-medium">
              {date}
            </span>
            <span className="text-ptxtd font-popins text-[12px] font-medium">
              Results: <span className={`font-semibold ${results == "Passed" ? "text-option1": "text-red-700"}`}>{results}</span>
            </span>
          </Stack>
          <Stack className="items-center rounded-[10px] border-[2px]  p-[5px]">
            <span className={`font-popins text-[18px] font-semibold ${results == "Passed" ? "text-option1": "text-red-700"}`}>
              {score}
            </span>
            <hr className="bg-black" />
            <span className="font- font-popins text-[12px] text-default/90">
              {total}
            </span>
          </Stack>
        </Stack>
    </Box>
  );
}

export default DashRecentCard