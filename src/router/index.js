import { BrowserRouter, Routes, Route } from "react-router-dom";
import Reserva from "../pages/Reserva";
import Registro from "../pages/Registro";


const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/reserva" element={<Reserva />} />
        <Route path="/registro" element={<Registro />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;