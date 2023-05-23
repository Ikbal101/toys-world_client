import { createBrowserRouter} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import AllToys from "../AllToys/AllToys";
import Blog from "../Blog/Blog";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Details from "../Pages/Home/Details/Details";
import AddToy from "../AddToy/AddToy";
import MyToys from "../MyToys/MyToys";
import NotFoundPage from "../NotFoundPage/NotFoundPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement:<NotFoundPage></NotFoundPage>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/all",
        element: <AllToys />,
      },
      {
        path: "add",
        element: <AddToy />,
      },
      {
        path: "myToy",
        element: <MyToys />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <SignUp />,
      },
      {
        path: "details/:id",
        element: <Details />,
      },
      // Add the following route at the end
    //   {
    //     path: "*",
    //     element: <NotFoundPage/>,
    //   },
    ],
  },
]);

export default router;
