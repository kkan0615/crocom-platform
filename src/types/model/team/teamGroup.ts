import { SequelizeAttributes } from '@/types/sequelize'

export interface TeamGroup extends SequelizeAttributes {
  img: string
  title: string
}
