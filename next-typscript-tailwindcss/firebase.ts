// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBAsQTeGVG-U6B5FK-VAdjgfkKQa3Jsd_w",
  authDomain: "animauth-67531.firebaseapp.com",
  projectId: "animauth-67531",
  storageBucket: "animauth-67531.appspot.com",
  messagingSenderId: "548344016370",
  appId: "1:548344016370:web:9fd36aa89248128b898f6b"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);

export default app;
export { auth };
