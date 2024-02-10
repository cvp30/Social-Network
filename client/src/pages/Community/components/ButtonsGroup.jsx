import { NavLink } from "react-router-dom"


const ButtonsGroup = () => {

  const defaultStyle = 'w-1/3 py-2 text-center rounded-xl border border-darkSilver hover:border-primary animation'

  return (
    <div className="flex justify-evenly w-full bg-default md:rounded-xl py-3 md:p-3 gap-2">

      <NavLink to='' end className={({ isActive }) => {
        return `${defaultStyle} ${isActive ? 'bg-primary text-lightWhite' : ''}`
      }}>
        Followers
      </NavLink>
      <NavLink to='following' className={({ isActive }) => {
        return `${defaultStyle} ${isActive ? 'bg-primary text-lightWhite' : ''}`
      }}>
        Following
      </NavLink>
      <NavLink to='other' className={({ isActive }) => {
        return `${defaultStyle} ${isActive ? 'bg-primary text-lightWhite' : ''}`
      }}>
        Other People
      </NavLink>
    </div>
  )
}

export default ButtonsGroup