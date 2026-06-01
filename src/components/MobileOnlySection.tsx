import { MobileOnlySectionPropData } from "../Constants/PropsInventory";
import { Stack } from "@mui/material";

export default function MobileOnlySection({
  list,
  title,
}: MobileOnlySectionPropData): JSX.Element {
  return (
    <section>
      <h1 className="font-popins text-[20px] font-semibold text-default md:text-gray-700 drop-shadow-[0px_0px_5px_rgba(0,0,0,3)] md:drop-shadow-none lg:text-[24px]">
        {title}
      </h1>
      {list.map((item: string, index: number) => (
        <Stack spacing={0.5} key={index}>
          <ul className="list-inside list-disc">
            <li className="pl-[10px] font-popins text-[14px] text-default md:text-gray-600 drop-shadow-[0px_0px_5px_rgba(0,0,0,3)] md:drop-shadow-none lg:text-[16px]">
              {item}
            </li>
          </ul>
        </Stack>
      ))}
    </section>
  );
}
