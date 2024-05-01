<template>
  <h2>Sign Up</h2>
  <form @submit.prevent="">
    <input type="text" placeholder="Display name" v-model="displayName" />
    <input type="email" placeholder="email" v-model="email" />
    <input type="password" placeholder="password" v-model="password" />
    <button @click="signup">Sign up</button>
  </form>
</template>

<script setup>
import { db } from "@/firebase/config";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { ref } from "vue";

const auth = getAuth();

let displayName = ref("");
let email = ref("");
let password = ref("");
let error = ref(null);

let signup = async () => {
  try {
    const res = await createUserWithEmailAndPassword(
      auth,
      email.value,
      password.value
    );
    if (!res) throw new Error("could not creat user");
    await updateProfile(auth.currentUser, {
      displayName: displayName.value,
    });
  } catch (err) {
    error.value = err.message;
  }
};
</script>

<style></style>
