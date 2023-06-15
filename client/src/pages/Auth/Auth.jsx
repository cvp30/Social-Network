import { Link, useNavigate, Navigate } from "react-router-dom";
import InputPassword from "./components/InputPassword";
import InputEmail from "./components/InputEmail";
import { Toaster, toast } from "react-hot-toast";
import InputButton from "../../components/InputButton";
import { useEffect, useState } from "react";
import { validateSignIn, validateSignUp } from "../../utils";
import InputText from "./components/InputText";
import SocialButtons from "./components/SocialButtons";
import { UserAuth } from "../../contexts/AuthContext";

const Auth = () => {

  const navigate = useNavigate();

  const { user } = UserAuth();
  const [isSignIn, setIsSignIn] = useState(true);

  const [input, setInput] = useState({
    email: "",
    username: "",
    password: "",
  })

  const handleChange = (event) => {
    setInput({
      ...input,
      [event.target.name]: event.target.value,
    });
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    const errors = isSignIn ? validateSignIn(input) : validateSignUp(input);

    if (errors.length) {
      errors.forEach(error => {
        toast.error(error, {
          duration: 3000,
          className: 'text-[red] text-sm text-center'
        })
      })
    }

  }

  console.log(user)

  useEffect(() => {
    if (Object.keys(user).length) navigate('/')
  }, [user, navigate])


  if (Object.keys(user).length) {
    <Navigate to="/" replace={true} />;
  }


  return (
    <section className="flex flex-col gap-2 w-72 sm:w-96 md:w-120 h-fit mx-auto font-bold">
      <Toaster />
      {/* ------ MESSAGE ------*/}
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

      {/* ---------BOX--------- */}
      <div className="w-full h-fit flex flex-col gap-4 items-center py-5 px-0 md:p-5 shadow-[0px_0px_26px_-3px_silver] rounded-lg dark:bg-secondary dark:shadow-secondary">
        {/* --------- LOGIN BUTTONS ------------- */}
        <SocialButtons />

        <div className="flex gap-2 items-center w-full after:w-1/2 after:border dark:after:border-darkBorder after:border-silver before:w-1/2 before:border dark:before:border-darkBorder before:border-silver">
          <p>OR</p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="w-full h-fit flex flex-col gap-4 font-normal"
        >
          <InputEmail
            value={input.email}
            onChange={handleChange}
          />

          {
            !isSignIn &&
            <InputText />
          }

          <InputPassword
            value={input.password}
            onChange={handleChange}
          />

          {
            isSignIn &&
            <div className="w-full h-fit flex flex-col sm:flex-row justify-between items-center">
              <div className="flex gap-2 items-center">
                <input type="checkbox" id="check" className="" />
                <label htmlFor="check">Remember me</label>
              </div>

              <Link>Forgot Password?</Link>
            </div>
          }

          <InputButton>
            {
              isSignIn ?
                'Sign In'
                :
                'Sign Up'
            }
          </InputButton>
        </form>

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
  )
}

export default Auth;