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
export default async function addRoomSpeakers(data) {
  let result = null;
  let error = null;

  try {
    result = await updateDoc(doc(db, "rooms", data.roomId), {
      "speakers.profiles": arrayUnion(data.profile),
    });
  } catch (e) {
    console.log(e.message);
    error = e;
  }

  return { result, error };
}
