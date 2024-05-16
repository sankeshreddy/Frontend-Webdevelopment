// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDbmPy_BqIQMyNXk_uhhbNRRWAvwsYcMmg",
  authDomain: "bookstore-2bd6b.firebaseapp.com",
  projectId: "bookstore-2bd6b",
  storageBucket: "bookstore-2bd6b.appspot.com",
  messagingSenderId: "1095359405613",
  appId: "1:1095359405613:web:86be6e494915eba8b7e2a4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;