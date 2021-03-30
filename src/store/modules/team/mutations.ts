import { MutationTree } from 'vuex'
import { TeamState } from './state'
import { Team } from '@/types/model/team/team'
import { TeamMenuGroup } from '@/types/model/team/menuGroup'

export enum TeamMutationTypes {
  SET_TEAMS = 'TEAM_SET_TEAMS',
  SET_CURRENT_TEAM = 'TEAM_SET_CURRENT_TEAM',
  SET_CURRENT_TEAM_MENU_GROUP = 'TEAM_SET_CURRENT_TEAM_MENU_GROUP'
}

export type TeamMutations<S = TeamState> = {
  [TeamMutationTypes.SET_TEAMS](state: S, payload: Array<Team>): void
  [TeamMutationTypes.SET_CURRENT_TEAM](state: S, payload: Team): void
  [TeamMutationTypes.SET_CURRENT_TEAM_MENU_GROUP](state: S, payload: Array<TeamMenuGroup>): void
}

export const teamMutations: MutationTree<TeamState> & TeamMutations = {
  [TeamMutationTypes.SET_TEAMS] (state, payload) {
    state.teams = payload
  },
  [TeamMutationTypes.SET_CURRENT_TEAM] (state, payload) {
    state.currentTeam = payload
  },
  [TeamMutationTypes.SET_CURRENT_TEAM_MENU_GROUP] (state, payload) {
    state.currentTeamGroups = payload
  },
}
