import { SlOptions } from "react-icons/sl";
//import { HiOutlineSearch } from "react-icons/hi";
//import { Avatar, TextInput } from "flowbite-react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
//import DashUserDetails from "./DashUserDetails";
//import { TextField, Stack, Divider, Button } from "@mui/material";
import { setStudentData } from "../redux/student/studentSlice";
import { FaSearch } from "react-icons/fa";
import { store } from "../redux/store";
import { ApplicationData } from "../Constants/EventLayout.json";
import { Student } from "../Constants/PropsInventory";

// type ListProp = {
//     FirstName: string,
//       LastName: string,
//       IdNumber: string,
//       Grade: string,
//       Gender: string,
//       DOB: string,
//       Email: string,
//       PhoneNumber: string,
//       Religion: string,
//       Disability: string,
//       EmergencyNumber: string,
//       Race: string,
//       HomeNumber: string,
//       Country: string,
//   }

// type DashSearchListProp = {
//   selected: (value: Student) => void;
// };

function DashSearchList() {
  type RootProp = ReturnType<typeof store.getState>;
  const [, setUsers] = useState([]);
  const [clicked, setClicked] = useState<number>();
  const { currentUser } = useSelector((state: RootProp) => state.user);
  const [data, setData] = useState(ApplicationData);
  const dispatch = useDispatch();

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

  const [searchText, setSearchText] = useState<{ text: string }>({ text: "" });
  const handleChange = (e: React.FormEvent) => {
    e.preventDefault();
    const target = e.target as HTMLInputElement;
    setSearchText({ ...searchText, [target.id]: target.value });
  };
  const handleSearch = () => {
    if (!searchText.text) return setData(() => ApplicationData);
    return setData(() =>
      ApplicationData.filter(
        (data) =>
          data.FirstName.toLowerCase().includes(
            searchText.text.toLowerCase(),
          ) ||
          data.IdNumber == searchText.text ||
          data.LastName.toLowerCase().includes(searchText.text.toLowerCase()),
      ),
    );
  };

  const handleClick = (dataInfo: Student, index: number) => {
    if (!dataInfo) return;
    setClicked(index);
    return dispatch(setStudentData(dataInfo));
  };

  return (
    <>
      <div className="scroll-container relative h-full overflow-y-scroll rounded-[6px] border border-borderGray bg-default p-4 transition-all duration-300 ease-in-out">
        <div className="flex items-center justify-between">
          <h1 className="font-bebasNeue text-[24px] text-strongNightGreen">
            Students
          </h1>
          <SlOptions size={16} className="hover:cursor-pointer" />
        </div>

        <div className="relative mt-3">
          <input
            type="text"
            id="text"
            value={searchText.text}
            className="relative h-[40px] w-full rounded-[6px] bg-defaultBg pl-8 font-popins text-[14px] font-medium"
            placeholder="search here"
            onChange={handleChange}
          />
          <div className="absolute left-2 top-3 items-center">
            <FaSearch size={18} className="absolute" onClick={handleSearch} />
          </div>
        </div>

        <div className="scroll-container mt-3 flex h-screen flex-col gap-2 overflow-y-scroll">
          {data.length > 0 &&
            data.map((l: Student, i: number) => (
              <ul onClick={() => handleClick(l, i)} key={i}>
                <li
                  className={`flex cursor-pointer items-center gap-2 rounded-[6px] border ${clicked == i ? "bg-nightGreen text-softWhite" : ""} border-borderGray p-2`}
                >
                  <div className="flex size-[40px] items-center justify-center rounded-[6px] border border-gold leading-none">
                    <h1 className="font-bebasNeue text-[24px] tracking-wide text-gold">
                      {l.FirstName[0]}
                      {l.LastName[0]}
                    </h1>
                  </div>
                  <div className="">
                    <h1 className="font-popins text-[14px] font-semibold leading-none">
                      {l.FirstName} {l.LastName}{" "}
                    </h1>
                    <h2 className="mt-1 text-[12px] font-medium">
                      {l.IdNumber}
                    </h2>
                  </div>
                </li>
              </ul>
            ))}
          {data.length <= 0 && (
            <div className="">
              <h1 className="font-popins text-[18px] text-strongNightGreen">
                No data found
              </h1>
            </div>
          )}
          <button
            onClick={() => {
              setData(() => ApplicationData);
              setSearchText({ text: "" });
            }}
            className="mt-2 cursor-pointer rounded-[6px] border border-borderGray bg-default px-2 py-1 font-popins text-[14px] font-semibold uppercase text-strongNightGreen hover:border-hoverGold hover:bg-hoverGold hover:text-strongNightGreen"
          >
            reset
          </button>
        </div>
      </div>
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
