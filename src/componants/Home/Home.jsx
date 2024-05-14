import { Helmet } from "react-helmet";
import Banner from "../HomeInfo/Banner/Banner";
import Faq from "../HomeInfo/Faq/Faq";
import Futures from "../HomeInfo/Features/Futures";
import Footer from "../HomeInfo/Footer/Footer";


const Home = () => {
    return (
        <div>
            <Helmet><title>Home</title></Helmet>
            <Banner/>
            <Futures/>
            <Faq/>
        </div>
    );
};

export default Home;