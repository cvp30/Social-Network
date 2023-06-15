import IconApp from "../../assets/IconApp.png"
import { Link } from "react-router-dom";
import { UserAuth } from "../../contexts/AuthContext";
import SearchInput from "../SearchInput";
import User from "./User";
import SearchInputMobile from "./SearchInputMobile";


const Header = () => {
  const { user } = UserAuth();

  return (
    <header className="flex justify-between items-center  w-full h-12 mx-auto max-w-screen-2xl">
      <Link to="/" className="w-36 lg:w-64 h-full flex items-center gap-2 ">
        <img className="w-10 h-8 hidden lg:block" src={IconApp} alt="" />
        <h4 className=" text-blue">MeetSocial</h4>
      </Link>

      {
        user?.email ?
          (
            <div className="h-full grow flex items-center lg:justify-between justify-end gap-1">
              <div className="hidden lg:block w-fit lg:w-1/3 h-full">
                <SearchInput />
              </div>

              <div className="lg:hidden w-fit h-full flex items-center">
                <SearchInputMobile />
              </div>

              <div className="h-fit grow lg:w-2/3 flex justify-end items-center">
                <User
                  username={user.displayName}
                  img={user.photoURL}
                />
              </div>

            </div>
          )
          :
          ''
      }
    </header>
  )
}

export default Header;