import firebase_app from "../../../index";
import { getFirestore, doc, getDoc, onSnapshot } from "firebase/firestore";
// auth
import { getAuth, signOut } from "firebase/auth";

const db = getFirestore(firebase_app);
export default function listenToRoomData(roomId, callback) {
  const docRef = doc(db, "rooms", roomId);
  return onSnapshot(docRef, (doc) => {
    try {
      callback(doc.data());
    } catch (error) {
      console.error("Error updating room data:", error);
    }
  });
}
