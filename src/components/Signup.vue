<template>
  <h2>Sign Up</h2>
  <form @submit.prevent="">
    <input type="text" placeholder="Display name" v-model="displayName" />
    <input type="email" placeholder="email" v-model="email" />
    <input type="password" placeholder="password" v-model="password" />
    <div class="error">{{ error }}</div>
    <button @click="signup">Sign up</button>
  </form>
</template>

<script setup>
import { ref } from "vue";
import useSignUp from "../composables/useSignUp";

const emit = defineEmits(['loginToChatroom']);
let displayName = ref("");
let email = ref("");
let password = ref("");
let error = ref(null);
const { error: err, createAccount } = useSignUp();
const signup = async () => {
  const res = await createAccount(
    email.value,
    password.value,
    displayName.value
  );
  if (res) emit("loginToChatroom");
  error.value = err;
};
</script>

<style></style>
