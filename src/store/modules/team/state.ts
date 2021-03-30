import { Team } from '@/types/model/team/team'
import { TeamMenuGroup, TeamMenuGroupTypeEnum } from '@/types/model/team/menuGroup'

export interface TeamState {
  teams: Array<Team>
  currentTeam: Team
  currentTeamGroups: Array<TeamMenuGroup>
}

/**
 * navigator
 */
export const teamState: TeamState = {
  teams: [],
  currentTeam: {} as Team,
  currentTeamGroups: [{
    teamId: 1,
    id: 1,
    type: TeamMenuGroupTypeEnum.text,
    title: 'Text test!',
    description: 'test'
  }],
}
