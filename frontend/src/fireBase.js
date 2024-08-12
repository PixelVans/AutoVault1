// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "autovault-a09db.firebaseapp.com",
  projectId: "autovault-a09db",
  storageBucket: "autovault-a09db.appspot.com",
  messagingSenderId: "529620017319",
  appId: "1:529620017319:web:767eb783480acd7167bb82"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);