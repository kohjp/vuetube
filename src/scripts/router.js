import VueHome from "@/pages/VueHome.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [{ path: "/", component: VueHome }];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
