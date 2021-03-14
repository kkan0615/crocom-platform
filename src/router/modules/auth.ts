import { RouteRecordRaw } from 'vue-router'
import AuthLayout from '@/layouts/Auth/inedx.vue'

const authRoutes: Array<RouteRecordRaw> = [
  {
    path: '/auth',
    name: 'AuthLayout',
    component: AuthLayout,
    meta: {
      hidden: false,
    },
    children: [
      {
        path: 'login',
        name: 'Login',
        component: () => import('@/views/Login/index.vue'),
        meta: {
          hidden: false
        }
      },
    ]
  },
]

export default authRoutes
