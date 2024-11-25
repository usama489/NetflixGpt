// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyByrgC4NOQKcx0CS_9IHnnTqQN_OyaY-hA",
  authDomain: "netflixgpt-a1555.firebaseapp.com",
  projectId: "netflixgpt-a1555",
  storageBucket: "netflixgpt-a1555.firebasestorage.app",
  messagingSenderId: "426976701715",
  appId: "1:426976701715:web:8b47fef7cbbc4295933ee6",
  measurementId: "G-35HRZMHX5G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();