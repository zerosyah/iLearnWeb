import { Box, Stack } from '@mui/material'
//import React from 'react'
import badge from "../assets/Heros/CARD/badge.webp"

function Badge() {
  return (
      <Box>
          <Stack
                    direction={"row"}
                    spacing={1}
                    alignItems={"center"}
                    justifyContent={"center"}
                    className="sm:hidden pl-[10px] lg:pl-[0px]"
                  >
                    <img
                      src={badge}
                      alt="school badge"
                      className="h-[40px] lg:h-[50px] w-[40px] lg:w-[60px] md:h-[40px] relative"
                    />
                    <h1 className="space-x-[10px] absolute bg-gradient-to-r from-defaultYellow to-defaultGreen bg-clip-text font-bebasNeue text-[25px] text-transparent drop-shadow-[2px_2px_0px_black] md:text-[30px] lg:text-[50px]">
                      Sompukwane
                    </h1>
                  </Stack>
    </Box>
  )
}

export default Badge