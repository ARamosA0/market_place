import { useState } from "react";
import LoginAnfitrion from "../LoginAnfitrion";
import {
  Button,
  Box,
  Typography,
  Toolbar,
  IconButton,
  MenuItem,
  Menu,
  Avatar,
  Divider,
  AppBar,
  Link,
} from "@mui/material";
import BookOnlineIcon from "@mui/icons-material/BookOnline";
import HomeIcon from "@mui/icons-material/Home";
import Logout from "@mui/icons-material/Logout";
import PersonAdd from "@mui/icons-material/PersonAdd";
import swal from "sweetalert";
import "./index.css";

const MenuAppBar = () => {

  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(!open);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  //trayendo el usuario del localStorage
  const usuario = JSON.parse(localStorage.getItem("userID"));

  //cerrar sesion
  const handleClickCerrarSesion = () => {
    localStorage.removeItem("userID");
    if (!localStorage.getItem("userID")) {
      const response = swal({
        icon: "success",
        title: "Cesion cerrada",
      });
      setTimeout(() => {
        if (response) {
          window.location.replace("");
        }
      }, 2000);
    }
  };
  //llamando al boton registro
  const clickBttn = document.querySelector("#btnClick");
  //funcion para darle click al boton registro oculto
  const clickBtnRegistro = () => {
    clickBttn.click();
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{ height: "10vh" }}>
        <Toolbar sx={{ height: "10vh", padding: "0px 5px" }} className="navar">
          <Typography
            variant="h6"
            component="div"
            noWrap
            sx={{ display: { xs: "flex", md: "flex" } }}
          >
            <Link href={`/`} underline="none">
              <span className="logo-titulo1">
                Cocheras<span className="logo-titulo2">.pe</span>
              </span>
            </Link>
          </Typography>

          <Box sx={{ flexGrow: 1 }} />
          <Box
            sx={{ display: { xs: "flex", md: "flex" }, alignItems: "center" }}
          >
            <Typography
              variant="h6"
              component="div"
              sx={{ display: { xs: "none", sm: "block" }, padding: "15px" }}
            >
              <Link href={`/`} color="white" underline="none">
                <HomeIcon sx={{ fontSize: 20, color: "white" }} />
                <span className="botones"> Home</span>
              </Link>
            </Typography>
            <Typography
              variant="h6"
              component="div"
              sx={{ display: { xs: "none", sm: "block", padding: "15px" } }}
            >
              <Link href={`/parking`}  color="white" underline="none">
                <BookOnlineIcon sx={{ fontSize: 20, color: "white" }} />
                <span className="botones"> Parking Log</span>
              </Link>
            </Typography>
            {/* click para inicar sesion - va estar oculto */}
            <Typography
              variant="h6"
              component="div"
              sx={{ display: { xs: "none", sm: "none", padding: "15px" } }}
            >
              <Button
                onClick={handleClickOpen}
                color="secondary"
                variant="contained"
                id="btnClick"
              >
                <PersonAdd fontSize="small" />
                &nbsp;&nbsp;Iniciar Sesion
              </Button>
              <LoginAnfitrion handleClickOpen={handleClickOpen} open={open} />
            </Typography>

            <div style={{ width: "115px" }}>
              {!usuario ? (
                <IconButton
                  size="large"
                  onClick={handleMenu}
                  color="inherit"
                  className="btn-session"
                >
                  <Avatar
                    sx={{ width: 38, height: 38 }}
                    className="btn-session"
                  ></Avatar>
                  <span
                    style={{
                      fontSize: "18px",
                      fontWeight: "bold",
                      width: "66px",
                    }}
                  >
                    &nbsp;SignUp
                  </span>
                </IconButton>
              ) : (
                <IconButton size="large" onClick={handleMenu} color="inherit">
                  <Avatar
                    sx={{ width: 38, height: 38, textTransform: "capitalize" }}
                  >
                    {usuario.userName.substring(0, 1)}
                  </Avatar>
                  <span style={{ fontSize: "15px" }}>
                    &nbsp;{usuario.userName}
                  </span>
                </IconButton>
              )}

              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
                sx={{ top: "-9px", left: "-10px" }}
              >
                {!usuario ? (
                  <MenuItem>
                    <Button
                      onClick={clickBtnRegistro}
                      color="secondary"
                      variant="contained"
                    >
                      <PersonAdd fontSize="small" />
                      &nbsp;&nbsp;Iniciar Sesion
                    </Button>
                  </MenuItem>
                ) : (
                  <MenuItem onClick={handleClose}>
                    <Link
                      href={`/anfitrion/${usuario.id}`}
                      color="black"
                      underline="none"
                    >
                      <PersonAdd fontSize="small" />
                      &nbsp;&nbsp;Mi cuenta
                    </Link>
                  </MenuItem>
                )}
                {!usuario ? (
                  <MenuItem
                    onClick={handleClickCerrarSesion}
                    className="prueba"
                    sx={{ display: "none" }}
                  >
                    <Logout fontSize="small" />
                    &nbsp;&nbsp;Cerrar Sesion
                  </MenuItem>
                ) : (
                  <MenuItem
                    onClick={handleClickCerrarSesion}
                    className="prueba"
                    sx={{ display: "block" }}
                  >
                    <Logout fontSize="small" />
                    &nbsp;&nbsp;Cerrar Sesion
                  </MenuItem>
                )}

                <Divider />

                <MenuItem onClick={handleClose} className="prueba">
                  <Link href={`/`} color="black" underline="none">
                    <HomeIcon fontSize="small" />
                    &nbsp;&nbsp;Home
                  </Link>
                </MenuItem>

                <MenuItem onClick={handleClose} className="prueba">
                  <Link href={`/parking`} color="black" underline="none">
                    <BookOnlineIcon fontSize="small" />
                    &nbsp;&nbsp;Parking Log
                  </Link>
                </MenuItem>
              </Menu>
            </div>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
export default MenuAppBar;
