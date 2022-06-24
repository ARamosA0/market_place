import { useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import {
  Grid,
  Dialog,
  DialogContent,
  TextField,
  Button,
} from "@mui/material";
import swal from "sweetalert";
import { putCocheras , getCoheraCliente} from "../../service/cocherasServices";

const RegistroInformacion = () => {
  const { id } = useParams()
  const [open, setOpen] = useState(false);
  const [lastId,setLastId] = useState(0);

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

    if (value === "price"){
      setValorInputs({
        ...valorInputs,
        [name]: parseFloat(value),
      });
    } else if(value === "space"){
      setValorInputs({
        ...valorInputs,
        [name]: parseInt(value),
      });
    }
    
  };

  const handleOpenDialog = () => {
    setOpen(!open);
  };
    
  const fetchApi = async () => {
    const responseJson = await getCoheraCliente(+id);
    return setLastId(responseJson.content.id)
    }

  
  const fetchApiPut = async (max) =>{
    await putCocheras(max,valorInputs)
  }

  const handleClickUpdate = async () => {
    try{
      await fetchApiPut(lastId);
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
    fetchApi();
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


