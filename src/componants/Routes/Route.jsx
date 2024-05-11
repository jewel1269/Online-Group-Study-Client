import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Home/Home";
import Login from "../UserIndenty/Login";
import Register from "../UserIndenty/Register";
import CreateA from "../Create-Assignment/CreateA";
import PendingAssignment from "../PendingAssignment/PendingAssignment";
import AllAssignment from "../AllAssignment/AllAssignment";
import Details from "../AllAssignment/Details";
import MyAssignment from "../MyAssignment/MyAssignment";

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
        element: <MyAssignment/>

      }
      ],
    },
  ]);