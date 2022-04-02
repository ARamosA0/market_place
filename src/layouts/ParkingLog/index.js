import { Outlet } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'


const Parking = () => {

    return (
        <div class="container-fluid">
            <div class="nav-bar">
                <h1>Navbar</h1>
            </div>
            
            <Outlet />
        </div>     
    );
};

export default Parking;