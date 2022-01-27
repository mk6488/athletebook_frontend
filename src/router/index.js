import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import LTR from '../views/LTR.vue'
import Destination from '../views/Destination.vue'
import Crew from '../views/Crew.vue'
import Technology from '../views/Technology.vue'
import DesignSystem from '../views/DesignSystem.vue'

const routes = [{
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/ltr',
    name: 'LTR',
    component: LTR
  },
  {
    path: '/destination',
    name: 'Destination',
    component: Destination
  },
  {
    path: '/crew',
    name: 'Crew',
    component: Crew
  },
  {
    path: '/technology',
    name: 'Technology',
    component: Technology
  },
  {
    path: '/design-system',
    name: 'DesignSystem',
    component: DesignSystem
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router