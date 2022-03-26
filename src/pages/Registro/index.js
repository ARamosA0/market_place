import {Grid, TextField,ImageListItemBar,ImageListItem, Button } from "@mui/material";
import Carrusel from "../../components/Carrusel";
import "./index.css";

const Registro = () => {
    
    return(
        <div >
            <Grid container spacing={2} className="container">
                <Grid item md={6} height={100} textAlign="center">
                   <Carrusel/> 
                </Grid>
                <Grid item md={6} height={1025} textAlign="center" >
                    <Grid container justifyContent="center" alignItems="center" height={1000} spacing={1} rowGap="1">
                        <Grid item md={12}>
                            <h1>Conviertete en anfitrión en <br/> Cochera.com</h1>
                            <p>
                                Unete a nosotros, te ayudaremos en cada fase del proceso
                            </p>
                                <Button color="secondary" variant="contained" sx={{marginTop: "30px"}}>Registrate</Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
};

export default Registro;