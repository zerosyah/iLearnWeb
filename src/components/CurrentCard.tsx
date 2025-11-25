import { Box, LinearProgress, LinearProgressProps, Stack } from '@mui/material';
import React from 'react'
import { FaChalkboardTeacher, FaBookOpen } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import moment from 'moment';
import { Progress } from 'flowbite-react';

//  @ts-ignore
function LinearProgressWithLabel(props: LinearProgressProps & { value: number }) {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', borderRadius: "100px" }}>
      <Box sx={{ width: '100%', mr: 1, borderRadius: "100px" }}>
        <LinearProgress variant="determinate" {...props} sx={{ borderRadius: "100px"}} />
      </Box>
    </Box>
  );
}
interface Props {
    name: string;
    subject: string;
    location: string;
    picture: string;
    isNext: boolean;
}
export default function ({name, subject, location, picture, isNext}:Props) {
    const [progress, setProgress] = React.useState(0);
    
      React.useEffect(() => {
        const duration = (t: string) => {
          const [h = "0", m = "0", s = "0"] = t.split(':');
          return (Number(h) * 3600 + Number(m) * 60 + Number(s) * 1000);
        }
        let diff = duration("23:20:59") - duration(moment().format("HH:mm:ss"));
        console.log(diff);
        
        const timer = setInterval(() => {
          setProgress((prevProgress) =>
            prevProgress >= diff ? 1 : prevProgress + 1,
          );
          
        }, 2000);
        return () => {
          clearInterval(timer);
        };
      }, []);
  return (
    <Box
      sx={{
        width: isNext ? "90%" : "100%",
        position: "relative",
        right: isNext ? "-20px" : "0px",
      }}
    >
      <Stack
        direction={"column"}
        className={`h-[110px] w-[${isNext ? "100px" : "full"}] rounded-[10px]  ${isNext ? "bg-scard" : " bg-scards shadow-lg"} p-[5px] `}
      >
        <Stack direction={"row"} spacing={0.5} alignItems={"center"}>
          {isNext ? (
            <>
              <p className="h-[8px] w-[8px] rounded-full bg-blue-700"></p>
              <p className="text-[10px] font-bold text-blue-700">NEXT</p>
            </>
          ) : (
            <>
              <p className="h-[8px] w-[8px] animate-pulse rounded-full bg-red-700"></p>
              <p className="animate-pulse text-[10px] font-bold text-red-700">
                LIVE
              </p>
            </>
          )}
        </Stack>
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
          spacing={1}
        >
          <Stack className="pl-[10px]">
            {!isNext && (
              <Stack direction={"row"} spacing={1} alignItems={"center"}>
                <FaChalkboardTeacher
                  size={isNext ? 14 : 16}
                  color={isNext ? "hsl(182, 34%, 95%)" : "black"}
                  className="relative top-[1px]"
                />
                <h1
                  className={`font-roboto ${isNext ? "text-[14px]" : "text-stxtl text-[16px]"} font-semibold`}
                >
                  {name}
                </h1>
              </Stack>
            )}
            <Stack direction={"row"} spacing={1} alignItems={"center"}>
              <FaBookOpen
                color={isNext ? "hsl(182, 34%, 95%)" : "black"}
                size={16}
                className="relative top-[0px]"
              />
              <h1
                className={`font-roboto ${isNext ? "text-stxtxd text-[14px]" : "text-stxtl text-[16px]"} font-semibold`}
              >
                {subject}
              </h1>
            </Stack>
            <Stack direction={"row"} spacing={1} alignItems={"center"}>
              <FaLocationDot
                color={isNext ? "hsl(182, 34%, 95%)" : "black"}
                size={16}
                className="relative top-[0px]"
              />
              <h1
                className={`font-roboto ${isNext ? "text-stxtd text-[14px]" : "text-stxtl text-[16px]"} font-semibold`}
              >
                {location}
              </h1>
            </Stack>
          </Stack>
          <Stack
            sx={{
              backgroundImage: `url(${picture})`,
              backgroundSize: "cover",
              position: "relative",
              top: "-10px",
              right: "10px",
                          paddingRight: "10px",
              opacity: isNext ? 0.7 : 1,
            }}
            className={`${isNext ? "h-[60px] w-[60px]" : "h-[80px] w-[80px]"}`}
          ></Stack>
        </Stack>
        {!isNext && (
          <Stack className="h-[5px] w-full ">
            <Progress progress={progress} size="sm" />
          </Stack>
        )}
      </Stack>
    </Box>
  );
}
