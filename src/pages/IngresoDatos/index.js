/**
 * Esta page es solo de prueba hasta tener el ingreso de datos
 * del login de usuarios comunes y Anfitriones
 */

import { useState, useEffect } from "react";
import { TextField, Button, Grid, Container, Input } from "@mui/material";
import { writeData } from "../../service/firestore";

const IngresoDatosImages = () => {

  const [values, setValues] = useState({
    Distrito:"",
    costo: "",
    descripcion: "",
    dni: "",
    email:"",
    geolocalization:[],
    nameAlquiler:"",
    nameAnfitrion:"",
    pais:"",
    password:"",
    photos:[],
    region:"",
    telefono:"",
    tipoCochera:"",
  })

  const handleFileSelect = (event) => {
    event.prevetDefault();
    const { value, name } = event.target.files[0];
  };

  const handleInputSelect = (event) => {
    const { value, name } = event.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const pressbutton = async () => {
    await writeData(values);
    console.log(values)
  };

  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item md={6}>
          <h2>Usuario Anfitrion</h2>
          <Grid container spacing={3}>
            <Grid item md={6}>
              <TextField
                required
                name="nameAnfitrion"
                label="Nombre Anfitrion"
                onChange={handleInputSelect}
              />
            </Grid>
            <Grid item md={6}>
              <TextField required name="outlined-required" label="DNI" />
            </Grid>
            <Grid item md={6}>
              <TextField
                required
                name="email"
                type="email"
                label="Email"
                onChange={handleInputSelect}
              />
            </Grid>
            <Grid item md={6}>
              <TextField
                required
                name="password"
                type="password"
                label="password"
                onChange={handleInputSelect}
              />
            </Grid>
            <Grid item md={6}>
              <TextField
                required
                name="telefono"
                type="number"
                label="telefono"
                onChange={handleInputSelect}
              />
            </Grid>
            <Grid item md={6}>
              <TextField
                required
                name="nameAlquiler"
                label="Nombre Alquiler"
                onChange={handleInputSelect}
              />
            </Grid>
            <Grid item md={6}>
              <TextField
                required
                name="descripcion"
                label="descripcion"
                onChange={handleInputSelect}
              />
            </Grid>
            <Grid item md={6}>
              <TextField
                required
                name="tipoCochera"
                label="tipoCochera"
                onChange={handleInputSelect}
              />
            </Grid>
            <Grid item md={6}>
              <TextField
                required
                name="photos"
                type="file"
                onChange={handleFileSelect}
                label="Photos"
              />
            </Grid>
            <Grid item md={6}>
              <TextField
                required
                name="pais"
                label="pais"
                onChange={handleInputSelect}
              />
            </Grid>
            <Grid item md={6}>
              <TextField
                name="region"
                label="region"
                onChange={handleInputSelect}
              />
            </Grid>
            <Grid item md={6}>
              <TextField
                name="Distrito"
                label="distrito"
                onChange={handleInputSelect}
              />
            </Grid>
            <Grid item md={6}>
              <TextField
                required
                name="Direccion"
                label="direccion"
                onChange={handleInputSelect}
              />
            </Grid>
            <Grid item md={6}>
              <TextField
                required
                name="costo"
                label="costo"
                onChange={handleInputSelect}
              />
            </Grid>
            <Grid item md={6}>
              <Button onClick={pressbutton}>Subir</Button>
            </Grid>
          </Grid>
        </Grid>

        <Grid item md={6}>
          <h2>Usuario Normal</h2>
          <Grid container spacing={3}>
            <Grid item md={6}>
              <TextField
                required
                name="nombre-usuario"
                label="Nombre Usuario"
              />
            </Grid>
            <Grid item md={6}>
              <TextField
                required
                name="password-normal"
                type="password"
                label="Password"
              />
            </Grid>
            <Grid item md={6}>
              <TextField required name="email-normal" label="Correo" />
            </Grid>
            <Grid item md={6}>
              <TextField
                required
                name="telefono-normal"
                type="number"
                label="telefono"
              />
            </Grid>
            <Grid item md={6}>
              <TextField required name="dni-normal" type="number" label="DNI" />
            </Grid>
            <Grid item md={6}>
              <Button>Subir</Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default IngresoDatosImages;
