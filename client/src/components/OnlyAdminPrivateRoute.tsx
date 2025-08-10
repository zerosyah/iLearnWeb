
import { useSelector } from 'react-redux'
import { Outlet, Navigate } from 'react-router-dom'

export default function OnlyAdminPrivateRoute() {
    const { currentUser} = useSelector((state: any)=>state.user)
  return currentUser && currentUser.Role === "admin" ? <Outlet /> : <Navigate to="/signin" />
}
