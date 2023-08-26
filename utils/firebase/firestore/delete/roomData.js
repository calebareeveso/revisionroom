import firebase_app from "../../index";
import { getFirestore, doc, deleteDoc } from "firebase/firestore";
// auth
import { getAuth, signOut } from "firebase/auth";
// random id
import getRandomNumbers from "../../../getRandomNumbers";

const db = getFirestore(firebase_app);
export default async function deleteRoomData(roomId) {
  let result = null;
  let error = null;

  try {
    result = await deleteDoc(doc(db, "rooms", roomId));
  } catch (e) {
    error = e;
  }

  return { result, error };
}
