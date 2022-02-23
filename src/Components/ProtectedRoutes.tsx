import { useContext } from "react"
import { authContext } from "../Contexts/Auth"
import { Navigate } from "react-router-dom";

interface IProtectedRouteProps {
    children: JSX.Element;
}

export function ProtectedRoute({children}:IProtectedRouteProps){

    const authValue = useContext(authContext);

    if(authValue.loading){
        return <h1>Loading</h1>
    }

    if(!authValue.user){
        return <Navigate to='/login'/>
    }

    return <> {children} </>
}