<template>
  <h2>Login</h2>
  <form @submit.prevent="">
    <input type="email" placeholder="email" v-model="email" />
    <input type="password" placeholder="password" v-model="password" />
    <div class="error">{{ error }}</div>
    <button @click="doLogin">Login</button>
  </form>
</template>

<script setup>
import { auth } from "@/firebase/config";
import { signInWithEmailAndPassword } from "firebase/auth";
import { ref } from "vue";
import useLogin from "../composables/useLogin";

const emit = defineEmits(['loginToChatroom'])
const { error: err, login } = useLogin();

let email = ref("");
let password = ref("");
let error = ref("");

const doLogin = async () => {
  const res = await login(email.value, password.value);
  if(res) emit('loginToChatroom');
  error.value = err;
};
</script>

<style></style>
