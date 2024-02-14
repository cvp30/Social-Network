import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import ModulesSidebar from "./components/ModulesSidebar";
import FriendsList from "../../components/FriendsList";
import TabList from "../../components/FriendsList/TabList";

const MainPage = () => {

  return (
    <nav className=" flex flex-col gap-2 w-full h-full max-w-screen-2xl">

      <Header />

      <div className="w-full flex">
        <nav className="hidden lg:block w-60 h-fit sticky top-[4.5rem]">
          <ModulesSidebar />
        </nav>

        <div className="grow h-fit bg-secondary p-4 rounded-xl">
          <Outlet />
        </div>
      </div>

      <FriendsList />

      <TabList />

    </nav>
  )
}

export default MainPage;