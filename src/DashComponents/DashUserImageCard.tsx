import { Box, Stack } from '@mui/material';
//import React from 'react'

type Props = {
    image: string;
    name: string;
    p?: boolean;
}

function DashUserImageCard({image, name, p}: Props) {
  return (
    <Box>
      <Stack
        className="w-fit items-center p-[10px] drop-shadow-[0px_0px_4px_black]"
        spacing={1}
      >
        <img
          src={image}
          alt={name}
          className={`${!p ? "w-[80px] lg:w-[100px] h-[80px] lg:h-[100px]" : "w-[100px] lg:w-[120px] h-[100px] lg:h-[120px]"} object-contain rounded-full border`}
        />
              <h1 className="font-nunito text-[14px] lg:text-[16px] text-ptxtd font-semibold">{name}</h1>
      </Stack>
    </Box>
  );
}

export default DashUserImageCard