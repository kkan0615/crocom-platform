import { MutationTree } from 'vuex'
import { ApplicationState } from './state'

export enum ApplicationMutationTypes {
  CHANGE_NAVIGATOR = 'APPLICATION_CHANGE_NAVIGATOR',
  SET_NAVIGATOR = 'APPLICATION_SET_NAVIGATOR',
}
export type ApplicationMutations<S = ApplicationState> = {
  [ApplicationMutationTypes.CHANGE_NAVIGATOR](state: S): void
  [ApplicationMutationTypes.SET_NAVIGATOR](state: S, payload: boolean): void
}

export const applicationMutations: MutationTree<ApplicationState> & ApplicationMutations = {
  [ApplicationMutationTypes.CHANGE_NAVIGATOR] (state) {
    state.navigator = !state.navigator
  },
  [ApplicationMutationTypes.SET_NAVIGATOR] (state, payload) {
    state.navigator = payload
  },
}
