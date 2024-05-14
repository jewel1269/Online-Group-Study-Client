import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../HomeInfo/Footer/Footer";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import 'animate.css';
import {Helmet} from "react-helmet";
import { Tooltip } from 'react-tooltip'
import 'react-tooltip/dist/react-tooltip.css'


const Root = () => {
    return (
        <div>
            <Navbar/>
            <Outlet/>
            <Footer/>
            

            <ToastContainer />
        </div>
    );
};

export default Root;