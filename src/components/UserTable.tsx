import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TableOptions from './TableOptions';
import { useEffect, useState } from 'react';


export default function UserTable() {
    const [action, setAction] = useState<any>();
    // @ts-ignore
    const [loading, setLoading] = useState<boolean>(false);
    // @ts-ignore
    const [error, setError] = useState<boolean>(false);
        // @ts-ignore
    const [message, setMessage] = useState<string>("");
  const [data, setData] = useState<any>([]);
  // @ts-ignore
  const [results, setResults] = useState([]);
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
   // console.log("Action: ", action?.index);
    
    useEffect(() => {
        if (!action) return;
      const appliacantAction = async () => {
        try {
          setLoading(true);
          setError(false);
          const res = await fetch(
            `https://mark-service.onrender.com/data/studemt/applicant/${action.option}`,
            {
              method: "PATCH",
              headers: {
                "Content-Type": "application/json",
              },
              credentials: "include",
              body: JSON.stringify(action?.data),
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
          setResults(data.data);
        } catch (error: any) {
          setLoading(false);
          setError(true);
          setMessage(error.toString());
        }
      }
       if (action?.option === "Accept" || action?.option === "Reject") {
         setData((prev:any) => prev.filter((_:any, i:any) => i !== action?.index));
       }
      appliacantAction();

    }, [action]);


    console.log("Data: ", data);
    
  return (
    <section className="mt-[30px]">
      <TableContainer component={Paper}>
        <Table
          sx={{ minWidth: 600, maxWidth: 900, margin: "auto" }}
          className="h-fit"
          areal-label="simple table"
        >
          <TableHead className="bg-gray-300">
            <TableRow>
              <TableCell>Date</TableCell>
              <TableCell className="font-popins text-[20px] font-bold">
                First Name
              </TableCell>
              <TableCell>Last Name</TableCell>
              <TableCell>Id Number</TableCell>
              <TableCell>Grade</TableCell>
              <TableCell>Year</TableCell>
              <TableCell>Class</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {loading ? (<TableCell>
              <TableRow>Loading Applicants...</TableRow>
            </TableCell>) : (
              data ? (
              data.map((row: any, index: number) => {
                return (
                  <TableRow
                    key={index}
                    sx={{}}
                    className="bg-gray-100 hover:bg-gray-200"
                  >
                    <TableCell>
                      {row?.CreatedAt || row?.createdAt
                        ? new Date(row?.CreatedAt).toLocaleDateString(
                            "default",
                            { day: "2-digit", month: "long", year: "2-digit" },
                          )
                        : ""}
                    </TableCell>
                    <TableCell>{row?.FirstName || row?.firstname}</TableCell>
                    <TableCell>{row?.LastName || row?.lastname}</TableCell>
                    <TableCell>{row?.IdNumber || row?.idnumber}</TableCell>
                    <TableCell>
                      {row?.gradeAppliedFor ||
                        row?.GradeAppliedFor ||
                        row?.GradeAppliedFor}
                    </TableCell>
                    <TableCell>{row?.YearOfStudy}</TableCell>
                    <TableCell>{row?.CourseOfStudy}</TableCell>
                    <TableCell>
                      <TableOptions
                        onSendData={(data: any) => setAction(data)}
                        index={index}
                        id={row?.IdNumber}
                        data={row}
                      />
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
            )
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </section>
  );
}
