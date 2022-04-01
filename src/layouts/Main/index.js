import * as React from 'react';
import { useState } from 'react';
import { Grid, TextField, Button, Box } from "@mui/material";
import "./index.css";
import { Outlet, Link } from "react-router-dom";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { LocalizationProvider, DateRangePicker } from "@mui/lab";


const Main = () => {
    const [value, setValue] = useState([null, null]);
    return (
        <div className="princiapl">
            <nav className="nav-mian">
                <Grid container alignItems="center" ml={6} mr={6}>
                    <Grid item md={3}>
                        <Link to="/" className="nav_logo">
                            Cochera<span className="nav_pe">.pe</span>
                        </Link>
                    </Grid>
                    <Grid className="search" item md={6} rowSpacing={1}>
                        <TextField variant="outlined" sx={{ width: 220 }} label="Lugar" />
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <DateRangePicker
                                startText="Ingreso"
                                endText="Salida"
                                inputFormat="dd/MM/yyyy"
                                value={value}
                                onChange={(newValue) => {
                                    setValue(newValue);
                                }}
                                renderInput={(startProps, endProps) => (
                                    <React.Fragment>
                                        <TextField {...startProps} />
                                        <TextField {...endProps} />
                                    </React.Fragment>
                                )}
                            />
                        </LocalizationProvider>
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
