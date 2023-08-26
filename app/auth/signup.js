import firebase_app from "../../utils/firebase/index";
import {
  createUserWithEmailAndPassword,
  getAuth,
  updateProfile,
} from "firebase/auth";

const auth = getAuth(firebase_app);

export default async function signUp(email, password, displayName) {
  let result = null,
    error = null;
  try {
    result = await createUserWithEmailAndPassword(auth, email, password);

    await updateProfile(auth.currentUser, {
      displayName: displayName,
      photoURL: `https://api.dicebear.com/6.x/fun-emoji/svg?backgroundColor=398DFF&seed=${displayName.replace(
        /\s/g,
        ""
      )}`,
    });
  } catch (e) {
    error = e;
  }

  return { result, error };
}
