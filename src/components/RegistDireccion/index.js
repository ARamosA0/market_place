import { useState } from "react";
import {
  Container,
  Grid,
  Dialog,
  DialogContent,
  DialogTitle,
  TextField,
  Button,
} from "@mui/material";
import { storeCochera, updateCochera } from "../../service/firestore";
import garage1 from "../../assets/garage.jpg";

const RegistroDireccion = (props) => {
  const [open, setOpen] = useState(false);
  const [values, setValues] = useState([]);

  const handleChangeInput = (e) => {
    const { value, name } = e.target;

    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleOpenDialog = () => {
    setOpen(!open);
  };

  return (
    <section>
      <Button color="secondary" onClick={handleOpenDialog}>Click Aqui</Button>
      <Dialog open={open} onClose={handleOpenDialog}>
        <DialogContent>
          <form>
            <Grid container spacing={2}>
              <Grid item md={6} xs={4}>
                <img
                  src={garage1}
                  style={{
                    objectFit: "cover",
                    width: 260,
                    height: 427,
                    margin: 0,
                    padding: 0,
                  }}
                />
              </Grid>
              <Grid item md={6} xs={8}>
                <Grid container spacing={2}>
                  <Grid item md={12} xs={12}>
                    <h2>Direccion y Ubicacion</h2>
                  </Grid>
                  <Grid item md={12} xs={12}>
                    <TextField label="Pais" name="pais" fullWidth />
                  </Grid>
                  <Grid item md={12} xs={12}>
                    <TextField label="Region" name="region" fullWidth />
                  </Grid>
                  <Grid item md={12} xs={12}>
                    <TextField label="Distrito" name="Distrito" fullWidth />
                  </Grid>
                  <Grid item md={12} xs={12}>
                    <TextField label="Direccion" name="Direccion" fullWidth />
                  </Grid>
                  <Grid item md={12} xs={12}>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </form>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default RegistroDireccion;
