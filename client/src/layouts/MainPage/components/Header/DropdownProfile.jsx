import { Avatar, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, User } from "@nextui-org/react"
import { Link, useNavigate } from "react-router-dom"
import { useUser } from "../../../../hooks/useUser"
import { useTheme } from "../../../../hooks/useTheme"
import { LogOut, Moon, Settings, Sun } from "../../../../icons"
import AvatarUser from "../../../../assets/avatar.jpg"
import { useApolloClient } from "@apollo/client"

const DropdownProfile = () => {

  const navigate = useNavigate()
  const { profile } = useUser()
  const client = useApolloClient()
  const { isDarkMode, onChangeTheme } = useTheme()

  const handleSignOut = async () => {
    localStorage.removeItem("Session")
    client.resetStore()
    navigate('/auth')
  }

  return (
    <Dropdown placement="bottom-end">
      <DropdownTrigger>
        <Avatar
          isBordered
          as="button"
          className="transition-transform"
          color="primary"
          name={profile.username}
          src={profile.photoURL || AvatarUser}
        />
      </DropdownTrigger>
      <DropdownMenu aria-label="Profile Actions" variant="flat" color="primary">
        <DropdownItem key="profile" className="h-16" textValue="user description">
          <Link to={`/${profile.slug}`} className="flex justify-start items-center">
            <User
              name={(
                <p className="text-lg font-semibold">{profile.username}</p>
              )}
              description={(
                <p className="text-sm text-darkSilver">{`@${profile.slug}`}</p>
              )}
              avatarProps={{
                src: profile.photoURL,
              }}

            />
          </Link>
        </DropdownItem>

        <DropdownItem
          key="settings"
          startContent={<Settings />}
          title={<p className="text-base">My Settings</p>}
          textValue="desc"
        />

        <DropdownItem
          key="theme"
          onClick={onChangeTheme}
          startContent={isDarkMode ? <Sun /> : <Moon />}
          textValue="settings"
          title={
            <p className="text-base">
              {isDarkMode ? 'Light ' : 'Dark'} Theme
            </p>
          }
        />

        <DropdownItem
          key="logout"
          startContent={<LogOut />}
          textValue="log out"
          title={<p className="text-base">Log Out</p>}
          color="danger"
          onClick={handleSignOut}
        />

      </DropdownMenu>
    </Dropdown>
  )
}

export default DropdownProfile