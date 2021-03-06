import { RouteRecordRaw } from 'vue-router'

const channelRoutes: Array<RouteRecordRaw> = [
  {
    path: 'channel',
    name: 'ChannelLayout',
    component: () => import('@/layouts/Channel/index.vue'),
    meta: {
      hidden: false,
    },
    children: [
      {
        path: 'id/:channelId/home',
        name: 'HomeChannel',
        component: () => import('@/views/channel/Home/index.vue'),
        meta: {
          hidden: false,
        }
      },
      {
        path: 'id/:channelId/chat/:chatId',
        name: 'ChannelChat',
        component: () => import('@/views/channel/Main/index.vue'),
        meta: {
          hidden: false,
        }
      },
    ]
  },
]

export default channelRoutes
