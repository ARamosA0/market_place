import { useState, useEffect } from "react";
import { getCocheraData, storeCochera } from "../../service/firestore";
import { Outlet, Link } from "react-router-dom";
import { useParams } from "react-router-dom";
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
  
  const {id} = useParams();
  const [user, setUser] = useState([]);
  const [cocheras, setCocheras] = useState([]);
  const fetchData = async () => {
    const dataUser = await getCocheraData("usuario");
    const dataGarege = await getCocheraData("cochera");
    // console.log(dataUser);
    const filterUser = dataUser.filter((user)=>
    user.id.includes(id)
    );
    
    // const idGarage = filterUser[0].idCocheras.forEach((id)=> {
    //   console.log(id)
    // })

    const idGarage = filterUser[0].idCocheras.map((id)=>id)
    console.log("ID Garages", idGarage)
    console.log("data Garages", dataGarege)

    // console.log("ID Garages", idGarage)
    const filterGarage = dataGarege.filter((garage)=>
    idGarage.includes(garage.id)
    );
    console.log(filterGarage)
    // setCocheras(filterGarage);
    setUser(filterUser);
  

  }
  

  const [values, setValues] = useState({
    none: "",
  });


  const handleClickGarge = async () => {
    await storeCochera(values, "cochera");
    await storeCochera(values, "usuario");
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <section>
      {user.length > 0 && (
        <Container sx={{ paddingTop: 10, paddingBottom: 10 }}>
          <Grid container>
            <Grid item md={12}>
              <Grid container>
                <Grid item md={6} sm={12} xs={2} className="foto-perfil">
                  <img src={user[0].userImage} />
                </Grid>
                <Grid item md={6} sm={12} xs={10} className="container-datos">
                  <Grid container>
                    <Grid
                      item
                      md={12}
                      sx={{ textAlign: "center", marginBottom: 3 }}
                    >
                      <h1>Hola, soy {user[0].userName} {user[0].lastName}</h1>
                    </Grid>
                    <Grid item md={6} sx={{ textAlign: "center" }}>
                      <span className="datos-subtitulo">
                        EMAIL:&nbsp;&nbsp;
                      </span>
                      <span>{user[0].email}</span>
                    </Grid>
                    <Grid item md={6} sx={{ textAlign: "center" }}>
                      <span className="datos-subtitulo">
                        TELEFONO:&nbsp;&nbsp;
                      </span>
                      <span>{user[0].telefono}</span>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item md={12} sx={{ textAlign: "center", marginTop: 4 }}>
                  <Link to="/anfitrion/registro">
                    <Button
                      variant="contained"
                      color="secondary"
                      onClick={handleClickGarge}
                    >
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
                            src={cochera.image[0]}
                          />
                        </Grid>
                        <Grid item xs={8}>
                          <p>
                            <h2>{cochera.nameAlquiler}</h2>
                            <span>{cochera.country},&nbsp;</span>
                            <span>{cochera.department},&nbsp;</span>
                            <span style={{ marginBottom: 10 }}>
                              {cochera.district}&nbsp;
                            </span>
                            <h6 style={{ marginBottom: 10 }}>
                              {cochera.adress}
                            </h6>
                            <p style={{ textAlign: "justify" }}>
                              {cochera.description}
                            </p>
                          </p>
                        </Grid>
                      </Grid>
                    </CardContent>
                    <CardActions>
                      <Button
                        sx={{ marginLeft: 100 }}
                        color="secondary"
                      >
                        Ver publicacion
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
          </Grid>
        </Container>
      )}
    </section>
  );
}

export default Anfitrion;
