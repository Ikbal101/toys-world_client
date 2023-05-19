import logo9 from '../../../assets/carousel/panther.jpg'
import logo2 from '../../../assets/carousel/captain.jpg'
import logo4 from '../../../assets/carousel/hulk.jpg'
import logo1 from '../../../assets/carousel/ironman.jpg'
import logo6 from '../../../assets/carousel/thor.webp'
import logo5 from '../../../assets/carousel/antman.jfif'
import logo from '../../../assets/carousel/spider.jfif'
import logo7 from '../../../assets/carousel/venom.jpg'
import logo3 from '../../../assets/carousel/captain-marvel.avif'
import logo8 from '../../../assets/carousel/doctor.jpg'
import logo10 from '../../../assets/carousel/widow.jpeg'
import logo11 from '../../../assets/carousel/vision.jpg'
import logo12 from '../../../assets/carousel/iron-hulk.jpg'
import logo13 from '../../../assets/carousel/witch.jpeg'

const Carousel = () => {
  return (
    <div className='mb-6'>
      <h2 className="special-toys text-center text-3xl font-bold mb-4 text-orange-700">
        Our Special Toys
      </h2>
      <hr className='mb-6 w-96 mx-auto'/>
      <div className="carousel carousel-center rounded-box">
        <div className="carousel-item">
          <img
          className='h-96 border-2 '
            src={logo}
            alt="Pizza"
          />
        </div>
        <div className="carousel-item">
          <img
          className='h-96 border-2 '
            src={logo1}
            alt="Pizza"
          />
        </div>
        <div className= "carousel-item ">
          <img
          className='h-96 border-2 '
            src={logo2}
            alt="Pizza"
          />
        </div>
        <div className="carousel-item">
          <img
          className='h-96 border-2 '
            src={logo3}
            alt="Pizza"
          />
        </div>
        <div className="carousel-item">
          <img
          className='h-96 w-64 border-2 '
            src={logo4}
            alt="Pizza"
          />
        </div>
        <div className="carousel-item">
          <img
          className='h-96 border-2 '
            src={logo5}
            alt="Pizza"
          />
        </div>
        <div className="carousel-item">
          <img
          className='h-96 border-2 '
            src={logo6}
            alt="Pizza"
          />
        </div>
        <div className="carousel-item">
          <img
          className='h-96 border-2 '
            src={logo7}
            alt="Pizza"
          />
        </div>
        <div className="carousel-item">
          <img
          className='h-96 border-2 '
            src={logo8}
            alt="Pizza"
          />
        </div>
        <div className="carousel-item">
          <img
          className='h-96  border-2 '
            src={logo9}
            alt="Pizza"
          />
        </div>
        <div className="carousel-item">
          <img
          className='h-96 border-2 '
            src={logo13}
            alt="Pizza"
          />
        </div>
        <div className="carousel-item">
          <img
          className='h-96 border-2 '
            src={logo10}
            alt="Pizza"
          />
        </div>
        <div className="carousel-item">
          <img
          className='h-96 border-2 '
            src={logo11}
            alt=  "Pizza"
          />
        </div>
        <div className="carousel-item">
          <img
          className='h-96 border-2 '
            src={logo12}
            alt="Pizza"
          />
        </div>
    
      </div>
    </div>
  );
};

export default Carousel;
