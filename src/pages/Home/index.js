import { useState } from "react";
import { Grid, Button, Container, Card, CardActionArea, CardMedia, CardContent, Typography } from "@mui/material";
import Carrusel from "../../components/Carrusel";
import LoginAnfitrion from "../../components/LoginAnfitrion";
import paracas from"../../assets/paracas.png";
import ayacucho from"../../assets/ayacucho.png";
import oxapampa from"../../assets/oxapampa.png";
import chincha from"../../assets/chincha.png";
import "./index.css";
import { Link } from "react-router-dom";

const Home = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(!open);
  };
  return (
    <div>
      <Container maxWidth="fluid">
        <Grid container  className="grid-container">
          <Grid item md={6} xs={12} textAlign="center" sx={{ color: "white" }}>
            <Grid
              container
              justifyContent="center"
              alignItems="center"
              sx={{ height: "100vh !important" }}
              spacing={1}
              rowGap="1"
            >
              <Grid item md={12} className="grid1">
                <h1>
                  Conviertete en anfitrión en <br /> Cochera.com
                </h1>
                <p>Unete a nosotros, te ayudaremos en cada fase del proceso</p>
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
        <Grid container>
          <Grid item md={12} mt={10} mb={2}>
            <Typography className="head-card" variant="h2" gutterBottom component="div">Encuentra una cochera comoda y segura</Typography>
          </Grid>
          <Grid item md={12} mb={5}>
            <Grid container spacing={3}>
              <Grid item md={3}>
                <CardActionArea LinkComponent={Link} to="/parkinglog" >
                  <Card className="card-container">
                    <CardMedia component="img" className="card-img" image={paracas}/>
                    <CardContent className="cardContent-paracas card-body">
                      <Typography className="title-card" variant="h3" gutterBottom component="div">Paracas</Typography>
                      <Typography className="body-card" variant="h5" gutterBottom component="div">217 Kílometros de distancia</Typography>
                    </CardContent>
                  </Card>
                </CardActionArea>
              </Grid>
              <Grid item md={3}>
                <CardActionArea>
                  <Card className="card-container">
                    <CardMedia component="img" className="card-img" image={ayacucho}/>
                    <CardContent className="cardContent-ayacucho card-body">
                      <Typography className="title-card" variant="h3" gutterBottom component="div">Ayacucho</Typography>
                      <Typography className="body-card" variant="h5" gutterBottom component="div">217 Kílometros de distancia</Typography>
                    </CardContent>
                  </Card>
                </CardActionArea>
              </Grid>
              <Grid item md={3}>
                <CardActionArea>
                   <Card className="card-container">
                    <CardMedia component="img" className="card-img" image={oxapampa}/>
                    <CardContent className="cardContent-oxapampa card-body">
                      <Typography className="title-card" variant="h3" gutterBottom component="div">Oxapamapa</Typography>
                      <Typography className="body-card" variant="h5" gutterBottom component="div">217 Kílometros de distancia</Typography>
                    </CardContent>
                  </Card>
                </CardActionArea>
              </Grid>
              <Grid item md={3}>
                <CardActionArea>
                  <Card className="card-container">
                    <CardMedia component="img" className="card-img" image={chincha}/>
                    <CardContent className="cardContent-chincha card-body">
                      <Typography className="title-card" variant="h3" gutterBottom component="div">Chincha</Typography>
                      <Typography className="body-card" variant="h5" gutterBottom component="div">217 Kílometros de distancia</Typography>
                    </CardContent>
                  </Card>
                </CardActionArea>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Home;
