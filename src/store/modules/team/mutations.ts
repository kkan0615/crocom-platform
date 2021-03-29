import { MutationTree } from 'vuex'
import { TeamState } from './state'
import { Team } from '@/types/model/team/team'

export enum TeamMutationTypes {
  SET_TEAMS = 'TEAM_SET_TEAMS',
}

export type TeamMutations<S = TeamState> = {
  [TeamMutationTypes.SET_TEAMS](state: S, payload: Array<Team>): void
}

export const teamMutations: MutationTree<TeamState> & TeamMutations = {
  [TeamMutationTypes.SET_TEAMS] (state, payload) {
    state.teams = payload
  },
}
