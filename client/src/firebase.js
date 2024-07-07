// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-9ea2c.firebaseapp.com",
  projectId: "mern-estate-9ea2c",
  storageBucket: "mern-estate-9ea2c.appspot.com",
  messagingSenderId: "1067881737773",
  appId: "1:1067881737773:web:bdb7a8523744eb0da592a4"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);