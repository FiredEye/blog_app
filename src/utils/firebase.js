// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "nextblog-a8976.firebaseapp.com",
  projectId: "nextblog-a8976",
  storageBucket: "nextblog-a8976.appspot.com",
  messagingSenderId: "276583988237",
  appId: "1:276583988237:web:e4170d3c580771261fa944"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);