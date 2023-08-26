import firebase_app from "../../index";
import { getFirestore, collection, getDocs } from "firebase/firestore";
// auth
import { getAuth, signOut } from "firebase/auth";

const db = getFirestore(firebase_app);
export default async function getRoomData(roomId) {
  let result = null;
  let error = null;

  try {
    result = await getDocs(collection(db, "users"));
  } catch (e) {
    error = e;
  }

  return { result, error };
}
