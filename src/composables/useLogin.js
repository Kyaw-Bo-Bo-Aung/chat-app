import { auth } from "@/firebase/config";
import { errorMessages } from "@/firebase/errorMessages";
import { signInWithEmailAndPassword } from "firebase/auth";
import { ref } from "vue";

let error = ref("");

const login = async (email, password) => {
  try {
    const res = await signInWithEmailAndPassword(auth, email, password);
    if(!res) throw new Error("You cannot login.");
    return res;
  } catch (err) {
    error.value = errorMessages[err.code];
  } 
}

const useLogin = () => {
  return { error, login };
}

export default useLogin;