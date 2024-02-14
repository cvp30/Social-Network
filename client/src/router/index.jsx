import { createBrowserRouter } from "react-router-dom";
import Protected from "../components/Protected";
import MainPage from "../layouts/MainPage";
// import ContactsSidebar from "../layouts/ContactsSidebar"
import Authentication from "../pages/Authentication";
import Home from "../pages/Home";
import Profile from "../pages/Profile";

import Community from "../pages/Community";
import Followers from "../pages/Community/pages/Followers";
import Following from "../pages/Community/pages/Following";
import Other from "../pages/Community/pages/Other";
import Settings from "../pages/Settings";
import Notification from "../pages/Notification";
import { ChatTabListContextProvider } from "../contexts/ChatTabContext";
import Messages from "../pages/Messages";

export const router = createBrowserRouter([
  {
    path: '/auth',
    element: <Authentication />,
  },
  {
    path: '/',
    element: <Protected> <ChatTabListContextProvider> <MainPage /> </ChatTabListContextProvider> </Protected>,
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
      },
      {
        path: ':userSlug',
        element: <Profile />,
      },
      {
        path: 'messages',
        element: <Messages />,
      },
      {
        path: 'settings',
        element: <Settings />,
      },
      {
        path: 'notification',
        element: <Notification />
      }
    ]
  }
]);