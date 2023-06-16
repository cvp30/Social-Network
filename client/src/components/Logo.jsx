import IconApp from "../assets/IconApp.png"
import { Link } from "react-router-dom";


const Logo = () => {
  return (
    <Link to="/" className="w-36 lg:w-64 h-full flex items-center gap-2 ">
      <img className="w-10 h-8 hidden lg:block" src={IconApp} alt="Logo" />
      <h4 className=" text-blue">MeetSocial</h4>
    </Link>
  )
}

export default Logo;