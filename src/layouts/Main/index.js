import * as React from 'react';
import { Grid, TextField, Button, Box, Container, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Avatar, Typography } from "@mui/material";
import { Outlet, Link } from "react-router-dom";
import HowToRegIcon from '@mui/icons-material/HowToReg';
import BookOnlineOutlinedIcon from '@mui/icons-material/BookOnlineOutlined';
import "./index.css";
import { deepOrange } from '@mui/material/colors';
import ScreenSearchDesktopIcon from '@mui/icons-material/ScreenSearchDesktop';


const Main = () => {
    return (
        <Container maxWidth="xxl">
            <Grid container mt={2} mb={2}>
                    <Grid item md={4}>
                        <Grid container direction="row" justifyContent="flex-start" alignItems="center">
                            <Grid item md={2}>
                                <Avatar sx={{ bgcolor: deepOrange[500], width: 70, height: 70, marginLeft:"55px"}} variant="circular"><Typography variant='h3'>C</Typography></Avatar>
                            </Grid>
                            <Grid item md={10}>
                                <Typography variant='h5' color="#00695f">ochera<span className="nav_pe">.pe</span></Typography>
                                {/* <Typography variant='subtitle1' color="#2196f3">Viaja tranquilo y seguro</Typography> */}
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item md={4}>
                        <Grid container mt={2.5} direction="row" justifyContent="center" alignItems="center">
                            <Grid item md={12}>
                                <List>
                                    <ListItem disablePadding>
                                        <TextField variant="outlined" fullWidth label="Ingrese la ubicacion de la cochera" size='small' />
                                        <ListItemButton>
                                        <ListItemIcon>
                                            <ScreenSearchDesktopIcon color="primary" /> 
                                        </ListItemIcon>
                                        </ListItemButton>
                                    </ListItem>
                                </List>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item md={4}>
                        <ul className="ul-nav">
                            <li className="li-nav">
                                <List>
                                    <ListItem disablePadding>
                                        <ListItemButton size="medium">
                                        <ListItemIcon>
                                            <HowToRegIcon color="primary" /> 
                                        </ListItemIcon>
                                        <ListItemText primary="Booking" sx={{color:"blue"}} />
                                        </ListItemButton>
                                    </ListItem>
                                </List>
                            </li>
                            <li className="li-nav">
                                <List>
                                    <ListItem disablePadding>
                                        <ListItemButton>
                                        <ListItemIcon>
                                            <BookOnlineOutlinedIcon color="secondary" /> 
                                        </ListItemIcon>
                                        <ListItemText primary="Register" />
                                        </ListItemButton>
                                    </ListItem>
                                </List>
                            </li>
                        </ul>
                    </Grid>
                </Grid>
            <Outlet />
                <Grid container direction="row" justifyContent="center" alignItems="center">
                    <Grid item md={3}>
                        <Typography>Asistencia</Typography>
                    </Grid>
                    <Grid item md={3}>
                        <h1>Asistencia</h1>
                    </Grid>
                    <Grid item md={3}>
                        <h1>Asistencia</h1>
                    </Grid>
                    <Grid item md={3}>
                        <h1>Asistencia</h1>
                    </Grid>
                </Grid>
        </Container>
    );
};

export default Main;
