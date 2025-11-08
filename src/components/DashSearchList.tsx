import { SlOptions } from "react-icons/sl";
//import { HiOutlineSearch } from "react-icons/hi";
//import { Avatar, TextInput } from "flowbite-react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
//import DashUserDetails from "./DashUserDetails";
import { TextField, Stack, Divider, Button } from "@mui/material";
import { studentSelected } from "../redux/student/studentSlice";

function DashSearchList({selected}:any) {
  const [users, setUsers] = useState([]);
  //const [selectedUser, setSelectedUser] = useState('');
  const [clicked, setClicked] = useState<number>()
  const { currentUser } = useSelector((state: any) => state.user);
  const dispatch = useDispatch()
  
  useEffect(() => {
    const fetchUsers = async () => {
      const res = await fetch("http://127.0.0.1:4001/data/studemt/get/all");
      const data = await res.json();
      if (res.ok) {
        setUsers(data.data);
      }
    };
    fetchUsers();
  }, [currentUser]);

  const list = [
    {
      FirstName: "Siyabonga",
      LastName: "Shezi",
      IdNumber: "0210245686089",
      Grade: "Grade 10",
      Gender: "Male",
      DOB: "2002-10-24",
      Email: "syahshezi3000@gmail.com",
      PhoneNumber: "068-249-0617",
      Religion: "Christian",
      Disability: "None",
      EmergencyNumber: "078-844-7447",
      Race: "African",
      HomeNumber: "067-902-7763",
      Country: "South Africa",
    },
    {
      FirstName: "Thabiso",
      LastName: "Zulu",
      IdNumber: "0210245686089",
      Grade: "Grade 10",
      Gender: "Male",
      DOB: "2002-10-24",
      Email: "syahshezi3000@gmail.com",
      PhoneNumber: "068-249-0617",
      Religion: "Christian",
      Disability: "None",
      EmergencyNumber: "078-844-7447",
      Race: "African",
      HomeNumber: "067-902-7763",
      Country: "South Africa",
    },
    {
      FirstName: "Nombani",
      LastName: "Sishi",
      IdNumber: "0210245686089",
      Grade: "Grade 10",
      Gender: "Male",
      DOB: "2002-10-24",
      Email: "syahshezi3000@gmail.com",
      PhoneNumber: "068-249-0617",
      Religion: "Christian",
      Disability: "None",
      EmergencyNumber: "078-844-7447",
      Race: "African",
      HomeNumber: "067-902-7763",
      Country: "South Africa",
    },
    {
      FirstName: "Siyabonga",
      LastName: "Shezi",
      IdNumber: "0210245686089",
      Grade: "Grade 10",
      Gender: "Male",
      DOB: "2002-10-24",
      Email: "syahshezi3000@gmail.com",
      PhoneNumber: "068-249-0617",
      Religion: "Christian",
      Disability: "None",
      EmergencyNumber: "078-844-7447",
      Race: "African",
      HomeNumber: "067-902-7763",
      Country: "South Africa",
    },
    {
      FirstName: "Siyabonga",
      LastName: "Shezi",
      IdNumber: "0210245686089",
      Grade: "Grade 10",
      Gender: "Male",
      DOB: "2002-10-24",
      Email: "syahshezi3000@gmail.com",
      PhoneNumber: "068-249-0617",
      Religion: "Christian",
      Disability: "None",
      EmergencyNumber: "078-844-7447",
      Race: "African",
      HomeNumber: "067-902-7763",
      Country: "South Africa",
    },
    {
      FirstName: "Siyabonga",
      LastName: "Shezi",
      IdNumber: "0210245686089",
      Grade: "Grade 10",
      Gender: "Male",
      DOB: "2002-10-24",
      Email: "syahshezi3000@gmail.com",
      PhoneNumber: "068-249-0617",
      Religion: "Christian",
      Disability: "None",
      EmergencyNumber: "078-844-7447",
      Race: "African",
      HomeNumber: "067-902-7763",
      Country: "South Africa",
    },
  ];
  console.log(users);
  
  const onSelected = (l:any) => {
    //console.log(l);
    dispatch(studentSelected(l))
    selected(l)
    //console.log(currentStudent);
    
  }

  return (
    <>
      <Stack
        spacing={1}
        className="h-[550px] w-[220px] rounded-[10px] bg-gray-300 p-[10px]"
      >
        <Stack direction={"row"} className="items-center justify-between">
          <h1 className="text-[20px] font-medium">Students</h1>
          <SlOptions size={25} className="hover:cursor-pointer" />
        </Stack>
        <Stack borderRadius={10}>
          <TextField
            size="small"
            sx={{ borderRadius: 1 }}
            placeholder="Search"
            label={"Search"}
            className="bg-[#F8F8F8] font-popins text-[12px] "
          />
        </Stack>
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          className="font-medium hover:cursor-pointer"
        >
          <p className="hover: rounded-lg px-[5px] text-[14px] transition-all duration-300 ease-in-out hover:bg-blue-400 hover:text-white">
            sort
          </p>
          <p className="hover: rounded-lg px-[5px] text-[14px] transition-all duration-300 ease-in-out hover:bg-blue-400 hover:text-white">
            filter
          </p>
        </Stack>
        <Divider />
        <Stack spacing={2} className="scroll-container h-[500px] w-[200px]">
          {list.map((l: any, i: number) => (
            <Button
              variant={clicked == i ? "contained" : "outlined"}
              onClick={() => {
                onSelected(l);
                setClicked(i);
              }}
              key={i}
            >
              <Stack
                direction={"row"}
                spacing={1}
                className="w-full overflow-hidden truncate rounded-[10px] p-[5px] hover:cursor-pointer"
              >
                <div className="w-[80px] rounded-full border-[1px] border-black"></div>
                <Stack className="w-[200px] truncate">
                  <h1 className="text-[14px] font-medium">
                    {l.FirstName} {l.LastName}{" "}
                  </h1>
                  <h2 className="text-[12px] italic">{l.IdNumber}</h2>
                </Stack>
              </Stack>
            </Button>
          ))}
        </Stack>
      </Stack>
    </>
  );
}

export default DashSearchList;

/**
 * <div className=" w-fit rounded bg-teal-300 px-2 py-2 overflow-auto" style={{height: '94.7vh'}}>
        <div className="title flex items-center justify-between font-semibold">
          <p>Students</p>
          <SlOptions />
        </div>
        <TextInput className="py-2" sizing={"sm"} icon={HiOutlineSearch}/>

        <div className="List">
          {currentUser.Role === "admin" &&
            users.map((user: any) => (
              <ul className="flex flex-col gap-10 mt-1">
                <li className="flex border-b flex-col gap-4" onClick={() => setSelectedUser(user._id)}>
                  <div className="flex justify-between w-full items-center">
                    <div className="flex gap-2 items-center">
                      <Avatar img={user.profilePicture} size={"sm"} className=""/>
                      <div className="text-sm">
                        <h3 className="font-semibold">{user.firstName}</h3>
                        <p className="text-xs">G-8</p>
                      </div>
                    </div>
                    <div className="text-xs pr-2">
                        <p className="text-xs">Male</p>
                        <p className="">Male</p>
                      </div>
                  </div>
                </li>
              </ul>
            ))}
        </div>
      </div>
      <div className="">
      <DashUserDetails selectedUser={selectedUser}/>
      </div>
 */