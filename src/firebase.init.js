
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCAJ95Va5_79wgAeOA9VBIagvLgu9CODn0",
  authDomain: "react-firebase-auth-eea85.firebaseapp.com",
  projectId: "react-firebase-auth-eea85",
  storageBucket: "react-firebase-auth-eea85.appspot.com",
  messagingSenderId: "872742555481",
  appId: "1:872742555481:web:b73fb33aea33c404678648"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
