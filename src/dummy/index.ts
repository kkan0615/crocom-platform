import { generateRandomTeamMenuGroups } from '@/dummy/channel/roomGroup'

export const initDummyData = async () => {
  await generateRandomTeamMenuGroups()
}
