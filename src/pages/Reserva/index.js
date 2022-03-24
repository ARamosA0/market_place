import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
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
import cochera1 from "../../assets/cochera1.jpg";
import cochera2 from "../../assets/cochera2.jpg";
import cochera3 from "../../assets/cochera3.jpg";

const Reserva = () => {
  const [cocheras, setCochera] = useState([
    {
      photo: [cochera1, cochera2, cochera3],
      name: "Cochera Arequipa Cerro Colorado",
      ubicacion: "Arequipa, Cerro Colorado, Peru",
      anfitrion: "Natalia",
      tipodeCochera: "Doble 3x5",
      precio: 20,
      tipoAuto: ["camioneta", "SUV", "Electrico"],
      descripcion: "La cochera esta ubicada en Cerro Colorado a 10 minutos del CC. Arequipa Center "
    },
  ]);

  const [auto, setAuto] = useState("");
  const handleSelectChange = (event) => {
    setAuto(event.target.value);
  };

  return (
    <div>
      <Navbar />
      {cocheras.length > 0 &&
        cocheras.map((cochera) => (
          <Container>
            <Grid container>
              <Grid item md={12}>
                <h1>Cochera Arequipa Cerro Colorado</h1>
              </Grid>
              <Grid item md={12} className="reserva-items">
                <div>
                  <StarIcon />
                  <span>4,96 . 84 reseñas</span>
                  <LocationOnIcon />
                  <span>Arequipa, Cerro Colorado, Peru</span>
                </div>
                {}
                <div>
                  <IosShareIcon />
                  <span>Compartir</span>
                  <BookmarkAddIcon />
                  <span>Guardar</span>
                </div>
              </Grid>
              <Grid item md={6}>
                <Grid container className="img-container-prin">
                  <Grid item className="img-container">
                    <img className="img-principal" src={cochera.photo[0]} />
                    <div className="img-container-sec">
                      <img
                        className="img-sec"
                        width={500}
                        src={cochera.photo[1]}
                      />
                      <img
                        className="img-sec"
                        width={500}
                        src={cochera.photo[2]}
                      />
                    </div>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item md={6}>
                <Card sx={{ maxWidth:300 }}>
                  <CardContent className="card-info">
                    <div>
                      <span className="card-precio">S/{cochera.precio}</span>
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
                            className="date"
                            sx={{
                              width: 250,
                              marginTop: 1,
                            }}
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
                            sx={{ width: 250, marginTop: 2, }}
                            InputLabelProps={{
                              shrink: true,
                            }}
                          />
                        </Stack>
                      </div>

                      <FormControl fullWidth sx={{ m: 1, minWidth: 120, marginTop: 2,  }}>
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
                          <MenuItem value={10}>{cochera.tipoAuto[0]}</MenuItem>
                          <MenuItem value={20}>{cochera.tipoAuto[1]}</MenuItem>
                          <MenuItem value={30}>{cochera.tipoAuto[2]}</MenuItem>
                        </Select>
                      </FormControl>
                    </div>

                    <div>
                      <Button fullWidth size="large" variant="contained" sx={{ marginTop: 2 }}>
                        Reservar
                      </Button>
                    </div>

                    <div sx={{ marginTop: 2 }}>
                    <hr sx={{ marginTop: 2 }}/>
                      <Box
                        sx={{
                          p: 2,
                          minWidth: 300,
                          display: "inline",
                        }}
                      >
                        Precio Total
                      </Box>
                      <Box
                        sx={{
                          fontSize: 34,
                          fontWeight: "medium",
                          display: "inline",
                        }}
                      >
                        S/ 123123
                      </Box>
                    </div>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item md={12}>
                <div>
                    <p>Cochera Privada - {cochera.anfitrion}</p>
                    <p>Tipo de Cochera - {cochera.tipodeCochera}</p>

                    <hr/>
                </div>
                <div>
                    <p>{cochera.descripcion}</p>
                </div>
                <hr/>
                <div>
                    <p>Reseñas</p>
                </div>
              </Grid>
            </Grid>
          </Container>
        ))}
    </div>
    // </ThemeProvider>
  );
};

export default Reserva;
