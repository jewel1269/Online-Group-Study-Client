import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Home/Home";
import Login from "../UserIndenty/Login";
import Register from "../UserIndenty/Register";
import CreateA from "../Create-Assignment/CreateA";
import PendingAssignment from "../PendingAssignment/PendingAssignment";

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
          element:<CreateA/>
      },
      {
        path: "/PendingAssignment",
        element: <PendingAssignment/>
      }
      ],
    },
  ]);