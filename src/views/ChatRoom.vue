<template>
  <div class="container">
    <NavBar />
    <ChatWindow />
    <NewChatForm />
  </div>
</template>

<script setup>
import ChatWindow from '@/components/ChatWindow.vue';
import NavBar from '@/components/NavBar.vue'
import NewChatForm from '@/components/NewChatForm.vue'
import getLoggedInUser from '@/composables/getLoggedInUser';
import { watch } from 'vue';
import { useRouter } from 'vue-router';

const { user } = getLoggedInUser();
const router = useRouter();

watch(user, () => {
  router.push({name: 'Welcome'});
})

</script>

<style></style>