import { Container, Grid, Typography } from "@mui/material";

import "./index.css"

const Footer = () => {
    return (
        <div className="footer-container">
            <Container maxWidth="xl">
                <Grid container direction={"row"} justifyContent={"space-evenly"} alignItems={"flex-start"} mb={5}>
                    <Grid item md={3}>
                        <Typography variant="h6" color={"white"}>ASISTENCIA</Typography>
                        <Typography variant="body2" color={"white"} mt={1}>Centro de ayuda </Typography>
                        <Typography variant="body2" color={"white"} mt={1}>Opciones de cancelación </Typography>
                        <Typography variant="body2" color={"white"} mt={1}>Información de seguridad </Typography>
                        <Typography variant="body2" color={"white"} mt={1}>Nuestra respuesta frente a la COVID-19 </Typography>
                        <Typography variant="body2" color={"white"} mt={1}>Apoyo a las personas con discapacidad </Typography>
                        <Typography variant="body2" color={"white"} mt={1}>Denunciar un problema en el vecindario </Typography>
                    </Grid>
                    <Grid item md={3}>
                        <Typography variant="h6" color={"white"}>Comunidad</Typography>
                        <Typography variant="body2" color={"white"} mt={1}>Alojamiento de ayuda en caso de catástrofe </Typography>
                        <Typography variant="body2" color={"white"} mt={1}>Apoya a los refugiados afganos </Typography>
                        <Typography variant="body2" color={"white"} mt={1}>Luchamos contra la discriminación </Typography>
                    </Grid>
                    <Grid item md={3}>
                        <Typography variant="h6" color={"white"}>MODO ANFITRION</Typography>
                        <Typography variant="body2" color={"white"} mt={1}>Anímate a compartir tu espacio </Typography>
                        <Typography variant="body2" color={"white"} mt={1}>AirCover: protección para los anfitriones </Typography>
                        <Typography variant="body2" color={"white"} mt={1}>Recursos para anfitriones </Typography>
                        <Typography variant="body2" color={"white"} mt={1}>Visita el foro de la comunidad </Typography>
                        <Typography variant="body2" color={"white"} mt={1}>Cómo brindar servicios de anfitrión </Typography>
                    </Grid>
                    <Grid item md={3}>
                        <Typography variant="h6" color={"white"}>ACERCA DE</Typography>
                        <Typography variant="body2" color={"white"} mt={1}>Sala de prensa </Typography>
                        <Typography variant="body2" color={"white"} mt={1}>Más información sobre las nuevas funciones </Typography>
                        <Typography variant="body2" color={"white"} mt={1}>Carta de nuestros fundadores </Typography>
                        <Typography variant="body2" color={"white"} mt={1}>Carreras </Typography>
                        <Typography variant="body2" color={"white"} mt={1}>Inversionistas </Typography>
                        <Typography variant="body2" color={"white"} mt={1}>Airbnb Luxe </Typography>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}

export default Footer;