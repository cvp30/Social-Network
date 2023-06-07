import { Link } from "react-router-dom";
import InputPassword from "../components/InputPassword";
import { EmailIcon, GoogleLogo } from "../icons";
import InputButton from "../components/InputButton";
import InputEmail from "../components/InputEmail";
import { useState } from "react";
import toast, { Toaster } from 'react-hot-toast';

const SignIn = () => {

  const [input, setInput] = useState({
    email: "",
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
    toast.error("error in email input", {
      duration: 1000,
    })
    // console.log(email.current.value)

  }
  console.log(input)
  return (
    <div className="flex flex-col gap-2 w-[30rem] h-fit mx-auto font-bold">
      <h2 className=" dark:text-white text-center">
        Sign In
      </h2>

      <p className=" dark:text-white text-center">
        Welcome back, you&apos;ve been missed!
      </p>

      <div
        className="flex flex-col gap-3 items-center w-full h-fit p-5 shadow-xl shadow-silver rounded-lg dark:bg-secondary dark:shadow-secondary"
      >
        <button className="flex justify-center items-center gap-2  bg-silver dark:bg-[#4e5d78] dark:text-white w-fit px-4 py-3 rounded-lg">
          <GoogleLogo />
          <p>Log in with Google</p>
        </button>

        <p>OR</p>

        <form
          onSubmit={handleSubmit}
          className="w-full h-fit flex flex-col gap-4 font-normal"
        >
          <InputEmail
            value={input.email}
            onChange={handleChange}
          >
            <EmailIcon className="w-6 h-6" />
          </InputEmail>

          <InputPassword
            value={input.password}
            onChange={handleChange}
          />

          <div className="w-full h-fit flex justify-between items-center">
            <div className="flex gap-2 items-center">
              <input type="checkbox" id="check" className="" />
              <label htmlFor="check">Remember me</label>
            </div>

            <Link>Forgot Password?</Link>
          </div>

          <InputButton>
            Sign In
          </InputButton>
          <Toaster />
        </form>

        <div className="flex gap-2 my-4 h-fit">
          <p>You havent any account?</p>
          <Link
            to="signup"
            className="text-blue"
          >
            Sign up
          </Link>
        </div>


      </div>

    </div>
  )
}

export default SignIn;