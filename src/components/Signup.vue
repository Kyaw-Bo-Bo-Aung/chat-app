<template>
  <h2>Sign Up</h2>
  <form @submit.prevent="">
    <input type="text" placeholder="Display name" v-model="displayName" />
    <input type="email" placeholder="email" v-model="email" />
    <input type="password" placeholder="password" v-model="password" />
    <button>Sign up</button>
  </form>
</template>

<script setup>
import { ref } from "vue";
  let displayName = ref("");
  let email = ref("");
  let password = ref("");

</script>

<style></style>
