import { ref } from "vue";
import {
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from '../firebase/config';
import { errorMessages } from "../firebase/errorMessages";

let error = ref("");

const createAccount = async (email, password, displayName) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    if (!res) throw new Error("could not creat user");
    await updateProfile(auth.currentUser, {
      displayName,
    });
    return res;
  } catch (err) {
    error.value = errorMessages[err.code];
  }
};

const useSignUp = () => {
  return { error, createAccount };
};

export default useSignUp;
