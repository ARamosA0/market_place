import React, { useState, useEffect } from "react";
import { getCocheraData } from "../../service/firestore";
import {
  Grid,
  Container,
  Card,
  CardContent,
  Stack,
  TextField,
  Button,
  Box,
  Divider,
} from "@mui/material";
import { CocheraContext } from "../../Context/CocheraContext";
import StarIcon from "@mui/icons-material/Star";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import IosShareIcon from "@mui/icons-material/IosShare";
import BookmarkAddIcon from "@mui/icons-material/BookmarkAdd";
import "./index.css";
import StaticDateRangePicker from "@mui/lab/StaticDateRangePicker";
import StaticTimePicker from "@mui/lab/StaticTimePicker";
import DateAdapter from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DesktopDateRangePicker from "@mui/lab/DesktopDateRangePicker";
import DesktopTimePicker from "@mui/lab/DesktopTimePicker";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { useParams } from "react-router-dom";

const Booking = () => {
  const {id} = useParams();
  const {user, cochera } =useContext(CocheraContext)
  const [filterUser, setFilterUser] = useState([]);
  const [filterCochera, setFilterCochera] = useState([]);

  const fetchData = () => {
    const fetchUser = JSON.parse(localStorage.getItem('user'));
    const fetchCochera = JSON.parse(localStorage.getItem('cochera'));
    setFilterUser(fetchUser);
    setFilterCochera(fetchCochera)
    console.log(filterUser)
    console.log(filterCochera)
  };
  
  // Mapa
  const markerIcon = new L.icon({
    iconUrl: require("../../assets/marker.png"),
    iconSize: [30, 30],
  });

  // Date Range picker
  const [valueDate, setValueDate] = React.useState([null, null]);

  // Time picker
  const [valueStartTime, setValueStartTime] = React.useState(new Date());
  const [valueEndTime, setValueEndTime] = React.useState(new Date());



  useEffect(() => {
    fetchData();
  }, [user, cochera]);

  return (
    <section>
      {filterUser.length > 0 && (
        <Container sx={{ marginTop: 5 }}>
          <Grid container spacing={3}>
            <Grid item md={12} className="titulo-principal">
              <h1>{cocheras[0].nameAlquiler}</h1>
            </Grid>
            <Grid item md={12} className="reserva-items">
              <div>
                <StarIcon />
                <span>4,96 . 84 reseñas &nbsp;&nbsp;&nbsp;&nbsp;</span>
                <LocationOnIcon />
                <span>
                  {cocheras[0].pais}, {cocheras[0].region},{" "}
                  {cocheras[0].distrito}{" "}
                </span>
              </div>
              <div>
                <IosShareIcon />
                <span>Compartir &nbsp;&nbsp;&nbsp;&nbsp;</span>
                <BookmarkAddIcon />
                <span>Guardar</span>
              </div>
            </Grid>
            <Grid item md={6} sx={{ marginTop: 2 }}>
              <Grid container>
                <Grid item md={12}>
                  <img className="img-principal" src={cocheras[0].photos[0]} />
                </Grid>
                <Grid item md={6}>
                  <img className="img-sec" src={cocheras[0].photos[1]} />
                </Grid>
                <Grid item md={6}>
                  <img className="img-sec" src={cocheras[0].photos[2]} />
                </Grid>
                <Grid item md={12} className="titulo-cochera">
                  <Divider  sx={{marginTop:5}}/>
                  <p className="titulo-cochera-uno">
                    Cochera Privada - {cocheras[0].nameAnfitrion}
                  </p>
                  <p className="titulo-cochera-dos">
                    Tipo de Cochera - {cocheras[0].tipoCochera}
                  </p>
                  <Divider/>
                  <div className="description">
                    <p className="">{cocheras[0].descripcion}</p>
                  </div>
                </Grid>
              </Grid>
            </Grid>

            <Grid className="card-main-info" item md={6} sx={{ marginTop: 3 }}>
              <Card sx={{ maxWidth: 350, marginLeft: 20 }}>
                <CardContent className="card-info">
                  <div>
                    <span className="card-precio">S/{cocheras[0].costo}</span>
                    <span className="card-precio-aux">/hora</span>
                  </div>
                  <div>
                    {/* Date Range picker*/}
                    <div className="date-container">
                      <LocalizationProvider dateAdapter={DateAdapter}>
                        <Stack spacing={3}>
                          <DesktopDateRangePicker
                            startText="Fecha Inicio"
                            inputFormat="dd-MM-yyyy"
                            value={valueDate}
                            onChange={(newValue) => {
                              setValueDate(newValue);
                              // console.log(newValue)
                              // console.log(newValue[0].toLocaleDateString())
                            }}
                            
                            renderInput={(startProps, endProps) => (
                              <React.Fragment>
                                <TextField {...startProps}/>
                                <Box sx={{ mx: 2 }}> to </Box>
                                <TextField {...endProps}/>
                              </React.Fragment>
                            )}
                          />
                        </Stack>
                      </LocalizationProvider>
                    </div>
                    {/* Time Start picker*/}
                    <div className="date-container">
                      <LocalizationProvider dateAdapter={DateAdapter}>
                        <Stack spacing={3}>
                          <DesktopTimePicker
                            label="Hora inicio"
                            value={valueStartTime}
                            onChange={(newValue) => {
                              setValueStartTime(newValue);
                            }}
                            renderInput={(params) => <TextField {...params} />}
                          />
                        </Stack>
                      </LocalizationProvider>
                    </div>
                    {/* Time End picker*/}
                    <div className="date-container">
                      <LocalizationProvider dateAdapter={DateAdapter}>
                        <Stack spacing={3}>
                          <DesktopTimePicker
                            label="Hora final"
                            value={valueEndTime}
                            onChange={(newValue) => {
                              setValueEndTime(newValue);
                            }}
                            renderInput={(params) => <TextField {...params} />}
                          />
                        </Stack>
                      </LocalizationProvider>
                    </div>
                  </div>

                  <div>
                    <Button
                      fullWidth
                      size="large"
                      variant="contained"
                      color="secondary"
                      sx={{ marginTop: 2, marginBottom: 2 }}
                    >
                      Reservar
                    </Button>
                  </div>
                  <Divider />
                  <div style={{ marginTop: 10 }}>
                    <Box
                      sx={{
                        p: 2,
                        fontSize: 17,
                        fontWeight: "medium",
                        minWidth: 300,
                        display: "inline",
                      }}
                    >
                      Tiempo Total
                    </Box>
                    <Box
                      sx={{
                        p: 2,
                        fontSize: 17,
                        fontWeight: "medium",
                        display: "inline",
                      }}
                    >
                      
            
                    </Box>
                  </div>
                  <Divider />
                  <div style={{ marginTop: 10 }}>
                    <Box
                      sx={{
                        p: 2,
                        fontSize: 17,
                        fontWeight: "medium",
                        minWidth: 300,
                        display: "inline",
                        marginRight: 1,
                      }}
                    >
                      Precio Total
                    </Box>
                    <Box
                      sx={{
                        p: 2,
                        fontSize: 17,
                        fontWeight: "medium",
                        display: "inline",
                        marginLeft: 5,
                      }}
                    >
                      
            
                    </Box>
                  </div>
                </CardContent>
              </Card>
            </Grid>

            <Grid item md={12}>
              <Grid container>
                <Grid item md={6}>
                  <p className="titulo-fechas">
                    {cocheras[0].region}, {cocheras[0].Distrito}
                  </p>
                  {/* Date Range picker */}
                  <div className="static-date-container">
                    <LocalizationProvider dateAdapter={DateAdapter}>
                      <StaticDateRangePicker
                        displayStaticWrapperAs="desktop"
                        value={valueDate}
                        onChange={(newValueDate) => {
                          setValueDate(newValueDate);
                        }}
                        renderInput={(startProps, endProps) => (
                          <React.Fragment>
                            <TextField {...startProps}/>
                            <Box sx={{ mx: 2 }}> to </Box>
                            <TextField {...endProps}/>
                          </React.Fragment>
                        )}
                      />
                    </LocalizationProvider>
                  </div>
                  {/* Time Range picker */}
                  <Grid container spacing={3} sx={{marginTop:5, marginBottom:5}}>
                    <Grid item md={6}>
                      <span>Inicio</span>
                      <LocalizationProvider dateAdapter={DateAdapter}>
                        <StaticTimePicker
                          displayStaticWrapperAs="mobile"
                          value={valueStartTime}
                          color="secondary"
                          onChange={(newValueTime) => {
                            setValueStartTime(newValueTime);
                          }}
                          renderInput={(params) => <TextField {...params} />}
                        />
                      </LocalizationProvider>
                    </Grid>
                    <Grid item md={6}>
                      <span>Final</span>
                      <LocalizationProvider dateAdapter={DateAdapter}>
                        <StaticTimePicker
                          displayStaticWrapperAs="mobile"
                          value={valueEndTime}
                          onChange={(newValueTime) => {
                            setValueEndTime(newValueTime);
                          }}
                          renderInput={(params) => <TextField {...params} />}
                        />
                      </LocalizationProvider>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item md={6}></Grid>
              </Grid>

              <Divider />
              <div>
                <p className="titulo-mapa">A donde irás?</p>

                {/* Mapa */}

                <Grid container sx={{ marginTop: 3, marginBottom: 5 }}>
                  <Grid item md={12}>
                    <MapContainer
                      center={[
                        cocheras[0].geolocalization.latitude,
                        cocheras[0].geolocalization.longitude,
                      ]}
                      zoom={18}
                      style={{ height: 500 }}
                    >
                      <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                      />
                      <Marker
                        position={[
                          cocheras[0].geolocalization.latitude,
                          cocheras[0].geolocalization.longitude,
                        ]}
                        icon={markerIcon}
                      >
                        <Popup>Estas aqui</Popup>
                      </Marker>
                    </MapContainer>
                  </Grid>
                </Grid>

                <p className="titulo-lugar-mapa">
                  {cocheras[0].region}, {cocheras[0].distrito}
                </p>
              </div>
            </Grid>
          </Grid>
        </Container>
      )}
    </section>
  );
};

export default Booking;
