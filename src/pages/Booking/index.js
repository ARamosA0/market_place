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
    await getCocheraData("usuario")
    await getCocheraData("cochera")
    
    // const fetchUser = JSON.parse(localStorage.getItem("user"));
    // const fetchCochera = JSON.parse(localStorage.getItem("cochera"));
    // setFilterUser(fetchUser);
    // setFilterCochera(fetchCochera);
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
      const fireBaseGarage = await getCocheraData("cochera")
      const filterGarage = fireBaseGarage.find((cochera) => cochera.id === id);
      if(+filterGarage.space > 0){
        const space = +filterGarage.space - 1
        await updateSpaceCochera(filterGarage, space.toString(), "cochera");
        await updateReservaCochera(filterUser[0], filterGarage.id, "cochera")
        await updateFechaReservaCochera(filterGarage, [valueDate, valueDateFin], "cochera")
        storeReservaCochera(filterGarage);
        console.log(filterGarage);
        await swal({
          icon: "success",
          title: "Se subieron los datos",
        });
      } 
      if (+filterGarage.space === 0){
        swal({
          icon: "error",
          title: "Ya no hay espacio en esta cochera",
        });
      }
      console.log(filterGarage.space)
      
      } catch(error){
        console.log(error.message)
      swal({
        icon: "error",
        title: `No se pudo reservar`,
        text: "Intenta de nuevo",
      }); 
    }
  }
  console.log(filterCochera[0].geolocation)

  useEffect(() => {
    fetchData();
  }, [user, cochera]);

  return (
    <section>
      {filterUser.length > 0 && filterCochera.length > 0 && (
        <Container sx={{ marginTop: 5 }}>
          <Grid container spacing={3}>
            <Grid item md={12} className="titulo-principal">
              <h1>{filterCochera[0].name}</h1>
            </Grid>
            <Grid item md={12} className="reserva-items">
              <div>
                <StarIcon />
                <span>4,96 . 100 reseñas &nbsp;&nbsp;&nbsp;&nbsp;</span>
                <LocationOnIcon />
                <span>
                  {filterCochera[0].country}, {filterCochera[0].department},{" "}
                  {filterCochera[0].district}{" "}
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
                  <img
                    className="img-principal"
                    src={filterCochera[0].image[0]}
                  />
                </Grid>
                <Grid item md={6}>
                  <img className="img-sec" src={filterCochera[0].image[1]} />
                </Grid>
                <Grid item md={6}>
                  <img className="img-sec" src={filterCochera[0].image[2]} />
                </Grid>
                <Grid item md={12} className="titulo-cochera">
                  <Divider sx={{ marginTop: 5 }} />
                  <p className="titulo-cochera-uno">
                    Cochera Privada - {filterCochera[0].name}
                  </p>
                  <p className="titulo-cochera-dos">
                    Anfitrion -{" "}
                    <Link to={`/anfitrion/${filterUser[0].id}`}>
                      {filterUser[0].userName} {filterUser[0].lastName}
                    </Link>
                  </p>
                  <p className="titulo-cochera-dos">
                    Tipo de Cochera - {filterCochera[0].space} espacios
                  </p>
                  <Divider />
                  <div className="description">
                    <p className="">{filterCochera[0].description}</p>
                  </div>
                </Grid>
                <Grid item md={12}>
                <Grid container>
                <Grid item md={6}>
                  <p className="titulo-fechas">
                    Cochera en {filterCochera[0].department}, {filterCochera[0].district}
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
                    sx={{ marginTop: 5, marginBottom: 5 }}
                  >
                  </Grid>
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
                    <span className="card-precio">
                      S/{filterCochera[0].price}
                    </span>
                    <span className="card-precio-aux">/hora</span>
                  </div>
                  <div>
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

                <Grid container sx={{ marginTop: 3, marginBottom: 5 }}>
                  <Grid item md={12}>
                    {/* <MapContainer
                      center={[
                        filterCochera[0].geolocation[0],
                        filterCochera[0].geolocation[1],
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
                          filterCochera[0].geolocation[0],
                          filterCochera[0].geolocation[1],
                        ]}
                        icon={markerIcon}
                      >
                        <Popup>Estas aqui</Popup>
                      </Marker>
                    </MapContainer> */}
                  </Grid>
                </Grid>

                <p className="titulo-lugar-mapa">
                  {filterCochera[0].department}, {filterCochera[0].district}
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
