import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import AllToys from "../AllToys/AllToys";
import Blog from "../Blog/Blog";

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
            path:'/blog',
            element:<Blog></Blog>
        },
      ]
    },
  ]);

  
  export default router;