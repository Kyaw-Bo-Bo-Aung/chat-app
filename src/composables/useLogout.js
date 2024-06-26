import { auth } from "@/firebase/config";
import { signOut } from "firebase/auth";

const logout = async () => {
  try {
    await signOut(auth);
  } catch (err) {
    console.log(err);
  }
};

const useLogout = () => {
  return { logout };
};

export default useLogout;
