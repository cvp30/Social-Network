import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import ModulesSidebar from "./components/ModulesSidebar";

const MainPage = () => {

  return (
    <nav className=" flex flex-col gap-2 w-full h-full">

      <Header />

      <div className="w-full flex">
        <nav className="hidden lg:block w-60 h-fit sticky top-[4.5rem]">
          <ModulesSidebar />
        </nav>

        <div className="grow h-fit">
          <Outlet />
        </div>
      </div>
    </nav>
  )
}

export default MainPage;