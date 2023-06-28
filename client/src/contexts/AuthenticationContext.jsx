import PropTypes from 'prop-types';
import { createContext, useContext, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth"
import { Auth } from '../services/firebase/config';
// import defaultUser from "../assets/defaultUser.png"

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {

  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)


  useEffect(() => {
    const unsubscribe = onAuthStateChanged(Auth, currUser => {
      if (currUser) {

        // const UserObj = {
        //   uid: currUser.uid,
        //   displayName: currUser.displayName ?? defaultUser,
        //   email: currUser.email,
        //   photoURL: currUser.photoURL,
        //   lastLogin: currUser.reloadUserInfo.lastLoginAt,
        // }

        setUser(currUser);
      }
      else {
        setUser(null)
      }

      setLoading(false)
    })

    return () => {
      unsubscribe();
    }
  }, [])

  return (
    <AuthContext.Provider value={{
      user,
      loading,
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