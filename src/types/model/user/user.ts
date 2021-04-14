import { SequelizeAttributes } from '@/types/sequelize'
import { Friend } from '@/types/model/user/friend'

export interface User extends SequelizeAttributes {
  img?: string
  color?: string
  name: string
  nickname: string
  description?: string
}

export interface UserInfo extends User{
  Friends: Array<Friend>
}

/**
 * login - green
 * busy - red
 * out - grey
 * sleep - orange
 */
export type StatusEnum = 'login' | 'busy' | 'out' | 'sleep'
