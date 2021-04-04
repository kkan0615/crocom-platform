import { RouteRecordRaw } from 'vue-router'

const channelRoutes: Array<RouteRecordRaw> = [
  {
    path: 'channel/id/:channelId/home',
    name: 'ChannelMainWithOutRoomId',
    component: () => import('@/views/channel/Home/index.vue'),
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

export default channelRoutes
