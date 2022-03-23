import { BrowserRouter, Routes, Route } from "react-router-dom";
import Reserva from "../pages/Reserva";
import Home from "../pages/home";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/reserva" element={<Reserva />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;