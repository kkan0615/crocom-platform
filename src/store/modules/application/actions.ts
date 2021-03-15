import { ActionContext, ActionTree } from 'vuex'
import { ApplicationMutations, ApplicationMutationTypes } from './mutations'
import { ApplicationState } from './state'
import { RootState } from '@/store'

export enum ApplicationActionTypes {
  CHANGE_NAVIGATOR = 'APPLICATION_CHANGE_NAVIGATOR',
  SET_NAVIGATOR = 'APPLICATION_SET_NAVIGATOR',
}

export type AugmentedActionContext = {
  commit<K extends keyof ApplicationMutations>(
    key: K,
    payload?: Parameters<ApplicationMutations[K]>[1]
  ): ReturnType<ApplicationMutations[K]>
} & Omit<ActionContext<ApplicationState, RootState>, 'commit'>

export interface ApplicationActions {
  [ApplicationActionTypes.CHANGE_NAVIGATOR](
    { commit }: AugmentedActionContext,
    payload: ApplicationState
  ): void
}

export const applicationActions: ActionTree<ApplicationState, RootState> & ApplicationActions = {
  [ApplicationActionTypes.CHANGE_NAVIGATOR] ({ commit }) {
    commit(ApplicationMutationTypes.CHANGE_NAVIGATOR)
  },
  [ApplicationActionTypes.SET_NAVIGATOR] ({ commit }, payload) {
    commit(ApplicationMutationTypes.SET_NAVIGATOR, payload)
  },
}
