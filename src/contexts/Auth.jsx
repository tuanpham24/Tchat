import { createContext, useState, useEffect } from "react";
import { auth } from "../configs/firebase";
import { onAuthStateChanged } from "firebase/auth";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    const authSubscriber = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });

    return () => {
      authSubscriber();
    };
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser }}>
      {children}
    </AuthContext.Provider>
  );
};
