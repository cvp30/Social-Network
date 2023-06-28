import { UserAuth } from "../../contexts/AuthenticationContext";
import { Navigate } from "react-router-dom";
import Logo from "../../components/Logo";
import SocialButtons from "./components/SocialButtons";
import { FormUser } from "../../contexts/FormContext";
import Form from "./components/Form";

// import { useQuery, useQueryClient } from '@tanstack/react-query';

export const Authentication = () => {

  const { user } = UserAuth()
  const { isSignIn, setIsSignIn } = FormUser()
  if (user) return <Navigate to="/" replace={true} />

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

          <SocialButtons />

          <div className="flex gap-2 items-center w-full after:w-1/2 after:border dark:after:border-darkBorder after:border-silver before:w-1/2 before:border dark:before:border-darkBorder before:border-silver">
            <p>OR</p>
          </div>

          {/* <Form /> */}

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