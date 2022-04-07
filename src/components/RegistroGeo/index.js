import { useState } from "react";
import { Container, Grid, Dialog, DialogContent, Button } from "@mui/material";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { storeCochera, updateCochera } from "../../service/firestore";

const RegistroGeo = (props) => {
  const [open, setOpen] = useState(false);
  const [values, setValues] = useState([]);

  const handleChangeInput = (e) => {
    const { value, name } = e.target;

    setValues({
      ...values,
      [name]: value,
    });
  };

  // Mapa
  const markerIcon = new L.icon({
    iconUrl: require("../../assets/marker.png"),
    iconSize: [30, 30],
  });

  const LocationMarker = () => {
    const [position, setPosition] = useState(null);
    const map = useMapEvents({
      click() {
        setPosition(map.locate()._lastCenter)
      },
      // locationfound(e) {
      //   setPosition(e.latlng);
      //   console.log(e.latlng);
      //   map.flyTo(e.latlng, map.getZoom());
      // },
    });

    return position === null ? null : (
      <Marker position={position} icon={markerIcon}>
        <Popup>You are here</Popup>
      </Marker>
    );
  }

  const handleOpenDialog = () => {
    setOpen(!open);
  };

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
            <Marker position={[-12.2047107, -77.0154433]} icon={markerIcon}>
              <Popup>Cochera los Cedros</Popup>
            </Marker>
            <LocationMarker />
          </MapContainer>
          <Button color="secondary" variant="contained" fullWidth mt={3}>
            Send
          </Button>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default RegistroGeo;
