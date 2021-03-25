import { SequelizeAttributes } from '@/types/sequelize'

export interface TeamPermission extends SequelizeAttributes {
  teamId: number
  userId: number
  title: string
}
