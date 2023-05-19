import Banner from "../Banner/Banner";
import Carousel from "../Carousel/Carousel";
import Special from "../Special/Special";
import FillExample from "../Tabs/FillExample";


const Home = () => {
    return  (
        <div>
            <Banner></Banner>
            <Carousel></Carousel>
            <FillExample></FillExample>
           <Special></Special>
        </div>
    );
};

export default Home;