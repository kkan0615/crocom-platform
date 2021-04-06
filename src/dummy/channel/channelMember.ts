import { AuthEnum, ChannelMemberInfo } from '@/types/model/channel/member'
import { dummyUsers, loadUserById } from '@/dummy/user'
import { generateRandomIntNumber } from '@/utils/random'
import { dummyChannels } from '@/dummy/channel/channel'
import { User } from '@/types/model/user/user'

export const channelMembers: Array<ChannelMemberInfo> = []

export const generateRandomChannelMembers = async () => {
  for (let i = 0; i < 1000; i++) {
    channelMembers.push({
      id: i + 1,
      Auth: AuthEnum[generateRandomIntNumber(0, 1) ? 'admin' : 'staff'],
      userId: dummyUsers[generateRandomIntNumber(0, dummyUsers.length - 1)].id,
      channelId: dummyChannels[generateRandomIntNumber(0, dummyChannels.length - 1)].id,
      user: {} as User
    })
  }
}

export const loadChannelMembersByChannelId = async (channelId: number) => {
  return await Promise.all(channelMembers
    .filter(channelMember => channelMember.channelId === channelId)
    .map(async (channelMember) => {
      const foundUser = await loadUserById(channelMember.userId)
      if (foundUser) {
        channelMember.user = foundUser
        return channelMember
      }
    }))
}
