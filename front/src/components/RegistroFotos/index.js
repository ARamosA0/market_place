import { useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import {
  Grid,
  Dialog,
  DialogContent,
  Button,
} from "@mui/material";
import { getCoheraCliente,postCocheraImage } from "../../service/cocherasServices";
import swal from "sweetalert";

const RegistroFotos = () => {
  const { id } = useParams();
  const [open, setOpen] = useState(false);
  const [imageSelect, setImageSelect] = useState({
    imagen1: "",
    imagen2: "",
    imagen3: ""
  });

  const [lastid, setLastId] = useState(0);

  const handleOpenDialog = () => {
    setOpen(!open);
  };

  const fetchApi = async () => {
    const responseJson = await getCoheraCliente(+id);
    return setLastId(responseJson.content.id)
  }

  const handleInputImage = (event) => {
    const { name, files } = event.currentTarget
    return setImageSelect({ ...imageSelect, [name]: files[0] })
  }

  const handleUploadImage = async () => {
    try {
          
        let image = new FormData()
        image.append('imagen1', imageSelect.imagen1)
        image.append('imagen2', imageSelect.imagen2)
        image.append('imagen3', imageSelect.imagen3)
        
        const data = await postCocheraImage(lastid, image)
        console.log(data);
      const response = await swal({
        icon: "success",
        title: "Se subieron los datos",
      });
      if (response) {
        window.location.replace('');
      }
    } catch (error) {
      swal({
        icon: "error",
        title: `${error.message}`,
        text: "Intenta de nuevo",
      });
    }
  }


  const handleClickUpdate = async () => {
    try {
      // await fetchApiPut(lastid);
      const response = await swal({
        icon: "success",
        title: "Se subieron los datos",
      });
      if (response) {
        window.location.replace('');
      }
    } catch (error) {
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
                <h2>Imagen 1</h2>
              </Grid>
              <Grid item md={12} xs={12}>
                <input
                  type="file"
                  id="imagen1"
                  name="imagen1"
                  onChange={handleInputImage}
                />
              </Grid>
              <Grid item md={12} xs={12}>
                <h2>Imagen 2</h2>
              </Grid>
              <Grid item md={12} xs={12}>
                <input
                  type="file"
                  id="imagen2"
                  name="imagen2"
                  onChange={handleInputImage}
                />
              </Grid>
              <Grid item md={12} xs={12}>
                <h2>Imagen 3</h2>
              </Grid>
              <Grid item md={12} xs={12}>
                <input
                  type="file"
                  id="imagen3"
                  name="imagen3"
                  onChange={handleInputImage}
                />
              </Grid>
              <Grid item md={6} xs={8}>
                <Grid container spacing={2}>
                  <Grid item md={12} xs={12}>
                    <Button
                      color="secondary"
                      variant="contained"
                      fullWidth
                      onClick={handleUploadImage}
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
