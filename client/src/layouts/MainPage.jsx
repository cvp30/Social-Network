import Header from "../components/Header/Header";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
// import Contacts from "../components/Contacts/Contacts";

const MainPage = () => {

  return (
    <nav className=" flex flex-col gap-4 w-full h-full">

      <Header />

      <div className="w-full flex">
        <nav className="hidden lg:block w-64 h-fit sticky top-24">
          <Navbar />
        </nav>

        <div className="w-full h-fit">
          <Outlet />
        </div>
      </div>
    </nav>
  )
}

export default MainPage;