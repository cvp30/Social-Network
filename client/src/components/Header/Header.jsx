import SearchInput from "../SearchInput";
import User from "./User";
import SearchInputMobile from "./SearchInputMobile";
import { UserAuth } from "../../contexts/AuthenticationContext";
import Logo from "../Logo";


const Header = () => {
  const { user } = UserAuth();

  return (
    <header className="flex justify-between items-center  w-full h-12 mx-auto max-w-screen-2xl">
      <Logo />

      <div className="h-full grow flex items-center lg:justify-between justify-end gap-1">
        <div className="hidden lg:block w-fit lg:w-1/3 h-full">
          <SearchInput />
        </div>

        <div className="lg:hidden w-fit h-full flex items-center">
          <SearchInputMobile />
        </div>

        <div className="h-fit grow lg:w-2/3 flex justify-end items-center">
          <User
            username={user?.displayName}
            img={user?.photoURL}
          />
        </div>

      </div>
    </header>
  )
}

export default Header;