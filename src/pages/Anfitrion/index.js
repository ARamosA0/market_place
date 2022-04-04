import { useState, useEffect } from "react";
import { getCocheraData } from "../../service/firestore";
import { Outlet, Link } from "react-router-dom";
import {
  Grid,
  Container,
  Divider,
  Card,
  CardActions,
  CardContent,
  Button,
} from "@mui/material";

import "./index.css";

const Anfitrion = () => {
  const [cocheras, setCocheras] = useState([]);
  const fetchData = async () => {
    const data = await getCocheraData("usuarioAnfitrion");
    setCocheras(data);
    console.log(data[0])
    console.log(data)
  };


  useEffect(() => {
    fetchData();
  }, []);

  return (
    <section>
      {cocheras.length > 0 && (
        <Container sx={{ paddingTop: 10, paddingBottom: 10 }}>
          <Grid container>
            <Grid item md={12}>
              <Grid container>
                <Grid item md={6} sm={12} xs={2} className="foto-perfil">
                  <img src={cocheras[0].fotoAnfitrion} />
                </Grid>
                <Grid item md={6} sm={12} xs={10} className="container-datos">
                  <Grid container>
                    <Grid
                      item
                      md={12}
                      sx={{ textAlign: "center", marginBottom: 3 }}
                    >
                      <h1>Hola, soy {cocheras[0].nameAnfitrion}</h1>
                    </Grid>
                    <Grid item md={6} sx={{ textAlign: "center" }}>
                      <span className="datos-subtitulo">
                        EMAIL:&nbsp;&nbsp;
                      </span>
                      <span>{cocheras[0].email}</span>
                    </Grid>
                    <Grid item md={6} sx={{ textAlign: "center" }}>
                      <span className="datos-subtitulo">
                        TELEFONO:&nbsp;&nbsp;
                      </span>
                      <span>{cocheras[0].telefono}</span>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item md={12} sx={{textAlign: "center", marginTop:4}}>
                <Link to="/anfitrion/registro">
                    <Button variant="contained" color="secondary">
                      ANADIR REGISTROS
                    </Button>
                </Link>

                </Grid>
              </Grid>
            </Grid>
            {cocheras.length > 0 &&
              cocheras.map((cochera) => (
                <Grid item md={12}>
                  <Divider sx={{ marginTop: 5, marginBottom: 5 }} />
                  <Card>
                    <CardContent>
                      <Grid container>
                        <Grid item xs={4}>
                          <img
                            className="image-principal"
                            src={cochera.photos[0]}
                          />
                        </Grid>
                        <Grid item xs={8}>
                            <p>
                                <h2>{cochera.nameAlquiler}</h2>
                                <span>{cochera.pais},&nbsp;</span>
                                <span>{cochera.region},&nbsp;</span>
                                <span style={{ marginBottom:10}}>{cochera.Distrito}&nbsp;</span>
                                <h6 style={{ marginBottom:10}}>{cochera.Direccion}</h6>
                                <p style={{textAlign: "justify"}}>{cochera.descripcion}</p>
                            </p>
                        </Grid>
                      </Grid>
                    </CardContent>
                    <CardActions>
                      <Button sx={{marginLeft:124}} color="secondary">Ver publicacion</Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
          </Grid>
        </Container>
      )}
    </section>
  );
};

export default Anfitrion;
