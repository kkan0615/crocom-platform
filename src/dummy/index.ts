import { generateRandomTeamMenuGroups } from '@/dummy/team/teamGroup'

export const initDummyData = async () => {
  await generateRandomTeamMenuGroups()
}
