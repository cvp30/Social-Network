import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import { SignInUserSchema } from "../schemas/SignInUserSchema"
import { SignUpUserSchema } from "../schemas/SignUpUserSchema";
import { REGISTER_USER } from "../graphql/RegisterUserMutation";
import { LOGIN_USER } from "../graphql/LoginUserMutation"
import { useMutation } from '@apollo/client';
import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom"
import { Button, Input } from '@nextui-org/react';
import { Email, LockPassword, Password, UnlockPassword, Username } from '../../../icons';

const Form = ({ isSignIn }) => {

  const navigate = useNavigate()
  const [view, setView] = useState(false)

  const toggleVisibility = () => setView(!view)

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
      className="w-full h-fit flex flex-col gap-4 font-normal"
    >
      <Input
        size="lg"
        type='email'
        pattern='^[^\s@]+@[^\s@]+\.[^\s@]+$'
        name='email'
        variant='bordered'
        placeholder='Email'
        value={userFormik.values.email}
        onChange={userFormik.handleChange}
        onBlur={userFormik.handleBlur}
        classNames={{
          inputWrapper: "pr-0 border-ModuleItem",
          input: "rounded-r-xl"
        }}
        startContent={
          <span className={`${userFormik.touched.email && userFormik.errors.email ? 'text-danger' : ''}`}>
            <Email />
          </span>
        }
        isInvalid={userFormik.touched.email && Boolean(userFormik.errors.email)}
        errorMessage={userFormik.touched.email && userFormik.errors.email}
      />

      {
        !isSignIn && (
          <Input
            size='lg'
            name='username'
            variant='bordered'
            placeholder='Your username'
            value={userFormik.values.username}
            onChange={userFormik.handleChange}
            onBlur={userFormik.handleBlur}
            classNames={{
              inputWrapper: "pr-0 border-secondary",
              input: "rounded-r-xl"
            }}
            startContent={
              <span className={`${userFormik.touched.username && userFormik.errors.username ? 'text-danger' : ''}`}>
                <Username />
              </span>
            }
            isInvalid={userFormik.touched.username && Boolean(userFormik.errors.username)}
            errorMessage={userFormik.touched.username && userFormik.errors.username}
          />
        )
      }

      <Input
        size='lg'
        name='password'
        type={`${view ? 'text' : 'password'}`}
        variant='bordered'
        placeholder='Password'
        value={userFormik.values.password}
        onChange={userFormik.handleChange}
        onBlur={userFormik.handleBlur}
        classNames={{
          inputWrapper: "border-secondary",
          input: "rounded-r-xl"
        }}
        startContent={
          <span className={`${userFormik.touched.password && userFormik.errors.password ? 'text-danger' : ''}`}>
            <Password />
          </span>
        }
        endContent={
          <div
            onClick={toggleVisibility}
            className={`${userFormik.touched.password && userFormik.errors.password ? 'text-danger' : ''} cursor-pointer`}
          >
            {
              view ? <LockPassword /> : <UnlockPassword />
            }
          </div>
        }
        isInvalid={userFormik.touched.password && Boolean(userFormik.errors.password)}
        errorMessage={userFormik.touched.password && userFormik.errors.password}
      />

      {
        isSignIn &&
        <Link to='' className='text-primary w-fit'>Forgot Password?</Link>
      }

      <Button
        type='submit'
        fullWidth
        color='primary'
        radius='sm'
        size='lg'
        className='font-bold'
      >
        {
          isSignIn ?
            'Sign In'
            :
            'Sign Up'
        }
      </Button>
    </form>
  )
}


Form.propTypes = {
  isSignIn: PropTypes.bool,
}


export default Form;

