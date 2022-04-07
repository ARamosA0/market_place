import { useState, useEffect } from "react";
import { Grid, Container} from "@mui/material";
import LoginAnfitrion from "../../components/LoginAnfitrion";
import { Link as LinkReact} from "react-router-dom";
import Link from "@mui/material/Link";
import HomeIcon from "@mui/icons-material/Home";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import BookOnlineIcon from "@mui/icons-material/BookOnline";
import HowToRegIcon from "@mui/icons-material/HowToReg";

import "./index.css";

const Navbar = () => {
  //useState para registro  
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState([]);

  const handleClickOpen = () => {
    setOpen(!open);
  };

  const fetchData = () => {
  //trayendo el usuario del localStorage
  const idUsuario = JSON.parse(localStorage.getItem("user"));
  setUser(idUsuario)
  }
  
  
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="nav-container">
      {user.length > 0 && (
      <Container maxWidth="xl">
        <Grid
          container
          direction={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
          pt={4}
          pb={5}
        >
          <Grid item>
            <span className="logo-titulo1">
              Cocheras<span className="logo-titulo2">.pe</span>
            </span>
          </Grid>
          <Grid item>
            <Grid
              container
              spacing={5}
              direction={"row"}
              justifyContent={"end"}
              alignItems={"center"}
            >
              <Grid item>
                <Link href={`/`} color="white" underline="none">
                  <HomeIcon sx={{ fontSize: 20, color: "white" }} />
                  <span className="botones"> Home</span>
                </Link>
              </Grid>
              <Grid item>
                <Link href={`/anfitrion/${user[0].id}`} color="white" underline="none">
                  <AlternateEmailIcon sx={{ fontSize: 20, color: "white" }} />
                  <span className="botones"> Contact</span>
                </Link>
              </Grid>
              <Grid item>
                <Link href={`/parkinglog`} color="white" underline="none">
                  <BookOnlineIcon sx={{ fontSize: 20, color: "white" }} />
                  <span className="botones"> Booking</span>
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" color="white" underline="none">
                  <span className="registro" onClick={handleClickOpen}>
                    <HowToRegIcon sx={{ fontSize: 20, color: "white" }} />
                    Registro
                  </span>
                  <LoginAnfitrion handleClickOpen={handleClickOpen} open={open} />
                </Link>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    )}
    </div>
  );
};

export default Navbar;
