import { createBrowserRouter } from "react-router-dom";
import Protected from "../components/Protected";
import MainPage from "../layouts/MainPage";
import FriendListSidebar from "../layouts/FriendListSidebar";
import Authentication from "../pages/Authentication";
import Home from "../pages/Home";
import Profile from "../pages/Profile";
import Messages from "../pages/Messages/Messages";

export const router = createBrowserRouter([
  {
    path: '/auth',
    element: <Authentication />,
  },
  {
    path: '/',
    element: <Protected> <MainPage /> </Protected>,
    children: [
      {
        path: '/',
        element: <FriendListSidebar />,
        children: [
          {
            index: true,
            element: <Home />
          }
        ]
      },
      {
        path: ':userSlug',
        element: <Profile />,
      },
      {
        path: 'messages',
        element: <Messages />,
      }
    ]
  }
]);