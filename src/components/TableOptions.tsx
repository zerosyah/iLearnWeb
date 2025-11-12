import { Divider, Stack } from "@mui/material";
import { useState } from "react";
import { FaCheck, FaCross, FaEye, FaOptinMonster } from "react-icons/fa";

export default function TableOptions({ index, onSendData, id, data }: any) {
    //interface Data {}
    const [showOpt, setShowOpt] = useState<boolean>(false);
    //const [action, setAction] = useState<string>("");
   // console.log(action);
    //act = action;
    const onClickOption = (option: string) => {
        onSendData({option, index, id, data});
    }
    
  return (
    <section className="">
      {!showOpt ? (
        <FaOptinMonster size={25} onClick={() => setShowOpt(true)} className="cursor-pointer" />
      ) : (
        <Stack direction={"column"} spacing={1} className="border p-[10px] bg-gray-400 rounded-[10px] absolute">
                      <Stack direction={"row"} spacing={1} className="cursor-pointer hover:text-green-600" onClick={() => { setShowOpt(false); onClickOption("Accept") }}>
            <FaCheck size={20} />
            <p>Accept</p>
                      </Stack>
                      <Divider/>
                      <Stack direction={"row"} spacing={1} onClick={() => { setShowOpt(false)}} className="cursor-pointer hover:text-cyan-600">
            <FaEye size={20} />
            <p>View</p>
                      </Stack>
                      <Divider/>
          <Stack direction={"row"} spacing={1} onClick={() => {setShowOpt(false); onClickOption("Reject")}} className="cursor-pointer hover:text-red-600">
            <FaCross size={20} />
            <p>Reject</p>
          </Stack>
        </Stack>
      )}
    </section>
  );
}
