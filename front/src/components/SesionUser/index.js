import React from "react";
import { loginUserAxios } from "../../service/userService";
import jwt_decode from "jwt-decode";
import { Grid, TextField, Button, styled } from "@mui/material";
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

  return (
    <Formik
      initialValues={{
        //valores inciales del formulario
        username: "",
        password: "",
      }}
      validate={(valores) => {
        let errores = {};
        //validacion nombre
        if (!valores.username) {
          errores.username = "Ingrese su nombre de usuario";
        }
        // else if (
        // /  !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
        //     valores.email
        //   )
        // ) {
        //   errores.email = "Digite bien su correo";
        // }
        if (!valores.password) {
          errores.password = "Ingrese su password";
        }
        return errores;
      }}
      onSubmit={async (valores, { resetForm }) => {
        resetForm();
        //funcion iniciar sesion
        try {
          //? login de usuario haciendo post a la api y decodificando con jwt_decode
          const data = await loginUserAxios(valores);
          // console.log(data);
          const decoded = jwt_decode(data.Token);
          // console.log(decoded);
          const idUser = {
            id: decoded.id,
            userName: decoded.username,
            lastName: decoded.lastname,
            Token: data.Token
          };
          localStorage.setItem("userID", JSON.stringify(idUser));
          const response = await swal({
            icon: "success",
            title: "Inicio de sesion exitoso",
            text: `Bienvenido ${decoded.username}`,
          });
          if (response) {
            window.location.replace("");
          }

        } catch (error) {
          console.log(error);
          swal({
            icon: "error",
            title: `${
              error.request.status === 401
                ? "No se pudo iniciar sesion"
                : error.message
            }`,
            text: "Coloque bien su correo o contraseña \n o si no esta registrado registrese primero",
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
                error={touched.username && errors.username && true}
                margin="dense"
                label="Nombre de usuario"
                type="text"
                name="username"
                fullWidth
                variant="filled"
                color="secondary"
                required
                value={values.username}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <ErrorMessage
                name="username"
                component={() => (
                  <div className="input-error">{errors.username}</div>
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
  );
};
export default SesionUser;
