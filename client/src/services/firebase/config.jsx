// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyAf1lTAIDYpvmgB_lKNhN1_LHFD-N3Mu2w",
  authDomain: "social-media-app-3a198.firebaseapp.com",
  projectId: "social-media-app-3a198",
  storageBucket: "social-media-app-3a198.appspot.com",
  messagingSenderId: "402614226289",
  appId: "1:402614226289:web:f3a0b83b1e850a8051fad0",
  measurementId: "G-MBD5ZMGX7D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);