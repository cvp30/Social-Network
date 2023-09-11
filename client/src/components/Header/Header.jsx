import SearchInput from "../SearchInput";
import User from "./User";
import SearchInputMobile from "./SearchInputMobile";
import Logo from "../Logo";
import ContactsMobile from "../Contacts/ContactsMobile";
import NavbarMobile from "../Navbar/NavbarMobile";


const Header = () => {

  return (
    <header className="bg-lightWhite z-10 dark:bg-principal sticky top-0 px-4 flex justify-between items-center  w-full h-20 mx-auto max-w-screen-2xl">

      <Logo />

      <div className="h-full grow flex items-center lg:justify-between justify-end gap-1">
        <div className="hidden  lg:flex items-center w-fit lg:w-1/3 h-full">
          <SearchInput />
        </div>

        <div className="lg:hidden w-fit h-full flex items-center">
          <SearchInputMobile />
        </div>

        <div className="h-fit grow lg:w-2/3 flex justify-end items-center gap-2">
          <div className="md:hidden dark:text-lightWhite">
            <ContactsMobile />
          </div>

          <div className="lg:hidden dark:text-lightWhite">
            <NavbarMobile />
          </div>

          <User />
        </div>

      </div>
    </header>
  )
}

export default Header;