import { NavLink } from "react-router-dom";
import { items } from "../../../../utils";

const ModulesSidebar = () => {

  return (
    <div className="w-full h-fit flex flex-col gap-2 pr-4">
      {
        items.map(item => {

          return (
            <NavLink
              to={`/${item.title === 'home' ? '' : item.title}`}

              key={item.title}
              className={
                ({ isActive }) => {

                  const baseClassName = 'p-3 text-lg flex items-center gap-2 capitalize rounded-lg  animation'

                  return isActive ?
                    `bg-ModuleItem font-bold ${baseClassName}`
                    :
                    `hover:bg-ModuleItem ${baseClassName}`
                }
              }
            >
              <item.icon />
              <p>{item.title}</p>

            </NavLink>
          )
        })
      }
    </div>
  )
}

export default ModulesSidebar;