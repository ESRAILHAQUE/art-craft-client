import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Root from './Root/Root';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import AuthProvider from "./Components/Providers/AuthProvider";
import AllArtAndCraft from './Components/All art and craft/AllArtAndCraft';
import ErrorPage from './Components/Error/ErrorPage';
import Home from './Components/Home/Home';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import ContactUs from './Components/ContactUs/ContactUs';
import AddCraft from './Components/AddCraft/AddCraft';
import ViewDetailsPage from './Components/ViewDetailsPage/ViewDetailsPage';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("http://localhost:3000/craftItems"),
      },
      {
        path: "/login",
        element: <Login title="Login"></Login>,
      },
      {
        path: "/register",
        element: <Register title="Register"></Register>,
      },
      {
        path: "/productDetails",
        element: <ViewDetailsPage></ViewDetailsPage>,
      },
      {
        path: "/contactUs",
        element: <ContactUs title="ContactUs"></ContactUs>,
      },
      {
        path: "/addCraftItem",
        element: <AddCraft title="addCraftItem"></AddCraft>,
      },
      {
        path: "/allArtAndCrafts",
        element: (
          <PrivateRoute>
            <AllArtAndCraft title="allArtAndCrafts"></AllArtAndCraft>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
