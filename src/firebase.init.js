// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAYPTee1vhQExJZAjN2gbweKpCv8lwM-aw",
  authDomain: "d-valley-2a581.firebaseapp.com",
  projectId: "d-valley-2a581",
  storageBucket: "d-valley-2a581.appspot.com",
  messagingSenderId: "571333673655",
  appId: "1:571333673655:web:f2e697e9e3895d9cf90332"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;