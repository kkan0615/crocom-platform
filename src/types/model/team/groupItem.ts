import { SequelizeAttributes } from '@/types/sequelize'

export interface GroupItem extends SequelizeAttributes{
  title: string
  type: GroupItemType
}

export type GroupItemType = 'text' | 'audio' | 'video'
