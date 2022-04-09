import React, { useState, useEffect, useContext } from "react";
import { getCocheraData, updateSpaceCochera, updateReservaCochera, updateFechaReservaCochera} from "../../service/firestore";
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
import DatePicker from '@mui/lab/DatePicker';
import StaticDateRangePicker from "@mui/lab/StaticDateRangePicker";
import DateAdapter from "@mui/lab/AdapterDateFns";
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import StaticDatePicker from '@mui/lab/StaticDatePicker';
import DesktopDateRangePicker from "@mui/lab/DesktopDateRangePicker";
import { Link, useParams } from "react-router-dom";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import swal from "sweetalert";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
// import { useParams } from "react-router-dom";

const Booking = () => {
  const {id} = useParams();
  const { user, cochera, storeReservaCochera } = useContext(CocheraContext);
  const [filterUser, setFilterUser] = useState([]);
  const [filterCochera, setFilterCochera] = useState([]);
  const [registerCochera, setRegisterCochera] = useState([]);

  const fetchData = async () => {
    const dataUser = await getCocheraData("usuario")
    const dataGarage = await getCocheraData("cochera")
    const filtGarage = dataGarage.find((garage) => garage.id === id);
    const filtUser = dataUser.find((user)=>user.id)
    setFilterUser(filtUser)
    setFilterCochera(filtGarage)
    // setFilterCochera(filtGarage)
    // const fetchUser = JSON.parse(localStorage.getItem("user"));
    // const fetchCochera = JSON.parse(localStorage.getItem("cochera"));
    // setFilterUser(fetchUser);
    // setFilterCochera(fetchCochera);
    // console.log(filterUser)
  };
  
  // Mapa
  const markerIcon = new L.icon({
    iconUrl: require("../../assets/marker.png"),
    iconSize: [30, 30],
  });

  // Date Range picker
  const [valueDate, setValueDate] = React.useState(null);
  const [valueDateFin, setValueDateFin] = React.useState(null);
  // console.log(valueDate)
  // console.log(valueDateFin)
  // console.log(filterUser)



  // Boton Reservar
  const handleOnClickReservar = async () => {
    try {
      if(+filterCochera.space > 0){
        const space = +filterCochera.space - 1
        await updateSpaceCochera(filterCochera, space.toString(), "cochera");
        await updateReservaCochera(filterUser, filterCochera.id, "usuario")
        console.log(filterCochera.id)
        await updateFechaReservaCochera(filterCochera, [valueDate, valueDateFin], "usuario")
        storeReservaCochera(filterCochera.id);
        // console.log(filterCochera);
        await swal({
          icon: "success",
          title: "Se subieron los datos",
        });
      } 
      if (+filterCochera.space === 0){
        swal({
          icon: "error",
          title: "Ya no hay espacio en esta cochera",
        });
      }
      console.log(filterCochera.space)
    
      } catch(error){
        console.log(error.message)
      swal({
        icon: "error",
        title: `No se pudo reservar`,
        text: "Intenta de nuevo",
      }); 
    }
  }

  useEffect(() => {
    fetchData();
  }, [user, cochera]);

  return (
    <section>
      {Object.keys(filterUser).length > 0 && Object.keys(filterCochera).length > 0 && (
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
                    src={filterCochera.image[0]}
                  />
                </Grid>
                <Grid item md={6} xs={12}>
                  <img className="img-sec" src={filterCochera.image[1]} />
                </Grid>
                <Grid item md={6} xs={12}>
                  <img className="img-sec" src={filterCochera.image[2]} />
                </Grid>
                <Grid item md={12} xs={12} className="titulo-cochera">
                  <Divider sx={{ marginTop: 5 }} />
                  <p className="titulo-cochera-uno">
                    Cochera Privada - {filterCochera.name}
                  </p>
                  <p className="titulo-cochera-dos">
                    Anfitrion -{" "}
                    <Link to={`/anfitrion/${filterUser.id}`}>
                      {filterUser.userName} {filterUser.lastName}
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
                <Grid item md={12} xs={12}>
                <Grid container>
                <Grid item md={6} xs={12}>
                  <p className="titulo-fechas">
                    Cochera en {filterCochera.department}, {filterCochera.district}
                  </p>
                  {/* Date Range picker */}
                  <div className="static-date-container">
                  <div >
                    <h5>Fecha Inicio</h5>
                    <LocalizationProvider dateAdapter={DateAdapter}>
                      <StaticDatePicker
                        displayStaticWrapperAs="desktop"
                        openTo="day"
                        value={valueDate}
                        onChange={(newValue) => {
                          setValueDate(newValue);
                        }}
                        renderInput={(params) => <TextField {...params} />}
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
                        renderInput={(params) => <TextField {...params} />}
                      />
                    </LocalizationProvider>
                  </div>
                  </div>
                  {/* Time Range picker */}
                  <Grid
                    container
                    spacing={3}
                    xs={12}
                    sx={{ marginTop: 5, marginBottom: 5 }}
                  >
                  </Grid>
                </Grid>
                <Grid item md={6} xs={12}></Grid>
              </Grid>
                </Grid>
              </Grid>
            </Grid>

            <Grid className="card-main-info" item md={6} xs={12} sx={{ marginTop: 3 }}>
              <Card sx={{ maxWidth: 350, marginLeft: 20 }}>
                <CardContent className="card-info">
                  <div>
                    <span className="card-precio">
                      S/{filterCochera.price}
                    </span>
                    <span className="card-precio-aux">/hora</span>
                  </div>
                  <div className="date-container-container">
                    {/* Date Range picker*/}
                    <div className="date-container">
                      <LocalizationProvider dateAdapter={DateAdapter}>
                        <DatePicker
                          label="Escoge la fecha inicial"
                          openTo="day"
                          views={['year', 'month', 'day']}
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
                          views={['year', 'month', 'day']}
                          value={valueDateFin}
                          onChange={(newValue) => {
                            setValueDateFin(newValue);
                          }}
                          renderInput={(params) => <TextField {...params} />}
                        />
                      </LocalizationProvider>
                    </div>
                  </div>

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
                </CardContent>
              </Card>
            </Grid>

            <Grid item md={12}>
              

              <Divider />
              <div>
                <p className="titulo-mapa">A donde irás?</p>

                {/* Mapa */}

                <Grid container className="map-container" >
                  <Grid item md={12}>
                    <MapContainer
                      center={[
                        filterCochera.geolocation[0],
                        filterCochera.geolocation[1],
                      ]}
                      zoom={18}
                      className="map-cont"
                      style={{ height: 500 }}
                    >
                      <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                      />
                      <Marker
                        position={[
                          filterCochera.geolocation[0],
                          filterCochera.geolocation[1],
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
      )}
    </section>
  );
};

export default Booking;
