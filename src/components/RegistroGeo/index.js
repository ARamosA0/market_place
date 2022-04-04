import { useState } from "react";
import {
  Container,
  Grid,
  Dialog,
  DialogContent,
  DialogTitle,
  TextField,
  Button,
} from "@mui/material";
import { storeCochera, updateCochera } from "../../service/firestore";

const RegistroGeo = (props) => {
  const [open, setOpen] = useState(false);
  const [values, setValues] = useState([]);

  const handleChangeInput = (e) => {
    const { value, name } = e.target;

    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleOpenDialog = () => {
    setOpen(!open);
  };

  return (
    <>
    <Button color="secondary" onClick={handleOpenDialog}>Click Aqui</Button>
      <Dialog open={open} onClose={handleOpenDialog}>
        <DialogContent>
          <h2>Localizacion</h2>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default RegistroGeo;

