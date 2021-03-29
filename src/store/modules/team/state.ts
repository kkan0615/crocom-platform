import { Team } from '@/types/model/team/team'
import { TeamMenuGroup } from '@/types/model/team/menuGroup'

export interface TeamState {
  teams: Array<Team>
  currentTeamGroups: Array<TeamMenuGroup>
}

/**
 * navigator
 */
export const teamState: TeamState = {
  teams: [],
  currentTeamGroups: []
}
