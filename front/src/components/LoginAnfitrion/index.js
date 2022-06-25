import React, { useState } from "react";
import {
  Grid,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Tab,
  Typography,
  styled
} from "@mui/material";
import {loginGithub} from '../../service/githubService'
import { createUserAxios } from "../../service/userService";
import { loginUserAxios } from "../../service/userService";
import jwt_decode from "jwt-decode";
import { TabContext, TabPanel, TabList } from "@mui/lab";
import CloseIcon from "@mui/icons-material/Close";
import PersonPinIcon from "@mui/icons-material/PersonPin";
import LoginIcon from "@mui/icons-material/Login";
// import { FcGoogle } from "react-icons/fc";
import GitHubIcon from '@mui/icons-material/GitHub';
import RegisterUser from "../RegisterUser";
import SesionUser from "../SesionUser";
import swal from "sweetalert";
import "./index.css";

const LoginAnfitrion = ({ handleClickOpen, open }) => {
  const [value, setValue] = useState("1");

  const handleTabsLogin = (event, newValue) => {
    setValue(newValue);
  };

  //Componente para usar servicios externos para el Login texfield
  const ServiciosGoFa = ({ init }) => {

    const handleClick = async() => {
      const userGithub = await loginGithub()
      const {displayName,email,phoneNumber,accessToken} = userGithub.user

      //crear usuario de github en la base de datos
      const userCreate = {
        username: `${displayName.replace(/\s+/g, '')}`,
        nombre:displayName.split(' ')[0],
        apellido: `${displayName.split(' ')[1]}----`,
        email: email ,
        password: accessToken,
        dni: "77777777",
        telefono: !phoneNumber ? "999999999" : phoneNumber,
      } 
      await createUserAxios(userCreate)

      //loguear usuario github
      const loginUser = {
        username: `${displayName.replace(/\s+/g, '')}`,
        password: accessToken
      }
      try {
        const data = await loginUserAxios(loginUser);
        const decoded = jwt_decode(data.Token);
        const idUser = {
          id: decoded.id,
          userName: decoded.username,
          lastName: decoded.lastname,
          Token: data.Token
        };
        localStorage.setItem("userID", JSON.stringify(idUser));
        const response = await swal({
          icon: "success",
          title: "Inicio de sesion exitoso",
          text: `Bienvenido ${decoded.username}`,
        });
        if (response) {
          window.location.replace("");
        }
      } catch (error) {
        await swal({
          icon: "error",
          title: "error no se puso registrar su cuenta",
        });
      }
    
    }
    const StyledButton  = styled(Button)(({ theme }) => ({
      "&:hover": {
        background: 'black',
      },
    }));
    return (
      <>
        <StyledButton
          variant="outlined"
          fullWidth
          startIcon={<GitHubIcon />}
          onClick={handleClick}
          sx={{ marginTop: "20px", borderColor: "#B0A5AB" ,backgroundColor: "black",color: "white"}}
        >
          <span style={{ color: "white" }}>{init} con Github</span>
        </StyledButton>
        {/* <Button
          variant="outlined"
          fullWidth
          startIcon={<FcGoogle />}
          onClick={handleClickOpen}
          sx={{ marginTop: "20px", borderColor: "#B0A5AB" }}
        >
          <span style={{ color: "black" }}>{init} con Google</span>
        </Button> */}
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
            {/* Panel 1 Ingreso de usuario */}
            <SesionUser/>
            <div className="div-container">
              <div className="division"></div>
              <span>&nbsp;O&nbsp;</span>
              <div className="division"></div>
            </div>
            <ServiciosGoFa init={"Inicia Sesion"} />
          </TabPanel>

          {/* Panel 2 - registro*/}

          <TabPanel value="2">
            <RegisterUser />
            <div className="div-container">
              <div className="division"></div>
              <span>&nbsp;O&nbsp;</span>
              <div className="division"></div>
            </div>
            {/* <ServiciosGoFa init={"Registrate"} /> */}
          </TabPanel>
        </TabContext>
      </DialogContent>
    </Dialog>
  );
};

export default LoginAnfitrion;
