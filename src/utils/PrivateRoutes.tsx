import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext"

export default function PrivateRoutes(){
    
    const { isAutenticated } = useAuth();

    return isAutenticated ? <Outlet/> : <Navigate to={'/login'}/>
}