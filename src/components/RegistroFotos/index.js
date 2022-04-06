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
import garage1 from "../../assets/garage.jpg";

const RegistroFotos = () => {
  const { cochera } =useContext(CocheraContext);
  const [regCochera, setRegCochera] = useState([])
  const [open, setOpen] = useState(false);
  const [values, setValues] = useState([]);

  const [valorInputs, setValorInputs] = useState({
    image: "",
  });

  const handleInputValue = (event) => {
    const { value, name } = event.target;
    setValorInputs({
      ...valorInputs,
      [name]: value,
    });
    // console.log(valorInputs.image)
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
    console.log(valorInputs)
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
                      onChange={handleClickUpdate}
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

export default RegistroFotos;
