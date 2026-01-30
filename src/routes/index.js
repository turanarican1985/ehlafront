import { createRouter, createWebHistory } from "vue-router";

import MainView from "../views/MainView.vue";
import SigninView from "../views/SigninView.vue";
import SignupView from "../views/SignupView.vue";

const routes = [
  { path: "/", component: MainView },
  { path: "/signin", component: SigninView },
  { path: "/signup", component: SignupView },
];

export const router = createRouter({
  history: createWebHistory(), // ✅ URL değişir, reload aynı route'u açar
  routes,
});
