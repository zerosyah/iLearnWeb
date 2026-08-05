import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
//import TableOptions from "./TableOptions";
import { useEffect, useState } from "react";
import { FaCheck, FaSearch, FaUser } from "react-icons/fa";
import TableUserSelect from "./TableUserSelect";
import ControlledCheckbox from "./Checkbox";
//import { MdOutlineCancel } from "react-icons/md";
import { IoDocumentsOutline } from "react-icons/io5";
import { ImCross } from "react-icons/im";
import { IoCheckmarkDoneSharp } from "react-icons/io5";
import{Student} from "../Constants/PropsInventory"
//import { Divider } from "@mui/material";

export default function UserTable() {
  const [action, setAction] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [, setError] = useState<boolean>(false);
  const [, setMessage] = useState<string>("");
  const [data, setData] = useState<Student[]>([]);
  const [, setResults] = useState([]);
  const [approved, setApproved] = useState<boolean>(false);
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
  const [confirmAlert, setConfirmAlert] = useState(false)
  //const [ ]

  const onSelectBunch = () => {
    setShowActionMenu((prev) => !prev);
  };

  const cancelActiveTabs = ()=>{
    if (showActionMenu && !mouseOver){
      return setShowActionMenu(!showActionMenu)
    }
  }
//console.log("Action: ", action);
//console.log("Approved: ", approved);

  const singleAction = (id:string, option:string): void =>{
    setUserList([id]);
    setAction(option);
    return setShowActionMenu(true);
  }
  //console.log("List: ", userList);
  

  //const [rows, setRows] = useState<Data[]>([]);

  // interface Data {
  //     FirstName: string;
  //     LastName: string;
  //     Grade: string;
  //     Year: number;
  //     Date: string;
  //     //Action: any;
  //     // Decline: any;
  // }

  // function createData(
  //     FirstName: string,
  //     LastName: string,
  //     Grade: string,
  //     Year: number,
  //     Date: string,
  //     //Action: any,
  //     // Decline: any,
  // ): Data {
  //     return { FirstName, LastName, Grade, Year, Date};
  // }

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
      } catch (error: any) {
        setLoading(false);
        setError(true);
        setMessage(error.toString());
      }
    };
    getApplicants();
  }, []);

  //console.log("rows", rows);

  // const [filter, setFilter] = useState<Data[]>(initialRows);
  // `https://mark-service.onrender.com/data/studemt/applicant/${action}`
  // console.log("Action: ", action?.index);

//   useEffect(() => {
//   if (!action || !approved || userList.length === 0) {
//     setUserList([]);
//     setApproved(false);
//     setAction("");
//     return;
//   }

//   const applicantAction = async () => {
//     const resetState = () => {
//       setUserList([]);
//       setApproved(false);
//       setAction("");
//     };

//     try {
//       setLoading(true);
//       setError(false);

//       const res = await fetch(
//         `https://mark-service.onrender.com/data/student/applicant/${action}`,
//         {
//           method: "PATCH",
//           headers: { "Content-Type": "application/json" },
//           credentials: "include",
//           body: JSON.stringify({ userList }),
//         }
//       );

//       const data = await res.json();

//       if (!res.ok) {
//         setError(true);
//         setMessage(data.message || "Failed to update applicant state");
//         resetState();
//         return;
//       }

//       setResults(data.data);
//       setData((prev: Student[]) =>
//         prev.filter((student: Student) => !userList.includes(student?.IdNumber))
//       );
//       resetState();
//     } catch (err: unknown) {
//       setError(true);
//       const errorMessage = err instanceof Error ? err.message : String(err);
//       setMessage(errorMessage || "Unknown error");
//       resetState();
//     } finally {
//       setLoading(false);
//     }
//   };

//   applicantAction();
// }, [approved]);// Only trigger when all conditions are met

const resetState = () => {
  setUserList([]);
  setApproved(false);
  setAction("");
};
const applicantAction = async (action:string, approved:boolean, userList:string[]) => {
  console.log("Starting function");
  console.log("Action: ", action);
  console.log("Approved: ", approved);
  console.log("User List: ", userList);
    if (userList.length == 0) {
    setUserList([]);
    setApproved(false);
    setAction("");
    return;
  }

  console.log("after the first condition");
  

  console.log("data to be sent: ", userList, action, approved);
  

    try {
      setLoading(true);
      setError(false);

      const res = await fetch(
        `https://mark-service.onrender.com/data/student/applicant/${action}`,
        {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          credentials: "include",
          body: JSON.stringify({ userList }),
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

  //const

  return (
    <section className="flex flex-col gap-[16px]" onClick={cancelActiveTabs}>
      <div className="">
        <h1 className="font-montserrat text-[24px] font-bold uppercase leading-[20px] tracking-wider text-[#03045E]">
          Applications
        </h1>
        <div className="flex items-center gap-[6px]">
          <FaUser size={14} color="#6b7280" />
          <span className="text-[14px] font-medium text-gray-500">
            Total:{" "}
            <span className="font-bebasNeue text-[18px] tracking-wider text-black">
              4852
            </span>
          </span>
        </div>
      </div>
      <div className="flex gap-[16px]">
        <TableUserSelect label={"Grade"} data={gradeList} />
        <TableUserSelect label={"Month"} data={months} />

        <div className="relative flex items-center pr-[16px]">
          <input
            type="text"
            className="h-[35px] rounded-[50px] border border-[#03045E] bg-[#CAF0F8] pl-[35px] font-montserrat text-sm font-medium text-[#03045E] focus:outline-none focus:ring-0 focus:ring-offset-0"
            placeholder="Search here"
            style={{ outline: "none", boxShadow: "none" }}
          />
          <span className="absolute flex size-[35px] cursor-pointer items-center justify-center rounded-[50px]">
            <FaSearch size={20} color="#03045E" />
          </span>
        </div>
        <div className="relative">
          {userList.length > 1 && (
          <div className="relative">
            <button
              onClick={onSelectBunch}
              className="flex items-center gap-[6px] rounded-[50px] border border-selectiveYellow px-[8px] font-montserrat text-[15px] font-bold tracking-widest text-selectiveYellow"
            >
              <IoCheckmarkDoneSharp size={20} />
              Accept All selected
              <div className="">{userList.length}</div>
            </button>
          </div>
        )}
        {showActionMenu && (
              <div onMouseOver={()=>setMouseOver(true)} onMouseLeave={()=>setMouseOver(false)} className="absolute left-0 top-[44px] z-20 min-w-[220px] rounded-lg border border-gray-200 bg-white p-3 shadow-md">
                <h1 className="mb-2 font-semibold text-gray-800">Select Action</h1>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li onClick={()=>{setConfirmAlert(true); setAction("Accept")}} className={`flex cursor-pointer gap-[6px] hover:text-selectiveYellow ${action == "Accept"? " border-l-2 border-selectiveYellow pl-[8px] text-selectiveYellow":""}`}>
                   <IoCheckmarkDoneSharp size={20} /> Accept selected users
                  </li>
                  <li onClick={()=>{setConfirmAlert(true); setAction("Reject")}} className={`flex cursor-pointer gap-[6px] hover:text-imperialRed ${action == "Reject"? " border-l-2 border-imperialRed pl-[8px] text-imperialRed":""}`}>
                   <ImCross size={20} /> Reject selected users
                  </li>
                </ul>
                {confirmAlert && <div className="mt-[8px] flex flex-col gap-[8px]">
                  <p className={`${action =="Accept" ? "text-selectiveYellow":"text-imperialRed"} font-montserrat text-sm font-medium`}>*are You sure, you want to {action} the selected students*</p>
                  <div className="flex gap-[6px]">
                    <button onClick={()=>{setApproved(false); setShowActionMenu(false); setConfirmAlert(false); resetState()}} className="w-full rounded-[50px] border border-imperialRed font-medium text-imperialRed hover:bg-imperialRed hover:text-coolWhite">No</button>
                    <button onClick={()=>{setApproved(true); applicantAction(action, approved, userList); setShowActionMenu(false); setConfirmAlert(false)}} className="w-full rounded-[50px] border border-selectiveYellow font-medium text-selectiveYellow hover:bg-selectiveYellow hover:text-coolWhite">Yes {userList.length}</button>
                  </div>
                </div>}
              </div>
            )}
        </div>
      </div>
      <TableContainer component={Paper}>
        <Table
          sx={{ minWidth: "100%", margin: "auto" }}
          className="min-w-screen h-fit"
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
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {loading ? (
              <TableCell>
                <TableRow>Loading Applicants...</TableRow>
              </TableCell>
            ) : data ? (
              data.map((row: Student, index: number) => {
                return (
                  <TableRow
                    key={index}
                    sx={{}}
                    className="bg-gray-100 hover:bg-gray-200"
                  >
                    <TableCell>
                      <ControlledCheckbox setCount={setUserList} user={row?.IdNumber} />
                    </TableCell>
                    <TableCell>
                      {row?.CreatedAt || row?.CreatedAt
                        ? new Date(row?.CreatedAt).toLocaleDateString(
                            "default",
                            { day: "2-digit", month: "long", year: "2-digit" },
                          )
                        : ""}
                    </TableCell>
                    <TableCell>
                      <div className="flex gap-[6px]">
                        <span className="font-bold">{row?.LastName}</span>
                        <span className="">{row?.FirstName}</span>
                      </div>
                    </TableCell>
                    <TableCell>{row?.IdNumber}</TableCell>
                    <TableCell>{row?.Email}</TableCell>
                    <TableCell>
                      {row?.GradeAppliedFor}
                    </TableCell>
                    <TableCell>{row?.YearOfStudy}</TableCell>
                    <TableCell>{row?.CourseOfStudy}</TableCell>
                    <TableCell>
                      {userList.length<1 ?
                      <div className={`flex items-center gap-[16px]`}>
                        <FaCheck
                        onClick={()=>singleAction(row.IdNumber, "Accept")}
                          size={20}
                          color="#0e9f6e"
                          className={`${userList.length>1 ? "cursor-not-allowed": "cursor-pointer"}`}
                        />
                        <IoDocumentsOutline
                          size={20}
                          className={`${userList.length>1 ? "cursor-not-allowed": "cursor-pointer"}`}
                        />
                        <ImCross
                          size={20}
                          color="#ff1833"
                          className={`${userList.length>1 ? "cursor-not-allowed": "cursor-pointer"}`}
                        />
                      </div>: <p>not available</p>}
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
