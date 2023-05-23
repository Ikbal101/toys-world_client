import { Link } from 'react-router-dom';
import image from '../assets/error/2417237.jpg'
import "./Error.css"

const NotFoundPage = () => {
  return (
    <div className='mt-6'>
   
      <img src={image} alt="404 Error"  style={{"width":"900px" ,"margin":"0 auto","borderRadius":"8px"}}/>
      <Link><button className='back-btn'>Back To Home</button></Link>
    </div>
  );
};

export default NotFoundPage;
