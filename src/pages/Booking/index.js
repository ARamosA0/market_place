import React, { useState, useEffect } from "react";
import { getCocheraData } from "../../service/firestore";
import {
  Grid,
  Container,
  Card,
  CardContent,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Stack,
  TextField,
  Button,
  Box,
  Divider
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import IosShareIcon from "@mui/icons-material/IosShare";
import BookmarkAddIcon from "@mui/icons-material/BookmarkAdd";
import "./index.css";
import { flexbox } from "@mui/system";
import StaticDateRangePicker from '@mui/lab/StaticDateRangePicker';
import StaticTimePicker from '@mui/lab/StaticTimePicker';
import DateAdapter from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DesktopDateRangePicker from '@mui/lab/DesktopDateRangePicker';
import DesktopTimePicker from '@mui/lab/DesktopTimePicker';
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

const Booking = () => {

  const [cocheras, setCocheras] = useState([]);

  const fetchData = async () => {
    const data = await getCocheraData("usuarioAnfitrion");
    setCocheras(data);
    console.log(data[0].geolocalization.latitude)
  };

  const [auto, setAuto] = useState("");
  const handleSelectChange = (event) => {
    setAuto(event.target.value);
  };

  // Mapa
  const markerIcon = new L.icon({
    iconUrl: require("../../assets/marker.png"),
    iconSize: [30, 30],
  });

  // Date Range picker
  const [valueDate, setValueDate] = React.useState([null, null]);

  // Static Date Range picker
  const [valueDateStatic, setValueDateStatic] = React.useState([null, null]);

  // Time picker Static
  const [valueStaticStarTime, setValueStaticStarTime] = React.useState(new Date());
  const [valueStaticEndTime, setValueStaticEndTime] = React.useState(new Date());

  // Time picker
  const [valueStartTime, setValueStartTime] = React.useState(new Date());
  const [valueEndTime, setValueEndTime] = React.useState(new Date());


  useEffect(() => {
    fetchData();
  }, []);

  return (
    <section>
      
      {cocheras.length > 0 &&(
          <Container>
            <Grid container spacing={3}>
              <Grid item md={12} className="titulo-principal">
                <h1>{cocheras[0].nameAlquiler}</h1>
              </Grid>
              <Grid item md={12} className="reserva-items">
                <div>
                  <StarIcon />
                  <span>4,96 . 84 reseñas &nbsp;&nbsp;&nbsp;&nbsp;</span>
                  <LocationOnIcon />
                  <span>{cocheras[0].pais}, {cocheras[0].region}, {cocheras[0].distrito} </span>
                </div>
                <div>
                  <IosShareIcon />
                  <span>Compartir &nbsp;&nbsp;&nbsp;&nbsp;</span>
                  <BookmarkAddIcon />
                  <span>Guardar</span>
                </div>
              </Grid>
              <Grid item md={6}>
                <Grid container >
                  <Grid item md={12}>
                    <img className="img-principal" src={"https://cdn.corrieredellosport.it/images/sq/1200/1200/2015/11/20/143549356-64724baa-1f3e-4d66-b57c-e0c0dc25b797.jpg"} />
                  </Grid>
                  <Grid item md={6}>
                    <img
                        className="img-sec"
                        src={"https://st.hzcdn.com/simgs/pictures/garages/a-dream-garage-in-sevenoaks-garageflex-img~d201afca0d5eb13e_4-9921-1-50048b5.jpg"}
                      />
                  </Grid>
                  <Grid item md={6}>
                    <img
                        className="img-sec"
                        src={"https://st.hzcdn.com/simgs/pictures/garages/a-dream-garage-in-sevenoaks-garageflex-img~d201afca0d5eb13e_4-9921-1-50048b5.jpg"}
                      />
                  </Grid>
                  <Grid item md={12} className="titulo-cochera">
                    <p className="titulo-cochera-uno">Cochera Privada - {cocheras[0].nameAnfitrion}</p>
                    <p className="titulo-cochera-dos">Tipo de Cochera - {cocheras[0].tipoCochera}</p>
                    <Divider/>
                    <div className="description">
                        <p className="">{cocheras[0].descripcion}</p>
                    </div>
                    <Divider/>
                  </Grid>
                  
                  <Grid item md={12}>
                      <p className="titulo-fechas">{cocheras[0].region}, {cocheras[0].Distrito}</p>
                      {/* Date Range picker */}
                      <div className="static-date-container">
                        <LocalizationProvider dateAdapter={DateAdapter}>
                          <StaticDateRangePicker
                            displayStaticWrapperAs="desktop"
                            value={valueDateStatic}
                            onChange={(newValueStaticDate) => {
                              setValueDateStatic(newValueStaticDate);
                            }}
                            renderInput={(startProps, endProps) => (
                              <React.Fragment>
                                <TextField {...startProps} />
                                <Box sx={{ mx: 2 }}> to </Box>
                                <TextField {...endProps} />
                              </React.Fragment>
                            )}
                          />
                        </LocalizationProvider>
                      </div>
                      {/* Time Range picker */}
                      <Grid container spacing={3}>
                        <Grid item md={6} >
                        <span>Inicio</span>
                          <LocalizationProvider dateAdapter={DateAdapter}>
                            <StaticTimePicker
                              displayStaticWrapperAs="mobile"
                              value={valueStaticStarTime}
                              onChange={(newValueTime) => {
                                setValueStaticStarTime(newValueTime);
                              }}
                              renderInput={(params) => <TextField {...params} />}
                            />
                          </LocalizationProvider>
                        </Grid>
                        <Grid item md={6} >
                        <span>Final</span>
                          <LocalizationProvider dateAdapter={DateAdapter}>
                            <StaticTimePicker
                              displayStaticWrapperAs="mobile"
                              value={valueStaticEndTime}
                              onChange={(newValueTime) => {
                                setValueStaticEndTime(newValueTime);
                              }}
                              renderInput={(params) => <TextField {...params} />}
                            />
                          </LocalizationProvider>
                        </Grid>
                      </Grid>
                  </Grid>
                  
                </Grid>
              </Grid>


              <Grid className="card-main-info" item md={6} sx={{marginTop:3}}>
                <Card sx={{ maxWidth:350, marginLeft:20}}>
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
                              value={valueDate}
                              onChange={(newValueDate) => {
                                setValueDate(newValueDate);
                              }}
                              renderInput={(startProps, endProps) => (
                                <React.Fragment>
                                  <TextField {...startProps} />
                                  <Box sx={{ mx: 2 }}> to </Box>
                                  <TextField {...endProps} />
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

                      <FormControl fullWidth sx={{ minWidth: 120, marginTop: 2,  }}>
                        <InputLabel id="demo-simple-select-label">
                          Tipo de Auto
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          value={auto}
                          onChange={handleSelectChange}
                          label="Age"
                        >
                          <MenuItem value="">
                            <em>None</em>
                          </MenuItem>
                          {/* <MenuItem value={10}>{cocheras[0].tipoAuto[0]}</MenuItem>
                          <MenuItem value={20}>{cocheras[0].tipoAuto[1]}</MenuItem>
                          <MenuItem value={30}>{cocheras[0].tipoAuto[2]}</MenuItem> */}
                        </Select>
                      </FormControl>
                    </div>

                    <div>
                      <Button fullWidth size="large" variant="contained" sx={{ marginTop: 2, marginBottom:2}}>
                        Reservar
                      </Button>
                    </div>
                    <Divider />
                    <div style={{marginTop:10}}>
                    
                      <Box
                        sx={{
                          p: 2,
                          fontSize: 20,
                          fontWeight: "medium",
                          minWidth: 300,
                          display: "inline",
                          marginRight:1
                        }}
                      >
                        Precio Total
                      </Box>
                      <Box
                        sx={{
                          p: 2,
                          fontSize: 20,
                          fontWeight: "medium",
                          display: "inline",
                          marginLeft:5
                        }}
                      >
                        S/ 123123
                      </Box>
                    </div>
                  </CardContent>
                </Card>
              </Grid>



                <Grid item md={12}>
                  <Divider/>
                  <p className="titulo-mapa">A donde irás?</p>
                  
                  {/* Mapa */}

                  <Container maxWidth="lg">
                    <Grid container>
                      <Grid item md={12}>
                        <MapContainer center={[cocheras[0].geolocalization.latitude, cocheras[0].geolocalization.longitude]} zoom={18} style={{ height: 500 }}>
                          <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                          />
                          <Marker position={[cocheras[0].geolocalization.latitude, cocheras[0].geolocalization.longitude]} icon={markerIcon}>
                            <Popup>Estas aqui</Popup>
                          </Marker>                          
                        </MapContainer>
                      </Grid>
                    </Grid>
                  </Container>

                  <p className="titulo-lugar-mapa">{cocheras[0].region}, {cocheras[0].distrito}</p>
                  
                </Grid>
                <Grid item md={12}>
                  <Grid container spacing={3}>
                      <Grid item md={4}>
                          <h4>Asistencia</h4>
                          <ul>
                            <li></li>
                          </ul>
                      </Grid>
                  </Grid>
                </Grid>
            </Grid>
          </Container>
          )}
    </section>
  );
};

export default Booking;