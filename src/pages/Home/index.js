import { Container, Grid, Typography } from "@mui/material";
import Booking from "../../components/Booking"
import "./index.css";
import Link from '@mui/material/Link';

const Home = () => {

  return (
      <div>
        <Container maxWidth="xl">
          <Grid container className="banner" direction={"column"} justifyContent={"center"} alignItems={"center"}>
            <Grid item>
              <span className="title">Mas de 10 000 cocheras a tu disposicion, encuentra una cochera segura en donde estes.</span>
            </Grid>
            <Grid item mt={4}>
              <Link href="#" color="white" underline="none">
                  <span className="button">Informacion</span>
              </Link>                                   
            </Grid>
          </Grid>
          <Booking></Booking>
        </Container>
      </div>
  );
};

export default Home;
