import Banner from "../Banner/Banner";
import Carousel from "../Carousel/Carousel";
import Special from "../Special/Special";
import FillExample from "../Tabs/FillExample";
import Comment from "../Comment/Comment"


const Home = () => {
    return  (
        <div>
            <Banner></Banner>
            <Carousel></Carousel>
           <Special></Special>
            <FillExample></FillExample>
            <Comment></Comment>
            
        </div>
    );
};

export default Home;