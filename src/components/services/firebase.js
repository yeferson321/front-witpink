/* Importing the functions you need from the SDKs you need. */
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
/* TODO: Add SDKs for Firebase products that you want to use */
/* https://firebase.google.com/docs/web/setup#available-libraries */

/* Web app's Firebase configuration
For Firebase JS SDK v7.20.0 and later, measurementId is optional
Importing the firebaseConfig from the .env file. */
const firebaseConfig = {
  apiKey: "AIzaSyD03fzy7mj7CA8rB0h1yN0XDLfyX3vTA7Q",
  authDomain: "apideployusers.firebaseapp.com",
  projectId: "apideployusers",
  storageBucket: "apideployusers.appspot.com",
  messagingSenderId: "609618507337",
  appId: "1:609618507337:web:900baaea5330e835d6b198",
  measurementId: "G-R5HSXYFQSG"
};

/* Exporting the app and auth from the firebaseConfig. */
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)