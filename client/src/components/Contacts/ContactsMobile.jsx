import { Contact } from "../../icons";
import Contacts from "./Contacts";
import MenuDesignMobile from "../MenuDesignMobile";


const ContactsMobile = () => {
  return (
    <MenuDesignMobile
      icon={<Contact />}
      title="Friends"
    >
      <Contacts />

    </MenuDesignMobile>
  )
}

export default ContactsMobile;