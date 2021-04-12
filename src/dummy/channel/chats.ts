import faker from 'faker'
import { generateRandomIntNumber } from '@/utils/random'
import { ChannelChat } from '@/types/model/channel/chat'

export const channelRoomChats: Array<ChannelChat> = []

export const loadChannelRoomChatsByRoomId = async (roomId: number) => {
  return channelRoomChats.filter((chat) => chat.roomId === roomId)
}

export const generateChannelRoomChat = async () => {
  for (let i = 0; i < 30; i++) {
    channelRoomChats.push({
      id: i + 1,
      content: faker.lorem.lines(),
      roomId: generateRandomIntNumber(0, 30),
      userId: generateRandomIntNumber(0, 100)
    } as ChannelChat)
  }

}
