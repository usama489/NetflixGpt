// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC2ErVM7CL00A9QMjZNTwvJst2ZxVWazCw",
  authDomain: "netflixgpt-313f4.firebaseapp.com",
  projectId: "netflixgpt-313f4",
  storageBucket: "netflixgpt-313f4.firebasestorage.app",
  messagingSenderId: "80876173866",
  appId: "1:80876173866:web:d7bcedc4871efbfa01a153",
  measurementId: "G-ED0MWNT5TN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();