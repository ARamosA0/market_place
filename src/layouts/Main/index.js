import * as React from 'react';
import { Outlet} from "react-router-dom";
// import Booking from '../../components/Booking';
import Footer from '../../components/Footer';
import MenuAppBar from '../../components/Navar';
import SocialMedia from '../../components/SocialMedia';

const Main = () => {
    return (
        <div>
            <MenuAppBar></MenuAppBar>
            <Outlet />
            <Footer></Footer>
            <SocialMedia></SocialMedia>
        </div>
    );
};

export default Main;
