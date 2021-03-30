import {
  Store as VuexStore,
  Module,
  CommitOptions,
  DispatchOptions,
} from 'vuex'
import { RootState } from '@/store'
import { teamState, TeamState } from '@/store/modules/team/state'
import { teamGetters, TeamGetters } from '@/store/modules/team/getters'
import { teamMutations, TeamMutations } from '@/store/modules/team/mutations'
import { TeamActions, teamActions } from '@/store/modules/team/actions'

export type Store<S = TeamState> = Omit<
VuexStore<S>,
'commit' | 'getters' | 'dispatch'
> & {
  commit<K extends keyof TeamMutations, P extends Parameters<TeamMutations[K]>[1]>(
    key: K,
    payload: P,
    options?: CommitOptions
  ): ReturnType<TeamMutations[K]>
} & {
  getters: {
    [K in keyof TeamGetters]: ReturnType<TeamGetters[K]>;
  }
} & {
  dispatch<K extends keyof TeamActions>(
    key: K,
    payload?: Parameters<TeamActions[K]>[1],
    options?: DispatchOptions
  ): ReturnType<TeamActions[K]>
}

export const teamModule: Module<TeamState, RootState> = {
  // @TODO: namespaced 어떻게 쓸지고민하기
  // namespaced: true,
  state: teamState,
  getters: teamGetters,
  mutations: teamMutations,
  actions: teamActions,
}
