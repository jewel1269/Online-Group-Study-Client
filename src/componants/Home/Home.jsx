import Banner from "../HomeInfo/Banner/Banner";
import Faq from "../HomeInfo/Faq/Faq";
import Futures from "../HomeInfo/Features/Futures";
import Footer from "../HomeInfo/Footer/Footer";


const Home = () => {
    return (
        <div>
            <Banner/>
            <Futures/>
            <Faq/>
            <Footer/>
        </div>
    );
};

export default Home;