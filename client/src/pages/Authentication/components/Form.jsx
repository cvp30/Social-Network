import InputEmail from "./InputEmail";
import InputText from "./InputText";
import InputPassword from "./InputPassword";
import { Link } from "react-router-dom";
import InputButton from "../../../components/InputButton";
import { FormUser } from "../../../contexts/FormContext";
import { Toaster } from "react-hot-toast";


const Form = () => {
  const {
    handleSubmit,
    isSignIn
  } = FormUser()

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full h-fit flex flex-col gap-4 font-normal"
    >
      <Toaster />

      <InputEmail />

      {!isSignIn && <InputText />}

      <InputPassword />

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
  )
}

export default Form;