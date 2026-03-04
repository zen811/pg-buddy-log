import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// These would normally be in .env
const firebaseConfig = {
  apiKey: "AIzaSyDummyKeyForDemo",
  authDomain: "pg-buddy-demo.firebaseapp.com",
  projectId: "pg-buddy-demo",
  storageBucket: "pg-buddy-demo.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abcdef123456"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
