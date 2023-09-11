import { Outlet } from "react-router-dom"
import Contacts from "../components/Contacts/Contacts"


const FriendListSidebar = () => {
  return (
    <div className="w-full flex">
      <main className="grow">
        <Outlet />
      </main>

      <div className="w-80 hidden md:block relative">
        <Contacts />
      </div>
    </div>
  )
}

export default FriendListSidebar