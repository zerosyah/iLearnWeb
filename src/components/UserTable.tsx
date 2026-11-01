import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useEffect, useMemo, useState } from "react";
import { FaSearch } from "react-icons/fa";
import TableUserSelect from "./TableUserSelect";
import ControlledCheckbox from "./Checkbox";
import { ImCross } from "react-icons/im";
import { IoCheckmarkDoneSharp } from "react-icons/io5";
import{Student} from "../Constants/PropsInventory"
import { ApplicationData } from "../Constants/EventLayout.json"
import { useNavigate } from "react-router-dom";
import { CgOptions } from "react-icons/cg";
import { TiCancel, TiInfoLarge } from "react-icons/ti";

export default function UserTable() {
  const [action, setAction] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [, setError] = useState<boolean>(false);
  const [, setMessage] = useState<string>("");
  const [, setData] = useState<Student[]>([]);
  const [, setResults] = useState([]);
  const [, setApproved] = useState<boolean>(false);
    const gradeList = [
    "Grade",
    "Grade 8",
    "Grade 9",
    "Grade 10",
    "Grade 11",
    "Grade 12",
  ];
  const months = ["Month", "January", "February", "March", "April"]
  const [userList, setUserList] = useState<string[]>([]);
  const [showActionMenu, setShowActionMenu] = useState(false);
  const [mouseOver, setMouseOver] = useState<boolean>(false);
  const [confirmAlert, setConfirmAlert] = useState(false);
  const [filteredData, setFilteredData] = useState<Student[]>(ApplicationData);
  const [selectedGrade, setSelectedGrade] = useState<string>("Grade")
  const [selectedMonth, setSelectedMonth] = useState<string>("Month")
  const [templateId, setTemplateId] = useState<string>("")
  //const [ ]

  // console.log("selected Grade: ", selectedGrade);
  // console.log("selected Filtered Data: ", filteredData);
  

  const onSelectBunch = () => {
    setShowActionMenu((prev) => !prev);
  };

  // Cancel the active tabs when clicking outside the action menu.
  const cancelActiveTabs = ()=>{
    if (showActionMenu && !mouseOver){
      // Set the action value or State to default.
      setAction(()=> "");

      // Toggles the show Action Panels.
      setShowActionMenu(!showActionMenu);

      // Reset the userList to default.
      return setUserList([]); 
    }
    return;
  }

  // Function to handle single action on a user.
  const singleAction = (id:string): void =>{
    // Set the userList to the selected user id.
    setUserList([id]);

    // Set the templateId to the selected user id.
    setTemplateId(id);
    
    // Show the action menu for the selected user.
    return setShowActionMenu(true);
  }

  // useEffect(()=>{
  //   const getUsers = async ()=>{
  //     try{
  //       setLoading(true);
  //       setError(false);
  //       const res = await fetch("http://127.0.0.1:4001/data/student/get/all",{
  //         method: "GET",
  //         credentials: "include"
  //       });
        
  //       if (!res.ok){
  //         setError(true);
  //         setLoading(false);
  //       }
  //       const data = await res.json();
  //       setTempData(data.data[1]);
  //       console.log("data: ", data);
        
  //     }catch(error){
  //       setError(true);
  //       console.log("Error: ", error);
        
  //     }finally{
  //       setLoading(false);
  //       setError(false);
  //     }
  //   }
  //   getUsers();
  // }, []);
  //console.log("Temp data: ", tempData);
  
  // test useEffect for fetching data
  useEffect(()=>{
    const getData = async ()=>{
      try {
        setLoading(true);
        setFilteredData(ApplicationData);
      }catch(error){
        console.log("Error: ", error);
      }finally{
        setLoading(false);
      }
    }
    getData();
  }, []);
  //console.log("first filter data: ", filteredData);
  

  useMemo(()=>{
    const getFilteredData = () => {
      let filter :Student[] = ApplicationData;
      if (selectedGrade != "Grade"){
        filter = ApplicationData.filter((item)=> item.GradeAppliedFor === selectedGrade );
      if (filter.length === 0 || (selectedMonth && filter.length === 0)) return setFilteredData(()=> ApplicationData);
      if (selectedMonth ) {
        const monthFilter = filter.filter((item)=> new Date(item.CreatedAt).toLocaleString("default", {month: "long"}) === selectedMonth);
        if (monthFilter.length === 0) return setFilteredData(()=> filter);
        return setFilteredData(()=> monthFilter);
      }
      }
      if (selectedMonth && selectedGrade == "Grade") {
        const monthFilter = ApplicationData.filter((item)=> new Date(item.CreatedAt).toLocaleString("default", {month: "long"}) === selectedMonth);
        if (monthFilter.length === 0) return setFilteredData(()=> ApplicationData);
        return setFilteredData(()=> monthFilter);
      }
      return setFilteredData(filter);
    }
    getFilteredData();
  }, [selectedGrade, selectedMonth]);

  useEffect(() => {
    const getApplicants = async () => {
      //e.preventDefault();
      try {
        setLoading(true);
        setError(false);
        const res = await fetch(
          "https://mark-service.onrender.com/data/studemt/get/all",
          {
            method: "Get",
            headers: {
              "Content-Type": "application/json",
            },
            credentials: "include",
          },
        );
        const data = await res.json();
        if (!res.ok) {
          setLoading(false);
          setError(true);
          setMessage(data.message);
          return;
        }
        setLoading(false);
        setError(false);
        setData(data.data);
      } catch (error) {
        setLoading(false);
        setError(true);
        setMessage(error instanceof Error ? error.message : String(error));
      }
    };
    getApplicants();
  }, []);

const resetState = () => {
  setUserList([]);
  setApproved(false);
  setAction("");
};
const applicantAction = async (action:string, userList:string[]) => {
  // console.log("Starting function");
  // console.log("Action: ", action);
  // console.log("Approved: ", approved);
  // console.log("User List: ", userList);
    if (userList.length == 0) {
    setUserList([]);
    setApproved(false);
    setAction("");
    return;
  }

  // console.log("after the first condition");
  

  // console.log("data to be sent: ", userList, action, approved);
  

    try {
      setLoading(true);
      setError(false);

      const res = await fetch(
        `https://0f29-102-252-74-1.ngrok-free.app/data/student/applications/${action}`,
        {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          credentials: "include",
          body: JSON.stringify({List: userList }),
        }
      );

      const data = await res.json();

      if (!res.ok) {
        setError(true);
        setMessage(data.message || "Failed to update applicant state");
        resetState();
        return;
      }

      setResults(data.data);
      setData((prev: Student[]) =>
        prev.filter((student: Student) => !userList.includes(student?.IdNumber))
      );
      resetState();
    } catch (err: unknown) {
      setError(true);
      const errorMessage = err instanceof Error ? err.message : String(err);
      setMessage(errorMessage || "Unknown error");
      resetState();
    } finally {
      setLoading(false);
    }
  };

//console.log("Data: ", data);

  const navigate = useNavigate();


  const actionMenuOptions = (alert: boolean, value: string)=>{
    setConfirmAlert(alert);
    setAction(value);
    if (value === "View") {
      navigate(`/dashboard?tab=view`, { state: { data: ApplicationData.find((item) => item.IdNumber === templateId) } });
    }
  }

  return (
    <section className="flex flex-col gap-[16px]" onClick={cancelActiveTabs}>
      <div className="">
        <h1 className="font-montserrat text-[20px] font-bold uppercase leading-none text-strongNightGreen">
          Applications
        </h1>
        <div className="flex items-center gap-[6px]">
          <p className="font-bebasNeue text-[20px] text-gray-500">
            Total: {ApplicationData.length}
          </p>
        </div>
      </div>
      <div className="flex items-center gap-[16px]">
        <TableUserSelect label={"Grade"} data={gradeList} onChangeValue={setSelectedGrade} />
        <TableUserSelect label={"Month"} data={months} onChangeValue={setSelectedMonth} />

        <div className="relative flex items-center pr-[16px]">
          <input
            type="text"
            className="h-[40px] rounded-[6px] border border-softWhite pl-[40px] font-popins text-[14px] font-medium leading-none text-strongNightGreen focus:outline-none focus:ring-0 focus:ring-offset-0 active:outline-none"
            placeholder="Search here"
            style={{ outline: "none", boxShadow: "none" }}
          />
          <span className="absolute flex size-[40px] cursor-pointer items-center justify-center rounded-[6px]">
            <FaSearch size={20} color="#0A2519" />
          </span>
        </div>
        <div className="relative">
          {userList?.length > 1 && (
          <div className="relative">
            <button
              onClick={onSelectBunch}
              className="flex items-center gap-2 rounded-[6px] border bg-gold p-[8px] font-popins text-[14px] font-bold leading-none tracking-widest text-strongNightGreen hover:bg-hoverGold"
            >
              <IoCheckmarkDoneSharp size={18} />
              Choose Action
              <div className="">{userList?.length}</div>
            </button>
          </div>
        )}
        {showActionMenu && (
              <div onMouseOver={()=>setMouseOver(true)} onMouseLeave={()=>setMouseOver(false)} className="absolute left-0 top-[44px] z-20 min-w-[220px] rounded-[6px] border border-gray-200 bg-nightGreen p-2 shadow-md">
                <h1 className="mb-2 font-popins text-[20px] font-semibold uppercase text-softWhite ">Select Action</h1>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li onClick={()=>{actionMenuOptions(false, "View")}} className={`flex items-center gap-2 rounded-[6px] p-2 font-roboto text-[15px] font-semibold leading-none text-softWhite hover:bg-gold hover:text-strongNightGreen`}>
                   <TiInfoLarge size={18} /> <p className="font-roboto text-[14px]">View Applicants</p>
                  </li>
                  <li onClick={()=>{actionMenuOptions(true, "Accept")}} className={`flex items-center gap-2 rounded-[6px] p-2 font-roboto text-[15px] font-semibold leading-none hover:bg-green-500 hover:text-strongNightGreen ${action === "Accept" ? "bg-green-500 text-strongNightGreen" : "text-softWhite"}`}>
                   <IoCheckmarkDoneSharp size={16} /> <p className="font-roboto text-[14px]">Accept selected users</p>
                  </li>
                  <li onClick={()=>{actionMenuOptions(true, "Reject")}} className={`flex items-center gap-2 rounded-[6px] p-2 font-roboto text-[15px] font-semibold leading-none  hover:bg-imperialRed hover:text-strongNightGreen ${action === "Reject" ? "bg-imperialRed text-strongNightGreen" : "text-softWhite"}`}>
                   <ImCross size={16} /> <p className="font-roboto text-[14px]">Reject selected users</p>
                  </li>
                </ul>
                {confirmAlert && <div className="mt-[8px] flex flex-col gap-[8px]">
                  <p className={`${action =="Accept" ? "text-green-500":"text-imperialRed"} font-montserrat text-sm font-medium`}>*are You sure, you want to {action} the selected students*</p>
                  <div className="flex gap-[6px]">
                    <button onClick={()=>{setApproved(false); setShowActionMenu(false); setConfirmAlert(false); resetState()}} className="w-full rounded-[50px] border border-imperialRed font-medium text-imperialRed hover:bg-imperialRed hover:text-coolWhite">No</button>
                    <button onClick={()=>{setApproved(true); applicantAction(action, userList); setShowActionMenu(false); setConfirmAlert(false)}} className="w-full rounded-[50px] border border-green-500 font-medium text-green-500 hover:bg-green-500 hover:text-coolWhite">Yes {userList?.length}</button>
                  </div>
                </div>}
              </div>
            )}
        </div>
      </div>
      <TableContainer component={Paper} className="scroll-container h-fit min-w-full">
        <Table
          sx={{ minWidth: "100%", margin: "auto" }}
          className="h-fit min-w-full"
          areal-label="simple table"
        >
          <TableHead className="bg-gray-300">
            <TableRow>
              <TableCell>select</TableCell>
              <TableCell>Date</TableCell>
              <TableCell className="font-popins text-[20px] font-bold">
                Name
              </TableCell>
              <TableCell>Id Number</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Grade</TableCell>
              <TableCell>Year</TableCell>
              <TableCell>Class</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {loading ? (
              <TableRow>
                <TableCell colSpan={9}>Loading Applicants...</TableCell>
              </TableRow>
            ) : filteredData?.length > 0 ? (
              filteredData?.map((row: Student, index: number) => {
                return (
                  <TableRow
                    key={index+row?.FirstName}
                    sx={{}}
                    className="bg-gray-100 hover:bg-gray-200"
                  >
                    <TableCell>
                      <ControlledCheckbox setCount={setUserList} user={row?.IdNumber} />
                    </TableCell>
                    <TableCell className="truncate">
                      {row?.CreatedAt || row?.CreatedAt
                        ? new Date(row?.CreatedAt).toLocaleDateString(
                            "default",
                            { day: "2-digit", month: "long", year: "2-digit" },
                          )
                        : ""}
                    </TableCell>
                    <TableCell className="truncate">
                      <div className="flex gap-[6px]">
                        <span className="font-bold">{row?.LastName[0]}</span>
                        <span className="">{row?.FirstName}</span>
                      </div>
                    </TableCell>
                    <TableCell className="truncate">{row?.IdNumber}</TableCell>
                    <TableCell className="truncate">{row?.Email}</TableCell>
                    <TableCell className="truncate">
                      {row?.GradeAppliedFor}
                    </TableCell>
                    <TableCell className="truncate">{row?.YearOfStudy}</TableCell>
                    <TableCell className="truncate">{row?.CourseOfStudy}</TableCell>
                    <TableCell>
                      {userList?.length<1 ?
                      <div className={`flex items-center gap-[16px]`}>
                        <CgOptions
                        onClick={()=>singleAction(row?.IdNumber)}
                          size={20}
                          color="#03045E"
                          className={`${userList?.length>1 ? "cursor-not-allowed": "cursor-pointer"}`}
                        />
                      </div>: <div><TiCancel
                          size={20}
                          color="#03045E"
                          className={`cursor-not-allowed`}
                        /></div>}
                    </TableCell>
                  </TableRow>
                );
              })
            ) : (
              <TableRow>
                <TableCell
                  colSpan={2}
                  sx={{ textSizeAdjust: 15 }}
                  className="text-center text-[15px] font-bold uppercase"
                >
                  No Applicants
                </TableCell>
                <TableCell
                  colSpan={2}
                  sx={{ textSizeAdjust: 15 }}
                  className="text-center text-[15px] font-bold uppercase"
                >
                  No Applicants
                </TableCell>
                <TableCell
                  colSpan={2}
                  sx={{ textSizeAdjust: 15 }}
                  className="text-center text-[15px] font-bold uppercase"
                >
                  No Applicants
                </TableCell>
                <TableCell
                  colSpan={2}
                  sx={{ textSizeAdjust: 15 }}
                  className="text-center text-[15px] font-bold uppercase"
                >
                  No Applicants
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </section>
  );
}
