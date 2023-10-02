import Logo from "../../../../components/Logo";
import { Navbar, NavbarBrand, NavbarContent, Input, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem } from "@nextui-org/react";
import { Menu, Search } from "../../../../icons";
import DropdownProfile from "./DropdownProfile";

const Header = () => {

  return (
    <>
      <header className="w-full h-fit top-0 left-0 sticky z-50">
        <Navbar
          maxWidth="2xl"
          isBlurred
          className="w-full flex justify-between mx-0"
          height='5rem'
        >
          <NavbarBrand>
            <Logo />
          </NavbarBrand>

          <NavbarContent className=" hidden sm:flex">
            <NavbarItem className="w-full">
              <Input
                placeholder="Search..."
                size="lg"
                variant="bordered"
                startContent={<Search />}
                type="search"
                radius="md"
              />
            </NavbarItem>
          </NavbarContent>

          <NavbarContent as="div" justify="end">
            <NavbarMenuToggle icon={<Menu />} className="lg:hidden" />
            <DropdownProfile />
          </NavbarContent>

          <NavbarMenu>
            <NavbarMenuItem>
              <p>ITEM 1</p>
            </NavbarMenuItem>
          </NavbarMenu>

        </Navbar>
      </header>

    </>
  )
}

export default Header;