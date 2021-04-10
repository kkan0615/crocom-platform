import { SequelizeAttributes } from '@/types/sequelize'
import { User } from '@/types/model/user/user'

export interface ChannelMember extends SequelizeAttributes {
  channelId: number
  userId: number
  Auth: AuthEnum
}

export interface ChannelMemberInfo extends ChannelMember {
  user: User
}

export enum AuthEnum {
  'superAdmin' = 'superAdmin',
  'admin' = 'admin',
  'staff' = 'staff',
  'user' = 'user',
}


export const keyOfAuthEnum = Object.keys(AuthEnum)
