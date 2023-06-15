import PropTypes from 'prop-types';
import { createContext, useContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  GithubAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth"
import { auth } from '../services/firebase/config';

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {

  const [user, setUser] = useState({});

  // AUTH  WITH GOOGLE -----------------------------

  const googleSignIn = () => {
    const googleProvider = new GoogleAuthProvider();
    signInWithPopup(auth, googleProvider)
  }

  const googleSignOut = () => {
    signOut(auth);
  }
  // -----------------------------------------------

  // AUTH WITH FACEBOOK ------------------------------
  const githubSignIn = () => {
    const githubProvider = new GithubAuthProvider();
    signInWithPopup(auth, githubProvider)
  }



  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currUser => {
      setUser(currUser);
      // console.log(currUser)
    })

    return () => {
      unsubscribe();
    }
  }, [])


  return (
    <AuthContext.Provider
      value={{
        googleSignIn,
        googleSignOut,
        githubSignIn,
        user,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const UserAuth = () => {
  return useContext(AuthContext);
}

AuthContextProvider.propTypes = {
  children: PropTypes.any,
}