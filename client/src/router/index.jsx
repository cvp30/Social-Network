import { createBrowserRouter } from "react-router-dom";
import LandingPage from '../layouts/LandingPage'
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />,
    children: [
      {
        index: true,
        element: <SignIn />,
      },
      {
        path: 'signup',
        element: <SignUp />,
      }
    ]
  }
]);