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
      },
      {
        path: 'todo/',
        name: 'toDo',
        component: () => import('./components/ToDo/Todo.vue'),
        meta: {
          title: 'To Do List'
        }
      },
      {
        path: 'weather/',
        name: 'weather',
        component: () => import('./components/Weather/Weather.vue'),
      },
      {
        path: 'notes/',
        name: 'notes',
        component: () => import('./components/Notes/Notes.vue'),
      },
      {
        path: 'news/',
        name: 'news',
        children: [
          {
            path: 'football',
            name: 'football',
            component: () => import('./components/News/Football/FootNews.vue'),
          }
        ]
      }
    ]
  }
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router