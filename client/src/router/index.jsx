import { createBrowserRouter } from "react-router-dom";
import Protected from "../components/Protected";
import MainPage from "../layouts/MainPage";
import ContactsSidebar from "../layouts/ContactsSidebar"
import Authentication from "../pages/Authentication";
import Home from "../pages/Home";
import Profile from "../pages/Profile";
import Messages from "../pages/Messages/Messages";
import Community from "../pages/Community";
import Followers from "../pages/Community/pages/Followers";
import Following from "../pages/Community/pages/Following";
import Other from "../pages/Community/pages/Other";

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
        element: <ContactsSidebar />,
        children: [
          {
            index: true,
            element: <Home />
          },
          {
            path: 'community',
            element: <Community />,
            children: [
              {
                index: true,
                element: <Followers />
              },
              {
                path: 'following',
                element: <Following />
              },
              {
                path: 'other',
                element: <Other />
              }
            ]
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