import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import ModulesSidebar from "./components/ModulesSidebar";

const MainPage = () => {

  return (
    <nav className=" flex flex-col gap-4 w-full h-full">

      <Header />

      <div className="w-full flex">
        <nav className="hidden lg:block w-80 pl-5 h-fit sticky top-24">
          <ModulesSidebar />
        </nav>

        <div className="w-full h-fit">
          <Outlet />
        </div>
      </div>
    </nav>
  )
}

export default MainPage;

// import Header from "../components/Header/Header";
// import { Outlet } from "react-router-dom";
// import Navbar from "../components/Navbar/Navbar";

// const MainPage = () => {

//   return (
//     <nav className=" flex flex-col gap-4 w-full h-full">

//       <Header />

//       <div className="w-full flex">
//         <nav className="hidden lg:block w-96 pl-5 h-fit sticky top-24">
//           <Navbar />
//         </nav>

//         <div className="w-full h-fit">
//           <Outlet />
//         </div>
//       </div>
//     </nav>
//   )
// }

// export default MainPage;