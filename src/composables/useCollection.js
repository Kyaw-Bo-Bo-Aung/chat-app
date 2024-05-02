import { db } from "@/firebase/config";
import { addDoc, collection } from "firebase/firestore";
import { ref } from "vue";

const useCollection = (_collection) => {
  let error = ref("");
  let isLoading = ref(false);
  const add = async (doc) => {
    isLoading.value = true;
    try{
      await addDoc(collection(db, _collection), doc);
    } catch (err) {
      console.log(err);
      error.value = err.message;
    } finally {
      isLoading.value = false;
    }
  }

  return {error, isLoading, add};
}

export default useCollection;