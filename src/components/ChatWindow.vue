<template>
  <div class="chat-window">
    <div class="messages" ref="msgBox">
      <div class="single" v-for="chat in readableDateMessage" :key="chat.id">
        <span class="created_at">{{ chat.created_at }}</span>
        <span class="name">{{ chat.name }}</span>
        <span class="message">{{  chat.message }}</span>
      </div>
    </div>
  </div>
</template>
<script setup>
import { db } from '@/firebase/config';
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import { computed, onUpdated, ref } from 'vue';
import { formatDistanceToNow } from "date-fns";

const chatHistory = ref([]);
const msgBox = ref(null);

onUpdated(() => {
  msgBox.value.scrollTop = msgBox.value.scrollHeight; 
})

const readableDateMessage = computed(() => {
  return chatHistory.value.map(chat => ({ ...chat, created_at: formatDistanceToNow(chat.created_at.toDate())}))
})

const messageRef = collection(db, "messages");
const q = query(messageRef, orderBy("created_at"));
onSnapshot(q, (querySnapshot) => {
  let chats = [];
  querySnapshot.forEach((doc) => {
      const msg = { id: doc.id, ...doc.data() };
      doc.data().created_at && chats.push(msg);
  });
  chatHistory.value = chats;
});


// onSnapshot(doc(db, "messages"), (doc) => {
//     console.log("messages: ", doc.data());
// });

</script>
<style>
  .chat-window {
    background: #fafafa;
    padding: 30px 20px;
  }
  .single {
    margin: 18px 0;
  }
  .created_at {
    display: block;
    color: #999;
    font-size: 12px;
    margin-bottom: 4px;
  }
  .name{
    font-weight: bold;
    margin-right: 6px;
  }
  .messages {
    max-height: 400px;
    overflow: auto;

  }
</style>