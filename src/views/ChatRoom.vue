<template>
  <div class="container">
    <NavBar />
  </div>
</template>

<script setup>
import NavBar from '@/components/NavBar.vue'
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