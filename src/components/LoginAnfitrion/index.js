import React, { useState } from "react";
import {storeCochera, getCocheraData} from "../../service/firestore";
import {
  Grid,
  TextField,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Tab,
  styled,
  FormControl,
  Typography,
} from "@mui/material";
import swal from "sweetalert";
import { TabContext, TabPanel, TabList } from "@mui/lab";
import CloseIcon from "@mui/icons-material/Close";
import PersonPinIcon from "@mui/icons-material/PersonPin";
import LoginIcon from "@mui/icons-material/Login";
import SendIcon from "@mui/icons-material/Send";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import { FcGoogle } from "react-icons/fc";
import FacebookIcon from "@mui/icons-material/Facebook";
import "./index.css";

const LoginAnfitrion = ({ handleClickOpen, open }) => {
  const [value, setValue] = useState("1");

  const handleTabsLogin = (event, newValue) => {
    setValue(newValue);
  };

  //registro de usuario
  const [users, setUsers] = useState({
    userName:"",
    lastName:"",
    email:"",
    password:"",
    dni:"",
    telefono:"",
    idCocheras: [],
    userImage: "",
  });

  //obteniendo valores de los inputs
  const handleInputForm = (e) => {
    const {name, value} = e.target;
    setUsers({
      ...users,
      [name]: value,
    });
    
  };
  //funcion para verificar el usuario

  const verificarUsuario = async() => {
    const data = await getCocheraData("usuario");
    const filtroUser = data.filter((dt) => dt.email === users.email && dt.password === users.password);
    if (filtroUser.length > 0) {
        const idUser = filtroUser[0].id;
        localStorage.setItem("userID",JSON.stringify(idUser));
        const response = await swal({
          icon: "success",
          title: "Inicio de sesion exitoso",
          text: `Bienvenido ${filtroUser[0].userName}`,
        });
        if(response){
          window.location.replace('');
        }
    }else {
      swal({
        icon: "error",
        title: "No se pudo iniciar sesion",
        text: "Coloque bien su correo o contraseña \n o si no esta registrado registrese primero",
      });  
    };
  };
 
  //funcion para crear usuario
  const handleClickCreateUser = async() => {
    await storeCochera(users, "usuario");
    swal({
      icon: "success",
      title: "Cuenta creada",
      text: "Inicie sesion para continuar",
    });
    document.querySelector('form').reset();
    setUsers({
      username:"",
      lastName:"",
      email:"",
      password:"",
      dni:"",
      telefono:"",
      idCocheras: [],
      userImage: "", 
    })
    return ;
  }

  //Button personalizado y usado como componente
  const ColorButton = styled(Button)(({ theme }) => ({
    backgroundColor: "#b34c6b",
    height: "42px",
    margin: "20px 0",
    transition: "1s",
    "&:hover": {
      backgroundColor: "#863850",
    },
    borderRadius: "12px",
  }));


  //Componente para usar servicios externos para el Login texfield
  const ServiciosGoFa = ({ init }) => {
    return (
      <>
        <Button
          variant="outlined"
          fullWidth
          startIcon={<FcGoogle />}
          onClick={handleClickOpen}
          sx={{ marginTop: "20px", borderColor: "#B0A5AB" }}
        >
          <span style={{ color: "black" }}>{init} con Google</span>
        </Button>
        <Button
          variant="outlined"
          fullWidth
          startIcon={<FacebookIcon />}
          onClick={handleClickOpen}
          sx={{ marginTop: "20px", borderColor: "#B0A5AB" }}
        >
          <span style={{ color: "black" }}>{init} con Facebook</span>
        </Button>
      </>
    );
  };

  return (
    <Dialog
      open={open}
      onClose={handleClickOpen}
      maxWidth={"sm"}
      fullWidth={true}
    >
      <DialogTitle
        sx={{
          padding: "5px 2px 10px",
          borderBottom: "1px solid rgba(61, 59, 59, 0.226);",
        }}
      >
        <Grid container alignItems={"center"}>
          <Grid item sx={{ height: "1px" }}>
            <Button
              size="small"
              sx={{ justifyContent: "start", color: "#b34c6b" }}
              onClick={handleClickOpen}
            >
              <CloseIcon sx={{ fontSize: 26 }} />
            </Button>
          </Grid>
          <Grid item xs={12} textAlign={"center"}>
            <Typography
              className="title-card2"
              variant="h5"
              gutterBottom
              component="div"
              mb={0}
            >
              Inicia sesion o Registrate
            </Typography>
          </Grid>
        </Grid>
      </DialogTitle>
      <DialogContent>
        <Grid container textAlign={"center"} justifyContent={"center"}>
          <Grid item md={12}>
            <Typography
              className="subtitle-card"
              variant="h5"
              gutterBottom
              component="div"
              mb={0}
              mt={2}
            >
              Te damos la bienvenida a Cochera.pe
            </Typography>
          </Grid>
        </Grid>
        <TabContext value={value}>
          <TabList onChange={handleTabsLogin}>
            <Tab
              label="Iniciar Sesion"
              value="1"
              icon={<LoginIcon />}
              iconPosition="start"
            />
            <Tab
              label="Registrate"
              value="2"
              icon={<PersonPinIcon />}
              iconPosition="start"
            />
          </TabList>
          <TabPanel value="1">
            <FormControl fullWidth>
              <TextField
                autoFocus
                margin="dense"
                label="Email Address"
                type="email"
                name="email"
                fullWidth
                variant="filled"
                color="secondary"
                required
                onChange={handleInputForm}
              />
              <TextField
                margin="dense"
                label="Password"
                type="password"
                name="password"
                fullWidth
                variant="filled"
                color="secondary"
                required
                onChange={handleInputForm}
              />
              <ColorButton
                variant="contained"
                type="submit"
                fullWidth
                endIcon={<SendIcon />}
                onClick={verificarUsuario}
              >
                Siguiente
              </ColorButton>
              <div className="div-container">
                <div className="division"></div>
                <span>&nbsp;O&nbsp;</span>
                <div className="division"></div>
              </div>
              <ServiciosGoFa init={"Inicia Sesion"} />
            </FormControl>
          </TabPanel>

          {/* Panel 2 - registro*/}

          <TabPanel value="2">
              <form >  
                <Grid container spacing={2}>
                  <Grid item md={6}>
                    <TextField
                      autoFocus
                      margin="dense"
                      name="userName"
                      label="Name"
                      type="text"
                      fullWidth
                      onChange={handleInputForm}
                    />
                  </Grid>
                  <Grid item md={6}>
                    <TextField
                      margin="dense"
                      name="lastName"
                      label="Last Name"
                      type="text"
                      fullWidth
                      onChange={handleInputForm}
                    />
                  </Grid>
                  <Grid item md={6}>
                    <TextField
                      margin="dense"
                      name="email"
                      label="Email"
                      type="email"
                      fullWidth
                      onChange={handleInputForm}
                    />
                  </Grid>
                  <Grid item md={6}>
                    <TextField
                      margin="dense"
                      name="password"
                      label="Password"
                      type="password"
                      fullWidth
                      onChange={handleInputForm}
                    />
                  </Grid>
                  <Grid item md={6}>
                    <TextField
                      margin="dense"
                      name="dni"
                      label="Dni"
                      type="number"
                      fullWidth
                      onChange={handleInputForm}
                    />
                  </Grid>
                  <Grid item md={6}>
                    <TextField
                      margin="dense"
                      name="telefono"
                      label="Phone"
                      type="tel"
                      onChange={handleInputForm}
                      fullWidth
                    />
                  </Grid>
                </Grid>
              
                <ColorButton
                  variant="contained"
                  fullWidth
                  endIcon={<AppRegistrationIcon />}
                  onClick={handleClickCreateUser}
                >
                  Registrate
                </ColorButton>
            </form>
            <div className="div-container">
              <div className="division"></div>
              <span>&nbsp;O&nbsp;</span>
              <div className="division"></div>
            </div>
            <ServiciosGoFa init={"Registrate"} />
          </TabPanel>
        </TabContext>
      </DialogContent>
    </Dialog>
  );
};

export default LoginAnfitrion;
