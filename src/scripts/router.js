import { createRouter, createWebHistory } from "vue-router";
import VueHome from "@/pages/VueHome.vue";
import VueWatch from "@/pages/VueWatch.vue";
import VueSearchResult from "@/pages/VueSearchResult.vue";

const routes = [
  { path: "/", component: VueHome },
  { path: "/watch/:id", component: VueWatch },
  { path: "/search", component: VueSearchResult },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
