import React, { useState, useEffect } from "react"; 
import { Link, Toolbar, Typography } from "@mui/material";

const Reserva = () => {
   
    
    return (
        <React.Fragment>
            <Toolbar>
                <Typography variant="h6" color="inherit" noWrap sx={{flexGrow: 1}}>
                    Cochera.com
                </Typography>
                <nav>
                    <Link></Link>
                </nav>
            </Toolbar>

            <div>
                <h1>Cochera Arequipa Cerro Colorado.</h1>
            </div>
            <div>
                <div>
                    <span>4,96 . 84 reseñas</span>
                    <span>Arequipa, Cerro Colorado, Peru</span>
                </div>
                <div>
                    <span>Compartir</span>
                    <span>Guardar</span>
                </div>
            </div>
        </React.Fragment>
    );
};



export default Reserva;
