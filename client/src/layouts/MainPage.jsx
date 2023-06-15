import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";

const MainPage = () => {
  return (
    <nav className=" flex flex-col gap-4 w-full h-fit">
      <Header />
      <p>barra ladito</p>
      <Outlet />
    </nav>
  )
}

export default MainPage;