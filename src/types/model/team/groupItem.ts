import { SequelizeAttributes } from '@/types/sequelize'

export interface GroupItem extends SequelizeAttributes{
  title: string
  type: GroupItemType
}

/**
 * text - only available chatting,
 * audio - chat + only mic
 * video - chat + mic + video
 */
export type GroupItemType = 'text' | 'audio' | 'video'
