import { NavLink } from "react-router-dom";
import { Community, Home, Messages, Notification, Profile, Settings } from "../../icons";

const Navbar = () => {

  const NavOptions = ["home", "community", "messages", "notification", "profile", "settings"]

  const IconOptions = [<Home key={0} />, <Community key={1} />, <Messages key={2} />, <Notification key={3} />, <Profile key={4} />, <Settings key={5} />]

  return (
    <div className="w-full h-fit flex flex-col gap-2">
      {
        NavOptions.map((option, key) => {
          return (
            <NavLink
              to={`/${option}`}
              key={key}
              className="p-3 flex items-center gap-2 capitalize rounded-lg hover:bg-darkButton hover:text-white dark:text-white font-bold"
            >
              {IconOptions[key]}
              <p>{option}</p>

            </NavLink>
          )
        })
      }
    </div>
  )
}

export default Navbar;