import { SequelizeAttributes } from '@/types/sequelize'

export interface User extends SequelizeAttributes {
  img?: string
  color?: string
  name: string
  nickname: string
}
