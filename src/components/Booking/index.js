import { Grid, Container, Card, CardActionArea, CardMedia, CardContent, Typography } from "@mui/material";
import paracas from"../../assets/paracas.png";
import ayacucho from"../../assets/ayacucho.png";
import oxapampa from"../../assets/oxapampa.png";
import chincha from"../../assets/chincha.png";

import { Link } from "react-router-dom";
import "./index.css"

const Booking = () => {
    return (
        <Container maxWidth="xl" mt={10}>
          <Grid container mt={5}>
              <Grid item md={12}>
                <Typography className="head-card" variant="h4" gutterBottom component="div">Encuentra una cochera comoda y segura</Typography>
              </Grid>
              <Grid item md={12} mb={5}>
                <Grid container spacing={3}>
                  <Grid item lg={3} md={6} sm={6} xs={12} >
                    <CardActionArea LinkComponent={Link} to="/parkinglog" >
                      <Card className="card-container">
                        <CardMedia component="img" className="card-img" image={paracas}/>
                        <CardContent className="cardContent-paracas card-body">
                          <Typography className="title-card" variant="h4" gutterBottom component="div">Paracas</Typography>
                          <Typography className="body-card" variant="subtitle1" gutterBottom component="div">217 Kílometros de distancia</Typography>
                        </CardContent>
                      </Card>
                    </CardActionArea>
                  </Grid>
                  <Grid item lg={3} md={6} sm={6} xs={12}>
                    <CardActionArea>
                      <Card className="card-container">
                        <CardMedia component="img" className="card-img" image={ayacucho}/>
                        <CardContent className="cardContent-ayacucho card-body">
                          <Typography className="title-card" variant="h4" gutterBottom component="div">Ayacucho</Typography>
                          <Typography className="body-card" variant="subtitle1" gutterBottom component="div">217 Kílometros de distancia</Typography>
                        </CardContent>
                      </Card>
                    </CardActionArea>
                  </Grid>
                  <Grid item lg={3} md={6} sm={6} xs={12}>
                    <CardActionArea>
                      <Card className="card-container">
                        <CardMedia component="img" className="card-img" image={oxapampa}/>
                        <CardContent className="cardContent-oxapampa card-body">
                          <Typography className="title-card" variant="h4" gutterBottom component="div">Oxapamapa</Typography>
                          <Typography className="body-card" variant="subtitle1" gutterBottom component="div">217 Kílometros de distancia</Typography>
                        </CardContent>
                      </Card>
                    </CardActionArea>
                  </Grid>
                  <Grid item lg={3} md={6} sm={6} xs={12}>
                    <CardActionArea>
                      <Card className="card-container">
                        <CardMedia component="img" className="card-img" image={chincha}/>
                        <CardContent className="cardContent-chincha card-body">
                          <Typography className="title-card" variant="h4" gutterBottom component="div">Chincha</Typography>
                          <Typography className="body-card" variant="subtitle1" gutterBottom component="div">217 Kílometros de distancia</Typography>
                        </CardContent>
                      </Card>
                    </CardActionArea>
                  </Grid>
                  <Grid item lg={3} md={6} sm={6} xs={12}>
                    <CardActionArea>
                      <Card className="card-container">
                        <CardMedia component="img" className="card-img" image={chincha}/>
                        <CardContent className="cardContent-chincha card-body">
                          <Typography className="title-card" variant="h4" gutterBottom component="div">Chincha</Typography>
                          <Typography className="body-card" variant="subtitle1" gutterBottom component="div">217 Kílometros de distancia</Typography>
                        </CardContent>
                      </Card>
                    </CardActionArea>
                  </Grid>
                  <Grid item lg={3} md={6} sm={6} xs={12}>
                    <CardActionArea>
                      <Card className="card-container">
                        <CardMedia component="img" className="card-img" image={chincha}/>
                        <CardContent className="cardContent-chincha card-body">
                          <Typography className="title-card" variant="h4" gutterBottom component="div">Chincha</Typography>
                          <Typography className="body-card" variant="subtitle1" gutterBottom component="div">217 Kílometros de distancia</Typography>
                        </CardContent>
                      </Card>
                    </CardActionArea>
                  </Grid>
                  <Grid item lg={3} md={6} sm={6} xs={12}>
                    <CardActionArea>
                      <Card className="card-container">
                        <CardMedia component="img" className="card-img" image={chincha}/>
                        <CardContent className="cardContent-chincha card-body">
                          <Typography className="title-card" variant="h4" gutterBottom component="div">Chincha</Typography>
                          <Typography className="body-card" variant="subtitle1" gutterBottom component="div">217 Kílometros de distancia</Typography>
                        </CardContent>
                      </Card>
                    </CardActionArea>
                  </Grid>
                  <Grid item lg={3} md={6} sm={6} xs={12}>
                    <CardActionArea>
                      <Card className="card-container">
                        <CardMedia component="img" className="card-img" image={chincha}/>
                        <CardContent className="cardContent-chincha card-body">
                          <Typography className="title-card" variant="h4" gutterBottom component="div">Chincha</Typography>
                          <Typography className="body-card" variant="subtitle1" gutterBottom component="div">217 Kílometros de distancia</Typography>
                        </CardContent>
                      </Card>
                    </CardActionArea>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
        </Container>
    );
}

export default Booking;