import PropTypes from 'prop-types';
import { createContext, useContext } from "react";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {

  const sessionToken = localStorage.getItem("Session")

  return (
    <AuthContext.Provider value={{
      token: sessionToken
    }}>
      {children}
    </AuthContext.Provider>
  )
}

export const UserAuth = () => {
  return useContext(AuthContext);
}

AuthContextProvider.propTypes = {
  children: PropTypes.element,
}