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

    const {storeCochera, storeuser } =useContext(CocheraContext)
    const [user, setUser] = useState([]);
    const [cocheras, setCocheras] = useState([]);
    const fetchData = async () => {
      const dataUser = await getCocheraData("usuario");
      const dataGarage = await getCocheraData("cochera");
      setUser(dataUser);
    //   console.log(dataUser);
    };

    useEffect(() => {
        fetchData();
      }, []);

    return(
        <>
            {user.length > 0 && (
                <Container>
                    <Grid container spacing={3} sx={{marginBottom:20, marginTop:10}}>
                        <Grid item md={12}>
                            <h2>Cuenta</h2>
                            <p>
                                <span>{},&nbsp;</span>
                                <span>Correo .&nbsp;</span>
                                <Link to="/anfitrion">
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

