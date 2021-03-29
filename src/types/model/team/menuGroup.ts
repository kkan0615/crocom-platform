import { SequelizeAttributes } from '@/types/sequelize'

export interface TeamMenuGroup extends SequelizeAttributes {
  title: string
  description: string
}
