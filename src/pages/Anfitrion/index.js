import { useState, useEffect, useContext } from "react";
import { getCocheraData, storeCochera as sc, updateIdCochera } from "../../service/firestore";
import { CocheraContext } from "../../Context/CocheraContext";
import { Link } from "react-router-dom";
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

  const { storeCochera } = useContext(CocheraContext);
  const { storeUser } = useContext(CocheraContext);

  const fetchData = async () => {
    const dataUser = await getCocheraData("usuario");
    const dataGarege = await getCocheraData("cochera");
    const filterUser = dataUser.find((user) => user.id === id);
    console.log(id)
    console.log(filterUser)
    console.log(dataUser[0])
    const garages = filterUser.idCocheras;

    const filterGarage = dataGarege.filter((dataGar) =>
      garages.includes(dataGar.id)
    );

    setUser(filterUser);
    setCocheras(filterGarage);
  };
  
  console.log(user)
  const [values, setValues] = useState({
    adress: "",
    country: "",
    department: "",
    description: "",
    district: "",
    geolocation: [],
    image: [],
    name: "",
    price: "",
    space: "",
  });


  const handleClickGarge = async () => {
    await sc(values, "cochera");
    await updateIdCochera(user, "usuario", values.id);
    await storeCochera(values);
    await storeUser(user);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <section>
      {Object.keys(user).length > 0 && (
        <Container sx={{ paddingTop: 10, paddingBottom: 10 }}>
          <Grid container>
            <Grid item md={12}>
              <Grid container>
                <Grid item md={6} sm={12} xs={2} className="foto-perfil">
                  <img src={user.userImage} />
                </Grid>
                <Grid item md={6} sm={12} xs={10} className="container-datos">
                  <Grid container>
                    <Grid
                      item
                      md={12}
                      sx={{ textAlign: "center", marginBottom: 3 }}
                    >
                      <h1>Hola, soy {user.userName} {user.lastName}</h1>
                    </Grid>
                    <Grid item md={6} sx={{ textAlign: "center" }}>
                      <span className="datos-subtitulo">
                        EMAIL:&nbsp;&nbsp;
                      </span>
                      <span>{user.email}</span>
                    </Grid>
                    <Grid item md={6} sx={{ textAlign: "center" }}>
                      <span className="datos-subtitulo">
                        TELEFONO:&nbsp;&nbsp;
                      </span>
                      <span>{user.telefono}</span>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item md={12} sx={{ textAlign: "center", marginTop: 4 }}>
                  <Link to="/anfitrion/:id/registro">
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
            {Object.keys(cocheras).length > 0 &&
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
                          <div>
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
                          </div>
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
