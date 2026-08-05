import { useState , useEffect} from 'react'
import { useLocation } from 'react-router-dom'
import DashProfile from '../components/DashProfile'
import DashPost from '../components/DashPost'
import DashUsers from '../components/DashUsers'
import DashComponent from '../components/DashComponent'
import DashUser from '../components/DashUser'
import Result from '../components/Result'
import UserTable from '../components/UserTable'
import DesktopLayout from '../layouts/DesktopLayout'


export default function Dashboard() {
  // use location hook to get tab
  const location = useLocation()
  
  // tab state and function
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
    <DesktopLayout>
      <div className="flex h-full w-full min-h-0 flex-1 flex-col md:flex-row">
        {/* content */}
        {tab === "profile" && <DashProfile />}
        {/* Posts */}
        {tab === "posts" && <DashPost />}
        {/* all users */}
        {tab === "users" && <DashUsers />}
        {/* dashborad */}
        {tab === "dash" && <DashComponent />}
        {/*Original userser */}
        {tab === "search" && <DashUser />}
        {/* result */}
        {tab === "result" && <Result />}
        {/* calculator */}
        {tab === "calculator" && <UserTable />}
      </div>
    </DesktopLayout>
  );
}
