import { useEffect, useState } from 'react'
//import LineChart from "./PieChart"
import { useSelector } from "react-redux"
import DashSearchList from './DashSearchList';
import DashUserDetails from './DashUserDetails';
import { Stack } from '@mui/material';
//import DashUserDetails from './DashUserDetails';


export default function DashUser() {

    const [users, setUsers] = useState([])
    const [selectedStudent, setSelectedStudent] = useState<any>()
    const { currentUser } = useSelector((state: any) => state.user)
    useEffect(() => {
        const fetchUsers = async () =>{
            const res = await fetch("/api/user/getUsers")
            const data = await res.json()
            if (res.ok) {
                setUsers(data.users)
            }
        }
        fetchUsers()
    }, [currentUser])
    //console.log("student: ", selectedStudent);
    
  return (
    <div className="my-4">
      <Stack direction={"row"} spacing={2} className="Sub-Main-Div flex justify-between">
        <DashSearchList selected={(value: any) => setSelectedStudent(value)} />
        {selectedStudent && <DashUserDetails selected={selectedStudent} />}
      </Stack>
    </div>
  );
}
