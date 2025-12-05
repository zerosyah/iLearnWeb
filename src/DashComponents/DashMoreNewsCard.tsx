import { Stack, Box } from '@mui/material';
import DashImageCard from './DashImageCard';
import { FaRegClock, FaRegEye } from 'react-icons/fa';

type Props = {
    Data?: any;
    Index?: number;
}

function DashMoreNewsCard({ Data, Index }: Props) {
  return (
    <Box>
      <Stack
        direction={"row"}
        spacing={1}
        className="w-full cursor-pointer rounded-[10px] bg-pcard p-[5px]"
        key={Index}
      >
        <DashImageCard
          alt="image"
          src={Data?.Image}
          height="40px"
          width="70px"
          border="0"
          borderRadius="10px"
          objectF="object-cover"
        />
        <Stack
          className="w-full overflow-x-hidden"
          justifyContent={"space-between"}
        >
          <h1 className="w-full overflow-x-hidden truncate text-nowrap font-popins text-[12px] font-semibold text-ptxtl">
            {Data?.Title}
          </h1>
          <Stack direction={"row"} spacing={2} alignItems={"center"}>
            <Stack direction={"row"} spacing={0.5} alignItems={"center"}>
              <FaRegClock size={12} className="text-ptxtd" />
              <span className="font-popins text-[10px] text-ptxtd">
                {Data?.Duration}
              </span>
            </Stack>
            <Stack direction={"row"} spacing={0.5} alignItems={"center"}>
              <FaRegEye size={12} className="text-ptxtd" />
              <span className="font-popins text-[10px] text-ptxtd">
                {Data?.Views}
              </span>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
}

export default DashMoreNewsCard