import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import {
  Container,
  Grid,
  Card,
  Divider,
  Chip,
  CardMedia,
  CardActionArea,
  Typography,
  CardContent,
  Stack,
  TextField,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import LoaderCar from "../../components/LoaderCar"
//Context
import { getCocheraData } from "../../service/firestore";
import { CocheraContext } from "../../Context/CocheraContext";

//Mapa referencia
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

//CSS referencia
import "./index.css";

//Bootstrap
import { Carousel } from "react-bootstrap";

//cc
import { useParams } from "react-router-dom";

import StarBorderIcon from '@mui/icons-material/StarBorder';

const ParkingLog = () => {
  const { storeCochera, distrito, storeDistrito } = useContext(CocheraContext);
  const [user, setUser] = useState([]);
  const [parking, setParking] = useState([]);
  const [district, setDistrict] = useState("");
  const position = [-12.04318, -77.02824];

  const { name } = useParams();

  const markerIcon = new L.icon({
    iconUrl: require("../../assets/marker.png"),
    iconSize: [30, 30],
  });

  const fetchParking = async () => {
    const data = await getCocheraData("cochera");
    const userData = await getCocheraData("usuario");
    setParking(data);
    setUser(userData);
    return data;
  };

  const handleSearchDistrict = async (e) => {
    const districts = e?.target?.value ?? name;

    if (districts.length === 0) {
      await fetchParking();
    }

    if (districts.length > 0) {
      const filterDistrict = parking.filter((distritos) =>
        distritos.district.toUpperCase().includes(districts.toUpperCase())
      );

      setParking(filterDistrict);
      setUser(user);
    }
  };

  const handleDistrict = async (e) => {
    const districts = e?.target?.value ?? name;
    setDistrict(districts);
    if (districts === "all") {
      await fetchParking();
      return;
    }

    const parking = await fetchParking();

    const filterDistrict = parking.filter((distritos) =>
      distritos.district.toUpperCase().includes(districts.toUpperCase())
    );

    setParking(filterDistrict);
    setUser(user);
  };

  useEffect(() => {
    handleDistrict();
  }, []);

  return (
    <Container maxWidth="xl">
      <Grid
        container
        mt={3}
        sx={{ marginTop: 20 }}
        direction={"row"}
        justifyContent={"space-between"}
      >
        <Grid item md={5} xs={12} sm={5} mb={3}>
          <TextField
            onChange={handleSearchDistrict}
            label="Search for a district..."
            fullWidth
          />
        </Grid>
        <Grid item md={5} xs={12} sm={5} mb={2}>
          <FormControl fullWidth>
            <InputLabel>Filter by Districts</InputLabel>
            <Select
              label="Filter by Districts"
              value={district}
              onChange={handleDistrict}
            >
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
        {parking.length > 0 ? 
        parking.map((parking) => (
          <Grid item md={3}  sm={6} xs={12}>
            <Card>
              <CardMedia>
                <Carousel fade>
                  {parking?.image.map(
                    (img) =>
                      img && (
                        <Carousel.Item>
                          <img
                            className="parking-photo"
                            src={img}
                            alt="Cochera"
                          />
                        </Carousel.Item>
                      )
                  )}
                </Carousel>
              </CardMedia>
              <CardActionArea
                onClick={() => storeCochera(parking)}
                component={Link}
                to={`/booking/${parking.id}`}
              >
                <CardContent>
                      <Typography variant="h5" component="div" color={"#D93B30"}>{parking.name}</Typography>
                      <Typography variant="subtitle2" color="primary" >{`${parking.description}`}</Typography>
                      <Typography className="parking-text" variant="subtitle2" color="primary" >{`Dirección: ${parking.adress}`}</Typography>
                      <Divider></Divider>
                      <Stack direction="row" spacing={1} mt={3}> 
                        <Grid container spacing={2} direction={"row"} justifyContent={"space-between"}>
                          <Grid item xl={6} md={6} sm={12} xs={12}>
                            <Chip label={`Región: ${parking.department}`} color="success" />
                          </Grid>
                          <Grid item xl={6} md={6} sm={12} xs={12}>
                            <Chip label={`Distríto: ${parking.district}`} color="primary" />
                          </Grid>
                        </Grid>
                      </Stack>
                      <Grid container direction={"row"} justifyContent={"space-between"} mt={15} >
                        <Grid item>
                          <Typography variant="button" color="error"> Price: s/.{parking.price} </Typography>
                        </Grid>
                        <Grid item>
                          <Typography variant="button" color="primary"> Espacios: {parking.space} </Typography>
                        </Grid>
                      </Grid>
                    </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        )): <LoaderCar/>}
      </Grid>
      <Grid container>
          <Grid item xl={12} md={12} sm={12} xs={12} mb={5} mt={5} sx={{border:"solid"}}>
            <MapContainer center={position} zoom={13} style={{ height: 500 }}>
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              {parking.length > 0 &&
                parking.map((parking) => (
                  <Marker position={[ parking.geolocation[0], parking.geolocation[1],]} icon={markerIcon} >
                    <Popup>
                      <CardActionArea component={Link} to={`/booking/${parking.id}`}>
                        <div>
                            <Typography variant="button" component={"div"} color="secondary">{`Ubicacion: ${parking.name}`}</Typography>
                            <Typography variant="button" color="primary">{`Precio: ${parking.price} - `}</Typography>
                            <Typography variant="button" color="error">{` Espacios: ${parking.space}`}</Typography>
                        </div>
                      </CardActionArea>
                    </Popup>
                  </Marker>
                ))}
            </MapContainer>
          </Grid>
        </Grid>
    </Container>
  );
};
export default ParkingLog;