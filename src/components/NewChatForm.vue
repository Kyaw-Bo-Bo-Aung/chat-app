<template>
  <form>
    <textarea v-model="message" @keypress.enter="handleSend"></textarea>
  </form>
</template>
<script setup>
import getLoggedInUser from '@/composables/getLoggedInUser';
import useCollection from '@/composables/useCollection';
import { serverTimestamp } from 'firebase/firestore';
import { ref } from 'vue';

const { user } = getLoggedInUser();
const { error, add } = useCollection("messages");
let message = ref("");


const handleSend = async () => {
  const chatMessage = {
    message: message.value,
    name: user.value.displayName,
    created_at : serverTimestamp()
  };
  await add(chatMessage);
  message.value = ""
}

</script>
<style>
form {
  margin: 10px;
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