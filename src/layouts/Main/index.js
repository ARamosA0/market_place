import * as React from 'react';
import { Outlet} from "react-router-dom";
// import Booking from '../../components/Booking';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import SocialMedia from '../../components/SocialMedia';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet />
            <Footer></Footer>
            <SocialMedia></SocialMedia>
        </div>
    );
};

export default Main;
