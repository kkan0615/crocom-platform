import faker from 'faker'
import { generateRandomIntNumber } from '@/utils/random'
import { ChannelRoom } from '@/types/model/channel/room'

export const channelRooms: Array<ChannelRoom> = []

export const loadChannelRoomsByChannelRoomGroupId = async (roomGroupId: number) => {
  return channelRooms.filter((room) => room.roomGroupId === roomGroupId)
}

export const generateRandomChanelRooms = async () => {
  for (let i = 0; i < 100; i++) {
    channelRooms.push({
      id: i,
      title: faker.name.jobTitle(),
      maxPeople: generateRandomIntNumber(0, 10),
      roomGroupId: generateRandomIntNumber(0, 20),
    } as ChannelRoom)
  }

}
