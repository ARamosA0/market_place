import { Container, Grid, Button } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import Link from '@mui/material/Link';
import CardsHomeAnfitrion from "../../components/CardsHomeAnfitrion";
import Booking from "../../components/Booking"
import "./index.css";

const Home = () => {

  return (
      <div>
        <Grid container className="banner" direction={"column"} justifyContent={"center"} alignItems={"center"}>
          <div className="banner div-banner">
            <Grid item textAlign={"center"}>
              <span className="title">Mas de 10 000 cocheras a tu disposicion, encuentra una cochera segura en donde estes.</span>
            </Grid>
            <Grid item mt={4} textAlign={"center"}>
              <Link href="#" color="white" underline="none">
                <Button
                  variant="contained"
                  className="button"
                >
                  Informacion &nbsp;&nbsp;
                  <SearchIcon/>
                </Button>
              </Link>                                   
            </Grid>
            </div>
        </Grid>
        <Container maxWidth="xl" >
          
          <Booking></Booking>
          <CardsHomeAnfitrion/>
        </Container>
      </div>
  );
};

export default Home;
