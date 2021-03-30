import { Team } from '@/types/model/team/team'

export const teams: Array<Team> = [
  {
    id: 1,
    img: 'https://newsimg.sedaily.com/2020/04/04/1Z1CEHIPLZ_4.jpg',
    title: 'Animal Crossing',
  }
]

export const getTeams = async () => {
  return teams
}
