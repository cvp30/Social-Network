import PropTypes from 'prop-types';
import { createContext, useContext, useState } from "react";
import { validateSignIn, validateSignUp } from '../utils';
import { toast } from 'react-hot-toast';
// import { UserAuth } from './AuthenticationContext';


const FormContext = createContext()

export const FormContextProvider = ({ children }) => {

  // const { EmailSignIn, EmailSignUp } = UserAuth()
  const [isSignIn, setIsSignIn] = useState(true);

  const [form, setForm] = useState({
    email: "",
    username: "",
    password: "",
  })

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const errors = isSignIn ? validateSignIn(form) : validateSignUp(form);

    if (errors.length) {
      errors.forEach(error => {
        toast.error(error, {
          duration: 3000,
          className: 'text-[red] text-sm text-center'
        })
      })
    }

    // isSignIn ?
    //   await EmailSignIn(form)
    //   :
    //   await EmailSignUp(form)

  }

  return (
    <FormContext.Provider value={{
      isSignIn,
      setIsSignIn,
      form,
      setForm,
      handleChange,
      handleSubmit
    }}>
      {children}
    </FormContext.Provider>
  )
}

export const FormUser = () => {
  return useContext(FormContext)
}

FormContextProvider.propTypes = {
  children: PropTypes.any,
}