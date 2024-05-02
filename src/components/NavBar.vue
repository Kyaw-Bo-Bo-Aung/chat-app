<template>
  <nav v-if="user">
    <div>
      <p>Hi {{ user.displayName }}</p>
      <p class="email">logged in as {{ user.email }}</p>
    </div>
    <button @click="logout">Logout</button>
  </nav>
</template>

<script setup>
import useLogout from "../composables/useLogout";
import getLoggedInUser from "../composables/getLoggedInUser";

const { logout: signout } = useLogout();
const { user } = getLoggedInUser();

const logout = async () => {
  await signout();
};
</script>

<style>
nav {
  padding: 20px;
  border-bottom: 1px solid #eee;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

nav p {
  margin: 2px auto;
  font-size: 16px;
  color: #444;
}

nav p.email {
  font-size: 16px;
  color: #999;
}
</style>