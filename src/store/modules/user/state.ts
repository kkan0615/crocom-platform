import { UserInfo } from '@/types/model/user/user'

export type UserState = UserInfo

export const userState: UserState = {
  id: 1,
  name: '',
  color: '',
  nickname: '',
  img: '',
  Friends: []
}
