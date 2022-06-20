import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
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
  const { id } = useParams();
  const { cochera } =useContext(CocheraContext);
  const [regCochera, setRegCochera] = useState([])
  const [open, setOpen] = useState(false);
  const [imageSelect,setImageSelect] = useState(null)
  
  const [lastid,setLastId] = useState(0);

  const [valorInputs, setValorInputs] = useState({
    image: "",
  });

  console.log(imageSelect)

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
    const url = 'http://127.0.0.1:8000/cochera/cliente/'+id
    const response = await fetch(url)
    const responseJson = await response.json()
    // console.log(responseJson.content.id)
    return setLastId(responseJson.content.id)
    }

  
  const fetchApiPut = async (max) =>{
    const urlPut = `http://127.0.0.1:8000/cochera/put/${max}/` 
    const responsePut = await fetch(urlPut, {
        method: 'PUT',
        headers: {
          Accept: "application/json",
          "Content-Type":"application/json"
          },
        body: JSON.stringify({
          "imagen1":imageSelect
        })
      })

    const data = await responsePut.json()
    console.log(data)
  }

  // const fetchData = () => {
  //   const showCochera = JSON.parse(localStorage.getItem('cochera'));
  //   setRegCochera(showCochera);
  // };

  const onFileChange = (e) => {
    setImageSelect(e.target.files[0])
    const formData = new FormData();
    formData.append('file',imageSelect)
  }

  const handleClickUpdate = async () => {
    try{
      await fetchApiPut(lastid);
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
                <h2>Imagen 1</h2>
              </Grid>
              <Grid item md={12} xs={12}>
                <input
                  type="file"
                  name="image"
                  onChange={onFileChange}
                />
              </Grid>
              <Grid item md={12} xs={12}>
                <h2>Imagen 2</h2>
              </Grid>
              <Grid item md={12} xs={12}>
                <input
                  type="file"
                  name="image"
                  onChange={onFileChange}
                />
              </Grid>
              <Grid item md={12} xs={12}>
                <h2>Imagen 3</h2>
              </Grid>
              <Grid item md={12} xs={12}>
                <input
                  type="file"
                  name="image"
                  onChange={onFileChange}
                />
              </Grid>
              <Grid item md={6} xs={8}>
                <Grid container spacing={2}>
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
              </Grid>
            </Grid>
          </form>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default RegistroFotos;
