import { Form, createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Home/Home";
import Login from "../UserIndenty/Login";
import Register from "../UserIndenty/Register";
import CreateA from "../Create-Assignment/CreateA";
import PendingAssignment from "../PendingAssignment/PendingAssignment";
import AllAssignment from "../AllAssignment/AllAssignment";
import Details from "../AllAssignment/Details";
import MyAssignment from "../MyAssignment/MyAssignment";
import PrivateRoute from "../Private/PrivateRoute.jsx/PrivateRoute";
import Update from "../UpdateAssignmen t/Update";
import Exmeener from "../PendingAssignment/Exmeener";
import PendingCard from "../PendingAssignment/PendingCard";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
    //   errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
            path: "/logIn",
            element:<Login/>
        },
        {
            path: "/register",
            element:<Register/>
        },
        {
          path: "/createA",
          element:<PrivateRoute><CreateA/></PrivateRoute>
      },
      {
        path: "/PendingAssignment",
        element: <PrivateRoute><PendingAssignment/></PrivateRoute>
      },
      {
        path: "/PendingCard/:id",
        element: <PendingCard/>

      },
      {
        path: "AllAssignment",
        element:<AllAssignment/>
      },
      {
        path: "details/:id",
        element:<Details/>
      },
      {
        path: "/MyAssignment",
        element: <PrivateRoute><MyAssignment></MyAssignment></PrivateRoute>

      },
      {
        path: "/update/:id" ,
        element: <Update></Update>
      },
      {
        path: "/exmeener/:id",
        element: <Exmeener/>
      }
      ],
    },
  ]);