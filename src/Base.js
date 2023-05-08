// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCu91lLvHkL4xj1aiD5YTU6BJfL1DILe8w",
  authDomain: "moonflix-ba679.firebaseapp.com",
  projectId: "moonflix-ba679",
  storageBucket: "moonflix-ba679.appspot.com",
  messagingSenderId: "2306294809",
  appId: "1:2306294809:web:7b9a7dfa677fa99e9fd688",
  measurementId: "G-5ERWF5R536"
};

// Initialize Firebase
const analytics = getAnalytics(app);
export const auth = getAuth();
export const db = getDatabase(app);
const app = initializeApp(firebaseConfig);
export default app;