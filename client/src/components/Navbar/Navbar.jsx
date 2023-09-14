import { NavLink } from "react-router-dom";
import { NavOptions, IconOptions } from "../../constants";

const Navbar = () => {

  return (
    <div className="w-full h-fit flex flex-col gap-2 pr-4">
      {
        NavOptions.map((option, key) => {
          return (
            <NavLink
              to={`/${option === 'home' ? '' : option}`}

              key={key}
              className={
                ({ isActive }) => {

                  const baseClassName = 'p-3 flex items-center gap-2 capitalize rounded-lg dark:text-white font-bold animation'

                  return isActive ?
                    `bg-darkButton text-white ${baseClassName}`
                    :
                    `hover:bg-darkButton hover:text-white ${baseClassName}`
                }
              }
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