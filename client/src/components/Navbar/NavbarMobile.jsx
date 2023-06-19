import { Menu } from "../../icons";
import MenuDesignMobile from "../MenuDesignMobile";
import Navbar from "./Navbar";


const NavbarMobile = () => {
  return (
    <MenuDesignMobile
      icon={<Menu />}
      title="Menu"
    >
      <Navbar />
    </MenuDesignMobile>
  )
}

export default NavbarMobile;