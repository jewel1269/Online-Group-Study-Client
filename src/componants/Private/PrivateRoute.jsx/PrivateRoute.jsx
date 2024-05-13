import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation()
    
    if(loading) return <span className="loading loading-ring lg:ml-[50%] lg:mt-[20%] bg-red-600 loading-lg"></span>;
    if(user) return children

    return <Navigate to={"/logIn"} state={location.pathname} replace={true}></Navigate>
};

export default PrivateRoute;