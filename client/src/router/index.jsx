import { createBrowserRouter } from "react-router-dom";
import LandingPage from '../layouts/LandingPage'
import Auth from "../pages/Auth/Auth";
import Home from "../pages/Home/Home";
import Protected from "../components/Protected";
import Navigation from "../layouts/Navigation";

import MainPage from "../layouts/MainPage";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />,
    children: [
      {
        path: 'home',
        element: <Protected> <Navigation /> </Protected>,
      }
    ]
  }
  // {
  //   path: '/',
  //   element: <LandingPage />,
  //   children: [
  //     {
  //       index: true,
  //       element: <Auth />,
  //     },
  //     {
  //       path: 'home',
  //       element: <Protected> <Navigation /> </Protected>,
  //       children: [
  //         {
  //           index: true,
  //           element: <Home />
  //         }
  //       ]
  //     },
  //   ]
  // },
]);