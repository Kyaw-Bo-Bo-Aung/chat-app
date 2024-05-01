import firebase from "firebase/app";
import { initializeApp } from "firebase/app";
import "firebase/compat/storage";


const firebaseConfig = {
  apiKey: "AIzaSyAPDlB5hJsStZpLUuO5H1dqb7OY9KBfYdE",
  authDomain: "vue-firebase-blog-51b22.firebaseapp.com",
  projectId: "vue-firebase-blog-51b22",
  storageBucket: "vue-firebase-blog-51b22.appspot.com",
  messagingSenderId: "776497626141",
  appId: "1:776497626141:web:f747c2ad573d26b7e25af4"
};

const app = initializeApp(firebaseConfig);
const storage = firebase.storage();