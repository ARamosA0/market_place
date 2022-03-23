import { Grid, Box} from "@mui/material";

const Home = () => {
  return(
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item md={12}>
          <h1>Footer</h1>
        </Grid>
        <Grid item md={12}>
          <h2>Reserva</h2>
        </Grid>
        <Grid item md={12}>
          <h3>Publicidad</h3>
        </Grid>
        <Grid item md={12}>
          <h4>Unete a la red de cocheras mas grande del mundo</h4>
        </Grid>
      </Grid>
    </Box>
  )
};

export default Home;
