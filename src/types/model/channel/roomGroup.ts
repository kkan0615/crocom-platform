import { SequelizeAttributes } from '@/types/sequelize'
import { ChannelRoom } from '@/types/model/channel/room'

export interface ChannelRoomGroup extends SequelizeAttributes {
  channelId: number
  title: string
  type: ChannelRoomGroupTypeEnum
  description: string
}

export interface ChannelRoomGroupInfo extends ChannelRoomGroup {
  rooms: Array<ChannelRoom>
}

/**
 * text - only available chatting,
 * audio - chat + only mic
 * video - chat + mic + video
 */
export enum ChannelRoomGroupTypeEnum {
  'text' = 'text',
  'audio' = 'audio',
  'video' = 'video',
}

export const keyOfChannelRoomGroupTypeEnum = Object.keys(ChannelRoomGroupTypeEnum)
