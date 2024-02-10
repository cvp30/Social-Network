import { Auth, Storage } from "./config";
import { v4 } from "uuid"
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
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

export const uploadImage = async (userID, file) => {
  const storageRef = ref(Storage, `${userID}/${v4()}`)
  await uploadBytes(storageRef, file)

  return await getDownloadURL(storageRef)
}

export const deleteImage = async (userID, file) => {

}