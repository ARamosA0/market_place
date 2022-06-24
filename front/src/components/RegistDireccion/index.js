import { useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import {
  Grid,
  Dialog,
  DialogContent,
  TextField,
  Button,
} from "@mui/material";
import { getCoheraCliente,putCocheras } from "../../service/cocherasServices";
import swal from "sweetalert";

const RegistroDireccion = () => {
  const { id } = useParams()
  const [open, setOpen] = useState(false);
  const [lastId,setLastId] = useState(0);

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

  const fetchApi = async () => {
    const responseJson = await getCoheraCliente(+id);
    return setLastId(responseJson.content.id)
    }
  
  const fetchApiPut = async (max) =>{
    try{
      await putCocheras(max,valorInputs)
    } catch (e){
      console.log(e)
    }
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
    <>

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

    </>
  );
};

export default RegistroDireccion;
