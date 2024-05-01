<template>
  <h2>Login</h2>
  <form @submit.prevent="">
    <input type="email" placeholder="email" v-model="email" />
    <input type="password" placeholder="password" v-model="password" />
    <button>Login</button>
  </form>
</template>

<script setup>
import { ref } from "vue";
  let displayName = ref("dis");
  let email = ref("");
  let password = ref("");

</script>

<style></style>
