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

import Registro from "../pages/Registro";

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

        <Route path="/registro" element={<Registro />} />


      </Routes>
    </BrowserRouter>
  );
};

export default Router;