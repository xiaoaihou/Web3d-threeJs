import { createRouter, createWebHashHistory, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '@/pages/index.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: Home,
    children: [
      {
        path: '',
        name: 'Home',
        meta: { title: '首页', isMenu: false },
        component: Home
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(), // createWebHistory
  routes
})

export default router
