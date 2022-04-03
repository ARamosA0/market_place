import { Container, Grid, Typography } from "@mui/material";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer"
import SocialMedia from "../../components/SocialMedia"
import Booking from "../../components/Booking"

import "./index.css";

import Link from '@mui/material/Link';

const Home = () => {

  return (
      <div>

        <Navbar></Navbar>

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
        </Container>
    
        <Booking></Booking>
        
        <Footer></Footer>
        <SocialMedia></SocialMedia>

      </div>
  );

};

export default Home;
