import { useState } from "react";
import Logo from "../../components/Logo";
import Form from "./components/Form"
import { useProfile } from "../../hooks/useProfile";
import { Navigate } from "react-router-dom";

export const Authentication = () => {


  const [isSignIn, setIsSignIn] = useState(true);

  const { profile } = useProfile()
  const sessionToken = localStorage.getItem('Session')


  if (profile && sessionToken) return <Navigate to='/' replace />

  return (
    <>
      <header className="w-full h-12 flex items-center justify-start">
        <Logo />
      </header>

      <section className="flex flex-col gap-2 w-72 sm:w-96 md:w-120 h-fit mx-auto font-bold">

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


        <div className="w-full h-fit flex flex-col gap-4 items-center py-5 px-0 md:p-5 shadow-[0px_0px_26px_-3px_silver] rounded-lg dark:bg-secondary dark:shadow-secondary">

          {/* <SocialButtons /> */}

          {/* <div className="flex gap-2 items-center w-full after:w-1/2 after:border dark:after:border-darkBorder after:border-silver before:w-1/2 before:border dark:before:border-darkBorder before:border-silver">
            <p>OR</p>
          </div> */}

          <Form isSignIn={isSignIn} />

          <div className="flex gap-2 my-4 h-fit">
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
              className="text-blue"
            >
              {
                isSignIn ?
                  'Sign up' :
                  'Sign in'
              }
            </button>
          </div>
        </div>
      </section>
    </>
  )
}

export default Authentication;