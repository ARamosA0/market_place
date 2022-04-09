import Container from "@mui/material/Container";
import "./index.css";

const LoaderCar = () => {
  return (

    <Container maxWidth="xxl">
      <div class="loader">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
    </Container>
  );
};
export default LoaderCar;
