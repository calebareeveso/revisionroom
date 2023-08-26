import firebase_app from "../../index";
import { getFirestore, doc, setDoc } from "firebase/firestore";
// auth
import { getAuth, signOut } from "firebase/auth";
// random id
import getRandomNumbers from "../../../getRandomNumbers";

const db = getFirestore(firebase_app);
export default async function addRoomData(data) {
  let result = null;
  let error = null;

  try {
    let updatedData = { ...data };
    const auth = getAuth(firebase_app);
    result = await setDoc(doc(db, "rooms", updatedData.roomId), updatedData, {
      merge: true,
    });
  } catch (e) {
    error = e;
  }

  return { result, error };
}
