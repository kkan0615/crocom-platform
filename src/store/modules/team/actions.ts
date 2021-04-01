import { ActionContext, ActionTree } from 'vuex'
import { TeamMutations, TeamMutationTypes } from './mutations'
import { TeamState } from './state'
import { RootState } from '@/store'
import { Team } from '@/types/model/team/team'
import { TeamMenuGroup } from '@/types/model/team/menuGroup'
import { getTeams } from '@/dummy/team/teamGroup'

export enum TeamActionTypes {
  SET_TEAMS = 'TEAM_SET_TEAMS',
  SET_CURRENT_TEAM = 'TEAM_SET_CURRENT_TEAM',
  SET_CURRENT_TEAM_MENU_GROUP = 'TEAM_SET_CURRENT_TEAM_MENU_GROUP',
  LOAD_TEAMS = 'TEAM_LOAD_TEAMS',
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
  [TeamActionTypes.SET_CURRENT_TEAM](
    { commit }: AugmentedActionContext,
    payload: Team
  ): void
  [TeamActionTypes.SET_CURRENT_TEAM_MENU_GROUP](
    { commit }: AugmentedActionContext,
    payload: Array<TeamMenuGroup>
  ): void
  [TeamActionTypes.LOAD_TEAMS](
    { commit }: AugmentedActionContext,
  ): Promise<Array<Team>>
}

export const teamActions: ActionTree<TeamState, RootState> & TeamActions = {
  [TeamActionTypes.SET_TEAMS] ({ commit }) {
    commit(TeamMutationTypes.SET_TEAMS)
  },
  [TeamActionTypes.SET_CURRENT_TEAM] ({ commit }) {
    commit(TeamMutationTypes.SET_CURRENT_TEAM)
  },
  [TeamActionTypes.SET_CURRENT_TEAM_MENU_GROUP] ({ commit }, payload) {
    commit(TeamMutationTypes.SET_CURRENT_TEAM_MENU_GROUP, payload)
  },
  async [TeamActionTypes.LOAD_TEAMS] ({ commit }) {
    const responseData = await getTeams()
    commit(TeamMutationTypes.SET_TEAMS, responseData)

    return responseData
  },
}
