import { useState, useEffect } from "react";

const User =() => {

    const [data, setdata] = useState([{
        nombre: "",
        email: "",
    }]);


    return(
        <Container>
            <Grid container spacing={3}>
                <Grid item md={6}>
                <h2>Usuario Anfitrion</h2>
                <Grid container spacing={3}>
                    <Grid item md={6}>
                    <TextField
                        required
                        id="outlined-required"
                        label="Nombre Anfitrion"
                    />
                    </Grid>
                    <Grid item md={6}>
                    <TextField required id="outlined-required" label="DNI" />
                    </Grid>
                    <Grid item md={6}>
                    <TextField
                        required
                        id="outlined-required"
                        type="number"
                        label="Email"
                    />
                    </Grid>
                    <Grid item md={6}>
                    <TextField
                        required
                        id="outlined-required"
                        type="password"
                        label="password"
                    />
                    </Grid>
                    <Grid item md={6}>
                    <TextField
                        required
                        id="outlined-required"
                        type="number"
                        label="telefono"
                    />
                    </Grid>
                    <Grid item md={6}>
                    <TextField
                        required
                        id="outlined-required"
                        label="Nombre Alquiler"
                    />
                    </Grid>
                    <Grid item md={6}>
                    <TextField required id="outlined-required" label="descripcion" />
                    </Grid>
                    <Grid item md={6}>
                    <TextField required id="outlined-required" label="tipoCochera" />
                    </Grid>
                    <Grid item md={6}>
                    <TextField
                        required
                        id="outlined-required"
                        type="file"
                        onChange={handleFileSelect}
                        label="Photos"
                    />
                    </Grid>
                    <Grid item md={6}>
                    <TextField
                        required
                        id="outlined-required"
                        label="Nombre Anfitrion"
                    />
                    </Grid>
                    <Grid item md={6}>
                    <TextField required id="outlined-required" label="pais" />
                    </Grid>
                    <Grid item md={6}>
                    <TextField id="outlined-required" label="region" />
                    </Grid>
                    <Grid item md={6}>
                    <TextField id="outlined-required" label="distrito" />
                    </Grid>
                    <Grid item md={6}>
                    <TextField required id="outlined-required" label="direccion" />
                    </Grid>
                    <Grid item md={6}>
                    <TextField required id="outlined-required" label="costo" />
                    </Grid>
                    <Grid item md={6}>
                    <Button>Subir</Button>
                    </Grid>
                </Grid>
                </Grid>

                <Grid item md={6}>
                <h2>Usuario Normal</h2>
                <Grid container spacing={3}>
                    <Grid item md={6}>
                    <TextField
                        required
                        id="outlined-required"
                        label="Nombre Usuario"
                    />
                    </Grid>
                    <Grid item md={6}>
                    <TextField
                        required
                        id="outlined-required"
                        type="password"
                        label="Password"
                    />
                    </Grid>
                    <Grid item md={6}>
                    <TextField
                        required
                        id="outlined-required"
                        label="Correo"
                    />
                    </Grid>
                    <Grid item md={6}>
                    <TextField
                        required
                        id="outlined-required"
                        type="number"
                        label="telefono"
                    />
                    </Grid>
                    <Grid item md={6}>
                    <TextField
                        required
                        id="outlined-required"
                        type="number"
                        label="DNI"
                    />
                    </Grid>
                    <Grid item md={6}>
                    <Button>Subir</Button>
                    </Grid>
                </Grid>
                </Grid>
            </Grid>
        </Container>
    );
};

export default User;