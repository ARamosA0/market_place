import { useState, useEffect, useContext } from "react";
import { CocheraContext } from "../../Context/CocheraContext";
import {Link} from "react-router-dom"
import { Container, Grid, Card, Divider, Chip, CardMedia, CardActionArea, Typography,  CardContent, Stack, TextField, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { getCocheraData } from "../../service/firestore";
import StarBorderIcon from '@mui/icons-material/StarBorder';

//Mapa referencias
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

//CSS referencias
import "./index.css"

//Iconos
import { Carousel } from 'react-bootstrap';

const ParkingLog = () => {
    
    const { storeCochera, storeUser } = useContext(CocheraContext);

    const [user, setUser] = useState([]);
    const [parking, setParking] = useState([]);

    const [district, setDistrict] = useState("");

    const position = [-12.04318, -77.02824];

    const markerIcon = new L.icon({
        iconUrl: require("../../assets/marker.png"),
        iconSize: [30, 30],
    });

    const fetchParking = async () => {
        const data = await getCocheraData("cochera");
        const userData = await getCocheraData("usuario");
        setParking(data);
        setUser(userData);
    }

    const handleDistrict = async (e) => {

        setDistrict(e.target.value);
        const distrito = e.target.value;

        if (distrito === "all") {
            fetchParking();
          return;
        };

        console.log(distrito)

        const filterDistrict = parking.filter((parklog) =>
            parklog.district.toUpperCase().includes(distrito.toUpperCase())
        );
        
        setParking(filterDistrict);

    };

    const clickUserGarage = () =>{
        storeCochera(parking)
        storeUser(user)
    }

    useEffect(() => {
        fetchParking();
    }, []);

    return (
        <Container maxWidth="xl">
            <Grid container mt={3} direction={"row"} justifyContent={"end"}>
                <Grid item md={3}>
                <FormControl fullWidth>
                    <InputLabel>Filter by Districts</InputLabel>
                    <Select label="Filter by Region" value={district} onChange={handleDistrict}>
                    <MenuItem value="all">Todas las distritos</MenuItem>
                    <MenuItem value="Chorrillos">Chorrillos</MenuItem>
                    <MenuItem value="Agustino">Agustino</MenuItem>
                    <MenuItem value="Comas">Comas</MenuItem>
                    <MenuItem value="Lima">Lima</MenuItem>
                    <MenuItem value="Miraflores">Miraflores</MenuItem>
                    </Select>
                </FormControl>
                </Grid>
            </Grid>
            <Grid container spacing={3} mt={2}>
                {parking.map((parking) => (
                    <Grid item md={3}>
                        <Card>
                            <CardMedia>
                                <Carousel fade>
                                    {parking?.image.map((img)=>(
                                        img ?
                                        <Carousel.Item>
                                            <img className="parking-photo" src={img} alt="Cochera" />
                                        </Carousel.Item> : ""
                                    ))}
                                </Carousel> 
                            </CardMedia>    
                            <Link to={`/booking/${parking.id}`}>
                                <CardActionArea onClick={clickUserGarage()} style={{textDecoration:"none"}}>
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div" color={"#D93B30"}>{parking.name}</Typography>
                                        <Typography variant="subtitle2" color="primary">{`${parking.description}`}</Typography>
                                        <Typography className="parking-text" variant="subtitle2" color="primary">{`Dirección: ${parking.adress}`}</Typography>
                                        <Divider></Divider>
                                        <Stack direction="row" spacing={1} mt={3}>
                                            <Chip label={`País: ${parking.country}`} color="info" />
                                            <Chip label={`Región: ${parking.department}`} color="success" />
                                            <Chip label={`Distríto: ${parking.district}`} color="warning" />
                                        </Stack>
                                        <Grid container direction={"row"} justifyContent={"space-between"} mt={15}>
                                            <Grid item>
                                                <Typography variant="button" color="primary">Rating: <StarBorderIcon color="warning"/></Typography>
                                            </Grid>
                                            <Grid item>
                                                <Typography variant="button" color="error">Price: s/.{parking.price}</Typography>
                                            </Grid>
                                        </Grid>
                                    </CardContent>                
                                </CardActionArea>
                            </Link>
                        </Card>
                    </Grid>
                ))}
            </Grid>
            <Grid container>
                <Grid item md={12} mb={2} mt={5}>
                    <MapContainer center={position} zoom={13} style={{ height: 500 }}>
                        <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                        <Marker position={[-12.043973616974938, -76.95295478638475]} icon={markerIcon} >
                            <Popup>Tecsup Centro Educativo</Popup>
                        </Marker>
                        {/* {parking.filter((parkLog)=>(
                            console.log("Geolocalizacion: ",parkLog.geolocation)
                        ))} */}
                    </MapContainer>
                </Grid>
            </Grid>
        </Container>
    );
};

export default ParkingLog;