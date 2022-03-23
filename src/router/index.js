import { BrowserRouter, Routes, Route } from "react-router-dom";
import Reserva from "../pages/Reserva";
import Home from "../pages/home";
import Header from "../layouts/Header";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Header/>}>
        <Route path="/" element={<Home/>} />
        <Route path="/reserva" element={<Reserva />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;