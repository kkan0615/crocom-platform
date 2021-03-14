import { GetterTree } from 'vuex'
import { ApplicationState } from './state'
import { RootState } from '@/store'

export type ApplicationGetters<S = ApplicationState> = {
  isOpenNavigator(state: S): boolean
}

export const applicationGetters: GetterTree<ApplicationState, RootState> & ApplicationGetters = {
  isOpenNavigator: (state) => {
    return state.navigator
  },
}
