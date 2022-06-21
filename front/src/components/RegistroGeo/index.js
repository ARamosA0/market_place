import { useState, useEffect } from "react";
import { Container, Grid, Dialog, DialogContent, Button } from "@mui/material";
import { useParams } from "react-router-dom";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { storeCochera, updateCochera,updateGeoCochera } from "../../service/firestore";
import { GeoPoint } from "firebase/firestore/lite";
import swal from "sweetalert";

const RegistroGeo = () => {
  const { id } = useParams()
  const [open, setOpen] = useState(false);
  const [regCochera, setRegCochera] = useState([])

  const [position, setPosition] = useState(null);

  const [lastId,setLastId] = useState(0);

  // const fetchData = () => {
  //   const showCochera = JSON.parse(localStorage.getItem('cochera'));
  //   setRegCochera(showCochera);
  // };

  const fetchApi = async () => {
    const url = 'http://127.0.0.1:8000/cochera/cliente/'+id
    const response = await fetch(url)
    const responseJson = await response.json()
    console.log(responseJson.content)
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
        body: JSON.stringify(position)
      })

    const data = await responsePut.json()
    console.log("data",data)
  }

  // Mapa
  const markerIcon = new L.icon({
    iconUrl: require("../../assets/marker.png"),
    iconSize: [30, 30],
  });

  const LocationMarker = ({ position, setPosition }) => {
    const map = useMapEvents({
      click() {
        setPosition(map.locate()._lastCenter);
      }
    });


    return position === null ? null : (
      <Marker position={position} icon={markerIcon}>
        <Popup>Estas Aqui!!!</Popup>
      </Marker>
    );
  };

  

  const handleClickSendUbi = async () => {
    try{
      await fetchApiPut(lastId);
      await swal({
        icon: "success",
        title: "Se subieron los datos",
      });
      console.log(position.lat)
      console.log(position.lng)
    } catch(error){
      console.log(regCochera[0])
      console.log(position.lat.toString())
      console.log(position.lng.toString())
      swal({
        icon: "error",
        title: `${error.message}`,
        text: "Intenta de nuevo",
      }); 
    }
  }

  const handleOpenDialog = () => {
    setOpen(!open);
  };

  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <>
      <Button color="secondary" onClick={handleOpenDialog}>
        Click Aqui
      </Button>
      <Dialog open={open} onClose={handleOpenDialog}>
        <DialogContent sx={{ width: 600, height: 600 }}>
          <h3>Marca la ubicacion exacta</h3>
          <MapContainer
            center={[-12.2047107, -77.0154433]}
            zoom={13}
            style={{ height: 500 }}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <LocationMarker position={position} setPosition={setPosition} />
          </MapContainer>
          <Button
            color="secondary"
            onClick={handleClickSendUbi}
            variant="contained"
            fullWidth
            mt={3}
          >
            Send
          </Button>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default RegistroGeo;