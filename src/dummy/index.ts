import { generateRandomTeamMenuGroups } from '@/dummy/channel/roomGroup'
import { generateRandomChanelRooms } from '@/dummy/channel/room'
import { generateRandomUsers } from '@/dummy/user'

export const initDummyData = async () => {
  await generateRandomUsers()
  await generateRandomTeamMenuGroups()
  await generateRandomChanelRooms()
}
