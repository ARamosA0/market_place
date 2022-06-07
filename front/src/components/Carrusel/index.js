import garage from"../../assets/garage.jpg";
import garage2 from"../../assets/garage2.jpg";
import garage3 from"../../assets/garage3.jpg";
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
import 'react-awesome-slider/dist/custom-animations/fold-out-animation.css';

const Carrusel = ()=>{
    const AutoplaySlider = withAutoplay(AwesomeSlider);
    
    return(
        <AutoplaySlider  bullets={false} play={true} cancelOnInteraction={false} interval={9000} animation="foldOutAnimation" screen>
            <div data-src={garage} />
            <div data-src={garage2}/>
            <div data-src={garage3}/>
        </AutoplaySlider>
    );
};
export default Carrusel;

