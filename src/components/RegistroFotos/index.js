import { useState, useEffect, useContext } from "react";
import { CocheraContext } from "../../Context/CocheraContext";
import {
  Grid,
  Dialog,
  DialogContent,
  TextField,
  Button,
} from "@mui/material";
import { updatePhotoCochera } from "../../service/firestore";
import swal from "sweetalert";
import garage1 from "../../assets/garage.jpg";

const RegistroFotos = () => {
  const { cochera } =useContext(CocheraContext);
  const [regCochera, setRegCochera] = useState([])
  const [open, setOpen] = useState(false);

  const [valorInputs, setValorInputs] = useState({
    image: "",
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


  const fetchData = () => {
    const showCochera = JSON.parse(localStorage.getItem('cochera'));
    setRegCochera(showCochera);
  };
  const handleClickUpdate = async () => {
    await updatePhotoCochera(regCochera[0], valorInputs.image,"cochera");
  };

  useEffect(() => {
    fetchData();
  }, []);


  return (
    <section>
      <Button color="secondary" onClick={handleOpenDialog}>
        Click Aqui
      </Button>
      <Dialog open={open} onClose={handleOpenDialog}>
        <DialogContent>
          <form>
            <Grid container spacing={2}>
              <Grid item md={12} xs={12}>
                <h2>Direccion y Ubicacion</h2>
              </Grid>
              <Grid item md={12} xs={12}>
                <TextField
                  label="Foto"
                  name="image"
                  fullWidth
                  onChange={handleInputValue}
                />
              </Grid>
<<<<<<< HEAD
              <Grid item md={6} xs={8}>
                <Grid container spacing={2}>
                  <Grid item md={12} xs={12}>
                    <h2>Direccion y Ubicacion</h2>
                  </Grid>
                  <Grid item md={12} xs={12}>
                    <TextField
                      label="Foto"
                      name="image"
                      fullWidth
                      onChange={handleInputValue}
                    />
                  </Grid>
                  <Grid item md={12} xs={12}>
                    <Button
                      color="secondary"
                      variant="contained"
                      fullWidth
                      onClick={handleClickUpdate}
                    >
                      Send
                    </Button>
                  </Grid>
                </Grid>
=======
              <Grid item md={12} xs={12}>
                <TextField
                  label="Nombre"
                  name="name"
                  fullWidth
                />
              </Grid>
              <Grid item md={12} xs={12}>
                <Button
                  color="secondary"
                  variant="contained"
                  fullWidth
                  onChange={handleClickUpdate}
                >
                  Send
                </Button>
>>>>>>> b6759b8632c5b0016b008019955c792adaacd556
              </Grid>
            </Grid>
          </form>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default RegistroFotos;
