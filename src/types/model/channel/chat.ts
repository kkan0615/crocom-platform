import { SequelizeAttributes } from '@/types/sequelize'

export interface ChannelChat extends SequelizeAttributes{
  userId: number
  roomId: number
  content: string
}
