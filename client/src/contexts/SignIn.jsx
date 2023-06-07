import { createContext, useState } from "react";
import PropTypes from 'prop-types';

export const SignInContext = createContext();

export const SignInProvider = ({ children }) => {
  const [input, setInput] = useState({
    email: "",
    password: ""
  })

  return (
    <SignInContext.Provider value={{
      input,
      setInput,
    }}>
      {children}
    </SignInContext.Provider>
  )
}

SignInProvider.propTypes = {
  children: PropTypes.any,
}