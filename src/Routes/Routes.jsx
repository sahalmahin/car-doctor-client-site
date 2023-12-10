import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import About from "../pages/Home/About/About";
import Service from "../pages/Home/Service/Service";
import Blog from "../pages/Home/Blog/Blog";
import Contact from "../pages/Home/Contact/Contact";
import BookService from "../pages/BookService/BookService";
import Bookings from "../pages/Bookings/Bookings";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: '/service',
        element: <Service></Service>
      },
      {
        path: '/blog',
        element: <Blog></Blog>
      },
      {
        path: '/contact',
        element: <Contact></Contact>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/signUp',
        element: <SignUp></SignUp>
      },
      {
        path: '/bookings',
        element: <PrivateRoute><Bookings></Bookings></PrivateRoute>
      },
      {
        path: '/bookService/:id',
        element: <BookService></BookService>,
        loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`)
      },
    ]
  },
]);

export default router;