import firebase_app from "../../index";
import {
  getFirestore,
  doc,
  updateDoc,
  arrayUnion,
  arrayRemove,
} from "firebase/firestore";
// auth
import { getAuth, signOut } from "firebase/auth";

const db = getFirestore(firebase_app);
export default async function addRoomListeners(data) {
  let result = null;
  let error = null;

  try {
    result = await updateDoc(doc(db, "rooms", data.roomId), {
      "listeners.profiles": arrayUnion(data.profile),
    });
  } catch (e) {
    console.log(e.message);
    error = e;
  }

  return { result, error };
}
