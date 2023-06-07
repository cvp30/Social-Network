import { Outlet } from "react-router-dom";
import IconApp from "../assets/IconApp.png"
import DarkModeButton from "../components/DarkModeButton";

const LandingPage = () => {
  return (
    <section className="flex flex-col gap-4">
      <header className="flex justify-between items-center gap-0 w-full h-fit mx-auto max-w-screen-2xl">
        <div className="flex">
          <img className="w-10 h-8" src={IconApp} alt="" />
          <h4 className="text-blue">MeetSocial</h4>
        </div>

        <DarkModeButton />
      </header>

      <Outlet />
    </section>
  )
}

export default LandingPage;