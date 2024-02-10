import { Outlet } from "react-router-dom"
import Contacts from "../../components/Contacts"


const FriendListSidebar = () => {
  return (
    <div className="w-full flex">
      <main className="grow bg-secondary md:rounded-xl py-4 md:p-4">
        <Outlet />
      </main>

      <div className="w-72 mid:w-80 hidden min-[850px]:block relative">
        <Contacts />
      </div>
    </div>
  )
}

export default FriendListSidebar