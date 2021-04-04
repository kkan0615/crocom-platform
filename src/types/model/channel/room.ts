import { SequelizeAttributes } from '@/types/sequelize'
import { ChannelRoomGroup } from '@/types/model/channel/roomGroup'

export interface ChannelRoom extends SequelizeAttributes {
  roomGroupId: number
  title: string
  maxPeople: number // if it's 0, it means unlimited
  description?: string
}

export interface ChannelRoomInfo extends ChannelRoom {
  channelRoomGroup: ChannelRoomGroup
}
