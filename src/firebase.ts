// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB8mJx2t_r5Reaa8DYpU36h666Ixd_zjOE",
  authDomain: "raq-music-studios.firebaseapp.com",
  projectId: "raq-music-studios",
  storageBucket: "raq-music-studios.appspot.com",
  messagingSenderId: "966787435300",
  appId: "1:966787435300:web:3e49048c606c38d8ed81b1",
  measurementId: "G-B9BPKP20M5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//@ts-ignore
const analytics = getAnalytics(app);

export { app, analytics };