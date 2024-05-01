import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyAPDlB5hJsStZpLUuO5H1dqb7OY9KBfYdE",
  authDomain: "vue-firebase-blog-51b22.firebaseapp.com",
  projectId: "vue-firebase-blog-51b22",
  storageBucket: "vue-firebase-blog-51b22.appspot.com",
  messagingSenderId: "776497626141",
  appId: "1:776497626141:web:f747c2ad573d26b7e25af4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();