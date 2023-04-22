// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD0o50tGzm1p1vorI2mvTWrpledvEO-xnY",
  authDomain: "travel-amigo-185da.firebaseapp.com",
  projectId: "travel-amigo-185da",
  storageBucket: "travel-amigo-185da.appspot.com",
  messagingSenderId: "735371059189",
  appId: "1:735371059189:web:27523d3db0f378119ccabc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const authentication = getAuth(app);
const db = getFirestore(app);

export {authentication, db}