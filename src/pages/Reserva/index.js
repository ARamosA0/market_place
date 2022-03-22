import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar"
import { Link, Toolbar, Typography, Grid, Container } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import IosShareIcon from "@mui/icons-material/IosShare";
import BookmarkAddIcon from "@mui/icons-material/BookmarkAdd";
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import { ThemeProvider } from "@emotion/react";
// import theme from '../../components/themeConfig'
import "./index.css";

const Reserva = () => {
  return (
    // <ThemeProvider theme={theme}>
        
        <div>
            <Navbar />
            <Container maxWidth="m" >
                <Grid container>
                    <Grid item md={12}>
                    <h1>Cochera Arequipa Cerro Colorado.</h1>
                    </Grid>
                    <Grid item md={12} className="reserva-items">
                    <div>
                        <StarIcon />
                        <span>4,96 . 84 reseñas</span>
                        <LocationOnIcon />
                        <span>Arequipa, Cerro Colorado, Peru</span>
                    </div>
                    <div>
                        <IosShareIcon />
                        <span>Compartir</span>
                        <BookmarkAddIcon />
                        <span>Guardar</span>
                    </div>
                    </Grid>
                    <Grid item md={6}>
                        <Grid container>

                        </Grid>
                    </Grid>
                    <Grid item md={6}>
                        
                    </Grid>
                    
                </Grid>
            </Container>
        </div>
    // </ThemeProvider>
  );
};

export default Reserva;
