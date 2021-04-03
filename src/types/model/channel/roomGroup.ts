import { SequelizeAttributes } from '@/types/sequelize'

export interface ChannelRoomGroup extends SequelizeAttributes {
  channelId: number
  title: string
  type: ChannelRoomGroupTypeEnum
  description: string
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
