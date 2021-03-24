import { SequelizeAttributes } from '@/types/sequelize'

export interface TeamMember extends SequelizeAttributes {
  userId: number
  nickname: string
  image: string
}
