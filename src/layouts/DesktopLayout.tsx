import { useState , useEffect} from 'react'
import { useLocation } from 'react-router-dom'
//import DashSideBar from '../components/DashSideBar'
// import DashProfile from '../components/DashProfile'
// import DashPost from '../components/DashPost'
// import DashUsers from '../components/DashUsers'
// import DashComponent from '../components/DashComponent'
// import DashUser from '../components/DashUser'
// import Result from '../components/Result'
// //import Calculator from '../components/Calculator'
// import UserTable from '../components/UserTable'
//import DesktopLayout from '../layouts/DesktopLayout'
import DashSideBar from "../components/DashSideBar";
import { Box, Stack } from '@mui/material'

export default function DesktopLayout({ children }: any) {
  // use location hook to get tab
  const location = useLocation()
  
  // tab state and function
  // @ts-ignore
    const [tab, setTab] = useState('')
    
    //use effect to get tab from url
    useEffect(()=>{
      const urlParms = new URLSearchParams(location.search)
      const tabFromUrl = urlParms.get('tab')
      if (tabFromUrl) {
        setTab(tabFromUrl)
      }
    }, [location.search])
  return (
    <Box className="min-h-[100vh] max-h-[100vh] overflow-y-hidden min-w-[100%] max-w-[100%] bg-default p-[1vh]">
      <Stack direction={"row"} spacing={1}>
        {/* Side-bar */}
        <Stack className="max-h-[98vh] min-h-[98vh] min-w-[15%] max-w-[15%]">
          <DashSideBar />
        </Stack>

        {/* content */}
        <Stack className="max-h-[98vh] min-h-[98vh] min-w-[84%] max-w-[84%]">
          {children}
        </Stack>
      </Stack>
    </Box>
  );
}

// /**
//  * // the Main section opening tag below this line
//     <section className="MAIN flex h-full w-full justify-start gap-[2%] p-[3%]">
//       {/* the Main section opening tag above this line */}

//       {/* the sidebar section opening tag below tis line */}
//       <section className="h-fit w-[20%] rounded-[10px]  ">
//         {/* the sidebar section opening tag above this line */}

//         <DashSideBar />

//         {/* the sidebar section closing tag below this line */}
//       </section>
//       {/* the sidebar section closing tag above this line */}

//       {/* the right section section opening tag below tis line */}
//       <section className="flex w-full flex-col gap-[5%] rounded-[10px]">
//         {/* the right section opening tag above this line */}

//         <section className=" h-[10%] w-full rounded-[10px] border-2">
//           { children }
//         </section>
//         <section className="h-[25%] w-full rounded-[10px] border-2 ">
//           bottom part
//         </section>
//         <section className="h-[54%] w-full rounded-[10px] border-2 ">
//           bottom part
//         </section>

//         {/* the right section closing tag below this line */}
//       </section>
//       {/* the right section closing tag above this line */}

//       {/* the Main section closing tag below this line  */}
//     </section>
//     // the Main section closing tag above this line
//  */