import { db } from "@/firebase/config";
import { addDoc, collection } from "firebase/firestore";
import { ref } from "vue";

const useCollection = (_collection) => {
  let error = ref("");
  const add = async (doc) => {
    try{
      await addDoc(collection(db, _collection), doc);
    } catch (err) {
      console.log(err);
      error.value = err.message;
    }
  }

  return {error, add};
}

export default useCollection;