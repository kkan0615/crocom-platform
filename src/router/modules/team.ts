import { RouteRecordRaw } from 'vue-router'

const teamRoutes: Array<RouteRecordRaw> = [
  {
    path: 'channel/id/:id/home',
    name: 'ChannelMainWithOutRoomId',
    component: () => import('@/views/channel/Main/index.vue'),
    meta: {
      hidden: false,
    }
  },
  {
    path: 'channel/id/:id/room/:roomId',
    name: 'ChannelMain',
    component: () => import('@/views/channel/Main/index.vue'),
    meta: {
      hidden: false,
    }
  },
]

export default teamRoutes
