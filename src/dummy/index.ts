import { generateRandomTeamMenuGroups } from '@/dummy/channel/roomGroup'
import { generateRandomChanelRooms } from '@/dummy/channel/room'

export const initDummyData = async () => {
  await generateRandomTeamMenuGroups()
  await generateRandomChanelRooms()
}
