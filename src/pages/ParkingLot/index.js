import { Container, Grid, Typography, Divider, Chip } from "@mui/material";
import paracas from"../../assets/paracas.png";

//Mapa referencias
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

//CSS referencias
import "./index.css"

//Iconos
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';

const ParkingLog = () => {
    const drawerWidth = 240;

    const position = [-12.04318, -77.02824];

    const markerIcon = new L.icon({
        iconUrl: require("../../assets/marker.png"),
        iconSize: [30, 30],
    });

    return (
        <Container maxWidth="fluid"> 
        <Divider/>
            <Grid container mb={3} mt={3}>
                <Grid item md={5}>
                    <Grid container mb={2} mt={2}>
                        <Grid item md={5}>
                            <img className="Parking-img" src={paracas}></img>
                        </Grid>        
                        <Grid item md={7}>
                            <Grid container direction="column" justifyContent="space-between" alignItems="stretch">
                                <Grid item>
                                    <Grid container direction="row" justifyContent="space-evenly" alignItems="flex-start">
                                        <Grid item md={11}>
                                            <Typography className="" variant="subtitle1" gutterBottom component="div">Bungalows en Paracas</Typography>
                                        </Grid>
                                        <Grid item md={1}>
                                            <FavoriteBorderOutlinedIcon color="warning"/>
                                        </Grid>
                                        <Grid item md={12}>
                                            <Chip variant="outlined" color="error" label="Casa de bungalow en Paracas" icon={<FavoriteBorderOutlinedIcon />} />
                                            <p></p>
                                            <Divider/>
                                        </Grid>
                                        <Grid item md={12}>
                                            <Typography className="" variant="subtitle1" gutterBottom component="div">5 huéspeds 2 habitaciones 2 baños</Typography>
                                        </Grid>
                                        <Grid item md={12}>
                                            <Typography className="" variant="subtitle1" gutterBottom component="div">Wifi Estacionamiento gratuito Cocina</Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item>
                                    <Grid container direction="row" justifyContent="space-evenly" alignItems="flex-start">
                                        <Grid item md={9}>
                                            <Chip variant="outlined" color="info" label="4.18 (36 Reseñas)" icon={<StarBorderOutlinedIcon />} />
                                        </Grid>
                                        <Grid item md={3}>
                                            <Typography className="" variant="subtitle1" gutterBottom component="div">s/.204 la noche</Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Divider/>
                    <Grid container mb={2} mt={2}>
                        <Grid item md={5}>
                            <img className="Parking-img" src={paracas}></img>
                        </Grid>        
                        <Grid item md={7}>
                            <Grid container direction="column" justifyContent="space-between" alignItems="stretch">
                                <Grid item>
                                    <Grid container direction="row" justifyContent="space-evenly" alignItems="flex-start">
                                        <Grid item md={11}>
                                            <Typography className="" variant="subtitle1" gutterBottom component="div">Bungalows en Paracas</Typography>
                                        </Grid>
                                        <Grid item md={1}>
                                            <FavoriteBorderOutlinedIcon color="warning"/>
                                        </Grid>
                                        <Grid item md={12}>
                                            <Chip variant="outlined" color="error" label="Casa de bungalow en Paracas" icon={<FavoriteBorderOutlinedIcon />} />
                                            <p></p>
                                            <Divider/>
                                        </Grid>
                                        <Grid item md={12}>
                                            <Typography className="" variant="subtitle1" gutterBottom component="div">5 huéspeds 2 habitaciones 2 baños</Typography>
                                        </Grid>
                                        <Grid item md={12}>
                                            <Typography className="" variant="subtitle1" gutterBottom component="div">Wifi Estacionamiento gratuito Cocina</Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item>
                                    <Grid container direction="row" justifyContent="space-evenly" alignItems="flex-start">
                                        <Grid item md={9}>
                                            <Chip variant="outlined" color="info" label="4.18 (36 Reseñas)" icon={<StarBorderOutlinedIcon />} />
                                        </Grid>
                                        <Grid item md={3}>
                                            <Typography className="" variant="subtitle1" gutterBottom component="div">s/.204 la noche</Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Divider/>
                    <Grid container mb={2} mt={2}>
                        <Grid item md={5}>
                            <img className="Parking-img" src={paracas}></img>
                        </Grid>        
                        <Grid item md={7}>
                            <Grid container direction="column" justifyContent="space-between" alignItems="stretch">
                                <Grid item>
                                    <Grid container direction="row" justifyContent="space-evenly" alignItems="flex-start">
                                        <Grid item md={11}>
                                            <Typography className="" variant="subtitle1" gutterBottom component="div">Bungalows en Paracas</Typography>
                                        </Grid>
                                        <Grid item md={1}>
                                            <FavoriteBorderOutlinedIcon color="warning"/>
                                        </Grid>
                                        <Grid item md={12}>
                                            <Chip variant="outlined" color="error" label="Casa de bungalow en Paracas" icon={<FavoriteBorderOutlinedIcon />} />
                                            <p></p>
                                            <Divider/>
                                        </Grid>
                                        <Grid item md={12}>
                                            <Typography className="" variant="subtitle1" gutterBottom component="div">5 huéspeds 2 habitaciones 2 baños</Typography>
                                        </Grid>
                                        <Grid item md={12}>
                                            <Typography className="" variant="subtitle1" gutterBottom component="div">Wifi Estacionamiento gratuito Cocina</Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item>
                                    <Grid container direction="row" justifyContent="space-evenly" alignItems="flex-start">
                                        <Grid item md={9}>
                                            <Chip variant="outlined" color="info" label="4.18 (36 Reseñas)" icon={<StarBorderOutlinedIcon />} />
                                        </Grid>
                                        <Grid item md={3}>
                                            <Typography className="" variant="subtitle1" gutterBottom component="div">s/.204 la noche</Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid className="my-fixed-item" item md={7} sx={{border:"solid 1px"}}>
                    <MapContainer center={position} zoom={13} style={{ height: 900 }}>
                    <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                        <Marker position={position} icon={markerIcon} >
                            <Popup>Paracas</Popup>
                        </Marker>
                    </MapContainer>  
                </Grid>
            </Grid>
            <Divider/>
        </Container>
    );
};

export default ParkingLog;