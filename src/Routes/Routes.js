import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Blogs from "../Pages/Blogs/Blogs";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import MyReviews from "../Pages/MyReviews/MyReviews";
import PasswordReset from "../Pages/PasswordReset/PasswordReset";
import Register from "../Pages/Register/Register";
import ServiceDetails from "../Pages/ServiceDetails/ServiceDetails";
import AddServices from "../Pages/Services/AddServices";
import Services from "../Pages/Services/Services";
import UpdateReviews from "../Pages/UpdateReviews/UpdateReviews";
import UserProfile from "../Pages/UserProfile/UserProfile";
import PrivateRoutes from "./PrivateRoutes";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      { path: "/", element: <Home></Home> },
      { path: "/home", element: <Home></Home> },
      { path: "/services", element: <Services></Services> },
      {
        path: "/services/:id",
        element: (
          <PrivateRoutes>
            <ServiceDetails></ServiceDetails>
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/services/${params.id}`),
      },
      { path: "/blogs", element: <Blogs></Blogs> },
      {
        path: "/edit-review/:id",
        element: <UpdateReviews></UpdateReviews>,
        loader: ({ params }) =>
          fetch(` http://localhost:5000/reviews/${params.id}`),
      },
      { path: "/register", element: <Register></Register> },
      { path: "/login", element: <Login></Login> },
      { path: "/resetpassword", element: <PasswordReset></PasswordReset> },
      {
        path: "/my-reviews",
        element: (
          <PrivateRoutes>
            <MyReviews></MyReviews>
          </PrivateRoutes>
        ),
      },
      {
        path: "/add-services",
        element: (
          <PrivateRoutes>
            <AddServices></AddServices>
          </PrivateRoutes>
        ),
      },
      {
        path: "/profile",
        element: (
          <PrivateRoutes>
            <UserProfile></UserProfile>
          </PrivateRoutes>
        ),
      },
    ],
  },
]);
