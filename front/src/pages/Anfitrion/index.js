import { useState, useEffect} from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

import {
  getUserCocheras,
  createUserCocheras,
  deleteUserCocheras,
} from "../../service/cocherasServices";

import { getUsuarioById } from "../../service/userService";
import { CardsCocheraUser } from "../../components/CardsCocheraUser";

import {
  Grid,
  Container,

  Button,
} from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import LoaderCar from "../../components/LoaderCar";
import "./index.css";


const Anfitrion = () => {
  const { id } = useParams();
  const [user, setUser] = useState([]);
  const [cocheras, setCocheras] = useState([]);
  const [indexs, setIndexs] = useState(0);
  const [loaderAwait, setLoaderAwait] = useState(false);
  const values = {
    name: "av Lima",
    description: "cochera para dos autos",
    price: 23,
    imagen1: "https://i.pinimg.com/originals/f1/4b/8c/f14b8ce2bafbcdfa22f01c5142e48e7c.jpg",
    imagen2: "https://i.pinimg.com/originals/f1/4b/8c/f14b8ce2bafbcdfa22f01c5142e48e7c.jpg",
    imagen3: "https://i.pinimg.com/originals/f1/4b/8c/f14b8ce2bafbcdfa22f01c5142e48e7c.jpg",
    space: 1,
    country: "lima",
    department: "lima",
    district: "lima",
    adress: "-",
    lat: "222",
    long: "222",
    cliente: +id,
  };


  const userAxiosbyId = async () => {
    const idLocalStorageUser = JSON.parse(localStorage.getItem("userID"));
    const { Token } = idLocalStorageUser;
    const dataUserId = await getUsuarioById(id, Token);
    setUser(dataUserId.content);
    // console.log(user);
  };
  
  //Obtener cocheras de usuario
  const getCocherasUser = async () => {
    const dataUserCochera = await getUserCocheras(id);
    setCocheras(dataUserCochera.content);
    // console.log(cocheras)
  };

  //Crear Cochera
  const handleClickCreateCochera = async () => {
    const dataCreateCochera = await createUserCocheras(values);
    console.log(dataCreateCochera);
  };

  //Eliminar Registro
  const deleteElementFromCocheras = async (id, index) => {
    setLoaderAwait(!loaderAwait);
    setIndexs(index);
    await deleteUserCocheras(id);
    await getCocherasUser();
    setLoaderAwait(loaderAwait);
  };

  useEffect(() => {
    userAxiosbyId();
    getCocherasUser();
  }, []);
  return (
    <section>
      {user.length > 0 ? (
        <Container sx={{ paddingTop: 10, paddingBottom: 10 }}>
          <Grid container sx={{ textAlign: "center" }} mt={10}>
            <Grid
              container
              spacing={2}
              alignItems="center"
              className="grid-user"
              padding={2}
            >
              {user.map(
                ({ first_name, last_name, email, telefono, imagen }) => (
                  <>
                    <Grid
                      item
                      xs={12}
                      sm={6}
                      md={6}
                      xl={6}
                      className="foto-perfil"
                    >
                      <img
                        src={`http://res.cloudinary.com/dyg8vlnnz/${imagen}`}
                        alt="userImage"
                      />
                    </Grid>

                    <Grid item xs={12} sm={6} md={6} xl={6}>
                      <h3 className="datos-name">
                        {first_name} {last_name}
                      </h3>
                      <p className="datos-subtitulo">
                        email:&nbsp;&nbsp;{email}
                      </p>
                      <p className="datos-subtitulo">
                        telefono:&nbsp;&nbsp;{telefono}
                      </p>
                    </Grid>
                    <Grid item xs={12} sm={12} xl={12}>
                      <Link to={`/anfitrion/${id}/registro`}>
                        <Button
                          variant="contained"
                          color="secondary"
                          onClick={handleClickCreateCochera}
                        >
                          <AddCircleIcon />
                          &nbsp;&nbsp;CREAR COCHERA
                        </Button>
                      </Link>
                    </Grid>
                  </>
                )
              )}
            </Grid>
            <CardsCocheraUser cocheras={cocheras} loaderAwait={loaderAwait} indexs={indexs} deleteElementFromCocheras={deleteElementFromCocheras}/>
          </Grid>
        </Container>
      ) : (
        <LoaderCar />
      )}
    </section>
  );
};

export default Anfitrion;