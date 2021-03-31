import { Team } from '@/types/model/team/team'
import { TeamMenuGroup, TeamMenuGroupTypeEnum } from '@/types/model/team/menuGroup'

export const teams: Array<Team> = [
  {
    id: 1,
    img: 'https://newsimg.sedaily.com/2020/04/04/1Z1CEHIPLZ_4.jpg',
    title: 'Animal Crossing',
  }
]

export const teamMenuGroups: Array<TeamMenuGroup> = [
  {
    teamId: 1,
    id: 1,
    type: TeamMenuGroupTypeEnum.text,
    title: 'Text test!',
    description: 'test'
  }
]

export const getTeams = async () => {
  return teams
}

export const getTeamMenuGroups = () => {
  return teamMenuGroups
}
