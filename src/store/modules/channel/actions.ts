import { ActionContext, ActionTree } from 'vuex'
import { ChannelMutations, ChannelMutationTypes } from './mutations'
import { ChannelState } from './state'
import { RootState } from '@/store'
import { Channel } from '@/types/model/channel/channel'
import { loadChannels } from '@/dummy/channel/channel'
import { ChannelRoom } from '@/types/model/channel/room'

export enum ChannelActionTypes {
  SET_CHANNELS = 'CHANNEL_SET_CHANNELS',
  SET_CURRENT_CHANNEL = 'CHANNEL_SET_CURRENT_CHANNEL',
  SET_CURRENT_ROOM = 'CHANNEL_SET_CURRENT_ROOM',
  LOAD_CHANNELS = 'CHANNEL_LOAD_CHANNELS',
}

export type AugmentedActionContext = {
  commit<K extends keyof ChannelMutations>(
    key: K,
    payload?: Parameters<ChannelMutations[K]>[1]
  ): ReturnType<ChannelMutations[K]>
} & Omit<ActionContext<ChannelState, RootState>, 'commit'>

export interface ChannelActions {
  [ChannelActionTypes.SET_CHANNELS](
    { commit }: AugmentedActionContext,
    payload: Array<Channel>
  ): void
  [ChannelActionTypes.SET_CURRENT_CHANNEL](
    { commit }: AugmentedActionContext,
    payload: Channel
  ): void
  [ChannelActionTypes.SET_CURRENT_ROOM](
    { commit }: AugmentedActionContext,
    payload: ChannelRoom
  ): void
  [ChannelActionTypes.LOAD_CHANNELS](
    { commit }: AugmentedActionContext,
  ): Promise<Array<Channel>>
}

export const channelActions: ActionTree<ChannelState, RootState> & ChannelActions = {
  [ChannelActionTypes.SET_CHANNELS] ({ commit }) {
    commit(ChannelMutationTypes.SET_CHANNELS)
  },
  [ChannelActionTypes.SET_CURRENT_CHANNEL] ({ commit }, payload) {
    commit(ChannelMutationTypes.SET_CURRENT_CHANNEL, payload)
  },
  [ChannelActionTypes.SET_CURRENT_ROOM] ({ commit }, payload) {
    commit(ChannelMutationTypes.SET_CURRENT_CHANNEL_ROOM, payload)
  },
  async [ChannelActionTypes.LOAD_CHANNELS] ({ commit }) {
    const responseData = await loadChannels()
    commit(ChannelMutationTypes.SET_CHANNELS, responseData)

    return responseData
  },
}
