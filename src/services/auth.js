import { useState } from "react";
import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../configs/firebase";
import {
  collection,
  addDoc,
  doc,
  serverTimestamp,
  onSnapshot,
  query,
  orderBy,
  deleteDoc,
  where,
  getDocs
} from "firebase/firestore";

export const loginWithGoogle = async () => {
  const provider = new GoogleAuthProvider();
  // const navigate = useNavigate();

  try {
    const res = await signInWithPopup(auth, provider);
    if (!res) {
      console.log("Could not complete signup");
    }
    const user = res.user;
    console.log("user login", );
    const q = query(collection(db, "users"), where("uid", "==", user.uid));
    const docs = await getDocs(q);
    if (docs.docs.length === 0) {
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        name: user.displayName,
        authProvider: "google",
        email: user.email,
        photoURL: user.photoURL,
      });
    }
  } catch (error) {
    console.error(error);
  }
};

export const logOut = async () => {
  try {
    await signOut(auth);
    console.log("user logged out");
  } catch (error) {
    console.log(error.message);
  }
};
