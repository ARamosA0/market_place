import React from "react";
import { storeCochera } from "../../service/firestore";
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
        userName: "",
        lastName: "",
        email: "",
        password: "",
        dni: "",
        telefono: "",
        idCocheras: [],
        userImage: "",
      }}
      //para validar los datos
      validate={(valores) => {
        let errores = {};
        //validacion nombre
        if (!valores.userName) {
          errores.userName = "Ingrese su nombre";
        }
        if (!valores.lastName) {
          errores.lastName = "Ingrese su apellido";
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
        try {
          await storeCochera(valores, "usuario");
          swal({
            icon: "success",
            title: "Cuenta creada",
            text: "Inicie sesion para continuar",
          });
          return;
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
                error={touched.userName && errors.userName && true}
                required
                margin="dense"
                name="userName"
                label="Name"
                color="secondary"
                type="text"
                fullWidth
                value={values.userName}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <ErrorMessage
                name="userName"
                component={() => (
                  <div className="input-error">{errors.userName}</div>
                )}
              />
            </Grid>
            <Grid item md={6}>
              <TextField
                error={touched.lastName && errors.lastName && true}
                margin="dense"
                name="lastName"
                required
                label="Last Name"
                color="secondary"
                type="text"
                fullWidth
                value={values.lastName}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <ErrorMessage
                name="lastName"
                component={() => (
                  <div className="input-error">{errors.lastName}</div>
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
