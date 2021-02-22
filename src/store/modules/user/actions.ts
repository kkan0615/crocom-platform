import { ActionContext, ActionTree } from 'vuex'
import { UserMutations, UserMutationTypes } from './mutations'
import { UserState } from './state'
import { RootState } from '@/store'

export enum UserActionTypes {
  setUser = 'USER_SET_USER',
}

export type AugmentedActionContext = {
  commit<K extends keyof UserMutations>(
    key: K,
    payload: Parameters<UserMutations[K]>[1]
  ): ReturnType<UserMutations[K]>
} & Omit<ActionContext<UserState, RootState>, 'commit'>

export interface UserActions {
  [UserActionTypes.setUser](
    { commit }: AugmentedActionContext,
    payload: UserState
  ): void
}

export const userActions: ActionTree<UserState, RootState> & UserActions = {
  [UserActionTypes.setUser] ({ commit }, payload) {
    commit(UserMutationTypes.SET_USER, payload)
  },
}
