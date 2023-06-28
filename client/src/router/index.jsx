import { createBrowserRouter } from "react-router-dom";
import Authentication from "../pages/Authentication/Authentication";
import { FormContextProvider } from "../contexts/FormContext";
import Home from "../pages/Home/Home";
import MainPage from "../layouts/MainPage";
import Protected from "../components/Protected";

export const router = createBrowserRouter([
  {
    path: '/auth',
    element: <FormContextProvider> <Authentication /> </FormContextProvider>,
    // element: <Authentication />,
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
]);