import { Navigate, useLocation } from "react-router-dom"
import { useAuth } from "../context/AuthContext";


const RequireAuth = ({ children }) => {
    const location = useLocation();
    const { isUserLoggedIn } = useAuth();

    return isUserLoggedIn ? (
        children
    ) : (
        <Navigate to='/login' state={{ from: location}} replace />
    )
}

export { RequireAuth };