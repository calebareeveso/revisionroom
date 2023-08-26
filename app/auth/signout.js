import firebase_app from "../../utils/firebase/index";
import { getAuth, signOut } from "firebase/auth";

const auth = getAuth(firebase_app);

export default async function appSignOut() {
  let result = null,
    error = null;
  try {
    result = await signOut(auth);
  } catch (e) {
    error = e;
  }

  return { result, error };
}
