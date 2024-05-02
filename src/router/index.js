import { createRouter, createWebHistory } from 'vue-router'
import Welcome from '../views/Welcome.vue';
import ChatRoom from '../views/ChatRoom.vue';
import { auth } from '@/firebase/config';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Welcome",
      component: Welcome,
      beforeEnter: (to, from, next) => {
        if(!auth.currentUser) {
          next();
        } else {
          next({name: "ChatRoom"})
        }
      },
    },
    {
      path: "/chatroom",
      name: "ChatRoom",
      component: ChatRoom,
      beforeEnter: (to, from, next) => {
        if(auth.currentUser) {
          next();
        } else {
          next({name: "Welcome"})
        }
      },
    }
  ]
})

export default router
