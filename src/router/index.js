import { BrowserRouter, Routes, Route } from "react-router-dom";
import Reserva from "../pages/Reserva";
// Este import es solo deprueba se borrarar luego
import IngresoDatos from "../pages/IngresoDatos";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/reserva" element={<Reserva />} />


        {/* Esta ruta es administrativa y de prueba y se eliminara luego */}
        <Route path="/ingresodatosfirebase" element={<IngresoDatos />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;