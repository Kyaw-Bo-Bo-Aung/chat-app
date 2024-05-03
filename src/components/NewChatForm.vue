<template>
  <form class="chat-form" @submit.prevent>
    <textarea v-model="message" @keypress.enter="handleSend"></textarea>
    <button v-if="isLoading" disabled>Loading...</button>
    <button @click="handleSend" v-if="!isLoading">Send</button>
  </form>
</template>
<script setup>
import getLoggedInUser from "@/composables/getLoggedInUser";
import useCollection from "@/composables/useCollection";
import { serverTimestamp } from "firebase/firestore";
import { ref } from "vue";

const { user } = getLoggedInUser();
const { error, isLoading, add } = useCollection("messages");
let message = ref("");

const handleSend = async () => {
  if (message.value) {
    const chatMessage = {
      user_id: user.value.uid,
      message: message.value,
      name: user.value.displayName,
      created_at: serverTimestamp(),
    };
    message.value = "";
    await add(chatMessage);
  }
};
</script>
<style>
form {
  margin: 10px;
}
form.chat-form {
  display: flex;
}
form button {
  align-self: center;
}
textarea {
  width: 100%;
  max-width: 100%;
  margin-bottom: 6px;
  padding: 10px;
  box-sizing: border-box;
  border: 0;
  border-radius: 20px;
  font-family: inherit;
  outline: none;
}
</style>
