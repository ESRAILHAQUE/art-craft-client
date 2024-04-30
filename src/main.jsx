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
import ArtAndCraftListPage from './Components/ArtAndCraftListPage/ArtAndCraftListPage';
import ProductDetails from './Components/ProductDetails/ProductDetails';
import UpdatePage from './Components/UpdatePage/UpdatePage';
import About from './Components/About/About';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("https://art-craft-server-n1uwpm4x5-md-esrail-haques-projects.vercel.app/craftItems"),
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
        path: "/updatePage/:id",
        element: (
          <PrivateRoute>
            <UpdatePage></UpdatePage>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://art-craft-server-n1uwpm4x5-md-esrail-haques-projects.vercel.app/updatePage/${params.id}`),
      },

      {
        path: "/productDetails/:id",
        element: (
          <PrivateRoute>
            <ProductDetails></ProductDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://art-craft-server-n1uwpm4x5-md-esrail-haques-projects.vercel.app/productDetails/${params.id}`),
      },
      {
        path: "/artAndCraftListPage",
        element: (
          <PrivateRoute>
            <ArtAndCraftListPage></ArtAndCraftListPage>
          </PrivateRoute>
        ),
        loader: () => fetch("https://art-craft-server-n1uwpm4x5-md-esrail-haques-projects.vercel.app/craftItems"),
      },
      {
        path: "/contactUs",
        element: <ContactUs title="ContactUs"></ContactUs>,
      },
      {
        path: "/aboutus",
        element: <About></About>,
      },
      {
        path: "/addCraftItem",
        element: (
          <PrivateRoute>
            <AddCraft title="addCraftItem"></AddCraft>
          </PrivateRoute>
        ),
      },
      {
        path: "/allArtAndCrafts",
        element: (
          
            <AllArtAndCraft title="allArtAndCrafts"></AllArtAndCraft>
          
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
