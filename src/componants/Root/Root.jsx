import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../HomeInfo/Footer/Footer";


const Root = () => {
    return (
        <div>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Root;