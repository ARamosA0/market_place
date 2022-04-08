import { Navigate, Outlet} from "react-router-dom";

const Private = () => {
    
    //trayendo el usuario del localStorage
    const usuario = JSON.parse(localStorage.getItem("userID")); 
    
    if (!usuario) {
      return <Navigate to="/" />;
    }else{
        return(
            <>
                <Outlet/>
            </>
        )
    }
};
export default Private;