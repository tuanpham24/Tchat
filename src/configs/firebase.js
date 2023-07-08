// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getStorage } from "@firebase/storage";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBYhhJOfquGZ0B90jFddd7Na-AH0vZKLHQ",
  authDomain: "tchat-v2-869d0.firebaseapp.com",
  projectId: "tchat-v2-869d0",
  storageBucket: "tchat-v2-869d0.appspot.com",
  messagingSenderId: "1081074181172",
  appId: "1:1081074181172:web:5be668b62f2d132b575661",
  measurementId: "G-PVNQDPRF0Q",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage();
