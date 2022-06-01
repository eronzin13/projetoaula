import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import TimeView from "../views/TimeView.vue";
import JogadoresView from "../views/JogadoresView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/time",
      name: "time",
      component: TimeView,
    },
    {
      path: "/jogadores",
      name: "jogadores",
      component: JogadoresView,
    },
  ],
});

export default router;
