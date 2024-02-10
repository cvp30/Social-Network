import { NavLink } from "react-router-dom";
import { items } from "../../../../utils";
import { useUser } from "../../../../hooks/useUser";

const ModulesSidebar = () => {
  const { profile } = useUser()

  return (
    <div className="w-full h-fit flex flex-col gap-2 px-4 sticky">
      {
        items.map(item => {
          let title = item.title
          if (item.title === 'home') title = ''
          if (item.title === 'profile') title = profile.slug
          return (
            <NavLink
              to={`/${title}`}

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