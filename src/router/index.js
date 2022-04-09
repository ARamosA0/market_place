import { BrowserRouter, Routes, Route } from "react-router-dom";

//Pages
import Home from "../pages/Home";
import About from "../pages/About";
import Booking from "../pages/Booking";
import ParkingLog from "../pages/ParkingLot"
import Contact from "../pages/Contact";
import Anfitrion from "../pages/Anfitrion";
import RegistroAnfitrion from "../pages/RegistroAnfitrion";

//Loyout
import Main from "../layouts/Main"
import Parking from "../layouts/ParkingLog"
import Private from "../layouts/Private";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Main/>}>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/booking/:id" element={<Booking />}/>
<<<<<<< HEAD
          <Route path="/parking" element={<ParkingLog />}/>
=======
>>>>>>> 54630e515db5e070d03251505d3506a4ab734ae0
          <Route path="/parkinglog/:name" element={<ParkingLog />}/>
          <Route path="/parking" element={<ParkingLog />}/>
          <Route path="/contact" element={<Contact />}/>
        </Route>

        <Route element={<Private/>}>
          <Route element={<Main/>}>
            <Route path="/anfitrion/:id" element={<Anfitrion />} />
            <Route path="/anfitrion/:id/registro" element={<RegistroAnfitrion />} />
          </Route>
        </Route>

        <Route element={<Parking/>}>
          <Route path="/parking" element={<ParkingLog />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;