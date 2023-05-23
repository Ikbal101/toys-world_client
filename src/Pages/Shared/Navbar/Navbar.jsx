import { Link } from "react-router-dom";
import logo from "../../../assets/banner/nav.png"
import { AuthContext } from "../../../Providers/AuthProviders";
import { useContext } from "react";
import pic from "../../../assets/carousel/doctor.jpg"
const Navbar = () => {
    const {user, logOut} = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
        .then(() =>{
           
        })
        
        .catch( error => console.log(error))
    }
    const navItems = <>
    <li><Link to="/" className="font-medium">Home</Link> </li>
    <li> <Link to="/all" className="font-medium">All Toys</Link> </li>
    {/* <li> <Link to='/add' className="font-medium">Add A Toy</Link> </li>
    <li> <Link to='/myToy' className="font-medium">My Toys</Link> </li> */}

    {/* <li> <Link to="/login" className="font-medium">LogIn</Link> </li> */}
        <li> <Link to="/blog" className="font-medium">Blog</Link> </li>
    { user?.email ?  <>
        <li> <Link to='/add' className="font-medium">Add A Toy</Link> </li>
        <li> <Link to='/myToy' className="font-medium">My Toys</Link> </li>
        <li><button onClick={handleLogOut}>Log out</button></li>
        <img src={pic} className="h-10 w-10 rounded-full" alt="Doctor Strange" title="Doctor Strange" />
        </> 
        : <li> <Link to="/login">Login</Link> </li>
    }

</>
return (
    <div className="navbar bg-orange-500 rounded mt-2 h-28 mb-4">
        <div className="navbar-start">
            <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                    {navItems}
                </ul>
            </div>
            <Link to="/" className="btn btn-ghost normal-case text-xl">
                <img src={logo} alt="" title="Doctor Strange" className="h-13 w-16 rounded-xl" />
            </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
                {navItems}
            </ul>
        </div>
        
    </div>
);
};

export default Navbar;