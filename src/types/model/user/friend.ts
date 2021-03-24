import { SequelizeAttributes } from '@/types/sequelize'

export interface Friend extends SequelizeAttributes {
  userId: number
  friendId: number
}
