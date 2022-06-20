import { Link } from "react-router-dom";
import {
  Grid,
  Card,
  Divider,
  CardContent,
  Button,
} from "@mui/material";
import DoDisturbOnIcon from "@mui/icons-material/DoDisturbOn";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import DeleteLoad from "../../components/DeleteLoad";
import LoaderCar from "../../components/LoaderCar";

export const CardsCocheraUser = ({cocheras,loaderAwait,indexs, deleteElementFromCocheras}) => {
  return (
    <>
      {cocheras.length > 0 ? (
        cocheras.map(
          (
            {
              id,
              imagen1,
              name,
              country,
              department,
              district,
              adress,
              space,
              description,
            },
            index
          ) =>
            !loaderAwait || index !== indexs ? (
              <Grid item xs={12} sm={12} md={12} xl={12} key={id}>
                <Divider sx={{ margin: 5 }} />
                <Card className="card-cocheras">
                  <CardContent>
                    <Grid
                      container
                      alignItems="center"
                      sx={{ textAlign: "center" }}
                      spacing={2}
                    >
                      <Grid item xs={12} sm={6} md={5} xl={4}>
                        <img className="image-principal" src={imagen1} alt="" />
                      </Grid>

                      <Grid item xs={12} sm={6} md={5} xl={6}>
                        <div>
                          <h2>{name}</h2>

                          <span>{country},&nbsp;</span>
                          <span>{department},&nbsp;</span>

                          <span style={{ marginBottom: 10 }}>
                            {district}&nbsp;
                          </span>
                          <h6 style={{ marginBottom: 10 }}>
                            Direccion : {adress}
                          </h6>
                          <h6>Estacionamientos disponibles: {space}</h6>
                          <span style={{ textAlign: "justify" }}>
                            Descripcion: {description}
                          </span>
                        </div>
                      </Grid>

                      <Grid item xs={12} sm={12} md={2} xl={2}>
                        <Grid>
                          <Button
                            variant="contained"
                            color="secondary"
                            fullWidth
                            onClick={() => deleteElementFromCocheras(id, index)}
                          >
                            <DoDisturbOnIcon />
                            &nbsp;&nbsp;Eliminar
                          </Button>
                        </Grid>
                        <br />
                        <Grid>
                          <Link to={`/booking/${id}`}>
                            <Button
                              fullWidth
                              variant="contained"
                              color="primary"
                            >
                              <RemoveRedEyeIcon />
                              &nbsp;&nbsp; ver
                            </Button>
                          </Link>
                        </Grid>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </Grid>
            ) : (
              <DeleteLoad />
            )
        )
      ) : (
        <LoaderCar />
      )}
    </>
  );
};