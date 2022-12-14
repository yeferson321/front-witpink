/* Importing the functions you need from the SDKs you need. */
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
/* TODO: Add SDKs for Firebase products that you want to use */
/* https://firebase.google.com/docs/web/setup#available-libraries */

/* Web app's Firebase configuration
For Firebase JS SDK v7.20.0 and later, measurementId is optional
Importing the firebaseConfig from the .env file. */
const firebaseConfig = {
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: process.env.REACT_APP_AUTHDOMAIN,
  projectId: process.env.REACT_APP_PROJECTID,
  storageBucket: process.env.REACT_APP_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
  appId: process.env.REACT_APP_APPID,
  measurementId: process.env.REACT_APP_MEASUREMENTID
};

/* Exporting the app and auth from the firebaseConfig. */
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)