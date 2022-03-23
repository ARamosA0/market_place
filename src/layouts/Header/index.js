import { Link, Outlet } from "react-router-dom"
import { Grid } from "@mui/material";

const Header = () => {
    return (
        <div>
                <div item md={12}>
                    <img />
                </div>
                <div>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/reserva">Reserva</Link>
                        </li>
                        <li>
                            Une tu Chochera
                        </li>
                    </ul>
                </div>
            <Outlet/>
        </div>
    )
}

export default Header;