import { BrowserRouter, Routes, Route } from "react-router-dom";

//Pages
import Home from "../pages/Home";
import About from "../pages/About";
import Booking from "../pages/Booking";
import ParkingLog from "../pages/ParkingLot"
import Contact from "../pages/Contact";

//Loyout
import Main from "../layouts/Main"


// Borrar
import Reserva from "../pages/Reserva";
import Registro from "../pages/Registro";
// Este import es solo deprueba se borrarar luego
import IngresoDatos from "../pages/IngresoDatos";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Main/>}>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/booking" element={<Booking />}/>
          <Route path="/parkinglog" element={<ParkingLog />}/>
          <Route path="/contact" element={<Contact />}/>
        </Route>

        {/* borrar */}
        <Route path="/reserva" element={<Reserva />} />
        <Route path="/registro" element={<Registro />} />


        {/* Esta ruta es administrativa y de prueba y se eliminara luego */}
        <Route path="/ingresodatosfirebase" element={<IngresoDatos />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;