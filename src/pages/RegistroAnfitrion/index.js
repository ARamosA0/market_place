import { useState, useEffect, useContext } from "react";
import { CocheraContext } from "../../Context/CocheraContext";
import { Outlet, Link } from "react-router-dom";
import { getCocheraData } from "../../service/firestore";
import {Container, Grid, Card, CardContent, CardActions, Button} from "@mui/material"
import { useParams } from "react-router-dom";
import { height } from "@mui/system";
import WysiwygIcon from '@mui/icons-material/Wysiwyg';
import BusinessIcon from '@mui/icons-material/Business';
import MapIcon from '@mui/icons-material/Map';
import MonochromePhotosIcon from '@mui/icons-material/MonochromePhotos';
import RegistroDireccion from "../../components/RegistDireccion";
import RegistroGeo from "../../components/RegistroGeo";
import RegistroInformacion from "../../components/RegistroInformacion";
import RegistroFotos from "../../components/RegistroFotos";

import "./index.css"


const RegistroAnfitrion = () => {   

    const {user, cochera } =useContext(CocheraContext)
    const [regUser, setRegUser] = useState([])
    // const [reg, setRegUser] = useState([])

    const fetchData =  () => {
        const showUser = JSON.parse(localStorage.getItem('user'))
        setRegUser(showUser)
        // console.log(showUser)
    };

    

    useEffect(() => {
        fetchData();
      }, [user]);


    return(
        <>
            {regUser.length > 0 && (
                <Container>
                    <Grid container spacing={3} sx={{marginBottom:20, marginTop:20}}>
                        <Grid item md={12}>
                            <h2>Cuenta</h2>
                            <p>
                                <span> <b>{regUser[0].userName} {regUser[0].lastName},&nbsp;</b></span>
                                <span>{regUser[0].email} .&nbsp;</span>
                                <Link to={`/anfitrion/${regUser.id}`}>
                                    <span><Button color="secondary">Ir a perfil</Button></span>
                                </Link>
                
                            </p>
                        </Grid>
                        <Grid item md={3} sm={12}>
                            <Card className="card">
                                <CardContent>
                                    <WysiwygIcon />
                                    <h5 mt={5}>Informacion</h5>
                                    <p>
                                        Proporciona informacion como el nombre de la cochera, el tipo de cochera, para cuantos vehiculos, el costo por hora.
                                    </p>
                                </CardContent>
                                <CardActions>
                                    <RegistroInformacion/>
                                </CardActions>
                            </Card>
                        </Grid>
                        <Grid item md={3} sm={12}>
                            <Card className="card">
                                <CardContent>
                                    <BusinessIcon/>
                                    <h5>Direccion</h5>
                                    <p>
                                        Proporciona la direccion especifica, asi como el pais,  region,  distrito de la cochera a alquilar.
                                    </p>
                                </CardContent>
                                <CardActions>
                                  <RegistroDireccion/>
                                </CardActions>
                            </Card>
                        </Grid>
                        <Grid item md={3} sm={12}>
                            <Card className="card">
                                <CardContent>
                                    <MapIcon/>
                                    <h5>Localizacion</h5>
                                    <p>
                                        Marca exactamente la ubicacion en el mapa.
                                    </p>
                                </CardContent>
                                <CardActions>
                                  <RegistroGeo/>
                                </CardActions>
                            </Card>
                        </Grid>
                
                        <Grid item md={3} sm={12}>
                            <Card className="card">
                                <CardContent>
                                    <MonochromePhotosIcon/>
                                    <h5>Fotos</h5>
                                    <p>
                                        Sube tres fotos de la cochera en donde muestres la ubicacion desde el exterior y el interior del garage.
                                    </p>
                                </CardContent>
                                <CardActions>
                                  <RegistroFotos/>
                                </CardActions>
                            </Card>
                        </Grid>
                    </Grid>
                </Container>
            )}
        </>
        
    )
}

export default RegistroAnfitrion;

