import { SequelizeAttributes } from '@/types/sequelize'

export interface Channel extends SequelizeAttributes {
  img: string
  title: string
}
