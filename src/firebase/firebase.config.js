// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBm_wUdP3IEQ1XZKZ4MzYPKt0f5PLWAeg8",
  authDomain: "jute-w.firebaseapp.com",
  projectId: "jute-w",
  storageBucket: "jute-w.appspot.com",
  messagingSenderId: "542358702655",
  appId: "1:542358702655:web:157decf9326a52a99a868a",
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;
