import { BrowserRouter, Routes, Route } from "react-router-dom";
import Reserva from "../pages/Reserva";

// jaraujo

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/reserva" element={<Reserva />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;