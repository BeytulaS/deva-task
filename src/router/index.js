import {
  createMemoryHistory,
  createRouter,
  createWebHistory,
} from "vue-router";

import HomeView from "../views/HomeView.vue";
import MarketView from "../views/MarketView.vue";

const routes = [
  { path: "/", component: HomeView },
  { path: "/home", component: HomeView },
  {
    path: "/aerospace",
    component: MarketView,
    props: { market: "aerospace" },
  },
  {
    path: "/automotive",
    component: MarketView,
    props: { market: "automotive" },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
