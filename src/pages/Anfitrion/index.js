import { useState, useEffect, useContext } from "react";
import {
  getCocheraData,
  storeCochera as sc,
  updateIdCochera,
} from "../../service/firestore";
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
import DoDisturbOnIcon from "@mui/icons-material/DoDisturbOn";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import photoUser from "../../assets/user.png";

// import { doc, deleteDoc, updateDoc } from "firebase/firestore";

import {eliminarRegistro} from "../../service/firestore"

const Anfitrion = () => {
  const { id } = useParams();
  const [user, setUser] = useState([]);
  const [cocheras, setCocheras] = useState([]);

  const { storeCochera } = useContext(CocheraContext);
  const { storeUser } = useContext(CocheraContext);

  const fetchData = async () => {
    const dataUser = await getCocheraData("usuario");
    const dataGarege = await getCocheraData("cochera");
    const filterUser = dataUser.find((user) => user.id === id);
    const garages = filterUser.idCocheras;

    const filterGarage = dataGarege.filter((dataGar) =>
      garages.includes(dataGar.id)
    );

    setUser(filterUser);
    setCocheras(filterGarage);
  };

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

  const idUsuario = JSON.parse(localStorage.getItem("userID"));

  const handleClickGarge = async () => {
    await sc(values, "cochera");
    await updateIdCochera(user, "usuario", values.id);
    await storeCochera(values);
    await storeUser(user);
  };

  useEffect(() => {
    fetchData();
  }, []);

  //Eliminar Registro
  const deleteElementFromCocheras = async (id) => {
    await eliminarRegistro(id);
    await fetchData();
  };



  return (
    <section>
      {Object.keys(user).length > 0 && (
        <Container sx={{ paddingTop: 10, paddingBottom: 10 }}>
          <Grid container sx={{ textAlign: "center" }}>
            <Grid
              container
              spacing={2}
              alignItems="center"
              className="grid-user"
              padding={2}
            >
              <Grid item xs={12} sm={6} md={6} xl={6} className="foto-perfil">
                <img src={photoUser} />
              </Grid>

              <Grid item xs={12} sm={6} md={6} xl={6}>
                <h3 className="datos-name">
                  {user.userName}, {user.lastName}
                </h3>
                <p className="datos-subtitulo">
                  email:&nbsp;&nbsp;{user.email}
                </p>
                <p className="datos-subtitulo">
                  telefono:&nbsp;&nbsp;{user.telefono}
                </p>
              </Grid>
              <Grid item xs={12} sm={12} xl={12}>
                <Link to={`/anfitrion/${idUsuario}/registro`}>
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={handleClickGarge}
                  >
                    <AddCircleIcon />
                    &nbsp;&nbsp;CREAR COCHERA
                  </Button>
                </Link>
              </Grid>
            </Grid>
            {Object.keys(cocheras).length > 0 &&
              cocheras.map((cochera) => (
                <Grid item md={12}>

                  <Divider sx={{ margin:5}} />
                  <Card className="card-cocheras">
                    <CardContent>
                      <Grid
                        container
                        alignItems="center"
                        sx={{ textAlign: "center" }}
                        spacing={2}
                      >
                        <Grid item xs={12} sm={6} md={5} xl={4}>
                          <img
                            className="image-principal"
                            src={cochera.image[0]}
                            alt=""
                          />
                        </Grid>

                        <Grid item xs={12} sm={6} md={5} xl={6}>
                          <div>
                            <h2>{cochera.name}</h2>

                            <span>{cochera.country},&nbsp;</span>
                            <span>{cochera.department},&nbsp;</span>

                            <span style={{ marginBottom: 10 }}>
                              {cochera.district}&nbsp;
                            </span>
                            <h6 style={{ marginBottom: 10 }}>
                              Direccion : {cochera.adress}
                            </h6>
                            <h6>
                              Estacionamientos disponibles: {cochera.space}
                            </h6>
                            <span style={{ textAlign: "justify" }}>
                              Descripcion: {cochera.description}
                            </span>
                          </div>
                        </Grid>

                        <Grid item xs={12} sm={12} md={2} xl={2}>
                          <Button
                            variant="contained"
                            color="secondary"
                            onClick={() =>
                              deleteElementFromCocheras(cochera.id)
                            }
                          >
                            <DoDisturbOnIcon />
                            &nbsp;&nbsp;Eliminar
                          </Button>
                        </Grid>
                      </Grid>
                    </CardContent>
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
