import { Container, Grid, Typography } from "@mui/material";
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';

import "./index.css"

const SocialMedia = () => {
    return (
        <div className="media-container">
            <Container maxWidth="xl">
                <Grid container direction={"row"} justifyContent={"space-between"} alignItems={"center"} pt={2.5}>
                    <Grid item>
                        <span className="logo-titulo3">Cocheras<span className="logo-titulo2">.pe</span></span>
                    </Grid>
                    <Grid item>
                        <Grid container spacing={3} direction={"row"} justifyContent={"space-between"} alignItems={"center"}>
                            <Grid item>
                                <Typography color={"white"}>© 2022 Airbnb.org. Todos los derechos reservados.</Typography>
                            </Grid>
                            <Grid item>
                                <InstagramIcon sx={{ fontSize: 40, color:"white" }} />
                            </Grid>
                            <Grid item>
                                <TwitterIcon sx={{ fontSize: 40, color:"white" }} />
                            </Grid>
                            <Grid item>
                                <FacebookIcon sx={{ fontSize: 40, color:"white" }} />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}

export default SocialMedia;