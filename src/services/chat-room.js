import { db } from "../configs/firebase";
import {
  collection,
  addDoc,
  serverTimestamp,
  onSnapshot,
  query,
  orderBy,
} from "firebase/firestore";

export const addRoom = async (data, userId) => {
  const { title, description } = data;
  try {
    await addDoc(collection(db, "chat-rooms", userId, "rooms"), {
      title,
      description,
      timestamp: serverTimestamp(),
    });
  } catch (error) {
    console.error(error);
  }
};

export const getRoomList = async (userId, setRoomList) => {
  return onSnapshot(
    query(
      collection(db, "chat-rooms", userId, "rooms"),
      orderBy("timestamp", "asc")
    ),
    (querySnapshot) => {
      const rooms = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setRoomList(rooms);
    }
  );
};
