<template>
  <div class="chat-window">
    <div v-if="readableDateMessage.length <= 0" class="loader-wrapper">
      <div class="loader"></div>
    </div>
    <div v-else class="messages" ref="msgBox">
      <div
        class="single"
        :class="{ self: chat.user_id == user.uid }"
        v-for="chat in readableDateMessage"
        :key="chat.id"
      >
        <span class="created_at">{{ chat.created_at }}</span>
        <span class="name">{{ chat.name }}</span>
        <span class="message">{{ chat.message }}</span>
      </div>
    </div>
  </div>
</template>
<script setup>
import { db } from "@/firebase/config";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { computed, onUpdated, ref } from "vue";
import { formatDistanceToNow } from "date-fns";
import getLoggedInUser from "@/composables/getLoggedInUser";

const chatHistory = ref([]);
const msgBox = ref(null);

const { user } = getLoggedInUser();

onUpdated(() => {
  msgBox.value.scrollTop = msgBox.value.scrollHeight;
});

const readableDateMessage = computed(() => {
  return chatHistory.value.map((chat) => ({
    ...chat,
    created_at: formatDistanceToNow(chat.created_at.toDate()),
  }));
});

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
</script>
<style>
.chat-window {
  background: #fafafa;
  padding: 30px 20px;
  min-height: 400px;
  display: flex;
}
.single {
  margin: 18px 0;
}
.single.self {
  text-align: right;
}
.created_at {
  display: block;
  color: #999;
  font-size: 12px;
  margin-bottom: 4px;
}
.name {
  font-weight: bold;
  margin-right: 6px;
}
.single.self .name {
  display: none;
}
.messages {
  flex: 1;
  max-height: 400px;
  overflow: auto;
  align-self: flex-end;
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.message {
  background-color: navajowhite;
  border-radius: 10px 10px 10px 0px;
  padding: 3px 10px;
}
.single.self .message {
  background-color: lightskyblue;
  border-radius: 10px 10px 0px 10px;
}
.messages::-webkit-scrollbar {
  display: none;
}
.loader-wrapper {
  justify-content: center;
  display: flex;
  align-self: center;
  flex: 1;
}
.loader { 
  width: 30px;
  padding: 8px;
  aspect-ratio: 1;
  border-radius: 50%;
  background: #25b09b;
  --_m: conic-gradient(#0000 10%, #000), linear-gradient(#000 0 0) content-box;
  -webkit-mask: var(--_m);
  mask: var(--_m);
  -webkit-mask-composite: source-out;
  mask-composite: subtract;
  animation: l3 1s infinite linear;
}
@keyframes l3 {
  to {
    transform: rotate(1turn);
  }
}
</style>
