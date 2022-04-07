import { useState } from "react";
import { Grid, Button } from "@mui/material";
import Carrusel from "../Carrusel";
import LoginAnfitrion from "../LoginAnfitrion";
import "./index.css";

const Registro = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(!open);
  };
  return (
    <div>
      <Grid container  className="grid-container home-grid">
        <Grid item md={6} xs={12} textAlign="center" sx={{ color: "white" }}>
          <Grid
            container
            justifyContent="center"
            alignItems="center"
            sx={{ height: "107vh !important" }}
            spacing={1}
            rowGap="1"
          >
            <Grid item md={12} className="grid1">
              <h1 className="h1">
                Conviertete en anfitrión en <br /> Cochera.com
              </h1>
              <p className="p">Unete a nosotros, te ayudaremos en cada fase del proceso</p>
              <Button
                onClick={handleClickOpen}
                color="secondary"
                variant="contained"
                sx={{ marginTop: "30px" }}
              >
                Registrate
              </Button>
            </Grid>
            <LoginAnfitrion handleClickOpen={handleClickOpen} open={open} />
          </Grid>
        </Grid>
        <Grid item md={6} xs={12} textAlign="center">
          <Carrusel />
        </Grid>
      </Grid>
    </div>
  );
};

export default Registro;
