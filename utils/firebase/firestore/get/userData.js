import firebase_app from "../../index";
import { getFirestore, doc, getDoc } from "firebase/firestore";

// auth
import { getAuth, signOut } from "firebase/auth";
// random id
import getRandomNumbers from "../../../getRandomNumbers";
const db = getFirestore(firebase_app);
export default async function getUserData() {
  const auth = getAuth(firebase_app);

  let result = null;
  let error = null;
  if (auth?.currentUser?.uid !== undefined) {
    let docRef = doc(db, "users", auth?.currentUser?.uid);
    try {
      result = await getDoc(docRef);
    } catch (e) {
      error = e;
    }
  }
  return { result, error };
}
