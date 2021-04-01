import { Team } from '@/types/model/team/team'
import { keyOfTeamMenuGroupTypeEnum, TeamMenuGroup, TeamMenuGroupTypeEnum } from '@/types/model/team/menuGroup'
import faker from 'faker'
import { generateRandomIntNumber } from '@/utils/random'

export const teams: Array<Team> = [
  {
    id: 1,
    img: 'https://newsimg.sedaily.com/2020/04/04/1Z1CEHIPLZ_4.jpg',
    title: 'Animal Crossing',
  },
  {
    id: 2,
    img: 'https://octodex.github.com/images/kimonotocat.png',
    title: 'Samurai Team',
  },
  {
    id: 3,
    img: 'https://www.imore.com/sites/imore.com/files/styles/large/public/field/image/2021/03/mario-hero.jpg',
    title: 'Super Mario~'
  }
]

export const teamMenuGroups: Array<TeamMenuGroup> = []

export const getTeams = async () => {
  return teams
}

export const getTeamMenuGroupsByTeamId = async (teamId: number) => {
  console.log(teamMenuGroups, teamId)
  return teamMenuGroups.filter((teamMenuGroup) => teamMenuGroup.teamId === teamId)
}

export const generateRandomTeamMenuGroups = async () => {
  for (let i = 0; i < 100; i++) {
    teamMenuGroups.push({
      id: i,
      title: faker.commerce.department(),
      description: generateRandomIntNumber(0, 1) ? faker.lorem.sentence() : '',
      teamId: generateRandomIntNumber(0, 5),
      type: keyOfTeamMenuGroupTypeEnum[generateRandomIntNumber(0, 3)]
    } as TeamMenuGroup)
  }

}
