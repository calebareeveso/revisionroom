import firebase_app from "../../../index";
import {
  getFirestore,
  doc,
  getDoc,
  onSnapshot,
  collection,
  getDocs,
} from "firebase/firestore";
// auth
import { getAuth, signOut } from "firebase/auth";

const db = getFirestore(firebase_app);
export default function listenToAllRoomData(callback) {
  const docRef = collection(db, "rooms");
  return onSnapshot(docRef, (snapshot) => {
    const data = [];
    snapshot.forEach((doc) => {
      data.push({ id: doc.id, ...doc.data() });
    });
    callback(data);
    console.log("listenToAllRoomData", data);
  });
}
