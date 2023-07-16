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

// Create room
export const addRoom = async (data, userId) => {
  const { title, description } = data;
  try {
    const userById = await getDoc(doc(db, "users", userId));
    if (userById.exists()) {
      var user = userById.data();
    }
    await addDoc(collection(db, "chat-rooms"), {
      title,
      description,
      createdBy: user,
      timestamp: serverTimestamp(),
    });
  } catch (error) {
    console.error(error);
  }
};

// get room list
export const getRoomList = async (setRoomList) => {
  return onSnapshot(
    query(collection(db, "chat-rooms"), orderBy("timestamp", "asc")),
    (querySnapshot) => {
      const rooms = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setRoomList(rooms);
    }
  );
};

// get room by id
export const getRoomById = async (roomIdParam) => {
  try {
    const docRef = doc(db, "chat-rooms", roomIdParam);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      const room = docSnap.data();
      return room;
    }
  } catch (error) {
    console.log(error);
  }
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
