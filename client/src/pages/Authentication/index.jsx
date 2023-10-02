import { useState } from "react";
import Logo from "../../components/Logo";
import Form from "./components/Form"
import { useProfile } from "../../hooks/useProfile";
import { Navigate } from "react-router-dom";
import { Navbar } from "@nextui-org/react";
import { Moon, Sun } from "../../icons";
import { useTheme } from "../../hooks/useTheme";

export const Authentication = () => {


  const [isSignIn, setIsSignIn] = useState(true);

  const { profile } = useProfile()
  const { isDarkMode, onChangeTheme } = useTheme()
  const sessionToken = localStorage.getItem('Session')


  if (profile && sessionToken) return <Navigate to='/' replace />



  return (
    <>
      <Navbar
        maxWidth="2xl"
        height="5rem"
      >
        <Logo />
        <button onClick={onChangeTheme}>
          {isDarkMode ? <Moon /> : <Sun />}
        </button>
      </Navbar>


      <section className="w-full sm:w-11/12 md:w-120 h-fit flex flex-col items-center gap-4 mx-auto font-bold mt-6 py-5 sm:p-5 sm:shadow-[0px_0px_26px_-3px_silver] rounded-lg bg-default shadow-secondary">
        <div className="flex flex-col gap-2">
          <h1 className=" dark:text-white text-center">
            {
              isSignIn ? 'Sign In' : 'Getting Started'
            }
          </h1>
          <p className=" dark:text-white text-center">
            {
              isSignIn ? `Welcome back, you've been missed!` : 'Create an account to continue and connect with the people.'
            }
          </p>
        </div>

        <Form isSignIn={isSignIn} />

        <div className="w-full flex justify-center gap-2 my-4 h-fit">
          <p>
            {
              isSignIn ?
                'You havent any account?'
                :
                'Already have an account?'
            }
          </p>
          <button
            onClick={() => setIsSignIn(!isSignIn)}
            className="text-primary"
          >
            {
              isSignIn ?
                'Sign up' :
                'Sign in'
            }
          </button>
        </div>
      </section>
    </>
  )
}

export default Authentication;