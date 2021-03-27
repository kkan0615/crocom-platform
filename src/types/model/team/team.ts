import { SequelizeAttributes } from '@/types/sequelize'

export interface Team extends SequelizeAttributes {
  img: string
  title: string
}
