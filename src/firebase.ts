import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// These would normally be in .env
const firebaseConfig = {
  apiKey: "AIzaSyAonqhOTl49zpV3X23sx8b5dPIfAVgPwgw",
  authDomain: "pg-buddy-log.firebaseapp.com",
  projectId: "pg-buddy-log",
  storageBucket: "pg-buddy-log.firebasestorage.app",
  messagingSenderId: "1023184086359",
  appId: "1:1023184086359:web:fdd3f9432c271a8be90a12",
  measurementId: "G-FB4E6G6S9B"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
