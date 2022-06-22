import React, { useState, useEffect, useContext } from "react";
import {
  getCocheraData,
  updateSpaceCochera,
  updateReservaCochera,
  updateFechaReservaCochera,
} from "../../service/firestore";
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
import DatePicker from "@mui/lab/DatePicker";
import StaticDateRangePicker from "@mui/lab/StaticDateRangePicker";
import DateAdapter from "@mui/lab/AdapterDateFns";
import DesktopDatePicker from "@mui/lab/DesktopDatePicker";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import StaticDatePicker from "@mui/lab/StaticDatePicker";
import DesktopDateRangePicker from "@mui/lab/DesktopDateRangePicker";
import { Link, useParams } from "react-router-dom";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import swal from "sweetalert";
import "leaflet/dist/leaflet.css";
import LoaderCar from "../../components/LoaderCar";
import LoginAnfitrion from "../../components/LoginAnfitrion";
import L from "leaflet";

const Booking = () => {
  const { id } = useParams();
  const { user, cochera, storeReservaCochera } = useContext(CocheraContext);
  const [filterUser, setFilterUser] = useState([]);
  const [filterCochera, setFilterCochera] = useState([]);
  const [registerCochera, setRegisterCochera] = useState([]);
  const [open, setOpen] = useState(false);
  


  const handleClickOpen = () => {
    setOpen(!open);
  };

  // API 
  const fetchApi = async () =>{
    // Cochera
    const url = `http://127.0.0.1:8000/cochera/id/${id}/`
    const responseCochera = await fetch(url)
    const responseJSONCochera = await responseCochera.json()
    const filtGarage = responseJSONCochera.content
    console.log(filtGarage.cliente)
    setFilterCochera(filtGarage)
    // Usuario 
    const urlUsuario = 'http://127.0.0.1:8000/usuario/'+filtGarage.cliente
    const responseUsuario = await fetch(urlUsuario)
    const responseJSONusuario = await responseUsuario.json()
    const filtUser = responseJSONusuario.content
    setFilterUser(filtUser)
    return responseJSONCochera.content
  }

  


  //para verificar si el usuario esta logueado o no
  const idUsuario = JSON.parse(localStorage.getItem("userID"));


  // Mapa
  const markerIcon = new L.icon({
    iconUrl: require("../../assets/marker.png"),
    iconSize: [30, 30],
  });

  // Date Range picker
  const [valueDate, setValueDate] = React.useState(null);
  const [valueDateFin, setValueDateFin] = React.useState(null);


  // Boton Reservar
  const handleOnClickReservar = async () => {
    try {
      if(+filterCochera.space > 0){
        const space = +filterCochera.space - 1
        await updateSpaceCochera(filterCochera, space.toString(), "cochera");
        await updateReservaCochera(filterUser, filterCochera.id, "usuario")
        console.log(filterCochera.id)
        storeReservaCochera(filterCochera.id);
        await swal({
          icon: "success",
          title: "Se reservo su cochera",
        });
      }
      if (+filterCochera.space === 0) {
        swal({
          icon: "error",
          title: "Ya no hay espacio en esta cochera",
        });
      }
      console.log(filterCochera.space);
    } catch (error) {
      console.log(error.message);
      swal({
        icon: "error",
        title: `No se pudo reservar`,
        text: "Intenta de nuevo",
      });
    }
  };

  useEffect(() => {
    fetchApi();
  }, [cochera,user]);

  return (
    <section>
      {Object.keys(filterUser).length > 0 &&
      Object.keys(filterCochera).length > 0 ? (
        <Container sx={{ marginTop: 17 }}>
            <Grid container spacing={3}>
              <Grid item md={12} xs={12} className="titulo-principal">
                <h1>{filterCochera.name}</h1>
              </Grid>
              <Grid item md={12} xs={12} className="reserva-items">
                <div>
                  <StarIcon />
                  <span>4,96 . 100 reseñas &nbsp;&nbsp;&nbsp;</span>
                  <LocationOnIcon />
                  <span>
                    {filterCochera.country}, {filterCochera.department},{" "}
                    {filterCochera.district}{" "}
                  </span>
                </div>
                <div>
                  <IosShareIcon />
                  <span>Compartir &nbsp;&nbsp;&nbsp;</span>
                  <BookmarkAddIcon />
                  <span>Guardar</span>
                </div>
              </Grid>
              <Grid item md={6} xs={12} sx={{ marginTop: 2 }}>
                <Grid container>
                  <Grid item md={12} xs={12}>
                    <img
                      className="img-principal"
                      src={filterCochera.imagen1}
                      alt=""
                    />
                  </Grid>
                  <Grid item md={6} xs={12}>
                    <img
                      className="img-sec"
                      src={filterCochera.imagen2}
                      alt=""
                    />
                  </Grid>
                  <Grid item md={6} xs={12}>
                    <img
                      className="img-sec"
                      src={filterCochera.imagen3}
                      alt=""
                    />
                  </Grid>
                  <Grid item md={12} className="titulo-cochera">
                    <Divider sx={{ marginTop: 5 }} />
                    <p className="titulo-cochera-uno">
                      Cochera Privada - {filterCochera.name}
                    </p>
                    <p className="titulo-cochera-dos">
                      Anfitrion -{" "}
                      <Link to={`/anfitrion/${filterUser.Cliente.id}`}>
                        {filterUser.first_name} {filterUser.last_name}
                      </Link>
                    </p>
                    <p className="titulo-cochera-dos">
                      Tipo de Cochera - {filterCochera.space} espacios
                    </p>
                    <Divider />
                    <div className="description">
                      <p className="">{filterCochera.description}</p>
                    </div>
                  </Grid>
                  <Grid item md={12}>
                    <Grid container>
                      <Grid item md={6}>
                        <p className="titulo-fechas">
                          Cochera en {filterCochera.department},{" "}
                          {filterCochera.district}
                        </p>
                        {/* Date Range picker */}
                        <div className="static-date-container">
                          <div>
                            <h5>Fecha Inicio</h5>
                            <LocalizationProvider dateAdapter={DateAdapter}>
                              <StaticDatePicker
                                displayStaticWrapperAs="desktop"
                                openTo="day"
                                value={valueDate}
                                onChange={(newValue) => {
                                  setValueDate(newValue);
                                }}
                                renderInput={(params) => (
                                  <TextField {...params} />
                                )}
                              />
                            </LocalizationProvider>
                          </div>
                          <div>
                            <h5>Fecha Fin</h5>
                            <LocalizationProvider dateAdapter={DateAdapter}>
                              <StaticDatePicker
                                displayStaticWrapperAs="desktop"
                                openTo="day"
                                value={valueDateFin}
                                onChange={(newValue) => {
                                  setValueDateFin(newValue);
                                }}
                                renderInput={(params) => (
                                  <TextField {...params} />
                                )}
                              />
                            </LocalizationProvider>
                          </div>
                        </div>
                        {/* Time Range picker */}
                        <Grid
                          container
                          spacing={3}
                          sx={{ marginTop: 5, marginBottom: 5 }}
                        ></Grid>
                      </Grid>
                      <Grid item md={6}></Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
                                
              <Grid className="card-main-info" item md={6} sx={{ marginTop: 3 }}>
                <Card sx={{ maxWidth: 350, marginLeft: 20 }}>
                  <CardContent className="card-info">
                    <div>
                      <span className="card-precio">S/{filterCochera.price}</span>
                      <span className="card-precio-aux">/hora</span>
                    </div>
                    <div className="date-container-container">
                      {/* Date Range picker*/}
                      <div className="date-container">
                        <LocalizationProvider dateAdapter={DateAdapter}>
                          <DatePicker
                            label="Escoge la fecha inicial"
                            openTo="day"
                            views={["year", "month", "day"]}
                            value={valueDate}
                            onChange={(newValue) => {
                              setValueDate(newValue);
                            }}
                            renderInput={(params) => <TextField {...params} />}
                          />
                        </LocalizationProvider>
                      </div>
                      <div className="date-container">
                        <LocalizationProvider dateAdapter={DateAdapter}>
                          <DatePicker
                            label="Escoge la fecha final"
                            openTo="day"
                            views={["year", "month", "day"]}
                            value={valueDateFin}
                            onChange={(newValue) => {
                              setValueDateFin(newValue);
                            }}
                            renderInput={(params) => <TextField {...params} />}
                          />
                        </LocalizationProvider>
                      </div>
                    </div>
                    {idUsuario ? (
                      <div>
                        <Button
                          fullWidth
                          size="large"
                          variant="contained"
                          color="secondary"
                          onClick={handleOnClickReservar}
                          sx={{ marginTop: 2, marginBottom: 2 }}
                        >
                          Reservar
                        </Button>
                      </div>
                    ) : (
                      <div>
                        <Button
                          fullWidth
                          size="large"
                          variant="contained"
                          color="secondary"
                          onClick={handleClickOpen}
                          sx={{ marginTop: 2, marginBottom: 2 }}
                        >
                          Incia sesion para reservar
                        </Button>
                        <LoginAnfitrion handleClickOpen={handleClickOpen} open={open} />
                      </div>
                    )}
                  </CardContent>
                </Card>
              </Grid>
                    
              <Grid item md={12}>
                <Divider />
                <div>
                  <p className="titulo-mapa">A donde irás?</p>
                    
                  {/* Mapa */}
                    
                  <Grid container className="map-container">
                    <Grid item md={12}>
                      <MapContainer
                        center={[
                          filterCochera.lat,
                          filterCochera.long,
                        ]}
                        zoom={18}
                        className="map-cont"
                      >
                        <TileLayer
                          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker
                          position={[
                            filterCochera.lat,
                            filterCochera.long,
                          ]}
                          icon={markerIcon}
                        >
                          <Popup>Estas aqui</Popup>
                        </Marker>
                      </MapContainer>
                    </Grid>
                  </Grid>
                        
                  <p className="titulo-lugar-mapa">
                    {filterCochera.department}, {filterCochera.district}
                  </p>
                </div>
              </Grid>
              </Grid>
        </Container>
      ) : (
        <LoaderCar />
      )}
    </section>
  );
};

export default Booking;



