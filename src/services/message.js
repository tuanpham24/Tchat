import { db } from "../configs/firebase";
import {
  collection,
  addDoc,
  doc,
  serverTimestamp,
  onSnapshot,
  query,
  orderBy,
  deleteDoc,
  getDoc,
} from "firebase/firestore";

// send message
export const sendMessage = async (user, roomId, message) => {
  try {
    await addDoc(collection(db, "message-rooms", roomId, "messages"), {
      userSent: user,
      message: message.trim(),
      timestamp: serverTimestamp(),
    });
  } catch (error) {
    console.error(error);
  }
};

// get all message
export const getMessages = async (roomId, setMessages) => {
  return onSnapshot(
    query(collection(db, "message-rooms", roomId, "messages"), orderBy("timestamp", "asc")),
    (querySnapshot) => {
      const messages = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setMessages(messages);
    }
  );
};
