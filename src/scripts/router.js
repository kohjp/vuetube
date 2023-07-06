import { createRouter, createWebHistory } from "vue-router";
import VueHome from "@/pages/VueHome.vue";
import VueWatch from "@/pages/VueWatch.vue";

const routes = [
  { path: "/", component: VueHome },
  { path: "/watch/:id", component: VueWatch },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
