import { createRouter, createWebHistory } from "vue-router";
import Moony from '../views/moony'

const routes = [
  {
    path: "/moony",
    name: "Moony",
    component: Moony,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router
