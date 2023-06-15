import { createBrowserRouter } from "react-router-dom";
import Auth from "../pages/Auth/Auth";
import Home from "../pages/Home/Home";
import Protected from "../components/Protected";
import MainPage from "../layouts/MainPage";

export const router = createBrowserRouter([
  {
    path: '/auth',
    element: <Auth />,
  },
  {
    path: '/',
    element: <Protected> <MainPage /> </Protected>,
    children: [
      {
        index: true,
        element: <Home />,
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