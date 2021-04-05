import { MutationTree } from 'vuex'
import { ApplicationState } from './state'

export enum ApplicationMutationTypes {
  CHANGE_NAVIGATOR = 'APPLICATION_CHANGE_NAVIGATOR',
  SET_NAVIGATOR = 'APPLICATION_SET_NAVIGATOR',
  CHANGE_SUB_NAVIGATOR = 'APPLICATION_CHANGE_SUB_NAVIGATOR',
  SET_SUB_NAVIGATOR = 'APPLICATION_SET_SUB_NAVIGATOR',
  SET_USER_NAVIGATOR = 'APPLICATION_SET_USER_NAVIGATOR'
}

export type ApplicationMutations<S = ApplicationState> = {
  [ApplicationMutationTypes.CHANGE_NAVIGATOR](state: S): void
  [ApplicationMutationTypes.SET_NAVIGATOR](state: S, payload: boolean): void
  [ApplicationMutationTypes.CHANGE_SUB_NAVIGATOR](state: S): void
  [ApplicationMutationTypes.SET_SUB_NAVIGATOR](state: S, payload: boolean): void
  [ApplicationMutationTypes.SET_USER_NAVIGATOR](state: S, payload: boolean): void
}

export const applicationMutations: MutationTree<ApplicationState> & ApplicationMutations = {
  [ApplicationMutationTypes.CHANGE_NAVIGATOR] (state) {
    state.navigator = !state.navigator
  },
  [ApplicationMutationTypes.SET_NAVIGATOR] (state, payload) {
    state.navigator = payload
  },
  [ApplicationMutationTypes.CHANGE_SUB_NAVIGATOR] (state) {
    state.subNavigator = !state.subNavigator
  },
  [ApplicationMutationTypes.SET_SUB_NAVIGATOR] (state, payload) {
    state.subNavigator = payload
  },
  [ApplicationMutationTypes.SET_USER_NAVIGATOR] (state, payload) {
    state.userNavigator = payload
  },
}
