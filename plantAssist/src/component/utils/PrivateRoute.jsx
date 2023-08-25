import { Navigate } from "react-router-dom";

const PrivateRoute = ({children}) => {
    const isAuthenticated = sessionStorage.getItem("authenticated") || false;
return isAuthenticated ? children : <Navigate to = '/' replace />
}

export default PrivateRoute;