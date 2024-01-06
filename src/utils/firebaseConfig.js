// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBDhCBy8ysTF75oAz5CX0J6dqAHi37380c",
  authDomain: "clone-7d367.firebaseapp.com",
  projectId: "clone-7d367",
  storageBucket: "clone-7d367.appspot.com",
  messagingSenderId: "542042960725",
  appId: "1:542042960725:web:c3747c02b9dea55c2e35dc",
  measurementId: "G-F2VZW896KV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);