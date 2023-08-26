import firebase_app from "../../index";
import { getFirestore, doc, getDoc } from "firebase/firestore";
// auth
import { getAuth, signOut } from "firebase/auth";

const db = getFirestore(firebase_app);
export default async function getRoomData(roomId) {
  let docRef = doc(db, "rooms", roomId);

  let result = null;
  let error = null;

  try {
    result = await getDoc(docRef);
  } catch (e) {
    error = e;
  }

  return { result, error };
}
