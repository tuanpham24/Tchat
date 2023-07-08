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
} from "firebase/firestore";

// Create room
export const addRoom = async (data, userId) => {
  const { title, description } = data;
  try {
    await addDoc(collection(db, "chat-rooms"), {
      title,
      description,
      createdBy: userId,
      timestamp: serverTimestamp(),
    });
  } catch (error) {
    console.error(error);
  }
};

// get room list
export const getRoomList = async (userId, setRoomList) => {
  return onSnapshot(
    query(
      collection(db, "chat-rooms"),
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

// delete room by id
export const deleteRoomById = async (userId, roomId) => {
  const docRef = doc(db, "chat-rooms", userId, "rooms", roomId);
  deleteDoc(docRef)
    .then(() => {
      console.log("Entire Document has been deleted successfully.");
    })
    .catch((error) => {
      console.log(error);
    });
};
