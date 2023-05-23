import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import img from '../../../assets/banner/nav.png'

const Footer = () => {
  return (
    <div>
      <footer className="footer p-10 bg-base-200 text-base-content mt-20 rounded-t">
        <div>
        <img src={img} alt="" className='w-72 rounded-full ' />
        </div>
        <div className='mt-10'>
          
          <p className="text-2xl"><b>Toys world</b></p>
          <p>The Brothers Industries Ltd.</p>
          <p>The best toys website on the internet</p>
          <p>Contact us: toysWorld@gmail.com</p>
          <p>Phone: 123-456-7890</p>
          <p>Address: 123 Toy Street, Rangpur, Bangladesh</p>
        </div>
        <div className='mt-10'>
          <span className="footer-title">Top Toys</span>
          <a className="link link-hover">Iron-Man</a>
          <a className="link link-hover">Captain America</a>
          <a className="link link-hover">Thor</a>
          <a className="link link-hover">Black Panther</a>
        </div>
        <div className='mt-10'>
          <span className="footer-title">Company</span>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </div>
        <div className='mt-10'>
          <span className="footer-title">Legal</span>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </div>
        <div className="flex items-center justify-center mt-20">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="mr-2 text-xl text-blue-500"><FaFacebook /></a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="mr-2 text-xl text-red-400"><FaInstagram /></a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-xl text-blue-700"><FaTwitter /></a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
