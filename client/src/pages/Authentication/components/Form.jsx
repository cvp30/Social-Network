import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import InputEmail from "./InputEmail";
import InputUsername from "./InputUsername";
import InputPassword from "./InputPassword";
import InputButton from "../../../components/InputButton";
import { Toaster } from "react-hot-toast";
import { useFormik } from "formik";
import { SignInUserSchema } from "../schemas/SignInUserSchema"
import { SignUpUserSchema } from "../schemas/SignUpUserSchema";
import { REGISTER_USER } from "../graphql/RegisterUserMutation";
import { LOGIN_USER } from "../graphql/LoginUserMutation"
import { useMutation } from '@apollo/client';
import { useEffect } from 'react';
import { useNavigate } from "react-router-dom"

const Form = ({ isSignIn }) => {

  const navigate = useNavigate()

  const [AuthenticateUser] = useMutation(
    isSignIn ? LOGIN_USER : REGISTER_USER,
    {
      onError: () => {
        alert("ERROR")
      }
    }
  )

  const initialValues = {
    email: '',
    username: '',
    password: '',
  }

  const userFormik = useFormik({
    initialValues,
    validationSchema: isSignIn ? SignInUserSchema : SignUpUserSchema,
    onSubmit: async (values) => {
      const { data } = await AuthenticateUser({ variables: values })

      isSignIn ?
        localStorage.setItem("Session", data["LoginUser"].token)
        :
        localStorage.setItem("Session", data["RegisterUser"].token)

      navigate('/')
    }
  })

  useEffect(() => {
    userFormik.setValues(initialValues)
  }, [isSignIn])


  return (
    <form
      onSubmit={userFormik.handleSubmit}
      className="w-full h-fit flex flex-col gap-2 font-normal"
    >
      <Toaster />

      <InputEmail userFormik={userFormik} />
      {userFormik.touched.email && userFormik.errors.email && (
        <p className="text-[red] text-xs">{userFormik.errors.email}</p>
      )}

      {!isSignIn && <InputUsername userFormik={userFormik} />}
      {!isSignIn && userFormik.touched.username && userFormik.errors.username && (
        <p className="text-[red] text-xs">{userFormik.errors.username}</p>
      )}
      <InputPassword userFormik={userFormik} />
      {userFormik.touched.password && userFormik.errors.password && (
        <p className="text-[red] text-xs">{userFormik.errors.password}</p>
      )}

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


Form.propTypes = {
  isSignIn: PropTypes.bool,
}


export default Form;

