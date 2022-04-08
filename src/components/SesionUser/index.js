import React from "react";
import { getCocheraData } from "../../service/firestore";
import {
  Grid,
  TextField,
  Button,
  styled,

} from "@mui/material";
import { Formik, ErrorMessage } from "formik";
import SendIcon from "@mui/icons-material/Send";
import swal from "sweetalert";


const SesionUser = () => {

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

    return(
        <Formik
              initialValues={{
                //valores inciales del formulario
                email: "",
                password: "",
              }}
              validate={(valores) => {
                let errores = {};
                //validacion nombre
                if (!valores.email) {
                  errores.email = "Ingrese su correo";
                } else if (
                  !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
                    valores.email
                  )
                ) {
                  errores.email = "Digite bien su correo";
                }
                if (!valores.password) {
                  errores.password = "Ingrese su password";
                }
                return errores;
              }}
              onSubmit={async(valores, { resetForm }) => {
                resetForm();
                //funcion iniciar sesion
                  try {
                    const data = await getCocheraData("usuario");
                    const filtroUser = data.filter(
                      (dt) => dt.email === valores.email && dt.password === valores.password
                    );
                    if (filtroUser.length > 0) {
                      const idUser = {
                        id: filtroUser[0].id,
                        userName: filtroUser[0].userName,
                        lastName: filtroUser[0].lastName,
                      };
                      localStorage.setItem("userID", JSON.stringify(idUser));
                      const response = await swal({
                        icon: "success",
                        title: "Inicio de sesion exitoso",
                        text: `Bienvenido ${filtroUser[0].userName}`,
                      });
                      if (response) {
                        window.location.replace("");
                      }
                    } else {
                      swal({
                        icon: "error",
                        title: "No se pudo iniciar sesion",
                        text: "Coloque bien su correo o contraseña \n o si no esta registrado registrese primero",
                      });
                    }
                  } catch (error) {
                    swal({
                      icon: "error",
                      title: `${error.message}`,
                      text: "Intenta de nuevo",
                    });
                  }
              }}
            >
              {({
                values,
                errors,
                touched,
                handleSubmit,
                handleChange,
                handleBlur,
              }) => (
                <form fullWidth onSubmit={handleSubmit}>
                  <Grid container>
                    <Grid item md={12}>
                      <TextField
                        autoFocus
                        error={touched.email && errors.email && true}
                        margin="dense"
                        label="Email Address"
                        type="email"
                        name="email"
                        fullWidth
                        variant="filled"
                        color="secondary"
                        required
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      <ErrorMessage
                        name="email"
                        component={() => (
                          <div className="input-error">{errors.email}</div>
                        )}
                      />
                    </Grid>
                    <Grid item md={12}>
                      <TextField
                        error={touched.password && errors.password && true}
                        margin="dense"
                        label="Password"
                        type="password"
                        name="password"
                        fullWidth
                        variant="filled"
                        color="secondary"
                        required
                        value={values.password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      <ErrorMessage
                        name="password"
                        component={() => (
                          <div className="input-error">{errors.password}</div>
                        )}
                      />
                    </Grid>
                  </Grid>
                  <ColorButton
                    variant="contained"
                    type="submit"
                    disabled={
                      Object.values(values)[0] === "" ||
                      Object.values(errors).length > 0
                        ? true
                        : false
                    }
                    fullWidth
                    endIcon={<SendIcon />}
                  >
                    Siguiente
                  </ColorButton>
                </form>
              )}
            </Formik>
    )
}
export default SesionUser;