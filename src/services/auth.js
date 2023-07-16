import { useState } from "react";
import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { auth, db } from "../configs/firebase";
import {
  collection,
  addDoc,
  query,
  where,
  getDocs,
  setDoc,
  doc,
} from "firebase/firestore";

export const loginWithGoogle = async () => {
  const provider = new GoogleAuthProvider();

  try {
    const res = await signInWithPopup(auth, provider);
    if (!res) {
      console.log("Could not complete signup");
    }
    const user = res.user;
    const queryStr = query(collection(db, "users"), where("uid", "==", user.uid));
    const docs = await getDocs(queryStr);
    if (docs.docs.length === 0) {
      await setDoc(doc(db, "users", user.uid), {
        uid: user.uid,
        name: user.displayName,
        authProvider: "google",
        email: user.email,
        photoURL: user.photoURL,
      });
    }
  } catch (error) {
    console.log(error);
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
