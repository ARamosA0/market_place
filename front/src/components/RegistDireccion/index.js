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
import garage1 from "../../assets/garage.jpg";

const RegistroDireccion = () => {
  const { cochera } =useContext(CocheraContext);
  const [regCochera, setRegCochera] = useState([])
  const [open, setOpen] = useState(false);
  const [values, setValues] = useState([]);

  const [valorInputs, setValorInputs] = useState({
    country: "",
    department: "",
    district: "",
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


  const fetchData = () => {
    const showCochera = JSON.parse(localStorage.getItem('cochera'));
    setRegCochera(showCochera);
  };


  const handleClickUpdate = async () => {
    // await updateCochera(regCochera[0], valorInputs,"cochera");
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
    <>
    {regCochera.length > 0 && (
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
                    label="Pais"
                    type="text"
                    name="country"
                    fullWidth
                    onChange={handleInputValue}
                  />
                </Grid>
                <Grid item md={12} xs={12}>
                  <TextField
                    label="Region"
                    type="text"
                    name="department"
                    fullWidth
                    onChange={handleInputValue}
                  />
                </Grid>
                <Grid item md={12} xs={12}>
                  <TextField
                    label="Distrito"
                    type="text"
                    name="district"
                    fullWidth
                    onChange={handleInputValue}
                  />
                </Grid>
                <Grid item md={12} xs={12}>
                  <TextField
                    label="Direccion"
                    type="text"
                    name="adress"
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
            </form>
          </DialogContent>
        </Dialog>
      </section>
    )}
    </>
  );
};

export default RegistroDireccion;