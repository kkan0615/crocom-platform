import faker from 'faker'
import { ChannelRoomGroup, keyOfChannelRoomGroupTypeEnum } from '@/types/model/channel/roomGroup'
import { generateRandomIntNumber } from '@/utils/random'

export const channelRoomGroups: Array<ChannelRoomGroup> = []

export const loadChannelRoomGroupByChannelId = async (channelId: number) => {
  return channelRoomGroups.filter((channelRoomGroup) => channelRoomGroup.channelId === channelId)
}

export const generateRandomTeamMenuGroups = async () => {
  for (let i = 0; i < 10; i++) {
    channelRoomGroups.push({
      id: i + 1,
      title: faker.lorem.words(generateRandomIntNumber(1, 2)),
      description: generateRandomIntNumber(0, 1) ? faker.lorem.sentence() : '',
      channelId: generateRandomIntNumber(0, 4),
      type: keyOfChannelRoomGroupTypeEnum[0]
    } as ChannelRoomGroup)
  }

}
