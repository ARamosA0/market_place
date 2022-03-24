import { Outlet } from "react-router-dom";
import { Grid, TextField } from "@mui/material";
import logo from "../../assets/logo.png";
import "./header.css";



const Header = () => {
  return (
    <div>
      <nav className="nav-header">
        <Grid container alignItems="center">
          {/* Logo */}
          <Grid item md={3}>
              <a href="/"><img className="nav-img" src={logo} /></a>
          </Grid>
          {/* Busqueda */}
          <Grid item md={7}>
            <TextField variant="standard" label="Busca tu espacio" />
            <TextField variant="standard" label="Fecha" />
            <TextField variant="standard" label="Horas" />
          </Grid>
          {/* List */}
          <Grid item md={2}>
            <ul className="ul-nav">
              <li>
                <a href="/reserva">Hazte socio</a>
              </li>
              <li>
                  <a href="">Login</a>
              </li>
            </ul>
          </Grid>
        </Grid>
      </nav>
      <Outlet />
    </div>
  );
};

export default Header;
