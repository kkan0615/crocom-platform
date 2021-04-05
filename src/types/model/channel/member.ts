import { SequelizeAttributes } from '@/types/sequelize'

export interface ChannelMember extends SequelizeAttributes {
  channelId: number
  userId: number
}
