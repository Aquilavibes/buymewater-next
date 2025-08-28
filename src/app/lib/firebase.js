// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB5OqRkrB9RLL8kEof_Dz-LnqihGxB2txA",
  authDomain: "buymewater-9760c.firebaseapp.com",
  projectId: "buymewater-9760c",
  storageBucket: "buymewater-9760c.firebasestorage.app",
  messagingSenderId: "865541217962",
  appId: "1:865541217962:web:7d781f972c77f35d75bad3",
  measurementId: "G-2Z5H282P8R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);