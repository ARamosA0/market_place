import React from "react";
import { createUserAxios } from "../../service/userService";
import { Grid, TextField, Button, styled } from "@mui/material";
import { Formik, ErrorMessage } from "formik";
import swal from "sweetalert";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";

const RegisterUser = () => {
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
        nombre:"",
        apellido: "",
        email: "",
        password: "",
        dni: "",
        telefono: ""
      }}
      //para validar los datos
      validate={(valores) => {
        let errores = {};
        //validacion nombre
        if (!valores.username) {
          errores.username = "Ingrese su nombre de usuario";
        }
        if (!valores.nombre) {
          errores.nombre = "Ingrese su nombre";
        }
        if (!valores.apellido) {
          errores.apellido = "Ingrese su apellido";
        }
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
        if (!valores.dni) {
          errores.dni = "Ingrese su DNI";
        } else if (valores.dni.length > 8 || valores.dni.length < 7) {
          errores.dni = "El dni tiene 8 digitos";
        }

        if (!valores.telefono) {
          errores.telefono = "Ingrese su Telefono";
        }
        return errores;
      }}
      //para enviar el formulario
      onSubmit={async (valores, { resetForm }) => {
        //valores son los valores de los inputs donde se muestra en un objeto
        resetForm();
        //funcion para crear usuario
        console.log(valores)
        try {
          await createUserAxios(valores)
          swal({
            icon: "success",
            title: "Cuenta creada",
            text: "Inicie sesion para continuar",
          });
          // const filtroUser = data.filter(
          //   (dt) => dt.email === valores.email || dt.dni === valores.dni
          // );
          // if (filtroUser.length > 0) {
          //   swal({
          //     icon: "error",
          //     title: "El correo o el DNI ya estan registrados",
          //     text: "Coloque un correo o DNI que no esten registrados",
          //   });
          //   return;
          // } else {
          //   await storeCochera(valores, "usuario");
          //   swal({
          //     icon: "success",
          //     title: "Cuenta creada",
          //     text: "Inicie sesion para continuar",
          //   });
          //   return;
          // }
        } catch (error) {
          swal({
            icon: "error",
            title: `${error.message}`,
            text: "Intenta de nuevo dentro de unos minutos",
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
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item md={6}>
              <TextField
                autoFocus
                error={touched.username && errors.username && true}
                required
                margin="dense"
                name="username"
                label="Nombre de usuario"
                color="secondary"
                type="text"
                fullWidth
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
            <Grid item md={6}>
              <TextField
                error={touched.nombre && errors.nombre && true}
                required
                margin="dense"
                name="nombre"
                label="Nombre"
                color="secondary"
                type="text"
                fullWidth
                value={values.nombre}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <ErrorMessage
                name="nombre"
                component={() => (
                  <div className="input-error">{errors.nombre}</div>
                )}
              />
            </Grid>
            <Grid item md={6}>
              <TextField
                error={touched.apellido && errors.apellido && true}
                margin="dense"
                name="apellido"
                required
                label="apellido"
                color="secondary"
                type="text"
                fullWidth
                value={values.apellido}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <ErrorMessage
                name="apellido"
                component={() => (
                  <div className="input-error">{errors.apellido}</div>
                )}
              />
            </Grid>
            <Grid item md={6}>
              <TextField
                error={touched.email && errors.email && true}
                margin="dense"
                name="email"
                required
                color="secondary"
                label="Email"
                type="email"
                fullWidth
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
            <Grid item md={6}>
              <TextField
                error={touched.password && errors.password && true}
                margin="dense"
                name="password"
                required
                color="secondary"
                label="Password"
                type="password"
                fullWidth
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
            <Grid item md={6}>
              <TextField
                error={touched.dni && errors.dni && true}
                margin="dense"
                name="dni"
                required
                color="secondary"
                label="Dni"
                type="numnber"
                fullWidth
                value={values.dni}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <ErrorMessage
                name="dni"
                component={() => (
                  <div className="input-error">{errors.dni}</div>
                )}
              />
            </Grid>
            <Grid container justifyContent="center" mt={2}>
              <Grid item md={6}>
                <TextField
                  error={touched.telefono && errors.telefono && true}
                  margin="dense"
                  name="telefono"
                  required
                  color="secondary"
                  label="Phone"
                  type="tel"
                  value={values.telefono}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  inputProps={{ maxLength: 9 }}
                  fullWidth
                />
                <ErrorMessage
                  name="telefono"
                  component={() => (
                    <div className="input-error">{errors.telefono}</div>
                  )}
                />
              </Grid>
            </Grid>
          </Grid>
          <ColorButton
            variant="contained"
            disabled={
              Object.values(values)[0] === "" ||
              Object.values(errors).length > 0
                ? true
                : false
            }
            type="submit"
            fullWidth
            endIcon={<AppRegistrationIcon />}
          >
            Registrate
          </ColorButton>
        </form>
      )}
    </Formik>
  );
};
export default RegisterUser;
