// @TODO: 밑에 주소 참고하기
// https://gist.github.com/lucaska3/ad3e2a2a62533aa590784a0eff2bef17
// store.ts
import { InjectionKey } from 'vue'
import { createStore, Store, useStore as baseUseStore, } from 'vuex'
import { UserState } from '@/store/modules/user/state'
import userModule, { UserStore } from '@/store/modules/user'

export interface RootState {
  user: UserState
}

export type RootStore = UserStore<Pick<RootState, 'user'>>

// define injection key
export const key: InjectionKey<Store<RootState>> = Symbol()

export const store = createStore<RootState>({
  modules: {
    userModule
  }
})
export default function useStore (): RootStore {
  return baseUseStore(key)
}
