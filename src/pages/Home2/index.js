import { useState } from "react";
import CardsHomeAnfitrion from "../../components/CardsHomeAnfitrion";
import { Grid, Button } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import LoginAnfitrion from "../../components/LoginAnfitrion";
import "./index.css";
const Home2 = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(!open);
  };
  return (
    <div>
      <Grid container  className="grid-container">
        <Grid item md={12} xs={12} textAlign="center" sx={{ color: "white" }}>
          <div className="home-main">
            <Grid
              container
              justifyContent="center"
              alignItems="end"
              sx={{ height: "75vh !important" }}
              spacing={1}
              rowGap="1"
            >
              <Grid item md={12} className="grid1">
                <h1 className="home-text">
                  Busca la cochera mas cercana <br /> y encuentra la que mas se adecue a ti
                </h1>
                <Button
                  onClick={handleClickOpen}
                  color="secondary"
                  variant="contained"
                  className="button-home"
                >
                  Comienza a buscar &nbsp;&nbsp;
                  <SearchIcon/>
                </Button>
              </Grid>
              <LoginAnfitrion handleClickOpen={handleClickOpen} open={open} />
            </Grid>
          </div>
        </Grid>
        {/* <Grid item md={6} xs={12} textAlign="center">
          <Carrusel />
        </Grid> */}
      </Grid>
      <CardsHomeAnfitrion/>
    </div>
  );
};

export default Home2;
