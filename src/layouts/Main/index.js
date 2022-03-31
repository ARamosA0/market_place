import { Grid, TextField, Button } from "@mui/material";
import "./index.css"
import { Outlet, Link } from "react-router-dom";
import TravelExploreIcon from '@mui/icons-material/TravelExplore';

const Main = () => {
    return (
        <div className="princiapl">
            <nav className="nav-mian">
                <Grid container alignItems="center" ml={6} mr={6}>
                    <Grid item md={3}>
                    <Link to="/" className="nav_logo">Cochera<span className="nav_pe">.pe</span></Link>
                    </Grid>

                    <Grid className="search" item md={6}>
                        <TextField variant="outlined" sx={{ width: 250 }} label="Lugar" />
                        <TextField
                            id="date"
                            label="Fecha"
                            type="date"
                            defaultValue="2017-05-24"
                            sx={{ width: 250 }}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                        <TextField
                            id="date"
                            label="Fecha"
                            type="date"
                            defaultValue="2017-05-24"
                            sx={{ width: 250 }}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                        <Button className="nav_button_color">
                        <TravelExploreIcon fontSize="large" />
                        </Button>
                        
                    </Grid>

                    <Grid item md={3}>
                        <ul className="ul-main">

                        <li className="li-nav">
                            <Link to="/booking">Booking</Link>
                        </li> 
                            <li>
                                <a href="/">Account</a>
                            </li>
                        </ul>
                    </Grid>

                </Grid>
                
            </nav>
            <Outlet />
            <div>
                <footer>
                <div className="container-tag">
                    <ul className="ul-tags">
                    <li className="li-nav">
                            <Link to="/about">About</Link>
                        </li>
                        <li className="li-nav">
                            © Copyright 2001-2020 Cochera.pe - Todos los Derechos Reservados 
                        </li>

                        <li className="li-nav">
                            <Link to="/contact">Contact</Link>
                        </li>
                    </ul>
                </div>

                </footer>
            </div>
        </div>
    );
};


export default Main;