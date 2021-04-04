import {
  Store as VuexStore,
  Module,
  CommitOptions,
  DispatchOptions,
} from 'vuex'
import { RootState } from '@/store'
import { channelState, ChannelState } from '@/store/modules/channel/state'
import { channelGetters, ChannelGetters } from '@/store/modules/channel/getters'
import { channelMutations, ChannelMutations } from '@/store/modules/channel/mutations'
import { channelActions, ChannelActions, } from '@/store/modules/channel/actions'

export type Store<S = ChannelState> = Omit<
VuexStore<S>,
'commit' | 'getters' | 'dispatch'
> & {
  commit<K extends keyof ChannelMutations, P extends Parameters<ChannelMutations[K]>[1]>(
    key: K,
    payload: P,
    options?: CommitOptions
  ): ReturnType<ChannelMutations[K]>
} & {
  getters: {
    [K in keyof ChannelGetters]: ReturnType<ChannelGetters[K]>;
  }
} & {
  dispatch<K extends keyof ChannelActions>(
    key: K,
    payload?: Parameters<ChannelActions[K]>[1],
    options?: DispatchOptions
  ): ReturnType<ChannelActions[K]>
}

export const channelModule: Module<ChannelState, RootState> = {
  // @TODO: namespaced 어떻게 쓸지고민하기
  // namespaced: true,
  state: channelState,
  getters: channelGetters,
  mutations: channelMutations,
  actions: channelActions,
}
