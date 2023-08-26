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
export default async function removeRoomListeners(data) {
  let result = null;
  let error = null;

  console.log("removed user result DATA:", data.profile);
  console.log("removed user result room id:", data.roomId);
  try {
    result = await updateDoc(doc(db, "rooms", data.roomId), {
      "listeners.profiles": arrayRemove(data.profile),
    });
    console.log("removed user result:", result);
  } catch (e) {
    console.log(e.message);
    error = e;
    console.log("removed user e.message:", e.message);
  }

  return { result, error };
}
