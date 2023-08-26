import firebase_app from "../../index";
import { getFirestore, doc, updateDoc } from "firebase/firestore";
// auth
import { getAuth, signOut } from "firebase/auth";

const db = getFirestore(firebase_app);
export default async function updateUserData(data) {
  let result = null;
  let error = null;

  try {
    const auth = getAuth(firebase_app);
    result = await updateDoc(doc(db, "users", auth.currentUser.uid), data);
  } catch (e) {
    error = e;
  }

  return { result, error };
}
