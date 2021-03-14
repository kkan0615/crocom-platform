import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import GeneralLayout from '@/layouts/general/index.vue'
import authRoutes from '@/router/modules/auth'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'GeneralLayout',
    component: GeneralLayout,
    meta: {
      hidden: false,
    },
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('@/views/Home/index.vue'),
        meta: {
          hidden: false
        }
      },
      {
        path: 'playground',
        name: 'Playground',
        component: () => import('@/views/Playground/index.vue'),
        meta: {
          hidden: false
        }
      }
    ]
  },
  ...authRoutes
]

const router = createRouter({
  history: createWebHistory('/'),
  routes
})

export default router
