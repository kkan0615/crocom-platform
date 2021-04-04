import { SequelizeAttributes } from '@/types/sequelize'

export interface ChannelMember extends SequelizeAttributes {
  userId: number
  nickname: string
  image: string
}
