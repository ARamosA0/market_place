import { Outlet, Link } from "react-router-dom";
import {Container, Grid, Card, CardContent, CardActions, Button} from "@mui/material"
import { height } from "@mui/system";
import WysiwygIcon from '@mui/icons-material/Wysiwyg';
import BusinessIcon from '@mui/icons-material/Business';
import MapIcon from '@mui/icons-material/Map';
import DescriptionIcon from '@mui/icons-material/Description';
import MonochromePhotosIcon from '@mui/icons-material/MonochromePhotos';
import RegistroDireccion from "../../components/RegistDireccion";
import RegistroGeo from "../../components/RegistroGeo";
import RegistroInformacion from "../../components/RegistroInformacion";

import "./index.css"


const RegistroAnfitrion = () => {   

    return(
        <Container sx={{marginBotton:5}}>
            <Grid container spacing={3}>
                <Grid item md={12}>
                    <h2>Cuenta</h2>
                    <p>
                        <span>Nombre,&nbsp;</span>
                        <span>Correo .&nbsp;</span>
                        <Link to="/anfitrion">
                            <span><Button color="secondary">Ir a perfil</Button></span>
                        </Link>
                        
                    </p>
                </Grid>
                <Grid item md={4} sm={6}>
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
                <Grid item md={4} sm={6}>
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
                <Grid item md={4} sm={6}>
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
                <Grid item md={4} sm={6}>
                    <Card className="card">
                        <CardContent>
                            <DescriptionIcon/>
                            <h5>Descripcion</h5>
                            <p>
                                Da un aDescripcion detallada del inmueble con todos los datos necesarios.
                            </p>
                        </CardContent>
                        <CardActions>
                          <RegistroInformacion/>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item md={4} sm={6}>
                    <Card className="card">
                        <CardContent>
                            <MonochromePhotosIcon/>
                            <h5>Fotos</h5>
                            <p>
                                Sube tres fotos de la cochera en donde muestres la ubicacion desde el exterior y el interior del garage.
                            </p>
                        </CardContent>
                        <CardActions>
                          <Button color="secondary">Click Aqui</Button>
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    )
}

export default RegistroAnfitrion;

