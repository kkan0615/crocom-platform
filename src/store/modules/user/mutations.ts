import { MutationTree } from 'vuex'
import { UserState } from './state'

export enum UserMutationTypes {
  SET_USER = 'SET_USER',
}
export type UserMutations<S = UserState> = {
  [UserMutationTypes.SET_USER](state: S, payload: UserState): void
}

export const userMutations: MutationTree<UserState> & UserMutations = {
  [UserMutationTypes.SET_USER] (state, payload) {
    state = payload
  },
}
