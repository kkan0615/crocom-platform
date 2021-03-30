import { GetterTree } from 'vuex'
import { TeamState } from './state'
import { RootState } from '@/store'
import { Team } from '@/types/model/team/team'

export type TeamGetters<S = TeamState> = {
  currentTeam(state: S): Team
}

export const teamGetters: GetterTree<TeamState, RootState> & TeamGetters = {
  currentTeam: (state) => {
    return state.teams[0]
  },
}
