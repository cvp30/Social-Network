import { Form, Link, useSubmit } from "react-router-dom";
import InputEmail from "../components/InputEmail";
import InputPassword from "../components/InputPassword";
import { EmailIcon, GoogleLogo, UsernameAvatar } from "../icons";
import InputButton from "../components/InputButton";
import InputText from "../components/InputText";


const SignUp = () => {

  let submit = useSubmit();

  const handleChange = (event) => {
    submit(event.currentTarget)
    console.log(event.currentTarget)
    // console.log(event.currentTarget.email.value)
  }

  return (
    <div className="flex flex-col gap-2 w-[30rem] h-fit mx-auto font-bold">
      <h2 className=" dark:text-white text-center">
        Getting Started
      </h2>

      <p className=" dark:text-white text-center">
        Create an account to continue and connect with the people.
      </p>

      <div
        className="flex flex-col gap-3 items-center w-full h-fit p-5 shadow-xl shadow-silver rounded-lg dark:bg-secondary dark:shadow-secondary"
      >
        <button className="flex justify-center items-center gap-2  bg-silver dark:bg-[#4e5d78] dark:text-white w-fit px-4 py-3 rounded-lg">
          <GoogleLogo />
          <p>Log in with Google</p>
        </button>

        <p>OR</p>

        <Form onChange={handleChange} className="w-full h-fit flex flex-col gap-4 font-normal">
          <InputEmail
            placeholder="example@mail.com"
          >
            <EmailIcon className="w-6 h-6" />
          </InputEmail>

          <InputText
            placeholder="username"
          >
            <UsernameAvatar className="w-6 h-6" />
          </InputText>

          <InputPassword />

          <InputButton>
            Sing Up
          </InputButton>

        </Form>

        <div className="flex gap-2 my-4 h-fit">
          <p>Already have an account?</p>
          <Link
            to="/"
            className="text-blue"
          >
            Sign In
          </Link>
        </div>


      </div>

    </div>
  )
}

export default SignUp;