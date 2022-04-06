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

const RegistroInformacion = (props) => {
  const [open, setOpen] = useState(false);
  const [valorInputs, setValorInputs] = useState({
    country: "",
    department: "",
    districtv: "",
    adress: "",
  });

  const handleInputValue = (event) => {
    const { value, name } = event.target;
    setValorInputs({
      ...valorInputs,
      [name]: value,
    });
  };

  const handleOpenDialog = () => {
    setOpen(!open);
  };

  return (
    <section>
      <Button color="secondary" onClick={handleOpenDialog}>
        Click Aqui
      </Button>
      <Dialog open={open} onClose={handleOpenDialog}>
        <DialogContent>
          <form>
            <Grid container spacing={2}>
              <Grid item md={6} xs={4}></Grid>
              <Grid item md={6} xs={8}>
                <Grid container spacing={2}>
                  <Grid item md={12} xs={12}>
                    <h2>Direccion y Ubicacion</h2>
                  </Grid>
                  <Grid item md={12} xs={12}>
                    <TextField
                      label="Nombre del Alquiler"
                      name="name"
                      fullWidth
                      onChange={handleInputValue}
                    />
                  </Grid>
                  <Grid item md={12} xs={12}>
                    <TextField
                      label="Precio por hora"
                      name="price"
                      fullWidth
                      onChange={handleInputValue}
                    />
                  </Grid>
                  <Grid item md={12} xs={12}>
                    <TextField
                      label="Descripcion"
                      name="description"
                      fullWidth
                      multiline
                      rows={4}
                      onChange={handleInputValue}
                    />
                  </Grid>
                  <Grid item md={12} xs={12}>
                    <Button
                      color="secondary"
                      variant="contained"
                      fullWidth
                      onChange={handleInputValue}
                    >
                      Send
                    </Button>
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

export default RegistroInformacion;