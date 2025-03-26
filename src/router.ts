import { createRouter, createWebHistory } from 'vue-router'
import MyTemplate from './components/MyTemplate.vue'

const routes = [
  { 
    path: '/',
    component: MyTemplate,
    children: [
      {
        path: '',
        name: 'home',
        component: () => import('./pages/HomePage/Home.vue')
      }
    ]
  }
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router