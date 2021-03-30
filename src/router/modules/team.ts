import { RouteRecordRaw } from 'vue-router'

const teamRoutes: Array<RouteRecordRaw> = [
  {
    path: 'team/id/:id',
    name: 'TeamMain',
    component: () => import('@/views/team/Main/index.vue'),
    meta: {
      hidden: false,
    }
  },
]

export default teamRoutes
