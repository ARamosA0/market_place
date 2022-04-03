import { useState } from "react";
import {
  Grid,
  TextField,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Tab,
  styled,
  FormControl, 
} from "@mui/material";
import { TabContext, TabPanel, TabList } from "@mui/lab";
import CloseIcon from "@mui/icons-material/Close";
import PersonPinIcon from "@mui/icons-material/PersonPin";
import LoginIcon from "@mui/icons-material/Login";
import SendIcon from "@mui/icons-material/Send";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import { FcGoogle } from "react-icons/fc";
import FacebookIcon from "@mui/icons-material/Facebook";
import "./index.css";

const LoginAnfitrion = ({ handleClickOpen, open }) => {
  const [value, setValue] = useState("1");

  const handleTabsLogin = (event, newValue) => {
    setValue(newValue);
  };

  //Button personalizado y usado como componente
  const ColorButton = styled(Button)(({ theme }) => ({
    backgroundColor: "#b34c6b",
    height: "42px",
    margin: "20px 0",
    transition: "1s",
    "&:hover": {
      backgroundColor: "#863850",
    },
    borderRadius: "12px",
  }));

  //Buttons Registro
  const ButtonRegister = styled(TextField)({
    '& label.Mui-focused': {
      color: '#194c6b ',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        border: '1.5px solid #863850'
      },
      '&:hover fieldset': {  
        borderColor: '#b34c6b',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#194c5b',
      },
    },
  });
  //Componente para usar servicios externos para el Login texfield
  const ServiciosGoFa = ({ init }) => {
    return (
      <>
        <Button
          variant="outlined"
          fullWidth
          startIcon={<FcGoogle />}
          onClick={handleClickOpen}
          sx={{ marginTop: "20px", borderColor: "#B0A5AB"}}
        >
          <span style={{color: "black"}}>{init} con Google</span>
        </Button>
        <Button
          variant="outlined"
          fullWidth
          startIcon={<FacebookIcon />}
          onClick={handleClickOpen}
          sx={{ marginTop: "20px", borderColor: "#B0A5AB"}}
        >
          <span style={{color: "black"}}>{init} con Facebook</span>
        </Button>
      </>
    );
  };

  return (
    <Dialog
      open={open}
      onClose={handleClickOpen}
      maxWidth={"sm"}
      fullWidth={true}
    >
      <DialogTitle
        sx={{
          padding: "5px 2px 10px",
          borderBottom: "1px solid rgba(61, 59, 59, 0.226);",
        }}
      >
        <Grid container alignItems={"center"}>
          <Grid item sx={{ height: "2px" }}>
            <Button
              size="small"
              sx={{ justifyContent: "start", color: "#b34c6b" }}
              onClick={handleClickOpen}
            >
              <CloseIcon sx={{ fontSize: 27 }} />
            </Button>
          </Grid>
          <Grid item xs={12} textAlign={"center"}>
            <span style={{fontSize: "23px", fontWeight: "600"}}>Inicia sesion o Registrate</span>
          </Grid>
        </Grid>
      </DialogTitle>
      <DialogContent>
        <Grid container textAlign={"center"} justifyContent={"center"}>
          <Grid item md={12}>
            <h3>Te damos la bienvenida a Cochera.com</h3>
          </Grid>
        </Grid>
        <TabContext value={value}>
          <TabList onChange={handleTabsLogin}>
            <Tab
              label="Iniciar Sesion"
              value="1"
              icon={<LoginIcon />}
              iconPosition="start"
            />
            <Tab
              label="Registrate"
              value="2"
              icon={<PersonPinIcon />}
              iconPosition="start"
            />
          </TabList>
          <TabPanel value="1">
            <FormControl fullWidth>
              <TextField
                autoFocus
                margin="dense"
                id="email"
                label="Email Address"
                type="email"
                fullWidth
                variant="filled"
                color="secondary"
                required
              />
              <TextField
                margin="dense"
                id="password"
                label="Password"
                type="password"
                fullWidth
                variant="filled"
                color="secondary"
                required
              />
              <ColorButton
                variant="contained"
                fullWidth
                endIcon={<SendIcon />}
                onClick={handleClickOpen}
              >
                Siguiente
              </ColorButton>
              <div className="div-container">
                <div className="division"></div>
                <span>&nbsp;O&nbsp;</span>
                <div className="division"></div>
              </div>
              <ServiciosGoFa init={"Inicia Sesion"} />
            </FormControl>
          </TabPanel>

          {/* Panel 2 - registro*/}

          <TabPanel value="2">
            <Grid container spacing={2}>
              <Grid item md={6}>
                <ButtonRegister
                  autoFocus
                  margin="dense"
                  id="text"
                  label="Name"
                  type="text"
                  fullWidth               
                />
              </Grid>
              <Grid item md={6}>
                <ButtonRegister
                  margin="dense"
                  id="text"
                  label="Last Name"
                  type="text"
                  fullWidth
                />
              </Grid>
              <Grid item md={6}>
                <ButtonRegister
                  margin="dense"
                  id="email"
                  label="Email"
                  type="email"
                  fullWidth
                />
              </Grid>
              <Grid item md={6}>
                <ButtonRegister
                  margin="dense"
                  id="password"
                  label="Password"
                  type="password"
                  fullWidth
                />
              </Grid>
              <Grid item md={6}>
                <ButtonRegister
                  margin="dense"
                  id="number"
                  label="Dni"
                  type="number"
                  fullWidth
                />
              </Grid>
              <Grid item md={6}>
                <ButtonRegister
                  margin="dense"
                  id="tel"
                  label="Phone"
                  type="tel"
                  fullWidth
                />
              </Grid>
            </Grid>
            <ColorButton
              variant="contained"
              fullWidth
              endIcon={<AppRegistrationIcon />}
              onClick={handleClickOpen}
            >
              Registrate
            </ColorButton>
            <div className="div-container">
              <div className="division"></div>
              <span>&nbsp;O&nbsp;</span>
              <div className="division"></div>
            </div>
            <ServiciosGoFa init={"Registrate"} />
          </TabPanel>
        </TabContext>
      </DialogContent>
    </Dialog>
  );
};

export default LoginAnfitrion;
