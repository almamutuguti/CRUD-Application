// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";


// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBdX69m5TuxedVo_OEobyzRnhc3wN1yRjA",
  authDomain: "crud-application-3bd0a.firebaseapp.com",
  projectId: "crud-application-3bd0a",
  storageBucket: "crud-application-3bd0a.firebasestorage.app",
  messagingSenderId: "18203646911",
  appId: "1:18203646911:web:31bfcac08cd585a6785f0a",
  measurementId: "G-81ZB8MBMVL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider()
export const db = getFirestore(app)

// const analytics = getAnalytics(app);