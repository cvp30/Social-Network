import { Auth } from "./config";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
  // signInWithRedirect,
  signOut
} from "firebase/auth"

export const GoogleSignIn = async () => {
  const googleProvider = new GoogleAuthProvider();
  return await signInWithPopup(Auth, googleProvider).then(response => response)
}

export const githubSignIn = async () => {
  const githubProvider = new GithubAuthProvider();
  // await signInWithRedirect(Auth, githubProvider)
  return await signInWithPopup(Auth, githubProvider).then(response => response)
}

export const SignOut = async () => {
  await signOut(Auth);
}