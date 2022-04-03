import { BrowserRouter, Routes, Route } from "react-router-dom";

//Pages
import Home from "../pages/Home";
import About from "../pages/About";
import Booking from "../pages/Booking";
import ParkingLog from "../pages/ParkingLot"
import Contact from "../pages/Contact";
import Home2 from "../pages/Home2";
//Loyout
import Main from "../layouts/Main"
import Parking from "../layouts/ParkingLog"


// Borrar

import Registro from "../pages/Registro";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/home2" element={<Home2 />}/>
        <Route element={<Main/>}>
          <Route path="/about" element={<About />}/>
          <Route path="/booking" element={<Booking />}/>
          <Route path="/parkinglog" element={<ParkingLog />}/>
          <Route path="/contact" element={<Contact />}/>
          <Route path="/registro" element={<Registro />} />
        </Route>
<<<<<<< HEAD



        


=======
        <Route element={<Parking/>}>
          <Route path="/parking" element={<ParkingLog />}/>
        </Route>
        {/* <Route path="/registro" element={<Registro />} /> */}
>>>>>>> 88d8947a65116b11af24ac9d7a61c87b85ede9c3
      </Routes>
    </BrowserRouter>
  );
};

export default Router;