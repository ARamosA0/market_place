import { BrowserRouter, Routes, Route } from "react-router-dom";
import Reserva from "../pages/Reserva";

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