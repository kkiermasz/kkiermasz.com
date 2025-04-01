import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/invoicing',
    name: 'invoicing',
    component: () => import('../views/InvoicingView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router 