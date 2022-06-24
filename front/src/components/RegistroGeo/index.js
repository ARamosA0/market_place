import { useState, useEffect } from "react";
import {Dialog, DialogContent, Button } from "@mui/material";
import { useParams } from "react-router-dom";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
} from "react-leaflet";
import { getCoheraCliente,putCocheras } from "../../service/cocherasServices";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import swal from "sweetalert";

const RegistroGeo = () => {
  const { id } = useParams()
  const [open, setOpen] = useState(false);
  const [regCochera, setRegCochera] = useState([])

  const [position, setPosition] = useState(null);

  const [lastId,setLastId] = useState(0);

  const fetchApi = async () => {
    const responseJson = await getCoheraCliente(+id);
    return setLastId(responseJson.content.id)
    }

  const fetchApiPut = async (max) =>{
    await putCocheras(max,{lat:position.lat,long:position.lng})
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