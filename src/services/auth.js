import { useState } from "react";
import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../configs/firebase";
import { setDoc } from "firebase/firestore";

export const loginWithGoogle = async () => {
  const provider = new GoogleAuthProvider();
  // const navigate = useNavigate();

  try {
    const res = await signInWithPopup(auth, provider);
    if (!res) {
      throw new Error("Could not complete signup");
    }
  } catch (error) {
    console.log(error);
  }
}

export const logOut = async () => {
  try {
    await signOut(auth);
    console.log("user logged out")
  } catch (error) {
    console.log(error.message);
  }
}