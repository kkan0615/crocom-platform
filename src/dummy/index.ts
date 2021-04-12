import { generateRandomTeamMenuGroups } from '@/dummy/channel/roomGroup'
import { generateRandomChanelRooms } from '@/dummy/channel/room'
import { generateRandomUsers } from '@/dummy/user'
import { generateRandomChannelMembers } from '@/dummy/channel/channelMember'
import { generateChannelRoomChat } from '@/dummy/channel/chats'

export const initDummyData = async () => {
  await generateRandomUsers()
  await generateRandomTeamMenuGroups()
  await generateRandomChanelRooms()
  await generateRandomChannelMembers()
  await generateChannelRoomChat()
}
