import faker from 'faker'
import { generateRandomIntNumber } from '@/utils/random'
import { ChannelRoom } from '@/types/model/channel/room'

export const channelRooms: Array<ChannelRoom> = []

export const loadChannelRoomsByChannelRoomGroupId = async (roomGroupId: number) => {
  return channelRooms.filter((room) => room.roomGroupId === roomGroupId)
}

export const generateRandomChanelRooms = async () => {
  for (let i = 0; i < 30; i++) {
    channelRooms.push({
      id: i + 1,
      title: faker.lorem.words(generateRandomIntNumber(1, 2)),
      maxPeople: generateRandomIntNumber(0, 10),
      roomGroupId: generateRandomIntNumber(0, 20),
      channelRoomType: 'chat',
    } as ChannelRoom)
  }

}
