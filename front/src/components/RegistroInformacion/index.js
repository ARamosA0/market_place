import { useState, useEffect, useContext } from "react";
import { CocheraContext } from "../../Context/CocheraContext";
import {
  Grid,
  Dialog,
  DialogContent,
  TextField,
  Button,
} from "@mui/material";
import { updateCochera } from "../../service/firestore";
import swal from "sweetalert";

const RegistroInformacion = () => {
  const { cochera } =useContext(CocheraContext);
  const [regCochera, setRegCochera] = useState([])
  const [open, setOpen] = useState(false);
  const [values, setValues] = useState([]);

  const [valorInputs, setValorInputs] = useState({
    name: "",
    price: "",
    space: "",
    description: "",
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
    try{
      await updateCochera(regCochera[0], valorInputs,"cochera");
      const response = await swal({
        icon: "success",
        title: "Se subieron los datos",
      });
      if(response){
        window.location.replace('');
      }
    } catch(error){
      swal({
        icon: "error",
        title: `${error.message}`,
        text: "Intenta de nuevo",
      }); 
    }
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
                  label="Cantidad de espacios"
                  name="space"
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
                  onClick={handleClickUpdate}
                >
                  Send
                </Button>
              </Grid>
            </Grid>
          </form>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default RegistroInformacion;

