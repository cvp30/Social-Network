import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth"
import { Auth } from "./config";

export const GoogleSignIn = async () => {
  const googleProvider = new GoogleAuthProvider();
  await signInWithPopup(Auth, googleProvider)
}

export const githubSignIn = async () => {
  const githubProvider = new GithubAuthProvider();
  await signInWithPopup(Auth, githubProvider)
}

export const SignOut = async () => {
  await signOut(Auth);
}