<template>
  <div class="welcome container">
    <div v-if="showLoginForm">
      <Login @loginToChatroom="loginToChatroom" />
      <p>not a member? <span @click="showLoginForm = !showLoginForm">create account.</span></p>
    </div>
    <div v-else>
      <Signup @loginToChatroom="loginToChatroom" />
      <p>Already member? <span @click="showLoginForm = !showLoginForm">Login acccount.</span></p>
    </div>
  </div>
</template>

<script setup>
import Login from "@/components/Login.vue";
import Signup from "@/components/Signup.vue";
import { ref } from "vue";
import { useRouter } from 'vue-router'

  let showLoginForm = ref(true);
  let router = useRouter();
  const loginToChatroom = () => {
    router.push({name: "ChatRoom"})
  }
</script>

<style>
.welcome {
  text-align: center;
  padding: 20px 0;
}
.welcome form {
  width: 300px;
  margin: 20px auto;
}
/* .welcome label {
    display: block;
    margin: 20px 0 10px;
  } */
.welcome input {
  width: 100%;
  padding: 10px;
  border-radius: 20px;
  border: 1px solid #eee;
  outline: none;
  color: #999;
  margin: 10px auto;
}
.welcome span {
  font-weight: bold;
  text-decoration: underline;
  cursor: pointer;
}
.welcome button {
  margin: 20px auto;
}
</style>
