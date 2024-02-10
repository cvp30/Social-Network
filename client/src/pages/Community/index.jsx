import { Outlet } from "react-router-dom"
import ButtonsGroup from "./components/ButtonsGroup"

const Community = () => {

  return (
    <div
      className="w-full h-fit flex flex-col gap-3 items-center"
    >
      <ButtonsGroup />

      <div className="w-full h-fit flex justify-start flex-wrap gap-2">
        <Outlet />
      </div>
    </div>
  )
}

export default Community