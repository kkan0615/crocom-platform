import { SequelizeAttributes } from '@/types/sequelize'
import { ChannelRoomGroup } from '@/types/model/channel/roomGroup'

export interface ChannelRoom extends SequelizeAttributes {
  roomGroupId: number
  title: string
  maxPeople: number // if it's 0, it means unlimited
  description?: string
  channelRoomType: ChannelRoomEnum
}

export enum ChannelRoomEnum {
  'chat' = 'chat',
  'talk' = 'talk',
  'dashboard'  = 'dashboard',
  'todo' = 'todo',
  'calendar' = 'calendar'
}

export const keyOfChannelRoomEnum = Object.keys(ChannelRoomEnum)

export interface ChannelRoomInfo extends ChannelRoom {
  channelRoomGroup: ChannelRoomGroup
}
