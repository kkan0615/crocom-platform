import { SequelizeAttributes } from '@/types/sequelize'

export interface MenuGroup extends SequelizeAttributes {
  title: string
  description: string
}
