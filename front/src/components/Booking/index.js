import { Grid, Container, Card, CardActionArea, CardMedia, CardContent, Typography } from "@mui/material";
import lima from"../../assets/lima.jpg";
import agustino from"../../assets/agustino.jpg";
import chorrillos from"../../assets/chorrillos.jpg";
import comas from"../../assets/comas.jpg";

import { Link } from "react-router-dom";
import "./index.css"

const Booking = () => {
    return (
        <Container maxWidth="xl">
          <Grid container mt={5}>
              <Grid item md={12}>
                <Typography className="head-card" variant="h4" gutterBottom component="div">Encuentra una cochera comoda y segura</Typography>
              </Grid>
              <Grid item md={12} mb={5}>
                <Grid container spacing={3}>
                  <Grid item lg={3} md={6} sm={6} xs={12}>
                    <CardActionArea LinkComponent={Link} to="/parkinglog/Chorrillos" >
                      <Card className="card-container">
                        <CardMedia component="img" className="card-img" image={chorrillos} sx={{height: "200px"}}/>
                        <CardContent className="cardContent-paracas card-body">
                          <Typography className="title-card" variant="h4" gutterBottom component="div">Chorrillos</Typography>
                          <Typography className="body-card" variant="subtitle1" gutterBottom component="div">94 Kílometros de distancia</Typography>
                        </CardContent>
                      </Card>
                    </CardActionArea>
                  </Grid>
                  <Grid item lg={3} md={6} sm={6} xs={12}>
                    <CardActionArea LinkComponent={Link} to="/parkinglog/Agustino" >
                        <Card className="card-container">
                          <CardMedia component="img" className="card-img" image={agustino} sx={{height: "200px"}}/>
                          <CardContent className="cardContent-ayacucho card-body">
                            <Typography className="title-card" variant="h4" gutterBottom component="div">Agustino</Typography>
                            <Typography className="body-card" variant="subtitle1" gutterBottom component="div">217 Kílometros de distancia</Typography>
                          </CardContent>
                      </Card>
                    </CardActionArea>
                  </Grid>
                  <Grid item lg={3} md={6} sm={6} xs={12}>
                    <CardActionArea LinkComponent={Link} to="/parkinglog/Comas">
                      <Card className="card-container">
                        <CardMedia component="img" className="card-img" image={comas} sx={{height: "200px"}}/>
                        <CardContent className="cardContent-oxapampa card-body">
                          <Typography className="title-card" variant="h4" gutterBottom component="div">Comas</Typography>
                          <Typography className="body-card" variant="subtitle1" gutterBottom component="div">100 Kílometros de distancia</Typography>
                        </CardContent>
                      </Card>
                    </CardActionArea>
                  </Grid>
                  <Grid item lg={3} md={6} sm={6} xs={12}>
                    <CardActionArea LinkComponent={Link} to="/parkinglog/Lima">
                      <Card className="card-container">
                        <CardMedia component="img" className="card-img" image={lima} sx={{height: "200px"}}/>
                        <CardContent className="cardContent-chincha card-body">
                          <Typography className="title-card" variant="h4" gutterBottom component="div">Lima</Typography>
                          <Typography className="body-card" variant="subtitle1" gutterBottom component="div">65 Kílometros de distancia</Typography>
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