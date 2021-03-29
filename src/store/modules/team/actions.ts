import { ActionContext, ActionTree } from 'vuex'
import { TeamMutations, TeamMutationTypes } from './mutations'
import { TeamState } from './state'
import { RootState } from '@/store'
import { Team } from '@/types/model/team/team'

export enum TeamActionTypes {
  SET_TEAMS = 'TEAM_SET_TEAMS',
}

export type AugmentedActionContext = {
  commit<K extends keyof TeamMutations>(
    key: K,
    payload?: Parameters<TeamMutations[K]>[1]
  ): ReturnType<TeamMutations[K]>
} & Omit<ActionContext<TeamState, RootState>, 'commit'>

export interface TeamActions {
  [TeamActionTypes.SET_TEAMS](
    { commit }: AugmentedActionContext,
    payload: Array<Team>
  ): void
}

export const tamActions: ActionTree<TeamState, RootState> & TeamActions = {
  [TeamActionTypes.SET_TEAMS] ({ commit }) {
    commit(TeamMutationTypes.SET_TEAMS)
  },
}
