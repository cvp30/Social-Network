import PropTypes from 'prop-types';
import { createContext, useContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  GithubAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth"
import { Auth } from '../services/firebase/config';

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {

  const [user, setUser] = useState(null)

  // ------------GOOGLE - GITHUB SIGN IN -----------------

  const googleSignIn = () => {
    const googleProvider = new GoogleAuthProvider();
    signInWithPopup(Auth, googleProvider);
  }

  const githubSignIn = () => {
    const githubProvider = new GithubAuthProvider();
    signInWithPopup(Auth, githubProvider)
  }


  // ----------------- SIGN OUT --------------------
  const SignOut = () => {
    signOut(Auth);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(Auth, currUser => {
      currUser ? setUser(currUser) : setUser(null);
    })

    return () => {
      unsubscribe();
    }
  }, [])

  return (
    <AuthContext.Provider value={{
      googleSignIn,
      githubSignIn,
      SignOut,
      user,
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