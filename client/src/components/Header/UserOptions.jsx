import { Link, useNavigate } from "react-router-dom";
import PropTypes from 'prop-types';
import { LogOut, Moon, Sun } from "../../icons";
import OptionButton from "./OptionButton";
import { useEffect, useState } from "react";
import { useProfile } from "../../hooks/useProfile";

const UserOptions = ({ username, isOpen, setIsOpen }) => {

  const navigate = useNavigate()
  const { client } = useProfile()
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem('dark') === "true"
  );

  const setLocalStorage = () => {
    try {
      setIsDarkMode(!isDarkMode)
      window.localStorage.setItem('dark', !isDarkMode)
    } catch (error) {
      console.log(error)
    }
  }

  const handleMode = () => {
    setLocalStorage()
    setIsOpen(false);
  }

  const handleSignOut = async () => {
    localStorage.removeItem("Session")
    client.resetStore()
    navigate('/auth')
  }

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark')
    }
    else document.documentElement.classList.remove('dark')

  }, [isDarkMode])

  return (
    <div className={`${isOpen ? 'absolute p-2 top-full right-0 mt-2 w-52 h-fit rounded-xl bg-white dark:bg-secondary dark:text-white shadow-md shadow-silver dark:shadow-secondary' : 'hidden'}`}
    >

      <Link to="">
        <p>Signed in as</p>
        <p className='w-full text-xl font-bold truncate'>{username}</p>
      </Link>

      <hr className='text-darkButton my-3' />

      <div className='flex flex-col font-bold'>
        <OptionButton onClick={handleMode} >
          {
            isDarkMode ? (
              <>
                <Sun />
                <p>Light Mode</p>
              </>
            ) : (
              <>
                <Moon />
                <p>Dark Mode</p>
              </>
            )
          }

        </OptionButton>
        <OptionButton onClick={handleSignOut} >
          <LogOut />
          <p>Sign out</p>
        </OptionButton>
      </div>
    </div>
  )
}

UserOptions.propTypes = {
  username: PropTypes.string,
  setIsOpen: PropTypes.any,
  isOpen: PropTypes.bool,
}

export default UserOptions;