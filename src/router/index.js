import { BrowserRouter, Routes, Route } from "react-router-dom";

//Pages
import Home from "../pages/Home";
import About from "../pages/About";
import Booking from "../pages/Booking";
import ParkingLog from "../pages/ParkingLot"
import Contact from "../pages/Contact";
import Anfitrion from "../pages/Anfitrion";
import RegistroAnfitrion from "../pages/RegistroAnfitrion";
import Registro from "../pages/Registro";

//Loyout
import Main from "../layouts/Main"
import Parking from "../layouts/ParkingLog"

// Borrar

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
          <Route path="/anfitrion/:id" element={<Anfitrion />} />
          <Route path="/anfitrion/:id/registro" element={<RegistroAnfitrion />} />
        </Route>
        <Route path="/registro" element={<Registro />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;