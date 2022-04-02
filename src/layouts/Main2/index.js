import { Link, Outlet } from "react-router-dom";
import Hola from "../Footer";
import "./index.css"

const Main = () => {
    return (
        <>
            <div className="container">
                <nav className="main-nav">
                    <div>
                        <h1>Logo</h1>
                    </div>
                    <div>
                        <h1>Navegacion</h1>
                    </div>
                    <div>
                    <ul className="ul-nav">
                        <li className="li-nav">
                            <Link to="/">Home</Link>
                        </li>
                        <li className="li-nav">
                            <Link to="/about">About</Link>
                        </li>
                        <li className="li-nav">
                            <Link to="/booking">Booking</Link>
                        </li>
                        <li className="li-nav">
                            <Link to="/parkinglog">Parking Log</Link>
                        </li>
                        <li className="li-nav">
                            <Link to="/contact">Contact</Link>
                        </li>
                    </ul>
                    </div>
                </nav>
            </div>
            <Outlet/>
            <Hola/>
        </>
    );
};

export default Main;