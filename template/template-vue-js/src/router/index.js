import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
import Layout from '@/layout';


const router = createRouter({
  // history: createWebHistory(import.meta.env.BASE_URL),
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      redirect: "/home",
      component: Layout,
      children: [{
        path: "home",
        name: "home",
        component: () => import("../views/homeView"),
        meta: {
          overlay: 'blue'
        },
      }]
    }]
})

export default router
