import { Link } from "react-router-dom";
import { Grid, Button } from "@mui/material";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import PersonSearchIcon from "@mui/icons-material/PersonSearch";
import "./index.css"

const CardsHomeAnfitrion = () => {

  return (
    <>
      <Grid container mt={5} className="grid-container-two">
        <Grid item md={12} ml={2.3} mt={6} mb={3.9}>
          <h1>Conviertete en anfitrion y comienza alquilar tu cochera</h1>
        </Grid>
        <Grid item md={12}>
          <Grid container textAlign={"start"}>
            <Grid item md={6}>
              <div className="home-huespedes">
                <div className="home-huespedes-card">
                  <Grid container textAlign={"start"} width={350}>
                    <Grid
                      item
                      md={12}
                      sm={12}
                      xs={6}
                      mt={5}
                      ml={4}
                      color="white"
                    >
                      <h2 className="subtitle-card">
                        Descubre como ser anfitrion
                      </h2>
                    </Grid>
                    <Grid item md={12} mt={3} ml={4} color="white">
                      <Button
                        variant="contained"
                        className="button-card"
                      > 
                        <Link to={`/registro`} className="btn-link">Descubre &nbsp;&nbsp;
                        <PersonSearchIcon /> 
                        </Link>
                      </Button>
                    </Grid>
                  </Grid>
                </div>
              </div>
            </Grid>
            <Grid item md={6}>
              <div className="home-huespedes home-huespedes-2">
                <div className="home-huespedes-card-2">
                  <Grid container  textAlign={"start"} width={350}>
                    <Grid
                      item
                      md={11}
                      sm={12}
                      xs={6}
                      mt={5}
                      ml={4}
                      color="white"
                    >
                      <h2 className="subtitle-card">
                        Tienes preguntas sobre como alquilar?
                      </h2>
                    </Grid>
                    <Grid item md={12} mt={3} ml={4} color="white">
                      <Button
                        variant="contained"
                        className="button-card"
                      > 
                        <Link to={`/dudas`} className="btn-link">
                          Resuelve tus dudas &nbsp;&nbsp;
                          <QuestionAnswerIcon />
                        </Link>
                      </Button>
                    </Grid>
                  </Grid>
                </div>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default CardsHomeAnfitrion;
