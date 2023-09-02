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
export default async function updateRoomCanvasData(data) {
  let result = null;
  let error = null;

  try {
    const auth = getAuth(firebase_app);
    result = await updateDoc(doc(db, "room-canvas", data.roomId), {
      draw: data.draw,
    });
  } catch (e) {
    console.log(e.message);
    error = e;
  }

  return { result, error };
}
