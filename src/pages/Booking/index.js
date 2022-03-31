import React, { useState, useEffect } from "react";
import { getCocheraData } from "../../service/firestore";
import {
  Grid,
  Container,
  Card,
  CardActions,
  CardContent,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Stack,
  TextField,
  Button,
  Box,
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import IosShareIcon from "@mui/icons-material/IosShare";
import BookmarkAddIcon from "@mui/icons-material/BookmarkAdd";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import "./index.css";
import { flexbox } from "@mui/system";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import StaticDatePicker from "@mui/lab/StaticDatePicker";

const Booking = () => {
  // const [cocheras, setCochera] = useState([
  //   {
  //     photo: [cochera1, cochera2, cochera3],
  //     name: "Cochera Arequipa Cerro Colorado",
  //     ubicacion: {
  //       pais: "Peru",
  //       region: "Arequipa",
  //       distrito: "Cerro Colorado"
  //     },
  //     mapaUbicacion:"https://i.blogs.es/b4dd5c/maps/1366_2000.png",
  //     anfitrion: "Natalia",
  //     photoAnfitrion:"https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359554_960_720.png",
  //     tipodeCochera: "Doble 3m x 5m",
  //     precio: 20,
  //     tipoAuto: ["camioneta", "SUV", "Electrico"],
  //     descripcion: "La cochera esta ubicada en Cerro Colorado a 10 minutos del CC. Arequipa La cochera esta ubicada en Cerro Colorado a 10 minutos del CC. Arequipa La cochera esta ubicada en Cerro Colorado a 10 minutos del CC. Arequipa La cochera esta ubicada en Cerro Colorado a 10 minutos del CC. Arequipa"
  //   },
  // ]);

  const [cocheras, setCocheras] = useState([]);

  const fetchData = async () => {
    const data = await getCocheraData("usuarioAnfitrion");
    setCocheras(data);
    console.log(data[0])
  };

  const [auto, setAuto] = useState("");
  const handleSelectChange = (event) => {
    setAuto(event.target.value);
  };

  const [value, setValue] = React.useState(new Date());

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <section>
      
      {cocheras.length > 0 &&
          <Container sx={{ marginTop: 3 }}>
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
              <Grid item md={6}sx={{marginTop:2, }}>
                <Grid container>
                  <Grid item className="img-container">
                    <img className="img-principal" src={"https://cdn.corrieredellosport.it/images/sq/1200/1200/2015/11/20/143549356-64724baa-1f3e-4d66-b57c-e0c0dc25b797.jpg"} />
                    <div className="img-container-sec">
                      <img
                        className="img-sec"
                        width={500}
                        src={"https://st.hzcdn.com/simgs/pictures/garages/a-dream-garage-in-sevenoaks-garageflex-img~d201afca0d5eb13e_4-9921-1-50048b5.jpg"}
                      />
                      <img
                        className="img-sec"
                        width={500}
                        src={"https://cdn.bmwblog.com/wp-content/uploads/2020/12/bmw-garage-door-opener-01.jpg"}
                      />
                    </div>
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
                      <div className="date-container">
                        <Stack component="form" noValidate spacing={3}>
                          <TextField
                            id="datetime-local"
                            label="Llegada"
                            type="datetime-local"
                            defaultValue="2017-05-24T10:30"
                            fullWidth
                            sx={{ marginTop: 1 }}
                            InputLabelProps={{
                              shrink: true,
                            }}
                          />
                        </Stack>
                        <Stack component="form" noValidate spacing={3}>
                          <TextField
                            id="datetime-local"
                            label="Salida"
                            type="datetime-local"
                            defaultValue="2017-05-24T10:30"
                            fullWidth
                            sx={{ marginTop: 2, }}
                            InputLabelProps={{
                              shrink: true,
                            }}
                          />
                        </Stack>
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

                    <div>
                    <hr/>
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
              <Grid item md={6}>
                <div className="titulo-propietario-principal">
                <div>
                  <p className="titulo-propietario">Cochera Privada - {cocheras[0].nameAnfitrion}</p>
                  <p>Tipo de Cochera - {cocheras[0].tipoCochera}</p>
                </div>
                  
                  <div className="img-usuario">
                    <img src={cocheras[0].fotoAnfitrion}/>
                  </div>
                </div>
                <div className="description">
                    <p className="">{cocheras[0].descripcion}</p>
                </div>
                
                <div >
                    <p className="titulo-propietario">{cocheras[0].region}, {cocheras[0].distrito}</p>
                    <div className="calendar-container">
                      <div >
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                          <StaticDatePicker
                            displayStaticWrapperAs="desktop"
                            openTo="day"
                            value={value}
                            onChange={(newValue) => {
                              setValue(newValue);
                            }}
                            renderInput={(params) => <TextField {...params} />}
                          />
                        </LocalizationProvider>
                      </div>
                      <div>
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                          <StaticDatePicker
                            displayStaticWrapperAs="desktop"
                            openTo="day"
                            value={value}
                            onChange={(newValue) => {
                              setValue(newValue);
                            }}
                            renderInput={(params) => <TextField {...params} />}
                          />
                        </LocalizationProvider>
                      </div>
                    </div>
                </div>
                </Grid>
                <Grid item md={12}>
                  
                  <p className="titulo-mapa">A donde iras</p>
                  <img width={1200} src={"https://i.blogs.es/b4dd5c/maps/1366_2000.png"}/>
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
        }
    </section>
  );
};

export default Booking;