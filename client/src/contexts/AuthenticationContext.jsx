import PropTypes from 'prop-types';
import { createContext, useContext, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth"
import { Auth } from '../services/firebase/config';

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {

  const [user, setUser] = useState({ state: null })

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(Auth, async (currUser) => {

      if (currUser) {
        try {
          setUser({
            state: {
              email: currUser.email,
              displayName: currUser.displayName,
              photoURL: currUser.photoURL,
            }
          })
        } catch (error) {
          console.log(error)
        }
      }
      else {
        setUser({ state: null })
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