import firebase_app from "../../index";
import { getFirestore, doc, setDoc } from "firebase/firestore";
// auth
import { getAuth, signOut } from "firebase/auth";

const db = getFirestore(firebase_app);
export default async function addRoomCanvasData(data) {
  let result = null;
  let error = null;

  try {
    let updatedData = { ...data };
    const auth = getAuth(firebase_app);
    result = await setDoc(
      doc(db, "room-canvas", updatedData.roomId),
      updatedData,
      {
        merge: true,
      }
    );
  } catch (e) {
    error = e;
  }

  return { result, error };
}
