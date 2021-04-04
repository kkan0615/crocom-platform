import { SequelizeAttributes } from '@/types/sequelize'

export interface ChannelPermission extends SequelizeAttributes {
  channelId: number
  userId: number
  title: string
}
