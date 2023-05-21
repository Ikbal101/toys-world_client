import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import AllToys from "../AllToys/AllToys";
import Blog from "../Blog/Blog";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Details from "../Pages/Home/Details/Details";
import AddToy from "../AddToy/AddToy";
import MyToys from "../MyToys/MyToys";
const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/all',
            element:<AllToys></AllToys>
        },
        {
            path:'add',
            element:<AddToy></AddToy>
        },
        {
            path:'myToy',
            element:<MyToys></MyToys>
        },
        {
            path:'/blog',
            element:<Blog></Blog>
        },
        {
            path:'/login',
            element:<Login></Login>
        },
        {
            path:'signup',
            element:<SignUp></SignUp>
        },
        {
            path:'details/:id',
            element:<Details></Details>
        },
      ]
    },
  ]);

  
  export default router;